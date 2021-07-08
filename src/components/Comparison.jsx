import React from "react"
import withStyles from "react-jss"
import ImageSlider from "react-image-comparison-slider"
import { SydneyBefore, SydneyAfter } from "../assets/images"
import colors from "../colors"

const styles = {
  container: {
    height: "100%",
    width: "100%",
  },
}

const Comparison = ({ classes }) => {
  return (
    <div className={classes.container}>
      <ImageSlider
        image1={SydneyAfter}
        image2={SydneyBefore}
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
  )
}

export default withStyles(styles)(Comparison)
