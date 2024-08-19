/*
 * @Descripttion: 
 * @version: Chevalier
 * @Author: 
 * @Date: 2024-08-19 09:18:36
 * @LastEditors: Chevalier
 * @LastEditTime: 2024-08-19 16:14:07
 */
import { useEffect } from "react";
import { useControls } from "leva";
import { useCurrentSheet, PerspectiveCamera } from "@theatre/r3f";
import { OrbitControls, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core"

import Stars from "./Stars";
import { BrittleHollow } from "./Brittle-hollow";
import Hologram from "./Hologram";

const Scene = () => {
  const bgMP3 = new Audio("/sounds/bgMusic.ogg");
  const sheet = useCurrentSheet()
  const config = useControls({ music: { value: false } })
  const scroll = useScroll()
  useEffect(() => {
    console.log(config.music)
    if (config.music) {
      console.log('kai')
      bgMP3.play()
    } else {
      bgMP3.pause()
    }
  }, [config.music])

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length)
    sheet.sequence.position = scroll.offset * sequenceLength

  })

  return (
    <>
      <OrbitControls enableZoom={false} />
      {/* Stars */}
      <Stars />
      {/* BrittleHollow */}
      <BrittleHollow scale={0.3} />
      {/* Hologram */}
      <Hologram />
      {/* PerspectiveCamera */}
      <PerspectiveCamera theatreKey="Camera" makeDefault fov={90} near={.1} far={300} />
    </>
  );
};
export default Scene