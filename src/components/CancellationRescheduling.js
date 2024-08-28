import React, { useState } from "react";
import { Button, TextField, Container } from "@mui/material";

const CancellationRescheduling = () => {
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    // Handle cancellation or rescheduling logic
    console.log("Submitted:", details);
  };

  return (
    <Container>
      <h2>Cancel or Reschedule Meeting</h2>
      <TextField
        label="Meeting Details"
        multiline
        rows={4}
        fullWidth
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Container>
  );
};

export default CancellationRescheduling;
