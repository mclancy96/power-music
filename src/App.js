import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Search from "./pages/Search/Search";
import Home from "./pages/Home";
import TrackDetails from "./pages/TrackDetails";
import { useState, useEffect } from "react";
import Favorites from "./pages/Favorites";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { blue, red } from "@mui/material/colors";
import {
  Box,
  GlobalStyles,
  Container,
  CssBaseline,
  IconButton,
} from "@mui/material";

function App() {
  const [player, setPlayer] = useState({
    track: {},
    audio: {},
    isPlaying: false,
  });
  const [shouldPlay, setShouldPlay] = useState(false);
  const favoriteUrl = process.env.REACT_APP_DB_URL + "favorites/";
  const [favorites, setFavorites] = useState([]);
  const [mode, setMode] = useState("light");
  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: red[500],
      },
      tertiary: {
        main: "#FFA500",
      },
      mode,
    },
  });
  const isTrackInFavorites = (track) => {
    return favorites.find(
      (fave) => fave.track_id === track.id || fave.id === track.id,
    );
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
          faves.filter(
            (fave) => fave.track_id !== favorite.id && fave.id !== favorite.id,
          ),
        );
      })
      .catch(() => {
        return false;
      });
  };

  const formatFavoriteBody = ({
    id,
    name,
    duration,
    artist_name,
    album_name,
    releasedate,
    album_image,
    audio,
    shareurl,
    image,
  }) => ({
    track_id: id,
    name,
    duration,
    artist_name,
    album_name,
    releasedate,
    album_image,
    audio,
    shareurl,
    image,
  });

  const addTrackToFavorites = (track) => {
    fetch(favoriteUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formatFavoriteBody(track)),
    })
      .then((r) => r.json())
      .then((returnedTrack) => {
        setFavorites((faves) => [...faves, returnedTrack]);
      })
      .catch(() => {
        return false;
      });
  };

  useEffect(() => {
    if (shouldPlay && player.track.audio) {
      playSong();
      setShouldPlay(false);
    }
  }, [player.track, shouldPlay]);

  const playSong = () => {
    if (player.track.audio) {
      let audio = player.audio;
      if (!audio.paused) {
        audio = new Audio(player.track.audio);
      }

      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setPlayer((player) => ({ ...player, isPlaying: true, audio }));
    } else {
      console.log("No preview available for this track");
    }
  };

  const pauseSong = () => {
    if (player.audio && typeof player.audio.pause === "function") {
      player.audio.pause();
      setPlayer((player) => ({ ...player, isPlaying: false }));
    } else {
      console.log("No preview available for this track");
    }
  };
  const togglePlayer = () => {
    if (player.isPlaying) pauseSong();
    else playSong();
  };

  const queueTrackAndPlay = (track) => {
    if (player.isPlaying) pauseSong();
    setPlayer((prevPlayer) => ({ ...prevPlayer, track, audio: {} }));
    setShouldPlay(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          a: {
            color:
              theme.palette.mode === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.main,
            textDecoration: "none",
          },
          "a:hover": {
            textDecoration: "underline",
          },
        })}
      />
      <Router>
        <div>
          <Navbar />
          <Box sx={{ position: "fixed", top: 16, right: 16, zIndex: 1301 }}>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Container>
            <Routes>
              <Route
                path="/tracks/:trackId"
                element={
                  <TrackDetails
                    {...{ player, togglePlayer, queueTrackAndPlay }}
                  />
                }
              />
              <Route
                path="/favorites"
                element={
                  <Favorites
                    {...{
                      player,
                      togglePlayer,
                      queueTrackAndPlay,
                      favorites,
                      onFavoriteButtonClick,
                      isTrackInFavorites,
                    }}
                  />
                }
              />
              <Route
                path="/search"
                element={
                  <Search
                    {...{
                      player,
                      togglePlayer,
                      queueTrackAndPlay,
                      favorites,
                      onFavoriteButtonClick,
                      isTrackInFavorites,
                    }}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <Home
                    {...{
                      player,
                      togglePlayer,
                      queueTrackAndPlay,
                      favorites,
                      onFavoriteButtonClick,
                      isTrackInFavorites,
                    }}
                  />
                }
              />
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
