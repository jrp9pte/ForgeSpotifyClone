import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import ForumIcon from "@mui/icons-material/Forum";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { useState } from "react";
import { doc, updateDoc, Timestamp } from "@firebase/firestore";
import db from "../../firebase";

// import { useEffect, useState } from "react";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [ereply, setEreply] = useState("");
  const [ereplies, setEreplies] = useState([]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  async function addreply() {
    try {
      const allreplies = [...props.replies, ereply];

      const docRef = await updateDoc(doc(db, "Disspost", props.eventid), {
        replies: allreplies,
      });
      setTimeout(() => {
        window.location.reload();
      }, 400);

      console.log("document ID: ", docRef.id);
      setEreply("");
    } catch (error) {
      console.error("error editing doc: ", error);
    }
  }

  // const [response, setResponse] = useState([]);
  // setResponse(props.replies);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{props.message}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {props.replies.map((email) => (
          <ListItem disableGutters>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} key={email} />
              {/* <ListItemText primary={email} /> */}
              {/* <ListItemText primary={props.replies} /> */}
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <TextField
            hiddenLabel
            id="standard-textarea"
            label="Join the Conversation"
            placeholder="Type here.."
            multiline
            variant="standard"
            value={ereply}
            sx={{
              width: { sm: 400, md: 405 },
              marginLeft: 4,
            }}
            onChange={(e) => setEreply(e.target.value)}
          />
          <ListItemButton autoFocus onClick={() => addreply()}>
            <ListItemAvatar sx={{ marginLeft: 2, marginRight: -3 }}>
              <Avatar>
                <SendIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemButton>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar sx={{ marginRight: -2 }}>
              <Avatar>
                <CloseFullscreenIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemButton>
        </ListItem>{" "}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button style={{ color: "white" }} onClick={handleClickOpen}>
        <ForumIcon />
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        message={props.message}
        replies={props.replies}
        date={props.date}
        eventid={props.eventid}
      />
    </div>
  );
}
