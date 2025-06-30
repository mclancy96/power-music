import { FormGroup } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import SearchResults from "./SearchResults";
import trackData from "./sample_responses/tracks.json";
import Button from "@mui/material/Button";

const Search = () => {
  // const apiUrl = process.env.REACT_APP_API_URL;
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const parseSearchResult = (response) => {

  // }
  const searchForSong = () => {
    // fetch(apiUrl)
    //   .then((r) => r.json())
    //   .then(parseSearchResult);
    setSearchResults(trackData);
  };
  return (
    <div>
      <h1>Search for Song</h1>
      <form onSubmit={searchForSong}>
        <FormGroup>
          <InputLabel>Enter Song Name</InputLabel>
          <Input
            type="text"
            required={true}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
      {searchResults.length > 0 && <SearchResults {...{ searchResults }} />}
    </div>
  );
};

export default Search;
