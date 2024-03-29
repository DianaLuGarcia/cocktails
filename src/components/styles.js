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
    cardContent: {
      padding: "3px",
      "&:last-child": {
        paddingBottom: "1px",
      },
    },
  },
  overlay: {
    position: "absolute",
    opacity: "0.6",
  },
  container: {
    // backgroundColor: theme.palette.background.paper,
    backgroundcolor: "#00000",
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
    backgroundcolor: "white",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", //16:9
    radius: "15px",
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
      backgroundcolor: "#9e9e9e",
    },
  },
}));

export default useStyles;
