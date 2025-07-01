import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Search from "./Search";
import Home from "./Home";
import TrackDetails from "./TrackDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/tracks/:trackId" element={<TrackDetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

//https://api.jamendo.com/v3.0/radios/?client_id=your_client_id&format=jsonpretty&limit=3

export default App;
