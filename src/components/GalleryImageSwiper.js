import React from "react";
import { SwipeableDrawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const GalleryImageSwiper = React.memo(function GalleryImageSwiper({
  open,
  onClose,
  onOpen,
  image,
  alt,
}) {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      ModalProps={{ keepMounted: true, sx: { zIndex: 1500 } }}
      PaperProps={{
        sx: {
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.8)", // затемнённый фон
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
          zIndex: 2,
        }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>

      {/* Контейнер с фото */}
      <Box
        component="img"
        src={image}
        alt={alt || "gallery image"}
        sx={{
          maxHeight: "80vh",
          width: "auto", // сохраняем пропорции
          borderRadius: 2,
          objectFit: "contain",
          boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          padding: 1,
          backgroundColor: "rgba(255,255,255,0.05)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
          animation: "fadeIn 0.3s ease",
          "@keyframes fadeIn": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        }}
        onClick={onClose}
      />
    </SwipeableDrawer>
  );
});

export default GalleryImageSwiper;
