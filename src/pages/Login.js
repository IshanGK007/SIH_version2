import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Handle login logic here (e.g., OAuth or JWT)
    navigate(`/${role}-dashboard`);
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <Button onClick={() => handleLogin("mentor")} variant="contained">
        Login as Mentor
      </Button>
      <Button onClick={() => handleLogin("student")} variant="contained">
        Login as Student
      </Button>
    </Container>
  );
};

export default Login;
