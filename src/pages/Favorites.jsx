import SearchResults from "./Search/SearchResults";

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
      <p>
        Below are your favorite tracks. If you'd like to remove a favorite,
        click the heart icon, and it will be removed. You will have to search
        for the track again to add it back, so be sure you want to remove it
        before you do.
      </p>
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
