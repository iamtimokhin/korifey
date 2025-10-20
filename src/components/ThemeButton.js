import React, { useContext, useMemo, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import ThemeContext from "../context/context";
import themes from "../data/colors";
import ThemedCircularProgress from "./ThemedCircularProgress";

function ThemeButton() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const themeKeys = Object.keys(themes);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);

    const scrollY = window.scrollY;
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;

    // имитация задержки смены темы
    setTimeout(() => {
      setCurrentTheme(themeKeys[nextIndex]);
      setLoading(false);
      window.scrollTo(0, scrollY);
    }, 800); // 0.8 секунды задержки
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Typography
        variant="subtitle1"
        mb={1.5}
        fontWeight="bold"
        color={colors.profileHeader.typographyColor}
        sx={{ textAlign: "center" }}
      >
        Сменить тему визитки
      </Typography>
      <Button
        onClick={handleClick}
        fullWidth
        disabled={loading}
        sx={{
          background: colors.contacts.buttonColor,
          color: colors.contacts.color,
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: 3,
          py: 1.2,
          mb: 3,
          boxShadow: colors.contacts.boxShadow,
          transition: "transform 0.1s", // плавная анимация нажатия
          "&:hover": {
            background: colors.contacts.buttonColor,
          },
          "&:active": {
            transform: "scale(0.97)",
            background: colors.contacts.buttonColor,
          },
          position: "relative",
        }}
      >
        {loading ? <ThemedCircularProgress size={24} /> : "Сменить тему"}
      </Button>
    </Box>
  );
}

export default ThemeButton;
