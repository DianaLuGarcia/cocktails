import logo from "./logo.svg";
import "./App.css";
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
  ThemeProvider,
} from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import MoodIcon from "@mui/icons-material/Mood";
import Link from "@mui/material/Link";
import { ClassNames } from "@emotion/react";
import useStyles from "./components/styles";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import CocktailGrid from "./components/CocktailGrid";
import ModalRecipe from "./components/ModalRecipe";
import { Search } from "@mui/icons-material";
import PopularCocktails from "./components/PopularCocktails";
import { useState } from "react";
import axios from "axios";
// import SearchCocktails from "./components/SearchCocktails";

const theme = createTheme();

function App() {
  const [cocktails, setCocktails] = useState([]);

  async function pop() {
    const popularDrinks = await axios.get(
      `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/popular.php`
    );
    setCocktails(popularDrinks.data.drinks);
  }
  async function random() {
    const randomDrink = await axios.get(
      `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/random.php`
    );
    setCocktails(randomDrink.data.drinks);
  }

  const classes = useStyles(theme);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {" "}
        <AppBar color='primary' position='relative'>
          <Toolbar>
            <LocalBarIcon className={classes.icon} />
            <Link underline='hover' color='inherit' href='#'>
              Home
            </Link>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth='sm' style={{ marginTop: "80px" }}>
              <Typography
                variant='h2'
                align='center'
                color='textPrimary'
                id='heading'
                gutterBottom
              >
                Happy Hour
              </Typography>
              <Typography
                variant='h5'
                align='center'
                color='textSecondary'
                id='headingParagraph'
                paragraph
              >
                The best hour is always happy hour. Find easy and unique recipes
                to create your favorite cocktails!{" "}
              </Typography>
              <div className={classes.button}>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant='contained' color='primary' onClick={pop}>
                      Popular Cocktails
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<MoodIcon />}
                      onClick={random}
                    >
                      I'm feeling lucky
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <Container></Container>
              <Searchbar cocktails={cocktails} setCocktails={setCocktails} />
              <CocktailGrid cocktails={cocktails} />
              <ModalRecipe cocktails={cocktails} />
              <PopularCocktails />
              <Footer />
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
