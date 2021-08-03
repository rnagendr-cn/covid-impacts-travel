import React, { forwardRef } from "react"
import withStyles from "react-jss"
import { animated as a } from "react-spring"
import colors from "../colors"
import { yearWise } from "../data/worldData"

const styles = {
  side: {
    width: "30vw",
    maxWidth: "350px",
    minWidth: "100px",
    minHeight: "100%",
    backgroundColor: colors.blueMuted,
  },
  section: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sideHeading: {
    fontSize: "4vmin",
    padding: "0 1em",
    textAlign: "center",
    margin: 0,
    // color: colors.blackMuted,
    color: "black",
  },
  sideDescription: {
    fontSize: "3vmin",
    padding: "0 1.5em",
    // textAlign: "center",
    margin: 0,
    color: "black",
    marginBottom: "2rem",
  },
  sideDescriptionCenter: {
    composes: "$sideDescription",
    textAlign: "center",
    margin: "0.5rem 0",
  },
  year: {
    composes: "$sideHeading",
    // marginBottom: "1rem",
    fontSize: "7vmin",
  },
  number: {
    composes: "$year",
  },
  percentChange: {
    composes: "$sideDescription",
    margin: "3rem 0 0 0",
    textAlign: "center",
  },
  percent: {
    fontSize: "3.5vmin",
    fontWeight: "bold",
  },
  redPercent: {
    composes: "$percent",
    color: colors.red,
  },
  arrow: {
    width: "5vmin",
  },
}

const SectionWrapper = ({ children, classes }, ref) => {
  return (
    <div className={classes.section} ref={ref}>
      {children}
    </div>
  )
}
const Section = withStyles(styles)(forwardRef(SectionWrapper))

const Side = ({ classes, yearSpring, refs }) => {
  return (
    <div className={classes.side}>
      <Section ref={refs[1]}>
        <p className={classes.sideDescription}>
          Tourism is one of the world’s major economic sectors. It is the{" "}
          <b>third-largest</b> export category and in 2019 accounted for{" "}
          <b>7%</b> of global trade.
        </p>
        {/* Source - https://www.unwto.org/tourism-and-covid-19-unprecedented-economic-impacts */}
        <p className={classes.sideDescription}>
          For some countries, it can represent <b>over 20%</b> of their GDP.
        </p>
      </Section>
      <Section ref={refs[2]}>
        <p className={classes.sideDescription}>
          But what do any of these terms and numbers mean?
        </p>
        <p className={classes.sideDescription}>
          In order to understand it better, consider the chart on right. It
          represents <b>100 units</b>.
        </p>
      </Section>
      <Section ref={refs[3]}>
        <p className={classes.sideDescriptionCenter}>
          Now, imagine that the 100 units represent{" "}
        </p>
        <h4 className={classes.year}>{yearWise[2019].arrivals.value}</h4>
        <p className={classes.sideDescriptionCenter}>million</p>
      </Section>
      <Section ref={refs[4]}>
        <h4 className={classes.sideHeading}>In</h4>
        <h4 className={classes.year}>
          <a.span>{yearSpring.year.to((d) => Math.floor(d))}</a.span>,
        </h4>
        <h4 className={classes.sideHeading}>total arrivals worldwide were</h4>
        <a.h4 className={classes.number} style={{ color: yearSpring.color }}>
          {yearSpring.value.to((d) => Math.floor(d))}
        </a.h4>
        <a.h4 className={classes.number} style={{ color: yearSpring.color }}>
          million
        </a.h4>
        <a.p
          className={classes.percentChange}
          style={{ opacity: yearSpring.opacity }}>
          <a.span className={classes.redPercent}>
            {Math.abs(yearWise[2020].arrivals.changePercent)}% drop
          </a.span>{" "}
          from 2019
        </a.p>
        <a.p
          className={classes.percentChange}
          style={{ opacity: yearSpring.opacity }}>
          Which brings the average annual growth percent for the past 10 years
          to{" "}
          <a.span className={classes.redPercent}>
            {yearWise[2020].arrivals.growthPercent}%
          </a.span>
        </a.p>
      </Section>
      <Section ref={refs[5]}>
        <p className={classes.sideDescriptionCenter}>
          What did this look like? Locations like
        </p>
        <h4 className={classes.year}>Tiananmeng Square</h4>
        <p className={classes.sideDescriptionCenter}>
          which are famous for their jam packed tourist crowds turned into empty
          grounds
        </p>
      </Section>
      <Section ref={refs[6]}>
        <p className={classes.sideDescriptionCenter}>And</p>
        <h4 className={classes.year}>Times Square</h4>
        <p className={classes.sideDescriptionCenter}>went silent too</p>
      </Section>
      <div style={{ height: "10vh", width: "100%" }} />
      {/* <Section
      // ref={refs[6]}
      >
        <p className={classes.sideDescription}>
          In <b>2019</b>, each country had its own huge network of people in
          tourism sector to help the 1446 million tourists arriving have the
          best experience.
        </p>
      </Section>
      <Section
      // ref={refs[6]}
      >
        <p className={classes.sideDescription}>
          In <b>2020</b>, this huge network of people who could handle 1446
          million tourists, suddenly had to cater to a really small crowd
          people. In some cases, <b>there was no one to cater to</b>.
        </p>
        <p className={classes.sideDescription}>
          This drastic drop made the jobs which rely on tourism run at losses,
          which lead to layoffs and millions of livelihoods at risk.
        </p>
      </Section>

      <Section
      // ref={refs[6]}
      >
        <p className={classes.percentChange}>
          To put it in numbers, Asia and the Pacific region had a tourism export
          of
        </p>
        <a.h4 className={classes.year}>485</a.h4>
        <h4 className={classes.year}>billion USD</h4>
        <p className={classes.percentChange}>in</p>
        <h4 className={classes.year}>
          <a.span>2019</a.span>
        </h4>
        <a.p className={classes.percentChange}>
          Which makes it 2% of total exports. To put things in perspective, it
          was 3% in 1980.
        </a.p>
      </Section> */}
    </div>
  )
}

export default withStyles(styles)(Side)
