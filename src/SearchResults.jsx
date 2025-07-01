import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchResult from "./SearchResult";

const SearchResults = ({
  searchResults,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
  player,
  togglePlayer,
  queueTrackAndPlay,
}) => {
  return (
    <>
      <h2>Results</h2>
      {searchResults.length <= 0 ? (
        "No Results to Show"
      ) : (
        <div style={{ overflowX: "auto", maxWidth: "100%" }}>
          <Table
            sx={{
              width: "100%",
              margin: "0 auto",
              justifyContent: "center",
            }}
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Artist</TableCell>
                <TableCell align="center">Album</TableCell>
                <TableCell align="center">Released</TableCell>
                <TableCell align="center">Preview</TableCell>
                <TableCell align="center">Favorite</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.map((searchResult) => (
                <SearchResult
                  key={searchResult.id}
                  {...{
                    searchResult,
                    favorites,
                    onFavoriteButtonClick,
                    isTrackInFavorites,
                    player,
                    togglePlayer,
                    queueTrackAndPlay,
                  }}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default SearchResults;
