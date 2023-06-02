import React, { useState,useContext,  } from "react"
import { Box, IconButton, TextField, Typography } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import SendIcon from "@mui/icons-material/Send"
import Conversation from "./Conversation"
import Button from "@mui/material/Button";
import { UserContext } from "../Login/UserProvider";
import axios from "axios";
function IndividualMessage({ username, switchToAllMessages }) {
	const [newMessage, setNewMessage] = useState("")
	const { user } = useContext(UserContext);
	const sendMessage = async(e) =>{
		e.preventDefault()
		// Finds specific message doc ref
		// we have currentuser, can search through its message array
		// and search up by {user}. and search again using {username}
		axios.post("http://localhost:9000/getMessageReference",{
			uid: user.uid,
			access_token: user.access_token,
			username: username,
		}).then((res)=>{
			const refstring = res.data.refstring
			const currentUsername = res.data.currentUsername
			console.log(refstring)
			axios.post("http://localhost:9000/sendMessage",{
				refstring: refstring,
				message: newMessage,
				currentUsername: currentUsername,
			})
		})
	}
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
				<Typography variant="h6">{username}</Typography>
			</Box>
			<Conversation user={username} />
			<Box
				fullWidth
				pt="10px"
				mt="20px"
				mx="calc(50px + 1vw)"
				sx={{ backgroundColor: "white" }}
			>
				<form onSubmit={sendMessage}>
					<TextField
						width="200%"
						variant="standard"
						onChange={(e) => setNewMessage(e.target.value)}
						placeholder="Enter a Message"
					/>
					<Button onClick={sendMessage}>
						<SendIcon onSubmit={sendMessage}/>
					</Button>
				</form>
			</Box>
		</Box>
	)
}

export default IndividualMessage
