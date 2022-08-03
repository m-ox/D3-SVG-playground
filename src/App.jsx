import { useState } from 'react'
import { arc } from 'd3'

function App() {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)
  const [centerX, setCenterX] = useState(width / 2)
  const [centerY, setCenterY] = useState(height / 2)
  const [strokeWidth, setStrokeWidth] = useState(10)
  const [eyeOffsetX, setEyeOffsetX] = useState(180)
  const [eyeOffsetY, setEyeOffsetY] = useState(150)
  const [eyeRadius, setEyeRadius] = useState(50)
  const [ mouthWidth, setMouthWidth] = useState(20)
  const [ mouthRadius, setMouthRadius] = useState(250)

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2)

  return (
    <div className="App">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <circle
            r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            stroke-width={strokeWidth}
          />
          <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />
          <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  )
}

export default App
