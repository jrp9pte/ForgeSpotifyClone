import React, { useState } from "react"
import Users from "./Users"
import TopArtists from "./topArtists"
import NewReleases from "./newReleases"
import Discussion from "../Discussion/Discussion"
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material"
import Messages from "../Messages/Messages"

const Discover = () => {
	const [showMessages, setShowMessages] = useState(false)

	return (
		<div>
			<h1>Discover</h1>
			<h2>Users</h2>
			<Users />
			<h2>New Releases</h2>
			<NewReleases />

			<Box>
				<ToggleButtonGroup exclusive>
					<ToggleButton selected={!showMessages} onClick={() => setShowMessages(false)}>Forums</ToggleButton>
					<ToggleButton selected={showMessages} onClick={() => setShowMessages(true)}>Messages</ToggleButton>
				</ToggleButtonGroup>
				{showMessages ? <Messages /> : <Discussion />}
			</Box>
		</div>
	)
}

export default Discover
