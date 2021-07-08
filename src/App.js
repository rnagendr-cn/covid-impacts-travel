import React from "react"
import withStyles from "react-jss"
import fonts from "./assets/fonts"
import Header from "./views/Header"
import YearWise from "./views/YearWise"
import useIntersectionObserver from "./hooks/useIntersectionObserver"

const styles = {
  ...fonts,
  "@global": {
    body: {
      margin: 0,
      fontFamily: "Farnham",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "Canela",
      lineHeight: 1.2,
    },
  },
  app: {
    display: "flex",
    flexDirection: "column",
  },
}

function App({ classes }) {
  const { observerRefs, position } = useIntersectionObserver()
  return (
    <div className={classes.app}>
      <Header ref={observerRefs[0]} />
      <YearWise observerRefs={observerRefs} position={position} />
    </div>
  )
}

export default withStyles(styles)(App)
