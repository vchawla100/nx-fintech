import { Box, Modal, Typography, styled } from "@mui/material";
import { useState, useEffect } from "react";



const Sidebar = () => {
  const [modalWidth, setModalWidth] = useState(0);

  const StyledModal = styled(Modal)({
    position: "absolute",
    left: `calc(100% - ${450}px)`,
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // top: '50%', 
    // left: '50%',
    // transform: 'translate(-50%, -50%)'
  
    // style:{ position: 'absolute', top: '10%', left: '10%', transform: 'translate(-50%, -50%)', right: 0 }
  });

  useEffect(() => {
    const handleResize = () => {
      // Calculate and set the width of the modal
      const modalElement = document.getElementById("modal-right");
      if (modalElement) {
        const width = modalElement.offsetWidth;
        setModalWidth(width);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial calculation on mount
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledModal
      id="modal-right"
      open={true}
      onClose={() => console.log("closed")}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        // right={0}
        // top={0}
        width={400}
        height={'100%'}
        bgcolor={"background.default"}
        color={"text.primary"}
        p={3}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </StyledModal>
  );
};

export default Sidebar;
