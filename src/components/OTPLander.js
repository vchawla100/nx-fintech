import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const OTPLander = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (/^\d+$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleResend = () => {
    // toDo Resend OTP logic
    setTimer(20);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" marginTop={4}>
        {otp.map((digit, index) => (
          <TextField
            key={index}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            variant="outlined"
            margin="normal"
            inputProps={{ maxLength: 1 }}
            style={{
              width: "4rem",
              marginRight: "1rem",
              textAlign: "center",
            }}
          />
        ))}
      </Box>

      <Box display="flex" justifyContent="center" marginTop={2}>
        <Typography variant="caption">
          {timer > 0
            ? `OTP will expire in ${timer} seconds`
            : "OTP expired. Please request again."}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleResend}
          disabled={timer > 0}
        >
          Resend OTP
        </Button>
      </Box>
    </Box>
  );
};

export default OTPLander;
