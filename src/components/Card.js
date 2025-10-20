import React, { useContext, useMemo } from "react";
import { Card } from "@mui/material";
import themes from "../data/colors";
import ThemeContext from "../context/context";

function CardTemplate({ children }) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = themes[currentTheme];
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 360,
        borderRadius: 4,
        background: colors.card.background,
        color: colors.card.color,
        mb: 3,
        boxShadow: colors.card.boxShadow,
        overflow: "hidden",
      }}
    >
      {children}
    </Card>
  );
}

export default CardTemplate;
