import React from 'react';
import { Canvas } from '@react-three/fiber';
import Graph from './components/Graph';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Graph />
      </Canvas>
    </div>
  );
}

export default App;
