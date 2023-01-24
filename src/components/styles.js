import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "white",
    padding: theme.spacing(8, 0, 6),
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
      backgroundColor: grey,
    },
  },
}));

export default useStyles;
