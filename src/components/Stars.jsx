/*
 * @Descripttion: 
 * @version: Chevalier
 * @Author: 
 * @Date: 2024-08-19 09:23:05
 * @LastEditors: Chevalier
 * @LastEditTime: 2024-08-19 10:28:06
 */
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(20000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    // if (props.isRotating) {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    // }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} scale={5}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
