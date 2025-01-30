import React, { useState } from "react";
import { Button, Container, Box, Modal } from "@mui/material";
import ModalComponent from "../../components/modal";

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

const ModalPage = () => {
  const [open, setOpen] = useState(false);
  const [successDelete, setSuccessDelete] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSuccessDelete(false);
  };

  const handleSuccessDeleteUser = () => {
    setSuccessDelete(true);
  };

  return (
    <Container maxWidth="lg">
      <Box
        mx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Button variant="contained" onClick={handleOpen}>
          Delete User
        </Button>

        <ModalComponent
          isConfirmation={false}
          open={open}
          handleClose={handleClose}
          handleSuccessDeleteUser={handleSuccessDeleteUser}
          title="Delete User"
          subTitle="Are you Sure want to delete this user ?"
        />

        <ModalComponent
          isConfirmation={true}
          open={successDelete}
          handleClose={handleClose}
          handleSuccessDeleteUser={handleSuccessDeleteUser}
          title="Delete User"
          subTitle="Delete User Successfully"
        />
      </Box>
    </Container>
  );
};

export default ModalPage;
