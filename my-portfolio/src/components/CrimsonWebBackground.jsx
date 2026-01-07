import {useEffect, useRef, useState, useCallback} from 'react';

function CrimsonWebBackground() {
  const nodesRef = useRef([]);
  const [renderTrigger, setRenderTrigger] = useState(0);
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
        (window.innerWidth * window.innerHeight) / 60000 + 8
      );

      const newNodes = [];

      for (let i = 0; i < numberOfNodes; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1.5,
          speedX: (Math.random() - 0.5) * 0.04,
          speedY: (Math.random() - 0.5) * 0.04,
          opacity: Math.random() * 0.3 + 0.6,
          pulseDelay: Math.random() * 5,
        });
      }
      nodesRef.current = newNodes;
      generatelines(newNodes);
      setRenderTrigger(prev => prev + 1);
    };

    generateNodes();

    const handleResize = () => {
      generateNodes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [generatelines]);

  useEffect(() => {
    let animationId;
    let lastTime = 0;
    let frameCount = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      animationId = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;

      lastTime = currentTime - (deltaTime % frameInterval);
      frameCount++;

      const nodes = nodesRef.current;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        let newX = node.x + node.speedX;
        let newY = node.y + node.speedY;

        if (newX <= 0 || newX >= 100) {
          node.speedX = -node.speedX;
          newX = newX <= 0 ? 0 : 100;
        }
        if (newY <= 0 || newY >= 100) {
          node.speedY = -node.speedY;
          newY = newY <= 0 ? 0 : 100;
        }

        node.x = newX;
        node.y = newY;
      }

      if (frameCount % 4 === 0) {
        generatelines(nodes);
      }

      setRenderTrigger(prev => prev + 1);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [generatelines]);

  const nodes = nodesRef.current;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* RADIAL GRADIENT */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />

      {/* SVG FOR LINES */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>

          {/* LINE GRADIENT */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="crimson-stop-start" />
            <stop offset="50%" className="crimson-stop-mid" />
            <stop offset="100%" className="crimson-stop-end" />
          </linearGradient>

        </defs>

        {/* RENDER LINES */}
        {
          lines.map((connection) => (
            <line
              key={connection.id}
              x1={`${connection.x1}%`}
              y1={`${connection.y1}%`}
              x2={`${connection.x2}%`}
              y2={`${connection.y2}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1.4"
              opacity={connection.opacity}
              className="web-thread"
            />
          ))}
      </svg>

      {/* RENDER NODES WITH PULSE EFFECT */}
      {
        nodes.map((node) => (
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
}

export default CrimsonWebBackground;
