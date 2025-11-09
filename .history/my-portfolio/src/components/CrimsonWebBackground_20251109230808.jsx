import { useEffect, useState, useCallback } from "react";

export const CrimsonWebBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  const generateConnections = useCallback((nodeList) => {
    const newConnections = [];
    const maxDistance = 20;

    for (let i = 0; i < nodeList.length; i++) {
      for (let j = i + 1; j < nodeList.length; j++) {
        const dx = nodeList[i].x - nodeList[j].x;
        const dy = nodeList[i].y - nodeList[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          newConnections.push({
            id: `${i}-${j}`,
            x1: nodeList[i].x,
            y1: nodeList[i].y,
            x2: nodeList[j].x,
            y2: nodeList[j].y,
            opacity: (1 - distance / maxDistance) * 0.6,
            distance: distance,
            progress: 0, // Çizgi animasyonu için başlangıç değeri
            delay: Math.random() * 2, // Her çizgi farklı zamanda başlayacak
          });
        }
      }
    }

    setConnections(newConnections);
  }, []);

  useEffect(() => {
    const generateNodes = () => {
      const numberOfNodes = Math.floor(
        (window.innerWidth * window.innerHeight) / 20000 // Daha fazla düğüm
      );

      const newNodes = [];

      for (let i = 0; i < numberOfNodes; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1.5, // Biraz daha küçük düğümler
          speedX: (Math.random() - 0.5) * 0.08,
          speedY: (Math.random() - 0.5) * 0.08,
          opacity: Math.random() * 0.4 + 0.5, // Daha görünür
          pulseDelay: Math.random() * 5,
        });
      }

      setNodes(newNodes);
      generateConnections(newNodes);
    };

    generateNodes();
    
    const handleResize = () => {
      generateNodes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [generateConnections]);

  // Animate nodes
  useEffect(() => {
    const interval = setInterval(() => {
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

        {connections.map((connection) => (
          <line
            key={connection.id}
            x1={`${connection.x1}%`}
            y1={`${connection.y1}%`}
            x2={`${connection.x2}%`}
            y2={`${connection.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity={connection.opacity}
            className="transition-opacity duration-300 web-thread"
            filter="url(#glow)"
          />
        ))}
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
