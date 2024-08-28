import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Mentor Connect
      </Typography>
      <Button
        component={Link}
        to="/login/student"
        variant="contained"
        color="primary"
      >
        Student Login
      </Button>
      <Button
        component={Link}
        to="/login/mentor"
        variant="contained"
        color="secondary"
      >
        Mentor Login
      </Button>
    </Container>
  );
};

export default Home;
