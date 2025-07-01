import { Button } from "@mui/material";
import Heart from "@mui/icons-material/Favorite";
import { useState } from "react";
import EmptyHeart from "@mui/icons-material/FavoriteBorder";

const FavoriteButton = ({ track, favorites, onFavoriteButtonClick }) => {
  const isTrackInFavorites = (track) => {
    return favorites.some((fave) => fave.track_id === track.id);
  };
  const [isFavorited, setIsFavorited] = useState(isTrackInFavorites(track));
  return (
    <div
      onClick={() => {
        if (onFavoriteButtonClick(track)) {
          setIsFavorited(!isFavorited);
        }
      }}
    >
      <Button>{isFavorited ? <Heart /> : <EmptyHeart />}</Button>
    </div>
  );
};

export default FavoriteButton;
