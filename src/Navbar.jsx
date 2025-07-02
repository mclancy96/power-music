import { NavLink as Link } from "react-router";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Cottage from "@mui/icons-material/Cottage";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const getCurrentPathIndex = (currentPathValue) => {
    switch (currentPathValue) {
      case "/favorites":
        return 3;
      case "/search":
        return 2;
      case "/":
        return 1;
      default:
        return 0;
    }
  };

  const [value, setValue] = useState(getCurrentPathIndex(currentPath));

  useEffect(() => {
    setValue(getCurrentPathIndex(currentPath));
  }, [currentPath]);

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          icon={
            <img
              src="/power_music_logo-transparent.png"
              alt="Power Music Logo"
              width="50px"
              height="50px"
            />
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<Cottage />}
        />
        <BottomNavigationAction
          component={Link}
          to="/search"
          label="Search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/favorites"
          label="Favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;
