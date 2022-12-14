import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
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
    backgroundColor: theme.palette.action.hover,
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
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  typography: {
    font: "-apple-system",
    padding: "1em",
    fontWeight: 500,
  },
}));

export default useStyles;
