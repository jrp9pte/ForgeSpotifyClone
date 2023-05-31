import { Stack, Avatar, Typography } from "@mui/material";

function UserNameAndAvatar() {
	return (
		<Stack direction="row">
			<Avatar id="userAvatar" />
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
