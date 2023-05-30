import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import NavigationBar from "./Components/Navigation/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
