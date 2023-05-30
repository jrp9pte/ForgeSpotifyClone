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
      <TopArtists></TopArtists>
      <Box sx={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<TopArtists/>} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
