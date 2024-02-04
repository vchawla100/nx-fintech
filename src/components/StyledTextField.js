import { TextField, styled, alpha } from "@mui/material";
import { useState } from "react";
import { handlePreview } from "../Utils/PreviewHandler";


const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
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

const StyledTextField = ({ attr, label, stage, required }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    // if(!preview) setValue(e.target.value)
    setValue(e.target.value)

    // const previewedValue = handlePreview(e.target.value, attr);
    // setValue(previewedValue);
  };
  return (
    <>
      <RedditTextField
        label={label}
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default StyledTextField;