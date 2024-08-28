import React from "react";
import { TextField, Button } from "@mui/material";

const FeedbackForm = () => {
  return (
    <div>
      <h2>Feedback Form</h2>
      <TextField label="Feedback" multiline rows={4} fullWidth />
      <Button variant="contained">Submit Feedback</Button>
    </div>
  );
};

export default FeedbackForm;
