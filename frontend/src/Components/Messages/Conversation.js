import { Box, Paper, Typography } from "@mui/material"
import React from "react"

function Conversation({ user }) {
	const testMessages = [
		{ user: "user1", text: "Hello!" },
		{ user: "user2", text: "Hey, how are you?" },
		{
			user: "user1",
			text: "IM GREAT!!! OMG DID YOU SEE THAT NEW TAYLOW SWIFT SONG",
		},
		{ user: "user2", text: "thats so cool idrc" },
		{ user: "user1", text: "thats so cool idrc" },
		{ user: "user2", text: "thats so cool idrc" },
		{ user: "user1", text: "thats so cool idrc" },
		{ user: "user2", text: "thats so cool idrc" },
		{ user: "user1", text: "thats so cool idrc" },
		{ user: "user2", text: "thats so cool idrc" },
		{ user: "user1", text: "thats so cool idrc" },
	]

	const displayMessages = testMessages.map((message) => {
		if (message.user === "user1") {
			return (
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						mr: "calc(50px + 1vw)",
					}}
				>
					<Paper
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							p: "15px",
							maxWidth: "40vw",
							backgroundColor: "#D79F88",
						}}
					>
						<Typography variant="h6">You:</Typography>
						<Typography variant="body1" align="left">
							{message.text}
						</Typography>
					</Paper>
				</Box>
			)
		} else {
			return (
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						ml: "calc(50px + 1vw)",
					}}
				>
					<Paper
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							p: "15px",
							maxWidth: "40vw",
						}}
					>
						<Typography variant="h6">{user + ":"}</Typography>
						<Typography variant="body1" align="left">
							{message.text}
						</Typography>
					</Paper>
				</Box>
			)
		}
	})

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "300px",
				overflowY: "scroll",
			}}
		>
			{displayMessages}
		</Box>
	)
}

export default Conversation
