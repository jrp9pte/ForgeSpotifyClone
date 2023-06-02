import React, { useState } from "react"
import Users from "./Users"
import TopArtists from "./topArtists"
import NewReleases from "./newReleases"
import Discussion from "../Discussion/Discussion"
import { Box, Container, ToggleButton, ToggleButtonGroup } from "@mui/material"
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

			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						mt: "80px",
					}}
				>
					<ToggleButtonGroup
						square
						exclusive
						sx={{ pl: "30px", backgrounColor: "#BB623E" }}
					>
						<ToggleButton
							selected={!showMessages}
							onClick={() => setShowMessages(false)}
							square
							sx={{
								"&.Mui-selected, &.Mui-selected:hover": {
									color: "white",
									backgroundColor: "#BB623E",
									borderWidth: "0px",
								},
							}}
						>
							Forums
						</ToggleButton>
						<ToggleButton
							selected={showMessages}
							onClick={() => setShowMessages(true)}
							sx={{
								"&.Mui-selected, &.Mui-selected:hover": {
									color: "white",
									backgroundColor: "#BB623E",
									borderWidth: "0px",
								},
							}}
						>
							Messages
						</ToggleButton>
					</ToggleButtonGroup>
				</Box>
				{showMessages ? <Messages /> : <Discussion />}
			</Container>
		</div>
	)
}

export default Discover
