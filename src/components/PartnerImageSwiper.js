import React, { useContext, useMemo, useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";
import ThemedCircularProgress from "./ThemedCircularProgress";

const PartnerImageSwiper = React.memo(function PartnerImageSwiper({
  open,
  onClose,
  onOpen,
  image,
  name,
  role,
  description,
  link,
}) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  // Для свайпа вниз
  const [startY, setStartY] = useState(null);
  const [loadingLink, setLoadingLink] = useState(false);
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (!startY) return;
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 100) {
      // свайп вниз >100px
      onClose();
    }
    setStartY(null);
  };

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
        }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>

      {/* Контейнер с контентом */}
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
        {/* Фото */}
        <Box
          component="img"
          src={image}
          alt={`${name} avatar`}
          sx={{
            width: 180,
            height: 180,
            borderRadius: 50, // прямоугольное фото
            objectFit: "cover",
            border: colors.profileHeader.avatarBorder,
            boxShadow: "0 0 25px rgba(0,0,0,0.5)",
            mb: 2,
            animation: "pulse 2s infinite", // 👈 Анимация
            "@keyframes pulse": {
              "0%": {
                boxShadow: "0 0 0 0 rgba(39,135,245, 0.7)",
              },
              "70%": {
                boxShadow: "0 0 0 20px rgba(39,135,245, 0)",
              },
              "100%": {
                boxShadow: "0 0 0 0 rgba(39,135,245, 0)",
              },
            },
          }}
        />

        {/* Имя */}
        <Typography
          variant="h6"
          color={colors.profileHeader.typographyColor}
          fontWeight="bold"
          mb={1}
        >
          {name}
        </Typography>

        {/* Роль */}
        {role && (
          <Typography
            variant="subtitle1"
            sx={{ color: "rgba(255,255,255,0.7)", mb: 1 }}
          >
            {role}
          </Typography>
        )}

        {/* Описание */}
        {description && (
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.8)",
              mb: 2,
              maxWidth: "100%",
            }}
          >
            {description}
          </Typography>
        )}

        {/* Кнопка перехода */}
        {link && (
          <Button
            onClick={() => {
              if (loadingLink) return; // предотвращаем повторное нажатие
              setLoadingLink(true);
              setTimeout(() => {
                window.open(link, "_blank"); // открываем визитку
                setLoadingLink(false);
              }, 300); // имитация загрузки
            }}
            disabled={loadingLink} // ⬅️ блокировка кнопки во время загрузки
            sx={{
              width: "90%",
              maxWidth: 360,
              minHeight: 48,
              background: colors.contacts.buttonColor,
              color: colors.contacts.color,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              boxShadow: colors.contacts.boxShadow,
              transition: "all 0.3s ease",
              "&:hover": {
                background: colors.contacts.buttonColor,
                boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              },
            }}
          >
            {loadingLink ? (
              <ThemedCircularProgress size={24} />
            ) : (
              "Перейти в визитку"
            )}
          </Button>
        )}
      </Box>
    </SwipeableDrawer>
  );
});

export default PartnerImageSwiper;
