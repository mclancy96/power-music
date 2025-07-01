import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Play from "@mui/icons-material/PlayCircle";
import FavoriteButton from "./FavoriteButton";

const SearchResult = ({ searchResult, favorites, onFavoriteButtonClick }) => {
  return (
    <TableRow>
      {/* make first one a link to the song detail page */}
      <TableCell>{searchResult.name}</TableCell>
      {/* make second one a link to the artist detail page */}
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
          {...{ track: searchResult, favorites, onFavoriteButtonClick }}
        />
      </TableCell>
    </TableRow>
  );
};

export default SearchResult;
