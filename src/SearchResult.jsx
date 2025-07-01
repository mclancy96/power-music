import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import FavoriteButton from "./FavoriteButton";
import PreviewButton from "./PreviewButton";

const SearchResult = ({
  searchResult,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
}) => {
  return (
    <TableRow>
      {/* make first one a link to the song detail page */}
      <TableCell>{searchResult.name}</TableCell>
      {/* make second one a link to the artist detail page */}
      <TableCell>{searchResult.artist_name}</TableCell>
      <TableCell>{searchResult.album_name}</TableCell>
      <TableCell>{searchResult.releasedate}</TableCell>
      <TableCell align="center">
        <PreviewButton {...{ track: searchResult }} />
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
