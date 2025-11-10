import { useEffect, useState, useCallback } from "react";

export const CrimsonWebBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [lines, setLines] = useState([]);

  const generatelines = useCallback((nodeList) => {
    const newLines = [];
    const maxDistance = 25;
    const maxLinesPerNode = 5;
    const nodeLines = new Array(nodeList.length).fill(0);

    for (let i = 0; i < nodeList.length; i++) {
      for (let j = i + 1; j < nodeList.length; j++) {
        if (nodeLines[i] >= maxLinesPerNode || 
            nodeLines[j] >= maxLinesPerNode) {
          continue;
        }

        const dx = nodeList[i].x - nodeList[j].x;
        const dy = nodeList[i].y - nodeList[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          newLines.push({
            id: `${i}-${j}`,
            x1: nodeList[i].x,
            y1: nodeList[i].y,
            x2: nodeList[j].x,
            y2: nodeList[j].y,
            opacity: (1 - distance / maxDistance) * 0.7,
            distance: distance,
          });
          nodeLines[i]++;
          nodeLines[j]++;
        }
      }
    }

    setLines(newLines);
  }, []);

  useEffect(() => {
    const generateNodes = () => {
      const numberOfNodes = Math.floor(
        (window.innerWidth * window.innerHeight) / 7500
      );

      const newNodes = [];

      for (let i = 0; i < numberOfNodes; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1.5,
          speedX: (Math.random() - 0.5) * 0.05,
          speedY: (Math.random() - 0.5) * 0.05,
          opacity: Math.random() * 0.3 + 0.6,
          pulseDelay: Math.random() * 5,
        });
      }
      setNodes(newNodes);
      generatelines(newNodes);
    };

    generateNodes();
    
    // GENERATE NODES ON RESIZE
    const handleResize = () => {
      generateNodes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [generatelines]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prevNodes) => {
        const newNodes = prevNodes.map((node) => {
          let newX = node.x + node.speedX;
          let newY = node.y + node.speedY;
          let newSpeedX = node.speedX;
          let newSpeedY = node.speedY;

          // BOUNCE OFF EDGES - REVERSE DIRECTION
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

        generatelines(newNodes);
        
        return newNodes;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [generatelines]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Tam ekran arkaplan konteyneri; kullanıcı etkileşimini engellemez */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />

      {/* SVG: ağ çizgilerini çizdiğimiz vektör katmanı */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          {/* Çizgilerde kullanılacak kırmızı tonlu gradient */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="crimson-stop-start" />
            <stop offset="50%" className="crimson-stop-mid" />
            <stop offset="100%" className="crimson-stop-end" />
          </linearGradient>
          
          {/* Hafif parıltı için blur filtre tanımı */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Her bağlantı için bir <line> element render edilir (konum ve opacity state'ten gelir) */}
        {lines.map((connection) => (
          <line
            key={connection.id}
            x1={`${connection.x1}%`}
            y1={`${connection.y1}%`}
            x2={`${connection.x2}%`}
            y2={`${connection.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1.6"
            opacity={connection.opacity}
            className="web-thread"
            style={{ transition: 'opacity 0.5s ease-out' }}
            filter="url(#glow)"
          />
        ))}
      </svg>

      {/* Her nokta için DOM içinde küçük bir div (görünür nokta ve hafif pulse animasyonu) */}
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
