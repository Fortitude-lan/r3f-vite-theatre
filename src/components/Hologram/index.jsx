/*
 * @Descripttion: 
 * @version: Chevalier
 * @Author: 
 * @Date: 2024-08-19 09:47:58
 * @LastEditors: Chevalier
 * @LastEditTime: 2024-08-19 10:24:18
 */
import React, { useRef} from 'react'
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import HologramMaterial from './HologramMaterial';

export default function Index(props) {
    const ref1 = useRef()
    useFrame((state, delta) => {
        // console.log(state.clock.elapsedTime)
        ref1.current.rotation.x = -state.clock.elapsedTime * 0.3
        ref1.current.rotation.y = state.clock.elapsedTime * 0.5
    })
    return (
        <group {...props} dispose={null} scale={0.1}>
            <mesh ref={ref1} >
                <sphereGeometry args={[2, 32, 16]} />
                <HologramMaterial />
            </mesh>
        </group>
    )
}
