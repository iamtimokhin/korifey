import React, { useState, useCallback, useContext, useMemo } from "react";
import {
  ImageList,
  ImageListItem,
  Typography,
  Box,
  Button,
} from "@mui/material";
import examples from "../data/examples";
import GalleryImageSwiper from "./GalleryImageSwiper";
import themes from "../data/colors";
import ThemeContext from "../context/context";
import ThemedCircularProgress from "./ThemedCircularProgress";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const handleOpen = useCallback((img, title) => {
    if (!img || !title) return; // безопасная проверка
    setSelectedImage({ img, title });
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedImage(null);
  }, []);

  const handleButtonClick = () => {
    if (loading) return; // предотвращаем повторное нажатие
    setLoading(true);
    setTimeout(() => {
      window.open("https://www.avito.ru/brands/timokhin", "_blank"); // ссылка на Авито
      setLoading(false);
    }, 500);
  };

  // безопасная проверка, что examples — массив
  const galleryItems = Array.isArray(examples) ? examples : [];

  return (
    <Box sx={{ mb: colors.boxMarginBottom }}>
      <Typography
        variant="subtitle1"
        mb={1.5}
        fontWeight="bold"
        color={colors.profileHeader.typographyColor}
        sx={{ textAlign: "center" }}
      >
        Товары, которые я продаю на Авито
      </Typography>

      <ImageList cols={2} gap={12}>
        {galleryItems.map((item) => (
          <ImageListItem key={item.img}>
            <Box
              sx={{
                width: "100%",
                height: 160,
                overflow: "hidden",
                borderRadius: 2,
                cursor: "pointer",
              }}
              onClick={() => handleOpen(item.img, item.title)}
            >
              <img
                src={item.img}
                alt={item.title || ""}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Box>
            <Typography variant="subtitle2" mt={1}>
              {item.description || ""}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>

      {/* Кнопка под галереей */}
      <Box sx={{ textAlign: "center", mt: 2, mb: -2 }}>
        <Button
          onClick={handleButtonClick}
          fullWidth
          disabled={loading}
          sx={{
            background: colors.contacts.buttonColor,
            color: colors.contacts.color,
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: 3,
            py: 1.2,
            px: 3,
            boxShadow: colors.contacts.boxShadow,
            transition: "transform 0.1s",
            "&:hover": { background: colors.contacts.buttonColor },
            "&:active": {
              background: colors.contacts.buttonColor,
              transform: "scale(0.97)",
            },
            "&.Mui-disabled": {
              background: colors.contacts.buttonColor,
              color: colors.contacts.color,
              boxShadow: colors.contacts.boxShadow,
            },
            position: "relative",
          }}
        >
          {loading ? <ThemedCircularProgress size={24} /> : "Перейти на Авито"}
        </Button>
      </Box>

      {/* Галерея свайпер */}
      {selectedImage?.img && selectedImage?.title && (
        <GalleryImageSwiper
          open={open}
          image={selectedImage.img}
          alt={selectedImage.title}
          onOpen={() => setOpen(true)}
          onClose={handleClose}
        />
      )}
    </Box>
  );
}
