import { Button, ButtonGroup } from "@mui/material"
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
		<Button onClick={() => switchToUserMessage(user)}>{user}</Button>
	})

	return (
		<>
			<ButtonGroup>{buttons}</ButtonGroup>
            <IndividualMessage user={user} />
		</>
	)
}

export default Messages
