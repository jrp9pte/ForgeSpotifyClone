import { Button, ButtonGroup, Container } from "@mui/material"
import React, { useState } from "react"
import IndividualMessage from "./IndividualMessage"

function Messages() {
	const users = ["Anisha", "Jay", "Richard", "Zaid"]
	const [displayAllUsers, setDisplayAllUsers] = useState(true)
	const [userToMessage, setUserToMessage] = useState("")

	const switchToUserMessage = (user) => {
		setDisplayAllUsers(false)
		setUserToMessage(user)
	}

	const buttons = users.map((user) => {
		return <Button style={{justifyContent: 'flex-start', paddingTop: '20px', paddingBottom: '20px'}} onClick={() => switchToUserMessage(user)}>{user}</Button>
	})

	return (
		<>
			<Container maxWidth='lg' sx={{maxHeight: '600px', overflowY: 'scroll', mb: '150px'}}>
				{displayAllUsers && (
					<ButtonGroup fullWidth orientation="vertical">{buttons}</ButtonGroup>
				)}
				{!displayAllUsers && <IndividualMessage user={userToMessage} switchToAllMessages={() => setDisplayAllUsers(true)} />}
			</Container>
		</>
	)
}

export default Messages
