import React, { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import {
  Extrude,
  OrbitControls,
  Center,
  Scroll,
  useScroll,
  useAnimations,
  Points,
  Point,
  Text3D,
} from "@react-three/drei";
import { Environment, ScrollControls } from "@react-three/drei";

const Text = ({ statement }) => {
  //   const font = new FontLoader().parse(font2);
  return (
    <div className=" flex justify-center">
      <Canvas
        style={{ height: 100, width: 400 }}
        legacy={false}
        camera={{ fov: 75, position: [150, 50, 100] }}
      >
        <Center rotation={[-0.5, 0.9, 0.4]}>
          {/* <mesh>
          <textGeometry args={["test", { font, size: 100, height: 100 }]} />
          <meshPhysicalMaterial color={"gold"} />
        </mesh> */}
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} />
          <Text3D
            curveSegments={32}
            letterSpacing={0.6}
            height={10}
            size={100}
            font="/font2.json"
          >
            {statement}
            <meshStandardMaterial color="white" wireframe />
          </Text3D>
        </Center>
      </Canvas>
    </div>
  );
};

export default Text;
