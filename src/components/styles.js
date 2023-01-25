import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { grey } from "@mui/material/colors";
import background from "../images/banner.jpg";
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    position: "relative",
  },
  // bgImg:background {
  //   content: "",
  //   position: "absolute",
  //   backgroundImage: `url(${background})`,
  //   backgroundRepeat: "no-repeat",
  //   // backgroundAttachment: "scroll, scroll, scroll, fixed",
  //   height: "auto",
  //   width: "100%",
  // },
  overlay: {
    position: "absolute",
    opacity: "0.6",
  },
  container: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#00000",
    padding: theme.spacing(8, 0, 6),
    position: "relative",
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "60px 0",
  },
  card: {
    // height: "100%",
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    // paddingTop: "56.25%", //16:9
    paddingTop: "65%", //16:9
    radius: "8px",
  },
  cardContent: {
    flexGrow: 1,
  },

  typography: {
    font: "-apple-system",
    padding: "1em",
    fontWeight: 500,
    lineHeight: "normal",
    marginLeft: "1em",

    strTitleContainer: {
      backgroundColor: "#9e9e9e",
    },
  },
}));

export default useStyles;
