import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  createTheme,
} from "@mui/material";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();
const CocktailGrid = ({ data, cocktails, setCocktails }) => {
  const classes = useStyles(theme);
  return (
    <>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  title='item.strDrink image'
                  image='https://source.unsplash.com/random'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h6'>
                    item.strDrink
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    Recipe
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CocktailGrid;
