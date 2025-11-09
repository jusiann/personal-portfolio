import { useEffect, useState, useRef } from "react";

export const CrimsonWebBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const connectionIdCounter = useRef(0);
  const lastCheckTime = useRef(Date.now());

  useEffect(() => {
    const generateNodes = () => {
      const numberOfNodes = Math.floor(
        (window.innerWidth * window.innerHeight) / 20000
      );

      const newNodes = [];

      for (let i = 0; i < numberOfNodes; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1.5,
          speedX: (Math.random() - 0.5) * 0.08,
          speedY: (Math.random() - 0.5) * 0.08,
          opacity: Math.random() * 0.4 + 0.5,
          pulseDelay: Math.random() * 5,
        });
      }

      setNodes(newNodes);
    };

    generateNodes();
    
    const handleResize = () => {
      generateNodes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animate nodes ve dinamik çizgi oluşturma
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let newX = node.x + node.speedX;
          let newY = node.y + node.speedY;
          let newSpeedX = node.speedX;
          let newSpeedY = node.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newSpeedX = -node.speedX;
            newX = newX <= 0 ? 0 : 100;
          }
          if (newY <= 0 || newY >= 100) {
            newSpeedY = -node.speedY;
            newY = newY <= 0 ? 0 : 100;
          }

          return {
            ...node,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
          };
        })
      );

      // Her 200ms'de bir yeni çizgiler oluştur
      if (currentTime - lastCheckTime.current > 200) {
        lastCheckTime.current = currentTime;
        
        setNodes((prevNodes) => {
          const maxDistance = 18; // Bağlantı mesafesi
          const newConnections = [];
          const currentId = connectionIdCounter.current;

          // Yakın düğümler arasında çizgi oluştur
          for (let i = 0; i < prevNodes.length; i++) {
            for (let j = i + 1; j < prevNodes.length; j++) {
              const dx = prevNodes[i].x - prevNodes[j].x;
              const dy = prevNodes[i].y - prevNodes[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < maxDistance) {
                newConnections.push({
                  id: `${currentId}-${i}-${j}`,
                  x1: prevNodes[i].x,
                  y1: prevNodes[i].y,
                  x2: prevNodes[j].x,
                  y2: prevNodes[j].y,
                  opacity: (1 - distance / maxDistance) * 0.7,
                  birthTime: currentTime,
                  lifetime: 2000 + Math.random() * 1500, // 2-3.5 saniye yaşam süresi
                });
              }
            }
          }

          connectionIdCounter.current++;

          // Yeni çizgileri ekle
          setConnections((prevConns) => {
            // Eski çizgileri filtrele (ölenleri kaldır)
            const aliveConnections = prevConns.filter((conn) => {
              const age = currentTime - conn.birthTime;
              return age < conn.lifetime;
            });

            // Yeni çizgileri ekle, ama max 150 çizgi olsun
            const combined = [...aliveConnections, ...newConnections];
            return combined.slice(-150);
          });

          return prevNodes;
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />

      {/* SVG for connections - Örümcek ağı görünümü */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="crimson-stop-start" />
            <stop offset="50%" className="crimson-stop-mid" />
            <stop offset="100%" className="crimson-stop-end" />
          </linearGradient>
          {/* Örümcek ağı için filtre efekti */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {connections.map((connection) => {
          // Çizginin şu anki bitiş noktasını hesapla
          const currentX2 = connection.x1 + (connection.x2 - connection.x1) * connection.progress;
          const currentY2 = connection.y1 + (connection.y2 - connection.y1) * connection.progress;
          
          return (
            <line
              key={connection.id}
              x1={`${connection.x1}%`}
              y1={`${connection.y1}%`}
              x2={`${currentX2}%`}
              y2={`${currentY2}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              opacity={connection.opacity * connection.progress}
              className="web-thread"
              filter="url(#glow)"
              style={{
                transition: 'opacity 0.3s ease',
              }}
            />
          );
        })}
      </svg>

      {/* Nodes - Örümcek ağı düğümleri */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="web-node animate-web-pulse"
          style={{
            width: node.size + "px",
            height: node.size + "px",
            left: node.x + "%",
            top: node.y + "%",
            opacity: node.opacity,
            animationDelay: node.pulseDelay + "s",
          }}
        />
      ))}
    </div>
  );
};
