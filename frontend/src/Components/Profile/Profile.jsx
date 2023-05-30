import './profile.css';
import { Stack, Box, IconButton, Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

function Profile() {
  return (
    <>
      <Stack direction="row" alignItems='flex-end'>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton id='settingsButton' aria-label='settings' size='large'>
          <SettingsIcon fontSize="inherit"/>
        </IconButton>
      </Stack>
      <Box>
        <Avatar id='userAvatar'>

        </Avatar>
      </Box>
    </>
  );
}

export default Profile;
