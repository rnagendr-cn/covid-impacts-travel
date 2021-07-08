import React from "react"
import { iconData, flightPath } from "../../data/iconData"

const Defs = () => {
  const { w, h, flightX, flightY } = iconData

  return (
    <defs>
      <clipPath id="clip" x="0" y="0" width={w} height={h}>
        <path transform={`translate(${flightX}, ${flightY})`} d={flightPath} />
      </clipPath>
      <mask id="mask" x="0" y="0" width={w} height={h}>
        <rect x="0" y="0" width={w} height={h} fill="#fff" rx="12" />
        <path transform={`translate(${flightX}, ${flightY})`} d={flightPath} />
      </mask>
    </defs>
  )
}

export default Defs
