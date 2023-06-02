import { Box, IconButton, Typography } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import Conversation from "./Conversation"

function IndividualMessage({ user, switchToAllMessages }) {
	return (
		<Box
			fullWidth
			sx={{
				height: "550px",
				borderStyle: "solid",
			}}
		>
			<Box sx={{display: 'flex', justifyContent: 'space-between', px: '15px', py: '10px'}}>
				<IconButton
					style={{ justifySelf: "flex-start" }}
					onClick={() => switchToAllMessages()}
				>
					<ArrowBackIosNewIcon />
				</IconButton>
				<Typography variant="h6">{user}</Typography>
			</Box>
			<Conversation />
		</Box>
	)
}

export default IndividualMessage
