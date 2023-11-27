import React from 'react';
import Menu from './Components/Menu';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Menu>
        {/* Your content for the left side goes here */}
      </Menu>
      {/* The rest of your application content goes here */}
    </div>
  );
};

export default App;