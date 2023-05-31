import {
	Divider,
	Dialog,
	List,
	ListItem,
	Switch,
	Typography,
	Stack,
} from "@mui/material"

const switchStyle = {
	borderRadius: 2,
	"& .MuiSwitch-switchBase.Mui-checked": {
		color: "#BB623E",
	},
	"& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
		backgroundColor: "#D79F88",
	},
}

function Settings({ state, dispatch }) {
	const {
		showSettings,
		isPrivate,
		showTopSongs,
		showLikedSongs,
		showTopArtists,
	} = state

	console.log("showTopSongs", showTopSongs)
	return (
		<Dialog
			onClose={() => dispatch({ type: "toggleShowSettings" })}
			open={showSettings}
			maxWidth="lg"
			fullWidth
		>
			<Typography variant="h3" id="settingsLabel">
				Settings
			</Typography>
			<List>
				<ListItem>
					<Stack
						id="setting"
						direction="row"
						justifyContent="space-between"
						sx={{ width: "100%" }}
					>
						<Typography variant="h5">Private Profile</Typography>
						<Switch
							sx={switchStyle}
							checked={isPrivate}
							onChange={() =>
								dispatch({ type: "toggleIsPrivate" })
							}
						/>
					</Stack>
				</ListItem>
				<Divider variant="middle" id="settingsDivider" />
				<ListItem>
					<Stack
						id="setting"
						direction="row"
						justifyContent="space-between"
						sx={{ width: "100%" }}
					>
						<Typography variant="h5">Display Top Songs</Typography>
						<Switch
							sx={switchStyle}
							checked={showTopSongs}
							onChange={() =>
								dispatch({ type: "toggleShowTopSongs" })
							}
						/>
					</Stack>
				</ListItem>
				<Divider variant="middle" id="settingsDivider" />
				<ListItem>
					<Stack
						id="setting"
						direction="row"
						justifyContent="space-between"
						sx={{ width: "100%" }}
					>
						<Typography variant="h5">
							Display Liked Songs
						</Typography>
						<Switch
							sx={switchStyle}
							checked={showLikedSongs}
							onChange={() =>
								dispatch({ type: "toggleShowLikedSongs" })
							}
						/>
					</Stack>
				</ListItem>
				<Divider variant="middle" id="settingsDivider" />
				<ListItem>
					<Stack
						id="setting"
						direction="row"
						justifyContent="space-between"
						sx={{ width: "100%" }}
					>
						<Typography variant="h5">
							Display Top Artists
						</Typography>
						<Switch
							sx={switchStyle}
							checked={showTopArtists}
							onChange={() =>
								dispatch({ type: "toggleShowTopArtists" })
							}
						/>
					</Stack>
				</ListItem>
			</List>
		</Dialog>
	)
}

export default Settings
