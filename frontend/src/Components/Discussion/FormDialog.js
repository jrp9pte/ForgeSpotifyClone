import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import db from "../../firebase";
import { collection, addDoc, Timestamp } from "@firebase/firestore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Login/UserProvider";
import axios from "axios";
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [edate, setEdate] = useState(new Timestamp());
  const [euser, setEuser] = useState([]);
  const [emessage, setEmessage] = useState([]);
  const { user } = useContext(UserContext);
  const API_URL = "http://localhost:9000";
  const [selectedData, setSelectedData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      setSelectedData(response.data.profile);
    } catch (error) {
      console.error("Error retrieving top artists:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function addEventdb() {
    try {
      const docRef = await addDoc(collection(db, "Disspost"), {
        date: "June 2, 2023", //edate,
        message: emessage,
        user: selectedData.display_name, //euser,
        replies: [],
        zdel: "Delete",
        zmes: "Are you sure you want to delete this post?",
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
        // shadow="white "
        onClick={handleClickOpen}
        style={{ color: "white" }}
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
