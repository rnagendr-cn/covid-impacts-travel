import React from "react"
import { animated as a } from "react-spring"
import { iconData } from "../../data/iconData"
import colors from "../../colors"

const FlightMask = ({ x, y, height }) => {
  const { w, h, rectW, rectH, rectAdj } = iconData
  return (
    <>
      <rect
        transform={`translate(${x + rectAdj}, ${y + rectAdj})`}
        width={rectW}
        height={rectH}
        fill={colors.blue}
        rx="16"
      />
      <a.rect
        transform={`translate(${x + rectAdj}, ${y + rectAdj})`}
        width={rectW}
        height={height}
        fill="white"
        rx="15"
      />
      <rect
        transform={`translate(${x}, ${y})`}
        width={w}
        height={h}
        mask="url(#mask)"
        fill={colors.lightGrey}
      />
    </>
  )
}

export default FlightMask
