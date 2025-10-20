import React, { useContext, useMemo } from "react";
import { Divider } from "@mui/material";
import themes from "..//data/colors";
import ThemeContext from "../context/context";

function DividerGradient(props) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);
  const { direction } = props;
  return (
    <Divider
      sx={{
        mb: 1,
        mx: -2,
        height: 2,
        background:
          direction === "right" ? colors.gradientRight : colors.gradientLeft,
      }}
    />
  );
}

export default DividerGradient;
