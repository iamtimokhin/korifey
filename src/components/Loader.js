import React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function Loader({ size = 24, color = "primary" }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress size={size} color={color} />
    </Box>
  );
}
