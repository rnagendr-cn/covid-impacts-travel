import React from "react"
import withStyles from "react-jss"
import ImageSlider from "react-image-comparison-slider"

import colors from "../colors"

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  sliderContainer: {
    height: "50vw",
    width: "75vw",
  },
}

const Comparison = ({ classes, right, left }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sliderContainer}>
        <ImageSlider
          image1={right}
          image2={left}
          // alt1={ }
          // alt2={}
          sliderColor={colors.blue}
          sliderWidth={0}
          handleBackgroundColor={colors.blueMuted}
          handleColor={colors.blue}
          // onSlide={() => {
          //   console.log("sliding");
          // }}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(Comparison)
