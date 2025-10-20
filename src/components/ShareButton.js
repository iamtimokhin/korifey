import React, { useState, useContext, useMemo } from "react";
import { Button, IconButton, Box, SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import ThemeContext from "../context/context";
import themes from "../data/colors";
import ThemedCircularProgress from "./ThemedCircularProgress";

export default function ShareButton() {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);
  const url = window.location.href;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    alert("Ссылка скопирована!");
  };

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setOpen(true);
      setLoading(false);
    }, 300);
  };

  const buttonStyle = {
    background: colors.contacts.buttonColor,
    color: colors.contacts.color,
    fontWeight: "bold",
    textTransform: "none",
    borderRadius: 3,
    py: 1.2,
    boxShadow: colors.contacts.boxShadow,
    "&:hover": { background: colors.contacts.buttonColor },
    "&:active": { transform: "scale(0.97)" },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 1.5,
    px: 2,
  };

  const iconSize = 24;

  return (
    <>
      {/* Кнопка вызова свайпера */}
      <Box sx={{ width: "100%", mt: 1, mb: 3 }}>
        <Button
          onClick={handleClick}
          fullWidth
          sx={{
            ...buttonStyle,
            justifyContent: "center",
          }}
        >
          {loading ? <ThemedCircularProgress size={24} /> : "Поделиться"}
        </Button>
      </Box>

      {/* Swipeable Drawer */}
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
        ModalProps={{ keepMounted: true, sx: { zIndex: 1500 } }}
        PaperProps={{
          sx: {
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(6px)",
            boxShadow: "none",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            py: 3,
          },
        }}
      >
        {/* Кнопка закрытия */}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.3)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Пульсирующая TelegramIcon */}
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: colors.backgroundTemplate.background,
            fontSize: 64,
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        >
          <TelegramIcon
            sx={{
              fontSize: 64,
              color: colors.profileHeader.typographyColor,
              animation: "pulse 1.5s ease-in-out infinite", // если пульсирующая анимация нужна
            }}
          />
        </Box>

        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
        `}</style>

        {/* Кнопки шаринга в стиле Contacts */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Button
            href={`https://t.me/share/url?url=${encodeURIComponent(url)}`}
            target="_blank"
            fullWidth
            sx={buttonStyle}
            startIcon={<TelegramIcon sx={{ fontSize: iconSize }} />}
          >
            Telegram
          </Button>

          <Button
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            fullWidth
            sx={buttonStyle}
            startIcon={<WhatsAppIcon sx={{ fontSize: iconSize }} />}
          >
            WhatsApp
          </Button>

          <Button
            href={`https://vk.com/share.php?url=${encodeURIComponent(url)}`}
            target="_blank"
            fullWidth
            sx={buttonStyle}
            startIcon={<ContentCopyIcon sx={{ fontSize: iconSize }} />}
          >
            VK
          </Button>

          <Button
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            fullWidth
            sx={buttonStyle}
            startIcon={<FacebookIcon sx={{ fontSize: iconSize }} />}
          >
            Facebook
          </Button>

          <Button
            href={`mailto:?subject=Ссылка&body=${encodeURIComponent(url)}`}
            fullWidth
            sx={buttonStyle}
            startIcon={<MailIcon sx={{ fontSize: iconSize }} />}
          >
            Email
          </Button>

          <Button
            onClick={handleCopy}
            fullWidth
            sx={buttonStyle}
            startIcon={<ContentCopyIcon sx={{ fontSize: iconSize }} />}
          >
            Скопировать ссылку
          </Button>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
