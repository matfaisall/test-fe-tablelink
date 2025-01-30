import { Container, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(1);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          height: "100vh",
        }}
      >
        <Button
          variant="contained"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Decrease
        </Button>
        <Typography>{count}</Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Increase
        </Button>
      </Box>
    </Container>
  );
};

export default CounterPage;
