import React, { useContext, useMemo, useState } from "react";
import { SwipeableDrawer, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { QRCodeCanvas } from "qrcode.react";
import ThemeContext from "../context/context";
import themes from "../data/colors";

const QRSwiperFull = ({ open, onClose, url }) => {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const [startY, setStartY] = useState(null);

  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    if (!startY) return;
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 100) onClose();
    setStartY(null);
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      ModalProps={{ sx: { zIndex: 1600 } }}
      PaperProps={{
        sx: {
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(6px)",
          boxShadow: "none",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        },
      }}
    >
      {/* Кнопка закрытия */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          zIndex: 1600,
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* QR-код в круге с пульсирующей тенью */}
      <Box
        sx={{
          width: 280,
          height: 280,
          borderRadius: "50%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Пульсирующая тень */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            boxShadow: "0 0 0 0 rgba(39,135,245,0.7)",
            animation: "pulseShadow 2s infinite",
            zIndex: 0,
          }}
        />

        {/* Сам QR-код */}
        <QRCodeCanvas
          value={url}
          size={240}
          bgColor="#ffffff"
          fgColor="#000000"
          style={{ zIndex: 1 }}
        />

        <style>{`
          @keyframes pulseShadow {
            0% { box-shadow: 0 0 0 0 rgba(39,135,245,0.7); }
            70% { box-shadow: 0 0 0 20px rgba(39,135,245,0); }
            100% { box-shadow: 0 0 0 0 rgba(39,135,245,0); }
          }
        `}</style>
      </Box>
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: colors.profileHeader.typographyColor,
            fontWeight: "bold",
          }}
        >
          Отсканируйте QR-код, чтобы перейти на визитку
        </Typography>
      </Box>
    </SwipeableDrawer>
  );
};

export default QRSwiperFull;
