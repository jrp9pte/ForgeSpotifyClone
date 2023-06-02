import "./App.css"
import { Routes, Route } from "react-router-dom"
import Profile from "./Components/Profile/Profile"
import Login from "./Components/Login/Login.js"
import NavigationBar from "./Components/Navigation/NavigationBar"
import SignUp from "./Components/SignUp/Signup"
import UserAccountCreation from "./Components/SignUp/UserAccountCreation"
import TopArtists from "./Components/Discover/topArtists"
import Discover from "./Components/Discover/Discover"
import MyMusic from "./Components/MyMusic/MyMusic"
import UserProvider from "./Components/Login/UserProvider"

function App() {
	return (
		<UserProvider>
			<div className="App">
				<NavigationBar></NavigationBar>
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/my-music" element={<MyMusic />} />
					<Route path="/" element={<Login />} />
					<Route path="/discover" element={<Discover />} />
					<Route path="/signup" element={<SignUp />} />
					<Route
						path="/accountcreation"
						element={<UserAccountCreation />}
					/>
				</Routes>
				{/* <TopArtists></TopArtists> */}
			</div>
		</UserProvider>
	)
}

export default App
