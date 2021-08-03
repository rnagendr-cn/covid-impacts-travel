import React, { forwardRef } from "react"
import withStyles from "react-jss"
import colors from "../colors"
import BackgroundVideo from "../components/BackgroundVideo"
import Paris from "../assets/videos/paris.webm"

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    scroll: "hidden",
    backgroundColor: colors.blueMuted,
  },
  box: {
    maxWidth: "700px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "-4rem",
    padding: "4rem",
    borderRadius: "10px",
    backgroundColor: colors.blueMutedOpacity,
    zIndex: 10,
  },
  title: {
    margin: "0 2rem 2rem 2rem",
    textAlign: "center",
    lineHeight: 1.2,
    fontSize: "calc(44px + 2vmin)",
    "@media only screen and (max-width: 600px)": {
      fontSize: "34px",
    },
  },
  description: {
    fontSize: "min(20px, 4.7vmin)",
    maxWidth: "60%",
    textAlign: "center",
    margin: 0,
    color: colors.blackMuted,
    "@media only screen and (max-width: 700px)": {
      maxWidth: "90%",
    },
  },
}

const Header = ({ classes }, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      <BackgroundVideo video={Paris} poster={""} />
      <div className={classes.box}>
        <h2 className={classes.title}>How has COVID impacted tourism?</h2>
        <p className={classes.description}>
          A visual comparison between 2019 and 2020 to see how much COVID
          impacted tourism
        </p>
      </div>
    </div>
  )
}

export default withStyles(styles)(forwardRef(Header))
