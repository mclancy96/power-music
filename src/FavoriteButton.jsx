import { Button } from "@mui/material";
import Heart from "@mui/icons-material/HeartBroken";

const FavoriteButton = ({ track }) => {
  const addToFavorites = () => {
    console.log("Added", track.name, "to favorites");
  };
  return (
    <div onClick={() => addToFavorites()}>
      <Button>
        <Heart />
      </Button>
    </div>
  );
};

export default FavoriteButton;

