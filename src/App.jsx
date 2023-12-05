import React, { useState, useEffect } from "react";
import Menu from './Components/Menu';
import ComparisonModule from './Components/ComparisonModule';
import Graphs from './Components/GraphView';
import { edges, nodes } from "./Components/dataNew";
import BFSH from "./app/algorithms/BFSH";
import DFSH from "./app/algorithms/DFSH";
const App = () => {
  const [startNodeId, setFromPlayer] = useState(null);
  const [endNodeId, setToPlayer] = useState(null);

  const [nodesVisited, setNodesVisited] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Menu startNodeId={startNodeId} endNodeId={endNodeId} setFromPlayer={setFromPlayer} setToPlayer={setToPlayer}/>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-end', height: '100vh' }}>
        <Graphs/>
      </div>
    </div>
  );
};

export default App;