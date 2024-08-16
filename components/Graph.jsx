import React, { useEffect, useState } from 'react';
import Node from './Node';
import Edge from './Edge';

function Graph() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // Init random graph
    const generatedNodes = [
      { id: 1, position: [-5, 0, 0] },
      { id: 2, position: [5, 0, 0] },
      { id: 3, position: [0, 5, 0] },
      { id: 4, position: [0, -5, 0] },
    ];
    const generatedEdges = [
      { start: 1, end: 2 },
      { start: 1, end: 3 },
      { start: 2, end: 4 },
      { start: 3, end: 4 },
    ];

    setNodes(generatedNodes);
    setEdges(generatedEdges);
  }, []);

  return (
    <>
      {edges.map(edge => (
        <Edge key={`${edge.start}-${edge.end}`} edge={edge} nodes={nodes} />
      ))}
      {nodes.map(node => (
        <Node key={node.id} position={node.position} />
      ))}
    </>
  );
}

export default Graph;
