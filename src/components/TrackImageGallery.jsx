import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import PreviewButton from "./PreviewButton";
import FavoriteButton from "./FavoriteButton";

const TrackImageGallery = ({
  topTracks,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
  player,
  togglePlayer,
  queueTrackAndPlay,
}) => {
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
      {topTracks.map((track) => (
        <ImageListItem key={track.id}>
          <img
            srcSet={`${track.album_image}`}
            src={`${track.album_image}`}
            alt={track.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={track.name}
            subtitle={track.artist_name}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${track.name}`}
              >
                <PreviewButton
                  {...{ track, player, togglePlayer, queueTrackAndPlay }}
                />
                <FavoriteButton
                  {...{
                    track,
                    favorites,
                    onFavoriteButtonClick,
                    isTrackInFavorites,
                  }}
                />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default TrackImageGallery;
