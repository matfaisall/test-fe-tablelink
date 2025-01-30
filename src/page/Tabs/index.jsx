import React, { useState } from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";

const TabsPage = () => {
  const [value, setValue] = useState("homepage");

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          onChange={handleOnChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
          sx={{ borderBottom: 1, borderRadius: 2 }}
        >
          <Tab value="homepage" label="Homepage" />
          <Tab value="about" label="About Me" />
          <Tab value="portfolio" label="Portfolio" />
        </Tabs>
      </Box>
    </Container>
  );
};

export default TabsPage;
