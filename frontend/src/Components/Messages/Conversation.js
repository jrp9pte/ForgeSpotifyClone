import { Box, Paper, Typography } from "@mui/material"
import React from "react"

function Conversation() {
	const testMessages = [
		{ user: "user1", text: "Hello!" },
		{ user: "user2", text: "Hey, how are you?" },
		{
			user: "user1",
			text: "IM GREAT!!! OMG DID YOU SEE THAT NEW TAYLOW SWIFT SONG",
		},
	]

	const displayMessages = testMessages.map((message) => {
		if (message.user === "user1") {
			return (
				<Paper maxWidth="200px" sx={{ justifySelf: "flex-end" }}>
					<Typography variant="body1">{message.text}</Typography>
				</Paper>
			)
		} else {
			return (
				<Paper maxWidth="200px" sx={{ justifySelf: "flex-start" }}>
					<Typography variant="body1">{message.text}</Typography>
				</Paper>
			)
		}
	})

    console.log(displayMessages)

	return (
		<Box sx={{ display: "flex", height: "400px", overflowY: "scroll" }}>
			{displayMessages}
		</Box>
	)
}

export default Conversation
