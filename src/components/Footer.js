import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  createTheme,
} from "@mui/material";
import useStyles from "./styles";
import { Link } from "@material-ui/core";
const theme = createTheme();

const Footer = () => {
  const classes = useStyles(theme);
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        {" "}
        Sipping drinks from
      </Typography>
      <Typography variant='subtitle1' align='center' color='textSecondary'>
        thecocktaildb.com
      </Typography>

      <Typography variant='h6' align='center' gutterBottom>
        {" "}
        Happy Hour Cocktails Created by
        <Link href='https://www.linkedin.com/in/diana-lupita-garcia/'>
          {" Diana Garcia"}
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
