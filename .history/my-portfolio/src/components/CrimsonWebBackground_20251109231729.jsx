import { useEffect, useState, useRef } from "react";

export const CrimsonWebBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const connectionIdCounter = useRef(0);
  const lastCheckTime = useRef(Date.now());

  useEffect(() => {
    const generateNodes = () => {
      const numberOfNodes = Math.floor(
        (window.innerWidth * window.innerHeight) / 25000 // Daha az düğüm
      );

      const newNodes = [];

      for (let i = 0; i < numberOfNodes; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 2, // Biraz daha büyük düğümler
          speedX: (Math.random() - 0.5) * 0.06, // Biraz daha yavaş
          speedY: (Math.random() - 0.5) * 0.06,
          opacity: Math.random() * 0.3 + 0.6, // Daha belirgin
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

      // Her 300ms'de bir yeni çizgiler oluştur (daha az sıklık)
      if (currentTime - lastCheckTime.current > 300) {
        lastCheckTime.current = currentTime;
        
        setNodes((prevNodes) => {
          const maxDistance = 25; // Daha uzun çizgiler için mesafeyi artırdık
          const newConnections = [];
          const currentId = connectionIdCounter.current;

          // Yakın düğümler arasında çizgi oluştur
          for (let i = 0; i < prevNodes.length; i++) {
            for (let j = i + 1; j < prevNodes.length; j++) {
              const dx = prevNodes[i].x - prevNodes[j].x;
              const dy = prevNodes[i].y - prevNodes[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < maxDistance) {
                // %40 şans ile çizgi oluştur (daha az yoğunluk)
                if (Math.random() < 0.4) {
                  newConnections.push({
                    id: `${currentId}-${i}-${j}`,
                    x1: prevNodes[i].x,
                    y1: prevNodes[i].y,
                    x2: prevNodes[j].x,
                    y2: prevNodes[j].y,
                    opacity: (1 - distance / maxDistance) * 0.85, // Daha belirgin
                    birthTime: currentTime,
                    lifetime: 3000 + Math.random() * 2000, // 3-5 saniye (daha uzun ömür)
                  });
                }
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

            // Yeni çizgileri ekle, ama max 80 çizgi olsun (daha az yoğunluk)
            const combined = [...aliveConnections, ...newConnections];
            return combined.slice(-80);
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
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {connections.map((connection) => {
          const currentTime = Date.now();
          const age = currentTime - connection.birthTime;
          const lifeProgress = age / connection.lifetime;
          
          // Çok kısa fade in, uzun stabil görünüm, kısa fade out
          let fadeMultiplier = 1;
          if (lifeProgress < 0.1) {
            // İlk %10'da hızlı belirme
            fadeMultiplier = lifeProgress / 0.1;
          } else if (lifeProgress > 0.85) {
            // Son %15'te yavaş kaybolma
            fadeMultiplier = (1 - lifeProgress) / 0.15;
          }
          
          return (
            <line
              key={connection.id}
              x1={`${connection.x1}%`}
              y1={`${connection.y1}%`}
              x2={`${connection.x2}%`}
              y2={`${connection.y2}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2.5"
              opacity={connection.opacity * fadeMultiplier}
              className="web-thread"
              filter="url(#glow)"
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
