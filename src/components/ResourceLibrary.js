import React from "react";
import { Button, List, ListItem } from "@mui/material";

const ResourceLibrary = () => {
  return (
    <div>
      <h2>Resource Library</h2>
      <List>
        <ListItem>Resource 1</ListItem>
        <ListItem>Resource 2</ListItem>
        {/* Add functionality to upload and share resources */}
      </List>
      <Button variant="contained">Upload Resource</Button>
    </div>
  );
};

export default ResourceLibrary;
