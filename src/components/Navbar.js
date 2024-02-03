import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";
import Logo from "../assets/Logo.svg";
import { useState } from "react";
import { UseModal } from "../context/ModalContext";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const RightTB = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#418F86"),
  background: "linear-gradient(to right, #418F86, #5dbaaf)",
  color: "#fff",
  "&:hover": {
    background: "linear-gradient(to right, #418F86, #5dbaaf)",
  },
  borderRadius: "0.5rem",
}));

const navItems = ["About Us", "Services", "Contact Us", "FAQs", "Blogs"]; // used in Drawer and Toolbar


const Navbar = () => {
  const modal = UseModal();
  
  return (
    <Box height={"50%"}>
      <AppBar position="sticky" component="nav" color="transparent">
        <StyledToolbar>
          <Box>
            <img src={Logo} alt="Logo" width="100" height="20" />
          </Box>

          <RightTB>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                bgcolor: "",
                mx: "15px",
              }}
            >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "black" }}>
                  {item}
                </Button>
              ))}
            </Box>

            <LoginButton
              onClick={() => modal.setOpen(true)}
            >
              Login
            </LoginButton>
          </RightTB>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
