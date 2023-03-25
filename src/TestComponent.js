import React from 'react';
import SpaceBackground from './SpaceBackground'; // Make sure the path is correct

const TestComponent = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: 'black' }}>
      <SpaceBackground />
      <h1 style={{ color: 'white', zIndex: 1, position: 'relative' }}>Test Component</h1>
    </div>
  );
};

export default TestComponent;
