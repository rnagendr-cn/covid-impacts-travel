import React from "react"
import withStyles from "react-jss"

const styles = {
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
    width: "100vw",
    height: "100vh",
    zIndex: 1,
  },
}

const BackgroundVideo = ({ classes, video, poster }) => {
  return (
    <video
      className={classes.video}
      poster={poster}
      autoPlay={true}
      muted={true}
      loop={true}>
      <source src={video} type="video/mp4" />
    </video>
  )
}

export default withStyles(styles)(BackgroundVideo)
