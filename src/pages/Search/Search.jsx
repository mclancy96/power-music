import { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchResults from "./SearchResults";
import SearchSort from "./SearchSort";

const Search = ({
  player,
  togglePlayer,
  queueTrackAndPlay,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
}) => {
  const apiBaseUrl = "https://api.jamendo.com/v3.0/tracks/";
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [sortMethod, setSortMethod] = useState("relevance");

  const parseSearchResult = (response) => {
    setSearchResults(response.results || []);
  };

  const updateSortMethodOnChange = (value) => {
    setSortMethod(value);
  };

  const searchForSong = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;

    const url = `${apiBaseUrl}?client_id=${
      process.env.REACT_APP_API_ID
    }&format=json&limit=20&namesearch=${encodeURIComponent(
      searchValue,
    )}&fullcount=true&order=${sortMethod}`;

    fetch(url)
      .then((r) => r.json())
      .then(parseSearchResult);
  };

  return (
    <div>
      <h1>Search for Song</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <SearchSort {...{ sortMethod, updateSortMethodOnChange }} />
        <form onSubmit={searchForSong} style={{ flexGrow: 1 }}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-search"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={searchValue.trim().length < 2}
                  >
                    Search
                  </Button>
                </InputAdornment>
              }
              label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              error={searchValue.trim().length === 1}
              helperText={
                searchValue.trim().length === 1
                  ? "Minimum 2 characters required"
                  : ""
              }
            />
          </FormControl>
        </form>
      </div>
      <hr />
      <SearchResults
        {...{
          searchResults,
          favorites,
          onFavoriteButtonClick,
          isTrackInFavorites,
          player,
          togglePlayer,
          queueTrackAndPlay,
          tableTitle: "Results",
        }}
      />
    </div>
  );
};

export default Search;
