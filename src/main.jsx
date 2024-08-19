import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 导入可视化时间线扩展
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

//测试编辑器
// studio.extend(extension)
// studio.initialize()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
