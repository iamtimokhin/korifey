import React, { useContext, useMemo } from "react";
import advantages from "./../data/advantages";
import { Typography, Box, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import themes from "../data/colors";
import ThemeContext from "../context/context";

function Advantages() {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  return (
    <>
      <Typography
        variant="subtitle1"
        mt={1.5}
        mb={2}
        fontWeight="bold"
        color={colors.profileHeader.typographyColor}
        sx={{ textAlign: "center" }}
      >
        Почему выбирают Авито Доставку
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr" },
          gap: 2,
          mb: colors.boxMarginBottom,
        }}
      >
        {advantages.map(({ value, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 2,
                background: colors.advantages.paperBackground,
                borderRadius: 3,
                textAlign: "center",
                backdropFilter: "blur(6px)",
              }}
            >
              <Stack spacing={1} alignItems="center">
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: colors.advantages.typographyValueColor }}
                >
                  {value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: colors.advantages.typographyLabelColor }}
                >
                  {label}
                </Typography>
              </Stack>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </>
  );
}

export default Advantages;
