import { FormGroup } from "@mui/material";
// import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import trackData from "./sample_responses/tracks.json";
import Button from "@mui/material/Button";

const Search = () => {
  // const apiUrl = process.env.REACT_APP_API_URL;
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/favorites")
      .then((r) => r.json())
      .then(setFavorites);
  }, [favorites]);
  // const parseSearchResult = (response) => {

  // }
  const searchForSong = (e) => {
    e.preventDefault();
    // fetch(apiUrl)
    //   .then((r) => r.json())
    //   .then(parseSearchResult);
    setSearchResults(trackData.results);
  };
  const onFavoriteButtonClick = (track) => {
    return fetch
  }
  return (
    <div>
      <h1>Search for Song</h1>
      <form onSubmit={searchForSong}>
        <FormGroup>
          <InputLabel>Enter Song Name</InputLabel>
          {/* <Input type="text" /> */}
          <input
            required
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
      <hr />
      <SearchResults {...{ searchResults, favorites, onFavoriteButtonClick }} />
    </div>
  );
};

export default Search;
