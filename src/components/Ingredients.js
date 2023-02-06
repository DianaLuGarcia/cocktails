// import React from "react";
// import { useState, useEffect } from "react";
// import Searchbar from "./Searchbar";

// const Ingredients = () => {
//   const [ingredients, setIngredients] = useState(0);
//   const url = `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_RAPID_API_KEY}/list.php?i=list`;

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch(url);
//       console.log(result);
//     };
//     fetchData();
//   });
//   //   setIngredients(ingredientsList.data.drinks);

//   return (
//     <Searchbar ingredients={ingredients} setIngredients={setIngredients} />
//   );
// };

// export default Ingredients;
import React from "react";

const Ingredients = () => {
  return <div>Ingredients</div>;
};

export default Ingredients;
