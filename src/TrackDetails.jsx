import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const TrackDetails = () => {
  const [track, setTrack] = useState({});
  const { trackId } = useParams();

  useEffect(() => {
    if (trackId) {
      fetch(
        `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_API_ID}&format=jsonpretty&limit=1&id=${trackId}`,
      )
        .then((response) => response.json())
        .then((data) => setTrack(data.results[0]))
        .catch((error) => console.error("Error fetching track:", error));
    }
  }, []);
  const imageStyle = {
    width: "100%",
    height: "auto",
    maxWidth: { xs: "100%", md: "50%" },
  };

  return (
    <Container>
      {track === undefined ? (
        <h2>Track Not Found!</h2>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            margin: "3em",
            gap: 2,
          }}
        >
          <Box
            component="img"
            sx={imageStyle}
            alt="Track artwork"
            src={track.album_image}
          />
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h4" gutterBottom>
              {track.name}
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Artist" secondary={track.artist_name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Album" secondary={track.album_name} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Release Date"
                  secondary={track.releasedate}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Duration" secondary={track.duration} />
              </ListItem>
            </List>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default TrackDetails;
