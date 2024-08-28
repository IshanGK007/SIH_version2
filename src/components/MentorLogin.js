import React from "react";
import { TextField, Button } from "@mui/material";

function MentorLogin() {
  return (
    <div>
      <h2>Mentor Login</h2>
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </div>
  );
}

export default MentorLogin;
