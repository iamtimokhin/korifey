import React, { useContext, useMemo } from "react";
import { Box } from "@mui/material";
import themes from "../data/colors";
import ThemeContext from "../context/context";
function BackgroundTemplate({ children }) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: colors.backgroundTemplate.background,
        transition: "background 0.5s ease", // плавный переход фона
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
}

export default BackgroundTemplate;
