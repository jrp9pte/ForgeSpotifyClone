import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#222", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          My Music App
        </Typography>
        <div>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{
              mx: 1,
              textTransform: "none",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Discover
          </Button>
          <Button
            component={RouterLink}
            to="/search"
            color="inherit"
            sx={{
              mx: 1,
              textTransform: "none",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Search
          </Button>
          <Button
            component={RouterLink}
            to="/my-music"
            color="inherit"
            sx={{
              mx: 1,
              textTransform: "none",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            My Music
          </Button>
          <Button
            component={RouterLink}
            to="/profile"
            color="inherit"
            sx={{
              mx: 1,
              textTransform: "none",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Profile
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
