import React from "react";
import Sidebar from "./Sidebar";
import {
  useTheme,
  useMediaQuery,
  Typography,
  styled,
  Box,
} from "@mui/material";

import image1 from "../assets/RollerIcons/Windows.svg"; // 0.1
import image2 from "../assets/RollerIcons/Buildings.svg"; // -8.09
import image3 from "../assets/RollerIcons/Beige.svg"; // 10.84
import image4 from "../assets/RollerIcons/Building.svg"; // 12.89
import image5 from "../assets/RollerIcons/Gate.svg"; // -15
import image6 from "../assets/RollerIcons/LampGate.svg"; // 13.5
import image7 from "../assets/RollerIcons/Facade.svg"; // -4.9

const StyledContainer = styled("div")(({}) => ({
  backgroundColor: "turquoise",
  position: "relative",
  height: "89vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const OverlappingImages = styled(Box)(({}) => ({
  width: "200px",
  height: "200px",
  top: 0,
  left: 0,
  "& > img": {
    width: "10rem",
    height: "10rem",
    margin: "0px", // Add margin between images if needed
    position: "absolute",
  },
}));

const RotatedImage = ({ src, alt }) => {
  return <img src={src} alt={alt} position="absolute" />;
};

const Main = () => {
  const theme = useTheme();

  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const headingSize = isXSmallScreen
    ? "4rem"
    : isSmallScreen
    ? "5rem"
    : isMediumScreen
    ? "7rem"
    : isLargeScreen
    ? "9rem"
    : "4rem";

  return (
    <Box >
      <StyledContainer>
        <OverlappingImages>
          <RotatedImage src={image7} alt="broken" degree={0.1} />
          <RotatedImage src={image6} alt="broken" degree={-8.09} />
          <RotatedImage src={image5} alt="broken" degree={10.84} />
          <RotatedImage src={image4} alt="broken" degree={12.39} />
          <RotatedImage src={image3} alt="broken" degree={-15} />
          <RotatedImage src={image2} alt="broken" degree={13.5} />
          <RotatedImage src={image1} alt="broken" degree={-4.9} />
        </OverlappingImages>
        <Typography
          // variant="h1"
          style={{
            position: "absolute",
            color: "#418F86",
            backgroundColor: "",
            whiteSpace: "nowrap",
            zIndex: 1000,
            fontSize: headingSize,
          }}
        >
          {/* <MyTypography className={classes.typography}> */}
          Take A SPIN
        </Typography>

        {/* <Box
        sx={{
          width: { xs: 1, md: 10 },
          height: "89vh",
          display: "block",
          position: "absolute",
          right: 0,
        }}
      >
    </Box> */}
        <Sidebar />
      </StyledContainer>
    </Box>
  );
};

export default Main;
