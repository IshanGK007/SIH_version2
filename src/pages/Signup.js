import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/signup", { email, password });
      // Redirect to login or show a success message
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Signup</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </form>
    </div>
  );
}

export default Signup;
