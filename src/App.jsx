/*
 * @Descripttion: 
 * @version: Chevalier
 * @Author: 
 * @Date: 2024-08-19 09:18:36
 * @LastEditors: Chevalier
 * @LastEditTime: 2024-08-19 15:26:12
 */
/*
 * @Descripttion: 
 * @version: Chevalier
 * @Author: 
 * @Date: 2024-08-19 09:18:36
 * @LastEditors: Chevalier
 * @LastEditTime: 2024-08-19 11:02:40
 */
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";

//表
import { SheetProvider } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import { ScrollControls } from "@react-three/drei";
import flyThrough from './FlyThrough.theatre-project-state.json'

function App() {

  //动画表
  //测试
  // const sheet = getProject('Fly Through').sheet('Scene')
  //json
  const sheet = getProject('Fly Through', { state: flyThrough }).sheet('Scene')
  return (
    <Canvas >
      <color attach="background" args={["#000"]} />
      {/* 滚动控制 加入动画表 */}
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
