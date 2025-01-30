import React from "react";
import { Button, Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 2,
};

const ModalComponent = ({
  isConfirmation,
  open,
  handleClose,
  handleSuccessDeleteUser,
  title,
  subTitle,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">{title}</h2>
        <p id="parent-modal-description">{subTitle}</p>
        {isConfirmation ? (
          <Button onClick={handleClose}>Close</Button>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSuccessDeleteUser}>Delete</Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
