import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { CardHeader, Avatar, Box, Typography } from "@mui/material";
import themes from "../data/colors";
import AvatarSwiper from "./AvatarSwiper";
import ThemeContext from "../context/context";

function ProfileHeader({ image, name, icon: Icon, status, subImage }) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <CardHeader
        avatar={
          <Box
            onClick={handleOpen}
            sx={{
              p: "2px",
              borderRadius: "50%",
              background: colors.profileHeader.boxBackground,
              display: "inline-flex",
              cursor: "pointer",
            }}
          >
            <Avatar
              src={image}
              sx={{
                width: 60,
                height: 60,
                border: colors.profileHeader.avatarBorder,
              }}
            />
          </Box>
        }
        title={
          <Box display="flex" alignItems="center">
            <Typography fontWeight="bold" sx={{ mr: 1, fontSize: 18 }}>
              {name}
            </Typography>
            <Box
              component="span"
              sx={{
                ml: 0.5,
                display: "flex",
                alignItems: "center",
                animation: "pulseRotate 2s infinite",
                transformOrigin: "50% 50%",
              }}
            >
              <Icon width={18} height={18} />
            </Box>
          </Box>
        }
        subheader={
          <Typography
            variant="body2"
            sx={{ color: colors.profileHeader.typographyColor }}
          >
            {status}
          </Typography>
        }
      />
      <AvatarSwiper
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        image={image}
        subImage={subImage}
        name={name}
        status={status}
        Icon={Icon}
      />

      {/* Анимация для иконки */}
      <style>{`
        @keyframes pulseRotate {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(5deg); }
          50% { transform: scale(1.2) rotate(-5deg); }
          75% { transform: scale(1.1) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </>
  );
}

export default ProfileHeader;
