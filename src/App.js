import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Search from "./Search";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState({
    track: {},
    audio: {},
    isPlaying: false,
  });
  const playSong = () => {
    if (player.track.audio) {
      const audio = new Audio(player.track.audio);
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
      setPlayer((player) => ({ ...player, isPlaying: false, audio: {} }));
    } else {
      console.log("No preview available for this track");
    }
  };
  const togglePlayer = () => {
    if (player.isPlaying) pauseSong();
    else playSong();
  };
  const queueTrack = (track) => {
    if (player.isPlaying) pauseSong();

    return new Promise((resolve) => {
      setPlayer((prevPlayer) => {
        const newPlayerState = { ...prevPlayer, track };
        setTimeout(() => resolve(newPlayerState), 0);
        return newPlayerState;
      });
    });
  };
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Routes>
            <Route
              path="/search"
              element={<Search {...{ player, togglePlayer, queueTrack }} />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

//https://api.jamendo.com/v3.0/radios/?client_id=your_client_id&format=jsonpretty&limit=3

export default App;
