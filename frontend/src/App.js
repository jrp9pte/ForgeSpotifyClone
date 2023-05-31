import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login.js"
import NavigationBar from "./Components/Navigation/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
