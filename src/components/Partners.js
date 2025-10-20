import React, { useState, useMemo, useContext } from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import PartnerImageSwiper from "./PartnerImageSwiper";
import themes from "../data/colors";
import ThemeContext from "../context/context";
import partnersData from "../data/partners";
import ThemedCircularProgress from "./ThemedCircularProgress";

export default function Partners() {
  const [open, setOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2); // показываем по 2 партнера
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const handleOpen = (partner) => {
    setSelectedPartner(partner);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedPartner(null);
    setOpen(false);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleHide = () => {
    setVisibleCount(2);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="subtitle1"
        mt={1.5}
        mb={2}
        fontWeight="bold"
        color={colors.profileHeader.typographyColor}
        sx={{ textAlign: "center" }}
      >
        Галерея партнёров <span>{partnersData.length}</span>
      </Typography>

      <ImageList cols={2} gap={12}>
        {partnersData.slice(0, visibleCount).map((partner) => (
          <ImageListItem key={partner.id}>
            <Box
              onClick={() => handleOpen(partner)}
              sx={{
                cursor: "pointer",
                borderRadius: 2,
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={partner.img}
                alt={partner.name}
                sx={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
              <Typography variant="subtitle2" fontWeight="bold" noWrap mt={1}>
                {partner.name}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {partner.role}
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ textAlign: "center", mt: 2, mb: -2 }}>
        {/* Кнопка "Показать еще" */}
        {/* Кнопка "Показать еще" */}
        {visibleCount < partnersData.length && (
          <Button
            fullWidth
            disabled={loading} // блокировка
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                handleShowMore();
                setLoading(false);
              }, 500);
            }}
            sx={{
              background: colors.contacts.buttonColor,
              color: colors.contacts.color,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              py: 1.2,
              boxShadow: colors.contacts.boxShadow,
              transition: "transform 0.1s",
              "&:hover": { background: colors.contacts.buttonColor },
              "&:active": { transform: "scale(0.97)" },
              "&.Mui-disabled": {
                background: colors.contacts.buttonColor,
                color: colors.contacts.color,
                boxShadow: colors.contacts.boxShadow,
              },
              position: "relative",
              mb: 1,
            }}
          >
            {loading ? <ThemedCircularProgress size={24} /> : "Показать ещё"}
          </Button>
        )}

        {/* Кнопка "Скрыть" */}
        {visibleCount > 2 && (
          <Button
            fullWidth
            disabled={loadingVisible} // блокировка
            onClick={() => {
              setLoadingVisible(true);
              setTimeout(() => {
                handleHide();
                setLoadingVisible(false);
              }, 500);
            }}
            sx={{
              background: colors.contacts.buttonColor,
              color: colors.contacts.color,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              py: 1.2,
              mb: 1,
              boxShadow: colors.contacts.boxShadow,
              transition: "transform 0.1s",
              "&:hover": { background: colors.contacts.buttonColor },
              "&:active": { transform: "scale(0.97)" },
              "&.Mui-disabled": {
                background: colors.contacts.buttonColor,
                color: colors.contacts.color,
                boxShadow: colors.contacts.boxShadow,
              },
              position: "relative",
            }}
          >
            {loadingVisible ? <ThemedCircularProgress size={24} /> : "Скрыть"}
          </Button>
        )}
      </Box>
      {selectedPartner && (
        <PartnerImageSwiper
          open={open}
          onClose={handleClose}
          onOpen={() => setOpen(true)}
          image={selectedPartner.img}
          name={selectedPartner.name}
          role={selectedPartner.role}
          description={selectedPartner.description}
          link={selectedPartner.link}
        />
      )}
    </Box>
  );
}
