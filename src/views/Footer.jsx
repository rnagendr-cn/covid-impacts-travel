import React from "react"
import withStyles from "react-jss"
import colors from "../colors"

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: "2em 0",
    margin: 0,
  },
  link: {
    fontSize: "14px",
    margin: 0,
    color: colors.blackMuted,
  },
  linkTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: "15px",
    marginBottom: "4px",
  },
}

const Footer = ({ classes }) => {
  return (
    <footer className={classes.container}>
      <p className={classes.linkTitle}>Sources</p>
      <a
        className={classes.link}
        href="https://www.unwto.org/global-and-regional-tourism-performance">
        UNWTO global tourism dashboard
      </a>
      <a
        className={classes.link}
        href="https://www.unwto.org/tourism-and-covid-19-unprecedented-economic-impacts">
        UNWTO - Tourism and COVID-19 - Unprecedented Economic Impacts
      </a>
      <p className={classes.link}>Images & Videos - Getty Images</p>
    </footer>
  )
}

export default withStyles(styles)(Footer)
