import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';
import { edges, nodes } from './../../Components/dataNew'

const DFSH= ({ startNodeId, endNodeId }) => {
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

  const dfs = (currentNodeId, endNodeId, visited) => {
    if (!visited.has(currentNodeId)) {
      visited.add(currentNodeId);

      setGraphData((prevGraphData) => ({
        ...prevGraphData,
        nodes: prevGraphData.nodes.map((node) =>
          node.id === currentNodeId ? { ...node, color: 'red' } : node
        ),
      }));

      setVisitedNodeCount((prevCount) => prevCount + 1);

      if (currentNodeId === endNodeId) {
        setIsValidPath(true);
        return true;
      }

      const neighbors = edges
        .filter((edge) => edge.from === currentNodeId)
        .map((edge) => edge.to);

      for (const neighbor of neighbors) {
        if (dfs(neighbor, endNodeId, visited)) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    const visited = new Set();
    const found = dfs(startNodeId, endNodeId, visited);

    setIsValidPath(found);

    console.log('DFS initiated with count:', visitedNodeCount);
  }, [startNodeId, endNodeId]);

  return (
    <div className="container" style={{ display: 'flex' }}>
      <Graph graph={graphData} options={options} />
    </div>
  );
};

export default DFSH;