import SearchResults from "./SearchResults";

const Favorites = ({
  player,
  togglePlayer,
  queueTrackAndPlay,
  favorites,
  onFavoriteButtonClick,
  isTrackInFavorites,
}) => {
  return (
    <div>
      <h1>Your Favorites</h1>
      <SearchResults
        {...{
          searchResults: favorites,
          favorites,
          onFavoriteButtonClick,
          isTrackInFavorites,
          player,
          togglePlayer,
          queueTrackAndPlay,
          tableTitle: "Favorites",
        }}
      />
    </div>
  );
};

export default Favorites;
