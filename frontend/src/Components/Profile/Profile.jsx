import './profile.css';
import { Stack, Box, IconButton, Avatar, Typography } from '@mui/material';
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
      <Stack direction='row'>
        <Avatar id='userAvatar' />
        <Stack direction='column' justifyContent='center' alignItems='start'>
          <Typography id='profileLabel' variant='h6'>Profile</Typography>
          <Typography id='usernameLabel' variant='h3'>Username</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default Profile;
