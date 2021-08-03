import React from "react"
import withStyles from "react-jss"
import fonts from "./assets/fonts"
import Header from "./views/Header"
import YearWise from "./views/YearWise"
import Article from "./views/Article"
import Footer from "./views/Footer"
import useIntersectionObserver from "./hooks/useIntersectionObserver"
import Solution from "./views/Solution"

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
    b: {
      color: "#000",
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
      <Article />
      <Solution />
      <Footer />
    </div>
  )
}

export default withStyles(styles)(App)
