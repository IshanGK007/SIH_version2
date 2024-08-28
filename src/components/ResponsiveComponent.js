import React from "react";
import { Container, Typography, Button } from "@mui/material";

const ResponsiveComponent = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", mb: 2 }}
      >
        Responsive Component
      </Typography>
      <Button variant="contained" fullWidth>
        Full Width Button
      </Button>
      {/* Add more responsive design elements as needed */}
    </Container>
  );
};

export default ResponsiveComponent;
