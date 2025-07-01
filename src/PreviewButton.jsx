import { PlayArrow } from "@mui/icons-material";
import { Button } from "@mui/material";

const PreviewButton = ({ track }) => {
  const playSong = () => {
    console.log("Playing", track.name);
  };
  return (
    <div>
      <Button onClick={playSong}>
        <PlayArrow />
      </Button>
    </div>
  );
};

export default PreviewButton;
