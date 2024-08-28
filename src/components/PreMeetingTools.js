import React from "react";
import { TextField, Button } from "@mui/material";

const PreMeetingTools = () => {
  return (
    <div>
      <h2>Pre-Meeting Preparation</h2>
      <TextField label="Meeting Goals" multiline rows={4} fullWidth />
      <Button variant="contained">Save Goals</Button>
    </div>
  );
};

export default PreMeetingTools;
