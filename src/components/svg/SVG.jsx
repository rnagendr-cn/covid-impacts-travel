import React from "react"
import { animated as a } from "react-spring"
import Defs from "./Defs"
import Flight from "./Flight"
import FlightMask from "./FlightMask"

const SVG = ({ className, spring, springs }) => {
  const getPosition = (i) => {
    const xMapping = {
      1: 10,
      2: 90,
      3: 170,
      4: 250,
      5: 330,
      6: 410,
      7: 490,
      8: 570,
      9: 650,
      0: 730,
    }
    const yMapping = {
      0: 10,
      1: 90,
      2: 170,
      3: 250,
      4: 330,
      5: 410,
      6: 490,
      7: 570,
      8: 650,
      9: 730,
    }
    const id = i + 1
    let x = 0,
      y = 0
    if (id < 10) {
      x = xMapping[id]
      y = yMapping[0]
    } else if (id === 100) {
      x = xMapping[0]
      y = yMapping[9]
    } else {
      const ones = id % 10
      const tens = Math.floor((id / 10) % 10)
      if (id % 10 === 0) {
        x = xMapping[ones]
        y = yMapping[tens - 1]
      } else {
        x = xMapping[ones]
        y = yMapping[tens]
      }
    }
    return { x, y }
  }

  return (
    <a.svg
      className={className}
      width="100%"
      height="100%"
      viewBox={`0, 0, 800, 800`}
      preserveAspectRatio="xMidYMid meet"
      style={{ opacity: spring.svgOpacity }}>
      <Defs />
      {springs.map((icon, i) => {
        const position = getPosition(i)
        if (i % 2 === 0) {
          return <Flight id={i + 1} {...position} height={icon.height} />
        } else {
          return <FlightMask id={i + 1} {...position} height={icon.height} />
        }
      })}
    </a.svg>
  )
}

export default SVG
