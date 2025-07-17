import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import React from "react";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function EditDialog({
  EditData,
  setElem,
  elem,
  open,
  handleClose,
}) {
  const [name, setName] = useState(elem.name);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    let newObj = {
      ...elem,
      name: name,
    };
    console.log(newObj);

    EditData(newObj);
    handleClose();
    setElem("");
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        fullWidth={"xl"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleEditSubmit} action="">
          <TextField
            name="name"
            defaultValue={elem.name}
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-multiline-flexible"
            label="Name"
          />
          <DialogActions>
            <Button type="submit" autoFocus onClick={handleEditSubmit}>
              Save changes
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}
