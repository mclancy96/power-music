import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import FavoriteButton from "../../components/FavoriteButton";
import PreviewButton from "../../components/PreviewButton";
import { formatDuration } from "../../helpers/formatters";
import { Link } from "react-router-dom";

const SearchResult = ({
  searchResult,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
  player,
  togglePlayer,
  queueTrackAndPlay,
}) => {
  const formattedDuration =
    searchResult.duration && !isNaN(searchResult.duration)
      ? formatDuration(searchResult.duration)
      : searchResult.duration;
  return (
    <TableRow>
      <TableCell>
        <Link
          to={`/tracks/${
            searchResult.track_id ? searchResult.track_id : searchResult.id
          }`}
        >
          {searchResult.name}
        </Link>
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
