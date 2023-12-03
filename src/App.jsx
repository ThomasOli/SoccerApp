import React from 'react';
import Menu from './Components/Menu';
import ComparisonModule from './Components/ComparisonModule';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Menu>
        {/* Your content for the left side goes here */}
      </Menu>
      {/* The rest of your application content goes here */}
      <ComparisonModule children={"children test"}>
      </ComparisonModule>
    </div>
  );
};

export default App;