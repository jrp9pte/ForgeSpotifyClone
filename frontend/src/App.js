import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login.js"
import NavigationBar from "./Components/Navigation/NavigationBar";
import SignUp from "./Components/SignUp/Signup";
import UserAccountCreation from "./Components/SignUp/UserAccountCreation"
import TopArtists from "./Components/Discover/topArtists";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/accountcreation" element={<UserAccountCreation />} />
        </Routes>
        {/* <TopArtists></TopArtists> */}
    </div>
  );
}

export default App;
