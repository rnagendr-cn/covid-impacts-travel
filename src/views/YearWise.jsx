import React, { useEffect } from "react"
import withStyles from "react-jss"
import { useSpring, config, useSprings } from "react-spring"
import Side from "../components/Side"
import SVG from "../components/svg/SVG"
// import Comparison from "./Comparison"
import colors from "../colors"
import { yearWise } from "../data/worldData"

const styles = {
  container: {
    display: "flex",
    // height: "100vh",
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

  const [yearSpring, yearApi] = useSpring(() => ({
    year: 2019,
    value: yearWise[2019].arrivals.value,
    color: colors.green,
    opacity: 0,
    svgOpacity: 0,
    config: {
      duration: 1500,
    },
  }))

  const n = 100
  const [springs, springsApi] = useSprings(n, () => ({
    height: 60, // min - 0, max - 60
    config: config.molasses,
  }))

  const showSection2 = () => {
    // yearApi.stop()
    // springsApi.stop()
    yearApi.start({
      svgOpacity: 1,
      config: config.default,
    })
  }

  const showSection3 = () => {
    // yearApi.stop()
    // springsApi.stop()
    springsApi.start(() => ({ height: 0 }))
  }

  const showSection4 = () => {
    // yearApi.stop()
    // springsApi.stop()
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
    } else if (prev === "section-5" && curr === "section-6") {
    }
    // // Bottom to top scroll
    // else if (prev === "section-5" && curr === "section-4") {
    //
    // } else if (prev === "section-4" && curr === "section-3") {
    //   showSection2()
    // } else if (prev === "section-3" && curr === "section-2") {
    //   showSection3()
    // } else if (prev === "section-2" && curr === "section-1") {
    // } else if (prev === "section-1" && curr === "header") {
    // }
  }, [prev, curr])

  return (
    <div className={classes.container}>
      <Side yearSpring={yearSpring} refs={observerRefs} />
      <div className={classes.stickyContainer}>
        {/* <Comparison /> */}
        <SVG className={classes.svg} spring={yearSpring} springs={springs} />
      </div>
    </div>
  )
}

export default withStyles(styles)(YearWise)
