import Canela from "./Canela-Regular.woff"
import Farnham from "./FarnhamDisplay-Light.woff"
import SourceSerif from "./SourceSerifVariable.otf"
import FarnhamMedium from "./FarnhamDisplay-Medium.woff"
import WorkSans from "./worksans-regular.woff2"
import WorkSansMedium from "./worksans-medium.woff"

const fonts = {
  "@font-face": [
    {
      fontFamily: "Canela",
      src: `url('${Canela}') format("woff")`,
      fontWeight: 600,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Farnham",
      src: `url('${Farnham}') format("woff")`,
      fontWeight: 300,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Farnham",
      src: `url('${FarnhamMedium}') format("woff")`,
      fontWeight: 600,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "SourceSerif",
      src: `url('${SourceSerif}') format("otf")`,
      fontWeight: "300 900",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "WorkSans",
      src: `url('${WorkSans}') format("woff2")`,
      fontWeight: 300,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "WorkSans",
      src: `url('${WorkSansMedium}') format("woff")`,
      fontWeight: 600,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  ],
}

export default fonts
