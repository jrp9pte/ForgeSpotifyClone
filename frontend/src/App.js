import "./App.css";
import { Box } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import NavigationBar from "./Components/Navigation/NavigationBar";
import TopArtists from "./Components/Discover/topArtists";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Box sx={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/profile" element={<Profile />} />          
        </Routes>
        <TopArtists></TopArtists>
      </Box>
    </div>
  );
}

export default App;
