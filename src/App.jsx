import React from 'react';
import Menu from './Components/Menu';
import ComparisonModule from './Components/ComparisonModule';
import Graphs from './Components/GraphView';
import { edges, nodes } from "./Components/dataNew";

const App = () => {
  const startNodeId = 1095;
  const endNodeId = 31173;
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Menu/>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-end', height: '100vh' }}>
        <Graphs style={{ flex: 4 }} nodes={nodes}
              edges={edges}
              startNodeId={startNodeId}
              endNodeId={endNodeId}/>
        <ComparisonModule children={"children test"} />
      </div>
    </div>
  );
};

export default App;