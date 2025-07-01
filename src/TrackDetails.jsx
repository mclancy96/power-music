import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PreviewButton from "./PreviewButton";

const TrackDetails = ({ player, togglePlayer, queueTrackAndPlay }) => {
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
      ) : !track.name ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            margin: "3em",
            gap: 2,
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={imageStyle}
            height={300}
            animation="pulsate"
          />
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Skeleton
              variant="text"
              sx={{ fontSize: "2rem", mb: 2 }}
              animation="pulsate"
            />
            <List>
              {[...Array(4)].map((_, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={<Skeleton width="20%" animation="pulsate" />}
                    secondary={<Skeleton width="60%" animation="pulsate" />}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
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
            sx={{
              position: 'relative',
              width: { xs: "100%", md: "50%" },
              '&:hover .hover-content': {
                opacity: 1
              }
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
              alt="Track artwork"
              src={track.album_image}
            />
            <Box
              className="hover-content"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: 2,
                borderRadius: 1
              }}
            >
              <PreviewButton
                track={track}
                player={player}
                togglePlayer={togglePlayer}
                queueTrackAndPlay={queueTrackAndPlay}
              />
            </Box>
          </Box>
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
