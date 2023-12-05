import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';
import { edges, nodes } from './dataNew';

const Graphs = ({ startNodeId, endNodeId }) => {
  const [options, setOptions] = useState({
    nodes: {
      shape: 'dot',
      scaling: {
        min: 10,
        max: 30,
        label: {
          min: 8,
          max: 30,
          drawThreshold: 12,
          maxVisible: 20,
        },
      },
      font: {
        size: 12,
        face: 'Tahoma',
        color: 'White',
      },
    },
    edges: {
      width: 0.15,
      color: 'Blue',
      smooth: {
        type: 'continuous',
      },
    },
    physics: false,
    interaction: {
      navigationButtons: true,
      tooltipDelay: 200,
      hideEdgesOnDrag: true,
      hideEdgesOnZoom: true,
    },
    height: '1300px',
  });

  const [graphData, setGraphData] = useState({
    nodes: nodes.map((node) => ({ ...node, color: 'blue' })),
    edges,
  });

  const [visitedNodeCount, setVisitedNodeCount] = useState(0);
  const [isValidPath, setIsValidPath] = useState(true);

  const bfs = (startNodeId, endNodeId) => {
    const queue = [];
    const visited = new Set();

    queue.push(startNodeId);

    while (queue.length > 0) {
      const currentNodeId = queue.shift();
      if (currentNodeId === endNodeId) {
        return true;
      }
      if (!visited.has(currentNodeId)) {
        visited.add(currentNodeId);

        setGraphData((prevGraphData) => ({
          ...prevGraphData,
          nodes: prevGraphData.nodes.map((node) =>
            node.id === currentNodeId ? { ...node, color: 'red' } : node
          ),
        }));

        setVisitedNodeCount((prevCount) => prevCount + 1);

        const neighbors = edges
          .filter((edge) => edge.from === currentNodeId)
          .map((edge) => edge.to);

        queue.push(...neighbors);
      }
    }
  };

  useEffect(() => {
    const found = bfs(startNodeId, endNodeId);

    setIsValidPath(found);

    // Notify the parent component about the BFS initiation and provide the count
    // You may adjust this part based on your specific requirements
    console.log('BFS initiated with count:', visitedNodeCount);
  }, [startNodeId, endNodeId]);

  return (
    <div className="container" style={{ display: 'flex' }}>
      <Graph graph={graphData} options={options} />
    </div>
  );
};

export default Graphs;