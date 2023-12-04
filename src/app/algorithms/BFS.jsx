import React, { useState, useEffect } from 'react';

const BFS = ({ nodes, edges, startNodeId, endNodeId, onBFSInitiated }) => {
  // State to track the total count of visited nodes during BFS
  const [visitedNodeCount, setVisitedNodeCount] = useState(0);
  // State to track whether a valid path is found
  const [isValidPath, setIsValidPath] = useState(true);

  // Breadth-First Search algorithm implementation
  const bfs = (startNodeId, endNodeId) => {
    // Queue to keep track of nodes to visit
    const queue = [];
    // Set to store visited nodes
    const visited = new Set();

    // Start BFS from the given node
    queue.push(startNodeId);

    // Perform BFS until the queue is empty
    while (queue.length > 0) {
      // Dequeue a node from the front of the queue
      const currentNodeId = queue.shift();
      if (currentNodeId === endNodeId) {
        return true;
      }
      // If the node has not been visited, visit it
      if (!visited.has(currentNodeId)) {
        // Mark the node as visited
        visited.add(currentNodeId);

        // Increment the count of visited nodes
        setVisitedNodeCount((prevCount) => prevCount + 1);

        // Get neighbors of the current node
        const neighbors = edges
          .filter((edge) => edge.from === currentNodeId)
          .map((edge) => edge.to);

        // Enqueue neighbors for further exploration
        queue.push(...neighbors);
      }
    }
    return false;
  };

  // Effect hook to run BFS when the component mounts or startNodeId changes
  useEffect(() => {
    // Initialize BFS from the specified start node
    const found = bfs(startNodeId, endNodeId);

    // Set the found flag based on whether the end node was reached
    setIsValidPath(found);

    // Notify the parent component about the BFS initiation and provide the count
    onBFSInitiated(visitedNodeCount);
  }, [startNodeId, endNodeId]);

  // Component rendering the count of visited nodes or "No Valid Path Found" message after BFS
  return (
    <div>
      {isValidPath ? (
        <h3>Total Visited Nodes (BFS): {visitedNodeCount}</h3>
      ) : (
        <h3>No Valid Path Found</h3>
      )}
    </div>
  );
};

export default BFS;