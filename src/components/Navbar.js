import {
  AppBar,
  Box,
  Button,
  Toolbar,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Logo from "../assets/Logo.svg";
import { useModal } from "../context/ModalContext";
import "../App.css";

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
    background: "linear-gradient(to right, #4FAF9F, #6FC4BB)",
  },
  borderRadius: "0.5rem",
}));

const navItems = ["About Us", "Services", "Contact Us", "FAQs", "Blogs"]; // used in Drawer and Toolbar

const Navbar = () => {
  const modal = useModal();

  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  const logoStyle = {
    width: "100px",
    height: "20px",
    transitionDuration: "400ms",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.03)",
      cursor: "pointer",
      transitionDuration: "400ms",
    },
  };

  return (
    <Box>
      <AppBar position="sticky" component="nav" color="transparent">
        <StyledToolbar>
          <Box style={logoStyle}>
            <img id="mainLogo" src={Logo} alt="Logo" width="100" height="25" title="nx-fintech" />
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

            <LoginButton onClick={() => modal.setOpen(true)}>Login</LoginButton>
          </RightTB>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
