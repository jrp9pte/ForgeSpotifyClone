import { Box, Button, Typography } from "@mui/material"

function IndividualMessage({ user }) {
	return (
		<Box>
			<Typography variant="h6">{user}</Typography>
		</Box>
	)
}

export default IndividualMessage
