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
import { useState } from "react";
import { useModal } from "../context/ModalContext";
// import { useForm } from "../context/FormContext";
import FieldGroup from "./FieldGroup";
import OTPLander from "./OTPLander";

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
  });

  const handleNextClick = () => {
    setStage((stage) => stage + 1);
  };

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
                {stage === 0 ? (
                  <Typography id="modal-modal-description" sx={{ my: 2 }}>
                    Please fill out the details.
                  </Typography>
                ) : (
                  <Typography id="modal-modal-description" sx={{ my: 2 }}>
                    Enter OTP to verify your number.
                  </Typography>
                )}
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

          {stage < 2 ? <FieldGroup stage={stage} /> : <OTPLander />}

          <Box>
            <StyledButton onClick={handleNextClick}>Next</StyledButton>
          </Box>
        </Box>
      </Box>
    </StyledModal>
  );
};

export default Sidebar;
