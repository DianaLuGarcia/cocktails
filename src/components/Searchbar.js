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
import { CollectionsBookmarkOutlined } from "@mui/icons-material";

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
      //Search by Ingredients
      const drinkIngredients = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?i=${search}`
      );
      // console.log(drinks.data.drinks);
      //adding the data from both GET calls
      let searchResults = [];
      if (drinks.data.drinks) {
        searchResults = [...drinks.data.drinks];
      }
      if (typeof drinkIngredients.data.drinks[0] != "string") {
        searchResults = [...searchResults, ...drinkIngredients.data.drinks];
      }
      // console.log({ searchResults });

      const drinkMap = {};
      const uniqueSearchResults = searchResults.filter((drink) => {
        if (drinkMap[drink.idDrink]) {
          return false;
        } else {
          drinkMap[drink.idDrink] = true;
          return true;
        }
      });

      //Collects the drink names from search results and adds them to cocktailNames which is then mapped through the api to collect ingredient/instructions
      const cocktailNames = uniqueSearchResults.map(
        (name) => `${name.strDrink}`
      );
      // console.log({ cocktailNames });
      let strName = cocktailNames.map((word) => word.replace(" ", "_"));
      // console.log({ strName });

      let searchByName = await Promise.all(
        strName.map(async (name) => {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=${name}`
          );
          return response.data.drinks;
        })
      );
      // console.log({ searchByName });
      let results = searchByName.flat();
      // console.log({ results });
      setSearch("");
      setCocktails(results);
      // console.log({ search });
    }
  };
  // window.scrollTo({ top: 675, left: 100, behavior: "smooth" });
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
                placeholder='What are you look for?'
                variant='filled'
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
