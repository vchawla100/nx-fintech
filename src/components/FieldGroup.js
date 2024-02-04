import { Box, TextField, styled, alpha } from "@mui/material";
import { useForm } from "../context/FormContext";
import { handlePreview } from "../Utils/PreviewHandler";

const RedditTextField = styled((props) => (
  <TextField InputProps={{}} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "#E0FFFA",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.secondary.main,
    },
  },
}));

const FieldGroup = ({ stage }) => {
  const {
    number,
    setNumber,
    name,
    setName,
    email,
    setEmail,
    vehicleNo,
    setVehicleNo,
  } = useForm();

  console.log(number, name, email, vehicleNo);

  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        gap: 2,
      }}
    >
      <RedditTextField
        attr={"number"}
        value={stage === 1 ? handlePreview(number, "number") : number}
        label="Enter your number"
        onChange={(e) => setNumber(e.target.value)}
        disabled={stage === 1}
        required
      />
      <RedditTextField
        attr={"name"}
        value={stage === 1 ? handlePreview(name, "name") : name}
        label="Enter your name"
        onChange={(e) => setName(e.target.value)}
        disabled={stage === 1}
      />
      <RedditTextField
        attr={"email"}
        value={stage === 1 ? handlePreview(email, "email") : email}
        label="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={stage === 1}
      />
      <RedditTextField
        attr={"vehicleNo"}
        value={stage === 1 ? handlePreview(vehicleNo, "vehicleNo") : vehicleNo}
        label="Enter Vehicle Number"
        onChange={(e) => setVehicleNo(e.target.value)}
        disabled={stage === 1}
      />
    </Box>
  );
};

export default FieldGroup;
