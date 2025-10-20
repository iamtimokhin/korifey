import React, { useContext, useMemo, useState } from "react";
import { SwipeableDrawer, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";

const AvatarSwiper = React.memo(function AvatarSwiper({
  open,
  onClose,
  onOpen,
  image,
  name,
  status,
  Icon,
}) {
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
      onOpen={onOpen}
      ModalProps={{ sx: { zIndex: 1500 } }}
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
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>

      {/* Контент */}
      <Box
        sx={{
          width: "90%",
          maxWidth: 360,
          p: 3,
          borderRadius: 3,
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          animation: "fadeInUp 0.3s ease",
          "@keyframes fadeInUp": {
            "0%": { opacity: 0, transform: "translateY(50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Аватар с пульсирующей тенью */}
        <Box
          sx={{
            width: 250,
            height: 250,
            borderRadius: "50%",
            position: "relative",
            mb: 2,
          }}
        >
          {/* Пульсирующая тень */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              boxShadow: "0 0 0 0 rgba(39,135,245,0.7)",
              animation: "pulseShadow 2s infinite",
              zIndex: 0,
            }}
          />

          {/* Сам аватар */}
          <Box
            component="img"
            src={image}
            alt={`${name} avatar`}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: colors.profileHeader.avatarBorder,
              objectFit: "cover",
              boxShadow: "0 0 25px rgba(0,0,0,0.5)",
              position: "relative",
              zIndex: 1,
            }}
          />

          <style>{`
            @keyframes pulseShadow {
              0% { box-shadow: 0 0 0 0 rgba(39,135,245,0.7); }
              70% { box-shadow: 0 0 0 20px rgba(39,135,245,0); }
              100% { box-shadow: 0 0 0 0 rgba(39,135,245,0); }
            }
          `}</style>
        </Box>

        {/* Имя с иконкой */}
        <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
          <Typography
            variant="h6"
            color={colors.profileHeader.typographyColor}
            fontWeight="bold"
          >
            {name}
          </Typography>
          {Icon && (
            <Box
              component="span"
              sx={{
                ml: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "1px",
              }}
            >
              <Icon width={18} height={18} />
            </Box>
          )}
        </Box>

        {/* Статус */}
        {status && (
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 2, maxWidth: "100%" }}
          >
            {status}
          </Typography>
        )}
      </Box>
    </SwipeableDrawer>
  );
});

export default AvatarSwiper;
