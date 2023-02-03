import "./App.css";
import {
  Typography,
  // AppBar,
  CssBaseline,
  Grid,
  // Toolbar,
  Container,
  Button,
  ThemeProvider,
} from "@mui/material";
// import LocalBarIcon from "@mui/icons-material/LocalBar";
import MoodIcon from "@mui/icons-material/Mood";
// import Link from "@mui/material/Link";
// import { ClassNames } from "@emotion/react";
import useStyles from "./components/styles";
import { createTheme } from "@material-ui/core/styles";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import CocktailGrid from "./components/CocktailGrid";
import React from "react";
// import ModalRecipe from "./components/ModalRecipe";
// import { Search } from "@mui/icons-material";
// import PopularCocktails from "./components/PopularCocktails";
// import AllCocktails from "./components/AllCocktails";
// import MocktailsCocktails from "./components/MocktailCocktails";
import background from "./images/banner.jpg";
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
      `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/randomselection.php`
    );
    setCocktails(randomDrink.data.drinks);
  }
  async function all() {
    const allDrinks = await axios.get(
      `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=`
      // `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?a=Alcoholic`
    );
    setCocktails(allDrinks.data.drinks);
  }

  async function latest() {
    const latestDrinks = await axios.get(
      `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/latest.php`
    );
    setCocktails(latestDrinks.data.drinks);
  }
  // async function mock() {
  // const MockDrinks = await axios.get(
  //   `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?a=Non_Alcoholic`
  // );
  //   const MockDrinks = await axios.get(
  //     `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?a=Alcoholic`
  //   );
  //   setCocktails(MockDrinks.data.drinks);
  // } //not showing ingredients because the object for non alcoholic does not have it?

  // window.scrollTo({ top: 1200, left: 100, behavior: "smooth" });

  const classes = useStyles(theme);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* <AppBar color='primary' position='relative'>
          <Toolbar>
            <LocalBarIcon className={classes.icon} /> */}
        {/* <Link underline='hover' color='inherit' href='#'>
              Home
            </Link> */}
        {/* </Toolbar> */}
        {/* </AppBar> */}
        <main>
          <div className='overlay'>
            <div
              id='opacity'
              className='bgImg'
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // backgroundAttachment: "scroll, scroll, scroll, fixed",
                position: "contain",
                height: "auto",
                width: "100%",
                // opacity: "0.5",
              }}
            >
              <div className={classes.container}>
                <Container maxWidth='sm' style={{ marginTop: "90px" }}>
                  <Container>
                    <Typography
                      variant='h4'
                      align='center'
                      color='textSecondary'
                      id='heading'
                      gutterBottom
                    >
                      Join us for
                    </Typography>
                    <Typography
                      variant='h2'
                      align='center'
                      color='textPrimary'
                      id='heading'
                      gutterBottom
                    >
                      Happy Hour!
                    </Typography>
                    <Typography
                      variant='h5'
                      align='center'
                      color='textSecondary'
                      id='headingParagraph'
                      paragraph
                      marginBottom='2em'
                    >
                      The best hour is always happy hour. Find easy and unique
                      recipes to create your favorite cocktails!{" "}
                    </Typography>
                  </Container>
                  <Searchbar
                    cocktails={cocktails}
                    setCocktails={setCocktails}
                  />
                  <div className={classes.button}>
                    <Grid container spacing={4} justifyContent='center'>
                      <Grid item>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={pop}
                        >
                          Popular Cocktails
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={latest}
                        >
                          Latest Drinks
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={all}
                        >
                          All Cocktails
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
                </Container>
                <Container></Container>
                <CocktailGrid
                  cocktails={cocktails}
                  setCocktails={setCocktails}
                />
                {/* <ModalRecipe cocktails={cocktails} /> */}
                {/* <PopularCocktails />
            <AllCocktails />
            <MocktailsCocktails /> */}
                <Footer />
              </div>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
