import cabbana from "./assets/cabbana_new_1.glb";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";

function WaterProfile({ nodes, materials, color }) {
  // const _texture = useTexture(texture);
  // const material_texture = new THREE.MeshPhysicalMaterial({
  //   map: _texture,
  // });

  return (
    <group position={[0, 0, 0]}>
      <mesh
        castShadow
        geometry={nodes.beam6.geometry}
        // material={props.isTexture ? material_texture : materials.profile}
        material={materials.profile}
        position={[16.98, 235.27, -288.01]}
        scale={[-0.1, 0.1, 0.1]}
        rotation={[0, Math.PI / 2, 0]}
        material-color={color}
      />
    </group>
  );
}

function BackProfile({ nodes, materials, color }) {
  console.log(nodes, "nodes nodes");
  return (
    <group position={[50, 50, 50]}>
      <mesh
        castShadow
        geometry={nodes.beam6.geometry}
        material={materials.All_profiles}
        position={[16.99, 100.27, -9.67]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[0, Math.PI / 2, 0]}
        material-color={color}
      />
    </group>
  );
}

function App() {
  const gltf = useLoader(GLTFLoader, cabbana, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  const { nodes, materials } = gltf;

  return (
    <Canvas
      className="canvas"
      camera={{ position: [0, 0, 100], fov: 50 }}
      shadows
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4]} zoom={0.3} />
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <spotLight
        castShadow
        intensity={0.4}
        angle={0.5}
        penumbra={1}
        position={[5, 25, 20]}
      />
      <Sky
        distance={450000}
        sunPosition={[5, 1, 8]}
        inclination={0}
        azimuth={0.25}
      />
      <group scale={0.5} dispose={null} position={[0, -117.5, 0]}>
        <WaterProfile nodes={nodes} materials={materials} color="white" />
        <BackProfile nodes={nodes} materials={materials} color="white" />
      </group>
    </Canvas>
  );
}

export default App;
