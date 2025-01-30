import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";

// ! NOTE :
// untuk nomer 2 dapat di run di nodejs dengan menjalankan perintah node answer-number-2.js

const Homepage = () => {
  const navigate = useNavigate();
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
        <Typography variant="h5" sx={{ mb: 4 }}>
          Test Frontend TableLink
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography onClick={() => navigate("/counter")}>
            Answer 1 - Counter
          </Typography>
          <Typography onClick={() => {}}>
            Answer 2 - Javascript Function (node answer-number-2.js)
          </Typography>
          <Typography onClick={() => navigate("/tabs")}>
            Answer 3 - Tabs
          </Typography>
          <Typography onClick={() => navigate("/modal")}>
            Answer 4 - Modal
          </Typography>
          <Typography onClick={() => navigate("/users")}>
            Answer 5 - Showing the data
          </Typography>
        </Box>
        <Typography variant="body2" color="red" sx={{ mt: 4 }}>
          untuk nomer 2 di jalankan menggunakan perintah node answer-number-2.js
        </Typography>
      </Box>
    </Container>
  );
};

export default Homepage;
