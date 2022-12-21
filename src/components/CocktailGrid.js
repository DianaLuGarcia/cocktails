import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Button,
  createTheme,
  Collapse,
} from "@mui/material";
import useStyles from "./styles";
import { styled } from "@mui/material/styles";
// import ModalRecipe from "./ModalRecipe";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const theme = createTheme();

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const CocktailGrid = ({ cocktails }) => {
  const classes = useStyles(theme);

  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //loop through the ingredient and measure list
  const renderIngredients = (item) => {
    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (item[`strIngredient${i}`]) {
        ingredients.push(
          <p>{`${item[`strIngredient${i}`]} -
     ${item[`strMeasure${i}`]}`}</p>
        );
      }
    }
    return ingredients;
  };

  console.log(cocktails);
  return (
    <>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {cocktails.map((item, index) => (
            <Grid item key={item.idDrink} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  title={item.strDrink}
                  image={item.strDrinkThumb}
                />
                <CardContent className={classes.cardContent}>
                  <Typography align='left' gutterBottom variant='h6'>
                    {item.strDrink}
                  </Typography>
                </CardContent>

                <Button onClick={handleExpandClick}>
                  <ExpandMoreIcon />
                </Button>
                <Collapse in={!expanded}>
                  <div>
                    <p>Ingredients:</p>
                    {renderIngredients(item)}

                    <Typography>{item.strInstructions}</Typography>
                  </div>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CocktailGrid;
