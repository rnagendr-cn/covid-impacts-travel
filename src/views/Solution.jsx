import React from "react"
import withStyles from "react-jss"
import colors from "../colors"

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colors.blueMuted,
    height: "100vh",
  },
  articleText: {
    fontSize: "min(20px, 4.7vmin)",
    color: "#2f363d",
    lineHeight: "1.25em",
    marginTop: "1.5em",
    margin: "0 auto",
    maxWidth: "55%",
    "@media only screen and (max-width: 700px)": {
      maxWidth: "90%",
    },
  },
}

const Solution = ({ classes }) => {
  return (
    <section className={classes.container}>
      <h2 className={classes.heading}>So what do we do now?</h2>
      <article className={classes.articleText}>
        Something that expresses what could be done further, what's being done
        right now, and how it might pan out.
      </article>
    </section>
  )
}

export default withStyles(styles)(Solution)
