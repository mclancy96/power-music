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
  return (
    <TableRow>
      <TableCell>
        <a href={`/tracks/${searchResult.id}`}>{searchResult.name}</a>
      </TableCell>
      <TableCell>{searchResult.artist_name}</TableCell>
      <TableCell>{searchResult.album_name}</TableCell>
      <TableCell>{searchResult.releasedate}</TableCell>
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
