import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HomeIcon from "@mui/icons-material/Home";

const StyledHomeIcon = styled(HomeIcon)(({ theme }) => ({
  color: "black",
  "&:hover": {
    color: "#bb623e",
  },
  "&.active": {
    color: "#bb623e",
  },
}));
const StyledAccountBoxIcon = styled(AccountBoxIcon)(({ theme }) => ({
  color: "black",
  "&:hover": {
    color: "#bb623e",
  },
  "&.active": {
    color: "#bb623e",
  },
}));
const StyledLibraryMusicIcon = styled(LibraryMusicIcon)(({ theme }) => ({
  color: "black",
  "&:hover": {
    color: "#bb623e",
  },
  "&.active": {
    color: "#bb623e",
  },
}));

const NavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#e4eef6", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: "black", flexGrow: 1, textAlign: "left" }}
        >
          SpotifySocial
        </Typography>
        {isMobile ? (
          <IconButton
            color="black"
            aria-label="menu"
            edge="end"
            onClick={toggleDrawer}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        ) : (
          <div>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ marginRight: "12px" }}
            >
              <StyledHomeIcon
                fontSize="large"
                className={location.pathname === "/" ? "active" : ""}
              />
            </Button>
            <Button
              component={RouterLink}
              to="/my-music"
              color="inherit"
              sx={{ marginRight: "12px" }}
            >
              <StyledLibraryMusicIcon
                className={location.pathname === "/my-music" ? "active" : ""}
                fontSize="large"
              />
            </Button>
            <Button component={RouterLink} to="/profile" color="inherit">
              <StyledAccountBoxIcon
                className={location.pathname === "/profile" ? "active" : ""}
                fontSize="large"
              />
            </Button>
          </div>
        )}
      </Toolbar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#e4eef6",
          },
        }}
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <List sx={{ width: 150 }} onClick={toggleDrawer}>
          <ListItem button component={RouterLink} to="/">
            <StyledHomeIcon
              fontSize="large"
              className={location.pathname === "/" ? "active" : ""}
            />
          </ListItem>

          <ListItem button component={RouterLink} to="/my-music">
            <StyledLibraryMusicIcon
              className={location.pathname === "/my-music" ? "active" : ""}
              fontSize="large"
            />
          </ListItem>
          <ListItem button component={RouterLink} to="/profile">
            <StyledAccountBoxIcon
              className={location.pathname === "/profile" ? "active" : ""}
              fontSize="large"
            />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavigationBar;
