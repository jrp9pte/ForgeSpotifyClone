import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login.js";
import NavigationBar from "./Components/Navigation/NavigationBar";
import Discover from "./Components/Discover/Discover";
import MyMusic from "./Components/MyMusic/MyMusic";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-music" element={<MyMusic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
