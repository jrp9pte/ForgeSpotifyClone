import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import db from "../../firebase";
import { collection, addDoc, Timestamp } from "@firebase/firestore";
import React, { useState } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [edate, setEdate] = useState(new Timestamp());
  const [euser, setEuser] = useState([]);
  const [emessage, setEmessage] = useState([]);

  async function addEventdb() {
    try {
      const docRef = await addDoc(collection(db, "Disspost"), {
        date: "01/01/01", //edate,
        message: emessage,
        user: "ap", //euser,
      });
      setOpen(false);

      setTimeout(() => {
        window.location.reload();
      }, 400);

      console.log("document ID: ", docRef.id);
      setEdate("");
      setEmessage("");
      setEuser("");
    } catch (error) {
      console.error("error adding doc: ", error);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ backgroundColor: "white" }}
      >
        <PostAddIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Join the conversation, and be heard!</DialogTitle>
        <DialogContent>
          <DialogContentText>Post a public discussion.</DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
            value={emessage}
            onChange={(e) => setEmessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            // onClick={handleClose}
            onClick={addEventdb}
            style={{ background: "white" }}
          >
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// export default FormDialog;
