import React, { forwardRef } from "react"
import withStyles from "react-jss"
import colors from "../colors"

const styles = {
  container: {
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
  },
  title: {
    margin: "0 2rem 2rem 2rem",
    textAlign: "center",
    lineHeight: 1.2,
    fontSize: "calc(44px + 2vmin)",
  },
  description: {
    fontSize: "22px",
    textAlign: "center",
    margin: 0,
    color: colors.blackMuted,
  },
  label: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: 0,
    color: colors.blackMuted,
  },
  select: {
    fontFamily: "Farnham",
    fontSize: "22px",
    padding: "0.3rem 0.5rem",
    margin: "0.5rem 1rem 1rem 1rem",
    color: colors.blackMuted,
  },
}

const Header = ({ classes }, ref) => {
  // const options = ["World", "US"]
  // const [location, setLocation] = useState(options[0])

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.box}>
        <h2 className={classes.title}>How has COVID impacted tourism?</h2>
        <p className={classes.description}>
          A visual comparison between 2019 and 2020 to see how much COVID
          impacted tourism
          {/* Show me the stats for */}
        </p>
        {/* <select
          className={classes.select}
          value={location}
          onChange={(e) => setLocation(e.target.value)}>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  )
}

export default withStyles(styles)(forwardRef(Header))
