import "./App.css";
import { Box } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Discussion from "./Components/Discussion/Discussion";
import NavigationBar from "./Components/Navigation/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Box sx={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
      <Discussion />
    </div>
  );
}

export default App;
