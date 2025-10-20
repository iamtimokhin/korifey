import React, { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ThemeContext from "../context/context";
import themes from "../data/colors";

export default function ThemedCircularProgress({ size = 24 }) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = themes[currentTheme].contacts;

  return <CircularProgress size={size} sx={{ color: colors.color }} />;
}
