import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
// import ImageButton from "./ImageButton";
// import Browse from "./pages/Browse";
import { Link } from "react-router-dom";
import App from "../App";
import CocktailGrid from "./CocktailGrid";

const SearchCocktails = ({
  setCocktails,
  cocktails,
  setCocktail,
  cocktail,
}) => {
  const [search, setSearch] = useState("");
  // const [ingredients, setIngredients] = useState([]);

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

      const popularDrinks = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/popular.php`
      );

      console.log("popularDrinks: ", popularDrinks);
      //adding the data from both GET calls
      const searchResults = [
        ...drinks.data.drinks,
        ...drinkIngredients.data.drinks,
        ...popularDrinks.data.drinks,
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

      console.log("Search Results", searchResults);
      console.log("Search Results Unique", uniqueSearchResults);

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch(" ");
      setCocktails(uniqueSearchResults);
      console.log("search:", search);
    }
    if (search.status === 200) {
      return search.json();
    }
  };

  return (
    <Stack alignItems='Center' mt='37px' justifyContent='center' p='20'>
      <Typography
        fontWeight={200}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb='50px'
        textAlign='center'
      >
        Classic Cocktails <br /> you should know how to make.
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          // id='outlined-basic'
          // label='Search Cocktails'
          // variant='outlined'
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Cocktails'
          type='text'
        />
        <Link to='/browse'>
          <Button
            className='search-btn'
            sx={{
              bgcolor: "#0083db",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0",
            }}
          >
            Search
          </Button>
        </Link>
      </Box>

      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <CocktailGrid
          data={cocktails}
          cocktail={cocktail}
          setCocktail={setCocktail}
        />
      </Box>
    </Stack>
  );
};

export default SearchCocktails;
