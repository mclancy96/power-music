import { PlayArrow, PlayDisabled, Pause } from "@mui/icons-material";
import { Button } from "@mui/material";

const PreviewButton = ({ track, player, togglePlayer, queueTrackAndPlay }) => {
  const handleClick = () => {
    if (player.track && player.track.id !== track.id) {
      queueTrackAndPlay(track);
    } else {
      togglePlayer();
    }
  };
  return (
    <div>
      {track.audio ? (
        <Button onClick={handleClick} variant="outlined">
          {player.isPlaying && player.track.id === track.id ? (
            <Pause />
          ) : (
            <PlayArrow />
          )}
        </Button>
      ) : (
        <Button disabled={true} variant="outlined">
          <PlayDisabled />
        </Button>
      )}
    </div>
  );
};

export default PreviewButton;
