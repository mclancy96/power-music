import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import FavoriteButton from "./FavoriteButton";
import PreviewButton from "./PreviewButton";

const SearchResult = ({
  searchResult,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
  player,
  togglePlayer,
  queueTrackAndPlay,
}) => {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formattedDuration = searchResult.duration && !isNaN(searchResult.duration)
    ? formatDuration(searchResult.duration)
    : searchResult.duration;
  return (
    <TableRow>
      <TableCell>
        <a href={`/tracks/${searchResult.id}`}>{searchResult.name}</a>
      </TableCell>
      <TableCell>{searchResult.artist_name}</TableCell>
      <TableCell>{searchResult.album_name}</TableCell>
      <TableCell>{searchResult.releasedate}</TableCell>
      <TableCell>{formattedDuration}</TableCell>
      <TableCell align="center">
        <PreviewButton
          {...{ track: searchResult, player, togglePlayer, queueTrackAndPlay }}
        />
      </TableCell>
      <TableCell align="center">
        <FavoriteButton
          {...{
            track: searchResult,
            favorites,
            onFavoriteButtonClick,
            isTrackInFavorites,
            player,
            togglePlayer,
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default SearchResult;
