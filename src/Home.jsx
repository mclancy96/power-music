import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

const Home = ({
  player,
  togglePlayer,
  queueTrackAndPlay,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
}) => {
  const [topTracks, setTopTracks] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_API_ID}&format=json&limit=10&fullcount=true&order=listens_week_desc`,
    )
      .then((r) => r.json())
      .then((response) => setTopTracks(response.results || []));
  }, []);
  return (
    <div>
      <h1>Welcome to Power Music</h1>
      <p>
        This is your one stop shop for all things Independent Artists. Use our
        search feature to find popular independent music!
      </p>
      <hr />
      <SearchResults
        {...{
          searchResults: topTracks,
          favorites,
          onFavoriteButtonClick,
          isTrackInFavorites,
          player,
          togglePlayer,
          queueTrackAndPlay,
          tableTitle: "This Week's Top Hits",
        }}
      />
    </div>
  );
};

export default Home;
