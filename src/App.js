import Container from "@mui/material/Container";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Container>
//           <Switch>
//             {/* <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/users">
//               <Users />
//             </Route> */}
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </Container>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Container>
      <h1>Welcome to Power Music</h1>
    </Container>
  );
}

//https://api.jamendo.com/v3.0/radios/?client_id=your_client_id&format=jsonpretty&limit=3

export default App;
