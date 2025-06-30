import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Play from "@mui/icons-material/PlayCircle";
import Heart from "@mui/icons-material/HeartBroken";

const SearchResult = ({ searchResult }) => {
  return (
    <TableRow>
      {/* make first one a link to the song detail page */}
      <TableCell>{searchResult.name}</TableCell>
      {/* make second one a link to the artist detail page */}
      <TableCell>{searchResult.artist_name}</TableCell>
      <TableCell>{searchResult.album_name}</TableCell>
      <TableCell>{searchResult.releasedate}</TableCell>
      <TableCell>
        <button>
          <Play /> preview
        </button>
      </TableCell>
      <TableCell>
        <button>
          <Heart />
          favorite
        </button>
      </TableCell>
    </TableRow>
  );
};

export default SearchResult;
