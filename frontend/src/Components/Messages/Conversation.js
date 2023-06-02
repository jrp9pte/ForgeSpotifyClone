import { Box, Paper, Typography } from "@mui/material"
import React from "react"

function Conversation({ user }) {
	const testMessages = [
		{ user: "user1", text: "Hello!" },
		{ user: "user2", text: "Hey, how are you?" },
		{
			user: "user1",
			text: "IM GREAT!!! DID YOU SEE THAT NEW TAYLOW SWIFT SONG",
		},
		{ user: "user2", text: "Yeah it was pretty cool" },
		{ user: "user1", text: "I've heard her concerts are amazing" },
		{ user: "user2", text: "No way that sounds so fun" },
		{ user: "user1", text: "I really like her music. I think a lot of people underappreciate it and she should definitiely get more recognition for the emounf of thought she puts into her songs" },
		{ user: "user2", text: "Yeah I definitely agree" },
		{ user: "user1", text: "IKR" },
		{ user: "user2", text: "I also really like Katy Perry I wish she had more songs to listen to" },
		{ user: "user1", text: "She's a really good artist too" },
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
							maxWidth: "30vw",
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
							maxWidth: "30vw",
						}}
					>
						<Typography variant="h6">{"RichyLeeeeee:"}</Typography>
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
