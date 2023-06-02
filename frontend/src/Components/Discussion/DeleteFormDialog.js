import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import db from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function DeleteFormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteDoc(doc(db, "Disspost", props.eventID));
    setTimeout(() => {
      window.location.reload();
    }, 400);
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleClickOpen} style={{ color: "white" }}>
        <MoreVertIcon />{" "}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.zdel} Post</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.zmes}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "#9F432E" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ color: "#9F432E" }} onClick={handleDelete} autoFocus>
            {props.zdel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DeleteFormDialog;
