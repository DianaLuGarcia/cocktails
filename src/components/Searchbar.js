import React, { useState } from "react";
import useStyles from "./styles";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Button,
  ThemeProvider,
  TextField,
  Input,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CocktailGrid from "./CocktailGrid";
import { Box } from "@material-ui/core";
import axios from "axios";

const theme = createTheme();

const Searchbar = ({ setCocktails, cocktails, setCocktail, cocktail }) => {
  const [search, setSearch] = useState("");
  const classes = useStyles(theme);

  //Search by name
  const handleSearch = async () => {
    if (search) {
      const drinks = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=${search}`
      );

      //Filter by ingredient
      const drinkIngredients = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?i=${search}`
      );

      //adding the data from both GET calls
      const searchResults = [
        ...drinks.data.drinks,
        ...drinkIngredients.data.drinks,
        // ...popularDrinks.data.drinks,
      ];

      //Checks for ID duplicates within searchResults, assigns to uniqueSearchResults
      const drinkMap = {};
      const uniqueSearchResults = searchResults.filter((drink) => {
        if (drinkMap[drink.idDrink]) {
          return false;
        } else {
          drinkMap[drink.idDrink] = true;
          return true;
        }
      });

      // console.log("Search Results", searchResults);
      // console.log("Search Results Unique", uniqueSearchResults);

      window.scrollTo({ top: 900, left: 100, behavior: "smooth" });

      setSearch(" ");
      setCocktails(uniqueSearchResults);
      // console.log("search:", search);
    }
    // if (search.status === 200) {
    //   return search.json();
    // }
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <Container maxWidth='sm' p='30px'>
            <Typography
              variant='h6'
              align='center'
              color='textPrimary'
              id='searchHeading'
            >
              Find your next favorite drink..
            </Typography>
            <div>
              <TextField
                fullWidth
                id='standard-search'
                placeholder='Try searching "Vodka'
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ "& > :not(style)": { m: 1 } }}
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                focused
              />
            </div>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Searchbar;
