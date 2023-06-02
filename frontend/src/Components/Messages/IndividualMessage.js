import React, { useState } from "react"
import { Box, IconButton, TextField, Typography } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import SendIcon from "@mui/icons-material/Send"
import Conversation from "./Conversation"

function IndividualMessage({ user, switchToAllMessages }) {
	const [newMessage, setNewMessage] = useState("")

	return (
		<Box
			fullWidth
			backgroundColor="white"
			sx={{
				height: "450px",
				borderStyle: "solid",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					px: "15px",
					py: "10px",
				}}
			>
				<IconButton
					style={{ justifySelf: "flex-start" }}
					onClick={() => switchToAllMessages()}
				>
					<ArrowBackIosNewIcon />
				</IconButton>
				<Typography variant="h6">{user}</Typography>
			</Box>
			<Conversation user={user} />
			<Box
				fullWidth
				pt="10px"
				mt="20px"
				mx="calc(50px + 1vw)"
				sx={{ backgroundColor: "white" }}
			>
				<TextField
					sx={{ width: "80%" }}
					variant="standard"
					onChange={(e) => setNewMessage(e.target.value)}
					placeholder="Enter a Message"
				/>
				<IconButton>
					<SendIcon />
				</IconButton>
			</Box>
		</Box>
	)
}

export default IndividualMessage
