import { Box, Paper, Typography } from "@mui/material"
import React from "react"

function Conversation({user}) {
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
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						mr: "100px",
					}}
				>
					<Paper maxWidth="200px" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: "15px" }}>
						<Typography variant="h6">You:</Typography>
						<Typography variant="body1">{message.text}</Typography>
					</Paper>
				</Box>
			)
		} else {
			return (
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						ml: "100px",
					}}
				>
					<Paper maxWidth="200px" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: "15px" }}>
						<Typography variant="h6">{message.user + ":"}</Typography>
						<Typography variant="body1">{message.text}</Typography>
					</Paper>
				</Box>
			)
		}
	})

	console.log(displayMessages)

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "400px",
				overflowY: "scroll",
			}}
		>
			{displayMessages}
		</Box>
	)
}

export default Conversation
