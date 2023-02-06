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
  CardActions,
} from "@mui/material";
import useStyles from "./styles";
import { styled } from "@mui/material/styles";
// import ModalRecipe from "./ModalRecipe";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const theme = createTheme();

//expand more animation
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CocktailGrid = ({ cocktails, setCocktails }) => {
  const classes = useStyles(theme);
  const [expanded, setExpanded] = React.useState(-1);
  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  //loop through the ingredient and measure list
  const renderIngredients = (item) => {
    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (item[`strIngredient${i}`]) {
        ingredients.push(
          <Typography
            key={Date.now()}
            className={classes.typography}
            lineHeight='1.0'
          >{`${item[`strIngredient${i}`]} -
     ${item[`strMeasure${i}`]}`}</Typography>
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {cocktails.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  title={item.strDrink}
                  image={item.strDrinkThumb}
                  loading='lazy'
                />
                <CardContent
                  className={classes.cardContent}
                  sx={{
                    padding: "4px",
                    paddingBottom: "4px",
                    color: "#303031",
                  }}
                >
                  <Container
                    className={classes.strTitleContainer}
                    backgroundcolor='7B8FA1'
                  >
                    <Typography align='center' gutterBottom variant='h6'>
                      {item.strDrink}
                    </Typography>
                  </Container>
                  <CardActions sx={{ padding: "2px" }}>
                    <ExpandMore
                      expand={expanded}
                      onClick={() => handleExpandClick(item)}
                      aria-expanded={expanded === item}
                      aria-label='show more'
                    >
                      <MoreHorizIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded === item} timeout='auto' unmountOnExit>
                    <div>
                      <Typography
                        className={classes.typography}
                        fontWeight='bold'
                        fontHeight='normal'
                      >
                        Ingredients:
                      </Typography>
                      {renderIngredients(item)}
                      <Typography
                        className={classes.typography}
                        fontWeight='bold'
                        fontHeight='normal'
                        // marginTop='1rem'
                        // marginBottom='1rem'
                      >
                        {" "}
                        Instructions:
                      </Typography>
                      <Typography className={classes.typography}>
                        {item.strInstructions}
                      </Typography>
                    </div>
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CocktailGrid;
