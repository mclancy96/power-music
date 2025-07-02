import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Cottage from "@mui/icons-material/Cottage";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/power_music_logo-transparent.png"
            alt="Power Music Logo"
            width="50px"
            height="50px"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Courier, monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            POWER MUSIC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <RouterLink
                  to={"/"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography sx={{ textAlign: "center" }}>Home</Typography>
                </RouterLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <RouterLink
                  to={"/search"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography sx={{ textAlign: "center" }}>Search</Typography>
                </RouterLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <RouterLink
                  to={"/favorites"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  <Typography sx={{ textAlign: "center" }}>
                    Favorites
                  </Typography>
                </RouterLink>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Courier, monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            POWER MUSIC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={RouterLink}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Cottage sx={{ mr: 1 }} />
                <span>Home</span>
              </Box>
            </Button>
            <Button
              component={RouterLink}
              to="/search"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SearchIcon sx={{ mr: 1 }} />
                <span>Search</span>
              </Box>
            </Button>
            <Button
              component={RouterLink}
              to="/favorites"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FavoriteIcon sx={{ mr: 1 }} />
                <span>Favorites</span>
              </Box>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
