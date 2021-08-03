import React from "react"
import withStyles from "react-jss"
import colors from "../colors"
import BackgroundVideo from "../components/BackgroundVideo"
import TouristVideo from "../assets/videos/walking-through-street.webm"

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    height: "100vh",
  },
  heading: {
    borderRadius: "12px",
    backgroundColor: colors.blueMutedOpacity,
    padding: "1rem 3rem",
    zIndex: 10,
    "@media only screen and (max-width: 700px)": {
      padding: "0.6rem 1rem",
      margin: "1rem",
    },
  },
  articleText: {
    fontSize: "min(20px, 4.7vmin)",
    color: "#2f363d",
    lineHeight: "1.25em",
    marginTop: "0.25em",
    margin: "0 auto",
    maxWidth: "55%",
    borderRadius: "12px",
    backgroundColor: colors.blueMutedOpacity,
    padding: "1.3rem 3rem",
    zIndex: 10,
    "@media only screen and (max-width: 700px)": {
      maxWidth: "90%",
      padding: "0.6rem 1rem",
      margin: "0 1rem",
    },
  },
}

const Article = ({ classes }) => {
  return (
    <section className={classes.container}>
      <BackgroundVideo video={TouristVideo} poster={""} />
      <h2 className={classes.heading}>
        But isn't that good in terms of controlling COVID?
      </h2>
      <article className={classes.articleText}>
        <b>Yes, but not without any repercussions.</b> In 2019, each country had
        its own huge network of people in tourism sector to help the 1446
        million global tourists have the best experience. These jobs include
        tourism guides, travel agents, hotel management jobs, museum jobs and
        local businesses that cater to tourist needs like souvenirs shops.
        <br />
        <br />
        In 2020, this huge network of people who could handle 1446 million
        tourists, suddenly had to cater to a really small crowd people. In some
        countries, there was no one to cater to.
        <br />
        <br />
        This drastic drop made the jobs which rely on tourism run at huge
        losses, which lead to layoffs and put millions of livelihoods at risk.
        To put it in numbers, Asia and the Pacific region had a tourism export
        of <b>485 billion USD</b> in 2019, which came down to{" "}
        <b>145 billion USD</b> in 2020, which makes it{" "}
        <b>2% of total global exports</b>. To put things in perspective,{" "}
        <b>it was 3% in 1980s</b> and has never fallen below that.
      </article>
    </section>
  )
}

export default withStyles(styles)(Article)
