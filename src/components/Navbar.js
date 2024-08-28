import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/mentor-dashboard">
          Mentor Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/student-dashboard">
          Student Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
