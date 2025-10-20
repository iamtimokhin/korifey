import React, { useContext, useMemo, useState } from "react";
import { Typography, Stack, Button } from "@mui/material";
import ThemeContext from "../context/context";
import themes from "../data/colors";
import contacts from "../data/contacts";
import profileData from "../data/profileData";
import SaveContactButton from "./SaveContactButton";
import ThemedCircularProgress from "./ThemedCircularProgress";
import ShareButton from "./ShareButton";

function Contacts() {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  // состояние для отслеживания загрузки по каждой кнопке
  const [loadingIndex, setLoadingIndex] = useState(null);

  const handleClick = (url, index) => {
    if (loadingIndex !== null) return; // чтобы не кликали несколько раз подряд
    setLoadingIndex(index);
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLoadingIndex(null);
    }, 500); // имитация загрузки
  };

  return (
    <>
      <Typography
        variant="subtitle1"
        mb={1.5}
        fontWeight="bold"
        color={colors.profileHeader.typographyColor}
        sx={{ textAlign: "center" }}
      >
        Мои контакты
      </Typography>

      <Stack spacing={1} sx={{ mb: 3 }}>
        {contacts.map((link, index) => (
          <Button
            key={link.title}
            fullWidth
            onClick={() => handleClick(link.url, index)}
            disabled={loadingIndex === index} // блокировка при загрузке
            sx={{
              background: colors.contacts.buttonColor,
              color: colors.contacts.color,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              py: 1.2,
              boxShadow: colors.contacts.boxShadow,
              transition: "transform 0.1s", // плавная анимация нажатия
              "&:hover": {
                background: colors.contacts.buttonColor, // убрали эффект hover
              },
              "&:active": {
                background: colors.contacts.buttonColor,
                transform: "scale(0.97)", // лёгкая анимация нажатия
              },
              "&.Mui-disabled": {
                background: colors.contacts.buttonColor,
                color: colors.contacts.color,
                boxShadow: colors.contacts.boxShadow,
              },
            }}
          >
            {loadingIndex === index ? (
              <ThemedCircularProgress size={24} />
            ) : (
              link.title
            )}
          </Button>
        ))}
        <SaveContactButton contact={profileData} />
        <ShareButton />
      </Stack>
    </>
  );
}

export default Contacts;
