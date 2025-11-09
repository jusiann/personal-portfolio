import { useEffect, useState } from "react";

export const CrimsonWebBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

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
          size: Math.random() * 1.5 + 1, // Daha küçük noktalar (1-2.5px)
          speedX: (Math.random() - 0.5) * 0.06,
          speedY: (Math.random() - 0.5) * 0.06,
          opacity: Math.random() * 0.3 + 0.6,
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

  // Animate nodes ve çizgileri güncelle
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prevNodes) => {
        // Düğümleri hareket ettir
        const newNodes = prevNodes.map((node) => {
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
        });

        // Her frame'de çizgileri güncelle (mesafeye göre)
        const maxDistance = 25; // Bağlantı mesafesi
        const maxConnectionsPerNode = 4; // Her nokta max 4 bağlantı
        const newConnections = [];
        const nodeConnectionCount = new Array(newNodes.length).fill(0);

        // Önce tüm potansiyel bağlantıları mesafeye göre sırala
        const potentialConnections = [];
        for (let i = 0; i < newNodes.length; i++) {
          for (let j = i + 1; j < newNodes.length; j++) {
            const dx = newNodes[i].x - newNodes[j].x;
            const dy = newNodes[i].y - newNodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              potentialConnections.push({
                i, j, distance,
                x1: newNodes[i].x,
                y1: newNodes[i].y,
                x2: newNodes[j].x,
                y2: newNodes[j].y,
              });
            }
          }
        }

        // Mesafeye göre sırala (yakın olanlar önce)
        potentialConnections.sort((a, b) => a.distance - b.distance);

        // Her noktanın max bağlantı sayısını kontrol ederek ekle
        for (const conn of potentialConnections) {
          if (nodeConnectionCount[conn.i] < maxConnectionsPerNode && 
              nodeConnectionCount[conn.j] < maxConnectionsPerNode) {
            const distanceRatio = 1 - (conn.distance / maxDistance);
            newConnections.push({
              id: `${conn.i}-${conn.j}`,
              x1: conn.x1,
              y1: conn.y1,
              x2: conn.x2,
              y2: conn.y2,
              opacity: 0.4 + (distanceRatio * 0.6),
              distance: conn.distance,
            });
            nodeConnectionCount[conn.i]++;
            nodeConnectionCount[conn.j]++;
          }
        }

        // Çizgileri güncelle
        setConnections(newConnections);

        return newNodes;
      });
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
          return (
            <line
              key={connection.id}
              x1={`${connection.x1}%`}
              y1={`${connection.y1}%`}
              x2={`${connection.x2}%`}
              y2={`${connection.y2}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2.5"
              opacity={connection.opacity}
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
