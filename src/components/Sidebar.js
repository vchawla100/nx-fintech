import {
  Box,
  Modal,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StyledTextField from "./StyledTextField";
import { useState } from "react";
import { useModal } from "../context/ModalContext";

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  color: theme.palette.getContrastText("#418F86"),
  background: "linear-gradient(to right, #418F86, #5dbaaf)",
  color: "#fff",
  "&:hover": {
    background: "linear-gradient(to right, #4FAF9F, #6FC4BB)",
  },
  borderRadius: "0.5rem",
}));

const Sidebar = () => {
  const [stage, setStage] = useState(0);
  const modal = useModal();

  const theme = useTheme();
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));

  const StyledModal = styled(Modal)({
    position: "absolute",
    left: `${isAboveMd ? "calc(100% - 28rem)" : "0"}`,
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)'

    // style:{ position: 'absolute', top: '10%', left: '10%', transform: 'translate(-50%, -50%)', right: 0 }
  });

  const handleNextClick = () =>{
    setStage((stage) => stage+1)
    console.log(stage)
  }

  return (
    <StyledModal
      id="modal-right"
      open={modal.open}
      onClose={() => modal.setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={`${isAboveMd ? "400" : "100%"}`}
        // width={400}
        height={"95%"}
        bgcolor={"background.default"}
        color={"text.primary"}
        p={3}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"100%"}
          justifyContent={"space-between"}
        >
          {stage === 1 ? (
            <Box
              height={"5rem"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography id="modal-modal-title" variant="h6" fontWeight="600">
                Preview
              </Typography>
              <IconButton
                sx={{ height: "fit-content" }}
                aria-label="delete"
                size="small"
                onClick={() => modal.setOpen(false)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ) : (
            <Box
              height={"5rem"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  fontWeight="600"
                >
                  Want to buy a car?
                </Typography>
                <Typography id="modal-modal-description" sx={{ my: 2 }}>
                  Please fill out the details.
                </Typography>
              </Box>

              <Box>
                <IconButton
                  sx={{ height: "fit-content" }}
                  aria-label="delete"
                  size="small"
                  onClick={() => modal.setOpen(false)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          )}

          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gap: 2,
            }}
          >
            <StyledTextField
              attr={"number"}
              label="Enter your number"
              stage={stage}
              required={true}
            />
            <StyledTextField
              attr={"name"}
              label="Enter your name"
              stage={stage}
            />
            <StyledTextField
              attr={"email"}
              label="Enter your email"
              stage={stage}
            />
            <StyledTextField
              attr={"vehicleNo"}
              label="Enter Vehicle Number"
              stage={stage}
            />
          </Box>
          <Box>
            <StyledButton onClick={handleNextClick}>
              Next
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </StyledModal>
  );
};

export default Sidebar;
