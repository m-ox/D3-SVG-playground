import { useState } from 'react'

function App() {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)
  const [centerX, setCenterX] = useState(width / 2)
  const [centerY, setCenterY] = useState(height / 2)
  const [strokeWidth, setStrokeWidth] = useState(10)
  const [eyeOffsetX, setEyeOffsetX] = useState(180)
  const [eyeOffsetY, setEyeOffsetY] = useState(150)
  const [eyeRadius, setEyeRadius] = useState(50)

  return (
    <div className="App">
      <svg width={width} height={height}>
        <circle
          cx={centerX}
          cy={centerY}
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
        <circle
          cx={centerX - eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          cx={centerX + eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
        />
      </svg>
    </div>
  )
}

export default App
