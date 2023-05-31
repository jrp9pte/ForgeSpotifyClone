import { useReducer } from "react";
import "./profile.css";
import { Stack, Box, IconButton, Avatar, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Settings from "./Settings";

function Profile() {
	const initialState = {showSettings: false, isPrivate: false, showTopSongs: true, showLikedSongs: true, showTopArtists: true}
	const reducer = (state, action) => {
		switch(action.type) {
			case "toggleShowSettings":
				return {...state, showSettings: !state.showSettings}
			case "toggleIsPrivate":
				return {...state, isPrivate: !state.isPrivate}
			case "toggleShowTopSongs":
				return {...state, showTopSongs: !state.showTopSongs}
			case "toggleShowLikedSongs":
				return {...state, showLikedSongs: !state.showLikedSongs}
			case "toggleShowTopArtists":
				return {...state, showTopArtists: !state.showTopArtists}
			default:
				return {...state}
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<Stack direction="row" alignItems="flex-end">
				<Box sx={{ flexGrow: 1 }} />
				<IconButton
					id="settingsButton"
					aria-label="settings"
					size="large"
					onClick={() => dispatch({ type: "toggleShowSettings" })}
				>
					<SettingsIcon fontSize="inherit" />
				</IconButton>
			</Stack>
			<Stack direction="row">
				<Avatar id="userAvatar" />
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="start"
				>
					<Typography id="profileLabel" variant="h6">
						Profile
					</Typography>
					<Typography id="usernameLabel" variant="h3">
						Username
					</Typography>
				</Stack>
			</Stack>
			<Settings state={state} dispatch={(obj) => dispatch(obj)} />
		</>
	);
}

export default Profile;
