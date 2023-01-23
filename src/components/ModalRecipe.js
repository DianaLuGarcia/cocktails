import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CocktailGrid from "./CocktailGrid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-30%, -30%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalRecipe = ({ cocktails }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log("Modal", cocktails);
  return (
    <div>
      <Button size='small' color='primary' onClick={handleOpen}>
        Recipe
      </Button>
      <Modal
        align='center'
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* {cocktails.map((item, index) => ( */}
        <Fade in={open}>
          <Box sx={style}>
            <img
              src='https://source.unsplash.com/random'
              alt=''
              width='350'
              height='450'
              align='center'
            />
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              item.strDrink strIngredients
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              strInstructions
            </Typography>
          </Box>
        </Fade>
        {/* // ))} */}
      </Modal>
    </div>
  );
};

export default ModalRecipe;
