import React from "react"
import { animated as a } from "react-spring"
import { iconData } from "../../data/iconData"
import colors from "../../colors"

const Flight = ({ x, y, height }) => {
  const { w, h } = iconData

  return (
    <>
      <rect
        transform={`translate(${x}, ${y})`}
        width={w}
        height={h}
        fill={colors.blue}
        clipPath="url(#clip)"
      />
      <a.rect
        transform={`translate(${x}, ${y})`}
        width={w}
        height={height}
        fill={colors.lightGrey}
        clipPath="url(#clip)"
      />
    </>
  )
}

export default Flight
