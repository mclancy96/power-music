import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchResults from "./SearchResults";
import SearchSort from "./SearchSort";

const Search = ({ player, togglePlayer, queueTrackAndPlay }) => {
  const apiBaseUrl = "https://api.jamendo.com/v3.0/tracks/";
  const favoriteUrl = "http://localhost:3001/favorites/";
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sortMethod, setSortMethod] = useState("relevance");

  const isTrackInFavorites = (track) => {
    return favorites.find((fave) => fave.track_id === track.id);
  };
  useEffect(() => {
    fetch(favoriteUrl)
      .then((r) => r.json())
      .then(setFavorites);
  }, []);
  const onFavoriteButtonClick = (track) => {
    const foundTrackFavorite = isTrackInFavorites(track);
    foundTrackFavorite
      ? deleteTrackFromFavorites(foundTrackFavorite)
      : addTrackToFavorites(track);
  };

  const deleteTrackFromFavorites = (favorite) => {
    fetch(favoriteUrl + favorite.id, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        setFavorites((faves) =>
          faves.filter((fave) => fave.id !== favorite.id),
        );
      })
      .catch(() => {
        return false;
      });
  };

  const addTrackToFavorites = (track) => {
    fetch(favoriteUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        track_id: track.id,
        title: track.name,
        artist_name: track.artist_name,
        audio_url: track.audio,
        image_url: track.image,
      }),
    })
      .then((r) => r.json())
      .then((returnedTrack) => {
        setFavorites((faves) => [...faves, returnedTrack]);
      })
      .catch(() => {
        return false;
      });
  };

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
      <SearchSort {...{ sortMethod, updateSortMethodOnChange }} />
      <form onSubmit={searchForSong}>
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
        }}
      />
    </div>
  );
};

export default Search;
