import React, { useState, useEffect } from "react"
import withStyles from "react-jss"
import { useSpring, config, useSprings } from "react-spring"
import Side from "../components/Side"
import SVG from "../components/svg/SVG"
import Comparison from "../components/Comparison"
import colors from "../colors"
import { yearWise } from "../data/worldData"
import {
  TimesSquareBefore,
  TimesSquareAfter,
  TiananmengBefore,
  TiananmengAfter,
} from "../assets/images"

const styles = {
  container: {
    display: "flex",
    width: "100vw",
    scroll: "hidden",
    position: "relative",
  },
  stickyContainer: {
    width: "100%",
    height: "100vh",
    position: "sticky",
    top: 0,
  },
}

const YearWise = ({ classes, position, observerRefs }) => {
  const { prev, curr } = position
  const [viz, setViz] = useState("svg")

  // Animation --------------------------------------------
  const springConfig = {
    year: 2019,
    value: yearWise[2019].arrivals.value,
    color: colors.green,
    opacity: 0,
    svgOpacity: 0,
    comparisonOpacity: 0,
    config: {
      duration: 1500,
    },
  }
  const [yearSpring, yearApi] = useSpring(() => ({
    ...springConfig,
  }))

  const n = 100,
    springsConfig = {
      height: 60, // min - 0, max - 60
      config: config.molasses,
    }
  const [springs, springsApi] = useSprings(n, () => ({
    ...springsConfig,
  }))

  // Animation functions ----------------------------------
  const stopActiveAnimations = () => {
    yearApi.stop()
    springsApi.stop()
  }

  const showSection1 = (immediate) => {
    stopActiveAnimations()
    yearApi.start({
      ...springConfig,
      immediate: immediate ? immediate : false,
    })
    springsApi.start(() => ({
      ...springsConfig,
      immediate: immediate ? immediate : false,
    }))
  }

  const showSection2 = (immediate) => {
    stopActiveAnimations()
    // Stage elements to section 1 without animation
    showSection1(true)
    // Section 1 to Section 2 reveal animation
    yearApi.start({
      svgOpacity: 1,
      config: config.default,
      immediate: immediate ? immediate : false,
    })
  }

  const showSection3 = (immediate) => {
    stopActiveAnimations()
    // Stage elements to Section 2 without animation
    showSection2(true)
    // Section 2 to Section 3 reveal animation
    springsApi.start(() => ({
      height: 0,
      immediate: immediate ? immediate : false,
    }))
  }

  const showSection4 = (immediate) => {
    stopActiveAnimations()
    // Stage elements to Section 3 without animation
    showSection3(true)
    // Section 3 to Section 4 reveal animation
    if (immediate) {
      yearApi.start({
        year: 2020,
        value: yearWise[2020].arrivals.value,
        color: colors.red,
        opacity: 1,
        config: {
          duration: 1500,
        },
        delay: 1000,
        immediate: true,
      })
      springsApi.start((i) => {
        if (i < 27) return { height: 0, delay: 500, immediate: true }
        else if (i === 27) return { height: 30, delay: 500, immediate: true }
        else return { height: 60, delay: 500, immediate: true }
      })
    } else {
      yearApi.start({
        year: 2020,
        value: yearWise[2020].arrivals.value,
        color: colors.red,
        config: {
          duration: 1500,
        },
        delay: 1000,
        onRest: () => {
          yearApi.start({
            opacity: 1,
            onRest: () => {
              springsApi.start((i) => {
                // Arrivals scale -> 1 to 1446
                // Our scale -> 1 to 100
                // 397 million in our scale -> 27.45
                if (i < 27) return { height: 0, delay: 500 }
                else if (i === 27) return { height: 30, delay: 500 }
                else return { height: 60, delay: 500 }
              })
            },
          })
        },
      })
    }
  }

  const showSection5 = () => {
    stopActiveAnimations()
    // Stage elements to Section 4 without animation
    showSection4(true)
    // Section 4 to Section 5 reveal animation
    setViz("comparison1")
  }

  const showSection6 = () => {
    stopActiveAnimations()
    // Stage elements to Section 4 without animation
    showSection4(true)
    // Section 6 reveal animation
    setViz("comparison2")
  }

  const goBackToSection5 = () => {
    stopActiveAnimations()
    setViz("comparison1")
  }

  const goBackToSection4 = () => {
    stopActiveAnimations()
    setViz("svg")
  }

  const goBackToSection3 = (immediate) => {
    stopActiveAnimations()
    springsApi.start(() => ({
      height: 0,
      immediate: immediate ? immediate : false,
    }))
    yearApi.start({
      year: springConfig.year,
      value: springConfig.value,
      color: springConfig.color,
      opacity: springConfig.opacity,
      immediate: true,
    })
  }

  const goBackToSection2 = (immediate) => {
    stopActiveAnimations()
    goBackToSection3(true)
    springsApi.start(() => ({
      ...springsConfig,
      immediate: immediate ? immediate : false,
    }))
  }

  const goBackToSection1 = () => {
    stopActiveAnimations()
    goBackToSection2(true)
    yearApi.start({
      svgOpacity: 0,
      config: config.default,
    })
  }

  useEffect(() => {
    // Top to bottom scroll
    if (prev === "header" && curr === "section-1") {
    } else if (prev === "section-1" && curr === "section-2") {
      showSection2()
    } else if (prev === "section-2" && curr === "section-3") {
      showSection3()
    } else if (prev === "section-3" && curr === "section-4") {
      showSection4()
    } else if (prev === "section-4" && curr === "section-5") {
      showSection5()
    } else if (prev === "section-5" && curr === "section-6") {
      showSection6()
    }
    // Bottom to top scroll
    else if (prev === "section-6" && curr === "section-5") {
      goBackToSection5()
    } else if (prev === "section-5" && curr === "section-4") {
      goBackToSection4()
    } else if (prev === "section-4" && curr === "section-3") {
      goBackToSection3()
    } else if (prev === "section-3" && curr === "section-2") {
      goBackToSection2()
    } else if (prev === "section-2" && curr === "section-1") {
      goBackToSection1()
    }
    // else if (prev === "section-1" && curr === "header") {
    // }
  }, [prev, curr])

  const renderViz = (viz) => {
    const mapping = {
      svg: (
        <SVG className={classes.svg} spring={yearSpring} springs={springs} />
      ),
      comparison1: (
        <Comparison right={TiananmengAfter} left={TiananmengBefore} />
      ),
      comparison2: (
        <Comparison right={TimesSquareAfter} left={TimesSquareBefore} />
      ),
    }
    return mapping[viz]
  }

  return (
    <section className={classes.container}>
      <Side yearSpring={yearSpring} refs={observerRefs} />
      <section className={classes.stickyContainer}>{renderViz(viz)}</section>
    </section>
  )
}

export default withStyles(styles)(YearWise)
