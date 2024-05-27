import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Palmera from '../../../public/Palmera';
import './ModeloPalmera.css';

function ModeloPalmera() {
  return (
    <div className='container-canvas'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          {/* Ajusta la posición de la palmera aquí */}
          <Palmera  
          position={[1, -3, 0]} 
          scale={[0.5, 0.5, 0.5]}
           />
        </Suspense>
        <Environment preset='sunset' />
        
      </Canvas>
    </div>
  );
}

export default ModeloPalmera;
