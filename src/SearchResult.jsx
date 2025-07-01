import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Play from "@mui/icons-material/PlayCircle";
import FavoriteButton from "./FavoriteButton";

const SearchResult = ({
  searchResult,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
}) => {
  return (
    <TableRow>
      <TableCell>
        <a href={`/tracks/${searchResult.id}`}>{searchResult.name}</a>
      </TableCell>
      <TableCell>{searchResult.artist_name}</TableCell>
      <TableCell>{searchResult.artist_name}</TableCell>
      <TableCell>{searchResult.album_name}</TableCell>
      <TableCell>{searchResult.releasedate}</TableCell>
      <TableCell align="center">
        <button>
          <Play /> preview
        </button>
      </TableCell>
      <TableCell align="center">
        <FavoriteButton
          {...{
            track: searchResult,
            favorites,
            onFavoriteButtonClick,
            isTrackInFavorites,
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default SearchResult;
