import { Button } from "@mui/material";
import Heart from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import EmptyHeart from "@mui/icons-material/FavoriteBorder";

const FavoriteButton = ({
  track,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
}) => {
  const [isFavorited, setIsFavorited] = useState(isTrackInFavorites(track));
  useEffect(() => {
    setIsFavorited(isTrackInFavorites(track));
  }, [favorites]);
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
