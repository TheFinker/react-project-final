import { Box, CardActions, IconButton } from "@mui/material";
import React, {useContext} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserContext, useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardActionBar({
  handleCardLike,
  handleCardDelete,
  cardId,
  isFavorite,
  userId,
}) {
  const { user } = useUser();
  // const {user} = useContext(UserContext);
  const navigate = useNavigate();

  const handleCardEdit = (id) => {
    console.log("navigate to edit page for card " + id);
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === userId) ? (
          <>
            <IconButton onClick={() => handleCardDelete(cardId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleCardEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : null}
      </Box>

      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={() => handleCardLike(cardId,user)}>
          <FavoriteIcon sx={{ color: isFavorite ? 'red' : 'gray' }} />
        </IconButton>
      </Box>
    </CardActions>
  );
}
