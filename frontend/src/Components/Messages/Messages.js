import {
	Button,
	ButtonGroup,
	Container,
	Typography,
	Box,
	IconButton,
} from "@mui/material"
import React, { useState } from "react"
import IndividualMessage from "./IndividualMessage"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

function Messages() {
	const users = [
		"Anisha",
		"Jay",
		"Richard",
		"Zaid",
		"Test",
		"Test",
		"Test",
		"Test",
		"Test",
		"Test",
		"Test",
	]
	const [displayAllUsers, setDisplayAllUsers] = useState(true)
	const [userToMessage, setUserToMessage] = useState("")

	const switchToUserMessage = (user) => {
		setDisplayAllUsers(false)
		setUserToMessage(user)
	}

	const buttons = users.map((user) => {
		return (
			<Button
				sx={{
					justifyContent: "space-between",
					paddingTop: "20px",
					paddingBottom: "20px",
					borderColor: "#BB623E",
					color: "#BB623E",
					backgroundColor: "#E8F3F7",
					"&:hover": {
						color: "#e4eef6",
						backgroundColor: "#bb623e",
						borderColor: "#bb623e",
					},
				}}
				endIcon={<ArrowForwardIosIcon />}
				onClick={() => switchToUserMessage(user)}
			>
				{user}
			</Button>
		)
	})

	return (
		<>
			<Container
				maxWidth="lg"
				sx={{
					maxHeight: "600px",
					mb: "150px",
					px: "50px",
					pb: "50px",
					backgroundColor: "#BB623E",
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Typography variant="h6" color="white" sx={{ p: "20px" }}>
						MESSAGES
					</Typography>
					<IconButton>
						<OpenInNewIcon sx={{ color: 'white'}}/>
					</IconButton>
				</Box>
				<Box sx={{ maxHeight: "475px", overflowY: "scroll" }}>
					{displayAllUsers && (
						<ButtonGroup fullWidth orientation="vertical">
							{buttons}
						</ButtonGroup>
					)}
					{!displayAllUsers && (
						<IndividualMessage
							user={userToMessage}
							switchToAllMessages={() => setDisplayAllUsers(true)}
						/>
					)}
				</Box>
			</Container>
		</>
	)
}

export default Messages
