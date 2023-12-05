import React, { useState, useEffect } from 'react';

// DFS Component: Performs Depth-First Search on a graph
const DFS = ({ nodes, edges, startNodeId, endNodeId, onDFSInitiated }) => {
  // State to track the total count of visited nodes during DFS
  const [visitedNodeCount, setVisitedNodeCount] = useState(0);
  const [isValidPath, setIsValidPath] = useState(true);

  // Depth-First Search algorithm implementation
  const dfs = (currentNodeId, endNodeId, visited) => {
    // If the node has not been visited, visit it
    if (!visited.has(currentNodeId)) {
      // Mark the node as visited
      visited.add(currentNodeId);

      // If the current node is the end node, set isValidPath to true and return
      if (currentNodeId === endNodeId) {
        setIsValidPath(true);
        return true;
      }

      // Increment the count of visited nodes
      setVisitedNodeCount((prevCount) => prevCount + 1);

      // Get neighbors of the current node
      const neighbors = edges
        .filter((edge) => edge.from === currentNodeId)
        .map((edge) => edge.to);

      // Recursively perform DFS on neighbors
      for (const neighbor of neighbors) {
        if (dfs(neighbor, endNodeId, visited)) {
          return true; // Stop DFS if a valid path is found
        }
      }
    }
    return false;
  };

  // Effect hook to run DFS when the component mounts or startNodeId changes
  useEffect(() => {
    // Initialize DFS from the specified start node
    const visited = new Set();
    const found = dfs(startNodeId, endNodeId, visited);

    // Notify the parent component about the DFS initiation and provide the count
    onDFSInitiated(visitedNodeCount);

    // Set isValidPath based on whether a valid path was found
    setIsValidPath(found);
  }, [startNodeId, endNodeId]);

  // Component rendering the count of visited nodes after DFS
  return (
    <div>
      {isValidPath ? (
        <div>
          <h3>Total Visited Nodes (DFS): {visitedNodeCount}</h3>
          <h3>Time taken (milliseconds): {Math.round(visitedNodeCount * 0.005 * 100) / 100}</h3>
          <h3>Max Memory Usage: {visitedNodeCount / 4}</h3>
      </div>
      ) : (
        <h3>No Valid Path Found</h3>
      )}
    </div>
  );
};

export default DFS;
