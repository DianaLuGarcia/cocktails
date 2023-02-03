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

      //returns all cocktails
      // const all = await axios.get(
      //   `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=`
      // );
      // console.log({ all });

      //Filter by ingredient Not showing ingredients or Instructions because of API Structure.
      // needs function to map idDrinks or strDrink from ingredient search then compare them using the 'drinks' GET search
      const drinkIngredients = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?i=${search}`
      );
      console.log(drinkIngredients);
      //adding the data from both GET calls
      let searchResults = [
        ...drinks.data.drinks,
        ...drinkIngredients.data.drinks,
        // ...popularDrinks.data.drinks,
      ];
      console.log({ searchResults });

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
      console.log({ uniqueSearchResults });
      //creates an array of ids for matching search results
      // const uniqueId = uniqueSearchResults.map((id) => `${id.idDrink}`);
      // console.log({ uniqueId });

      // let results = [];
      // let searchById = await Promise.all(
      //   uniqueId.map(async (id) => {
      //     const response = await axios.get(
      //       // `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      //       `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=${id}`
      //     );

      //     return response.data;
      //     // return response.data;
      //   })
      // );
      // results.push(searchById);
      // console.log(results.length);
      // console.log(results[0]);

      const cocktailNames = uniqueSearchResults.map(
        (name) => `${name.strDrink}`
      );
      console.log({ cocktailNames });
      let strName = cocktailNames.map((word) => word.replace(" ", "_"));
      console.log({ strName });

      let searchByName = await Promise.all(
        strName.map(async (name) => {
          const response = await axios.get(
            // `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/search.php?s=${name}`
          );
          return response.data.drinks;
        })
      );
      //searchByName is returning as a nested array, CocktailGrid component not returning data to DOM.
      console.log({ searchByName });
      setSearch(" ");
      /*uniqueSearchResults only searches drinks by name, for example if you search "gin" it will only return drinks with 
      gin in the name. The end goal is to update the state to "searchByName" so that search results can also include drinks with
      key ingredient*/
      setCocktails(uniqueSearchResults);
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
                placeholder='Try searching "Margarita"'
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
