import React from "react";
import { Box, styled } from "@mui/material";
import Main from "./components/Main";
import './App.css'
import Navbar from "./components/Navbar";

const MainBox = styled(Box)(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const App = () => {
  return (
    <Box>
      <Navbar />
      <Main />
    </Box>
  );
};

export default App;
