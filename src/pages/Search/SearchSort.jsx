import { Select, MenuItem } from "@mui/material";

const SearchSort = ({ sortMethod, updateSortMethodOnChange }) => {
  const handleSortChange = (e) => {
    updateSortMethodOnChange(e.target.value);
  };
  return (
    <div className="search-sort">
      <label htmlFor="sort-select">Order By: </label>
      <Select id="sort-select" value={sortMethod} onChange={handleSortChange}>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="buzzrate">Buzz Rate</MenuItem>
        <MenuItem value="downloads_week">Downloads (Week)</MenuItem>
        <MenuItem value="downloads_month">Downloads (Month)</MenuItem>
        <MenuItem value="downloads_total">Downloads (Total)</MenuItem>
        <MenuItem value="listens_week">Listens (Week)</MenuItem>
        <MenuItem value="listens_month">Listens (Month)</MenuItem>
        <MenuItem value="listens_total">Listens (Total)</MenuItem>
        <MenuItem value="popularity_week">Popularity (Week)</MenuItem>
        <MenuItem value="popularity_month">Popularity (Month)</MenuItem>
        <MenuItem value="popularity_total">Popularity (Total)</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="album_name">Album Name</MenuItem>
        <MenuItem value="artist_name">Artist Name</MenuItem>
        <MenuItem value="releasedate">Release Date</MenuItem>
        <MenuItem value="duration">Duration</MenuItem>
        <MenuItem value="id">ID</MenuItem>
      </Select>
    </div>
  );
};
export default SearchSort;
