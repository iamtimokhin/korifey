import React, { useContext, useMemo } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import badges from "../data/badges";
import themes from "../data/colors";
import ThemeContext from "../context/context";

function Statistics() {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  return (
    <>
      <Typography
        mt={-1.5}
        variant="subtitle1"
        mb={2}
        fontWeight="bold"
        color={colors.profileHeader.typographyColor}
        sx={{ textAlign: "center" }}
      >
        Обо мне в цифрах на Авито
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr" },
          gap: 2,
          mb: colors.boxMarginBottom,
        }}
      >
        {badges.map(({ value, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 2,
                background: colors.statiscics.paperBackground,
                borderRadius: 3,
                textAlign: "center",
                backdropFilter: "blur(6px)",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: colors.statiscics.typographyValueColor, mb: 0.5 }}
              >
                <CountUp end={value} duration={1.5} separator="" suffix=" +" />
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: colors.statiscics.typographyLabelColor }}
              >
                {label}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </>
  );
}

export default Statistics;
