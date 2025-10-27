import React, { useContext, useMemo, useState } from "react";
import {
  SwipeableDrawer,
  Box,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";
import ThemedCircularProgress from "./ThemedCircularProgress";
import SaveContactButton from "./SaveContactButton";

const PartnerImageSwiper = React.memo(function PartnerImageSwiper({
  open,
  onClose,
  onOpen,
  image,
  name,
  role,
  description,
  link,
  contact, // { name, phone }
}) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const [startY, setStartY] = useState(null);
  const [loadingLink, setLoadingLink] = useState(false);

  // Свайп вниз для закрытия
  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    if (!startY) return;
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 100) onClose();
    setStartY(null);
  };

  // Звонок
  const handleCall = () => {
    if (contact?.phone) window.location.href = `tel:${contact.phone}`;
  };

  // WhatsApp
  const handleWhatsApp = () => {
    if (contact?.phone) {
      const phone = contact.phone.replace(/\D/g, "");
      window.open(`https://wa.me/${phone}`, "_blank");
    }
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
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          p: 2,
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

      {/* Аватар с пульсирующей тенью как в AvatarSwiper */}
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          position: "relative",
          mb: 2,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            boxShadow: "0 0 0 0 rgba(39,135,245,0.7)",
            animation: "pulseShadow 2s infinite",
            zIndex: 0,
          }}
        />
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
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            position: "relative",
            zIndex: 1,
            display: "block",
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

      {/* Контент: имя, роль, описание, кнопки */}
      <Box
        sx={{
          width: "90%",
          maxWidth: 360,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 1,
          animation: "fadeInUp 0.3s ease",
          "@keyframes fadeInUp": {
            "0%": { opacity: 0, transform: "translateY(50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Typography
          variant="h6"
          color={colors.profileHeader.typographyColor}
          fontWeight="bold"
          mb={1}
        >
          {name}
        </Typography>

        {role && (
          <Typography
            variant="subtitle1"
            sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}
          >
            {role}
          </Typography>
        )}

        {description && (
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}
          >
            {description}
          </Typography>
        )}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {link && (
            <Button
              onClick={() => {
                if (loadingLink) return;
                setLoadingLink(true);
                setTimeout(() => {
                  window.open(link, "_blank");
                  setLoadingLink(false);
                }, 300);
              }}
              disabled={loadingLink}
              sx={{
                minHeight: 48,
                background: colors.contacts.buttonColor,
                color: colors.contacts.color,
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 3,
                boxShadow: colors.contacts.boxShadow,
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

          {contact?.phone && (
            <>
              <Button
                onClick={handleCall}
                sx={{
                  py: 1.2,
                  background: colors.contacts.buttonColor,
                  color: colors.contacts.color,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: 3,
                  boxShadow: colors.contacts.boxShadow,
                }}
              >
                Позвонить
              </Button>

              <Button
                onClick={handleWhatsApp}
                sx={{
                  py: 1.2,
                  background: colors.contacts.buttonColor,
                  color: colors.contacts.color,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: 3,
                  boxShadow: colors.contacts.boxShadow,
                  mb: -1,
                }}
              >
                Написать в WhatsApp
              </Button>
            </>
          )}

          {contact && (
            <SaveContactButton
              contact={contact}
              sx={{
                width: "100%",
                minHeight: 48,
                background: colors.contacts.buttonColor,
                color: colors.contacts.color,
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: 3,
                boxShadow: colors.contacts.boxShadow,
              }}
            />
          )}
        </Box>
      </Box>
    </SwipeableDrawer>
  );
});

export default PartnerImageSwiper;
