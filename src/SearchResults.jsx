import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchResult from "./SearchResult";

const SearchResults = ({ searchResults }) => {
  return (
    <>
      <h2>Results</h2>
      {searchResults.length <= 0 ? (
        "No Results to Show"
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Album</TableCell>
              <TableCell>Released</TableCell>
              <TableCell>Preview</TableCell>
              <TableCell>Favorite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((searchResult) => (
              <SearchResult key={searchResult.id} {...{ searchResult }} />
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default SearchResults;
