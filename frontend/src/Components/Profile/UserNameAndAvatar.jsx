import './profile.css'
import { Stack, Avatar, Typography, Paper } from "@mui/material";

function UserNameAndAvatar() {
	
	return (
		<Stack direction="row" mb='75px'>
			<Avatar component={Paper} elevation={10} id="userAvatar" />
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="start"
			>
				<Typography id="profileLabel" variant="h6">
					Profile
				</Typography>
				<Typography id="usernameLabel" variant="h3">
					Username
				</Typography>
			</Stack>
		</Stack>
	)
}

export default UserNameAndAvatar
