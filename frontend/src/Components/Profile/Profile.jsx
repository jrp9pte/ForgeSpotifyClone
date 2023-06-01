import { useContext, useReducer } from "react"
import "./profile.css"
import { Stack, IconButton, Typography, Box } from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"
import Settings from "./Settings"
import UserNameAndAvatar from "./UserNameAndAvatar"
import MyTopTracks from "../MyMusic/MyTopTracks"
import MyLikedSongs from "../MyMusic/MyLikedSongs"
import MyTopArtists from "../MyMusic/MyTopArtists"
import { UserContext } from "../Login/UserProvider"

function Profile() {
	const { user } = useContext(UserContext)

	const initialState = {
		showSettings: false,
		isPrivate: false,
		showTopSongs: true,
		showLikedSongs: true,
		showTopArtists: true,
	}
	const reducer = (state, action) => {
		switch (action.type) {
			case "toggleShowSettings":
				console.log(user)
				return { ...state, showSettings: !state.showSettings }
			case "toggleIsPrivate":
				return { ...state, isPrivate: !state.isPrivate }
			case "toggleShowTopSongs":
				return { ...state, showTopSongs: !state.showTopSongs }
			case "toggleShowLikedSongs":
				return { ...state, showLikedSongs: !state.showLikedSongs }
			case "toggleShowTopArtists":
				return { ...state, showTopArtists: !state.showTopArtists }
			default:
				return { ...state }
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<Box id="banner">
				<Stack direction="row" justifyContent="flex-end">
					<IconButton
						id="settingsButton"
						aria-label="settings"
						size="large"
						onClick={() => dispatch({ type: "toggleShowSettings" })}
					>
						<SettingsIcon fontSize="inherit" />
					</IconButton>
				</Stack>
				<UserNameAndAvatar />
			</Box>
			<Settings state={state} dispatch={(obj) => dispatch(obj)} />
			{/* {state.showTopArtists && (
				<>
					<Typography id="sectionHeader" variant="h4">
						My Top Artists
					</Typography>
					<MyTopArtists />
				</>
			)}
			{state.showTopSongs && (
				<>
					<Typography id="sectionHeader" variant="h4">
						My Top Tracks
					</Typography>
					<MyTopTracks />
				</>
			)}
			{state.showLikedSongs && (
				<>
					<Typography id="sectionHeader" variant="h4">
						My Liked Songs
					</Typography>
					<MyLikedSongs />
				</>
			)} */}
		</>
	)
}

export default Profile
