async function getDrinkIngredients(id) {
  let response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  let data = await response.json();
  // Number of drinks in API
  let drinkLength = Object.keys(data.drinks).length;
  // Empty object and array to store drink name and ingredients
  var formattedDrink = {};
  var drinkIngredients = [];
  // Iterating through each drink to get drinkID and name
  for (var i = 0; i < drinkLength; i++) {
    var drinkID = JSON.stringify(data.drinks[i].idDrink);
    var drinkName = JSON.stringify(data.drinks[i].strDrink);
    // Iterating though each drink to find ingredients
    for (var t = 1; t <= 13; t++) {
      var ingredient = JSON.stringify(data.drinks[i]["strIngredient" + t]);
      // filtering out empty ingredients
      if (ingredient !== "null") {
        // Check list of drinks for specified drink ID then adding to formatted drink object
        if ('"' + id + '"' == drinkID) {
          formattedDrink.name = drinkName;
          drinkIngredients.push(ingredient);
        }
      }
    }
    formattedDrink.ingredients = drinkIngredients;
  }
  // Converting drink object into string
  var drink = JSON.stringify(formattedDrink);
  return drink;
}
// Calling function with specific drink ID and using jquery to pass to index.html
getDrinkIngredients("11872").then((data) => `${"p"}`.text(data));
