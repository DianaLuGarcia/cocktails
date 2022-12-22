import React, { useState, useEffect } from "react";
import axios from "axios";

const AllCocktails = () => {
  // const [data, setData] = useState([])
  const [all, setAll] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/filter.php?a=Alcoholic`
      )
      .then((response) => {
        console.log(response.data);
        setAll(response.data);
      });
  }, []);
};
export default AllCocktails;
