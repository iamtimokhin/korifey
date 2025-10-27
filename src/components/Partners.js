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
  const [visibleCount, setVisibleCount] = useState(2);
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

  const handleShowMore = () => setVisibleCount((prev) => prev + 2);
  const handleHide = () => setVisibleCount(2);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="subtitle1"
        mt={1.5}
        mb={1}
        fontWeight="bold"
        color={colors.profileHeader.typographyColor}
        sx={{ textAlign: "center" }}
      >
        Наша команда: <span>{partnersData.length} человек</span>
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: colors.profileHeader.typographyColor,
          mb: 2,
        }}
      >
        Чтобы связаться с сотрудником, кликните по фотографии
      </Typography>

      <ImageList cols={2} gap={10} sx={{ width: "100%", height: "auto" }}>
        {partnersData.slice(0, visibleCount).map((partner) => (
          <ImageListItem key={partner.id}>
            <Box
              sx={{
                width: 100,
                height: 100,
                mx: "auto",
                p: "2px",
                borderRadius: "50%",
                background: colors.profileHeader.boxBackground,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => handleOpen(partner)}
            >
              <Box
                component="img"
                src={partner.img}
                alt={partner.name}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Typography
              variant="subtitle2"
              fontWeight="bold"
              mt={0.5}
              fontSize="0.85rem"
              textAlign="center"
            >
              {partner.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{ opacity: 0.7, display: "block", textAlign: "center" }}
            >
              {partner.role}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ textAlign: "center", mt: 2, mb: -2 }}>
        {visibleCount < partnersData.length && (
          <Button
            fullWidth
            disabled={loading}
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

        {visibleCount > 2 && (
          <Button
            fullWidth
            disabled={loadingVisible}
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
              position: "relative",
            }}
          >
            {loadingVisible ? <ThemedCircularProgress size={24} /> : "Скрыть"}
          </Button>
        )}
      </Box>

      {/* Свайпер партнёра */}
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
          contact={{
            name: selectedPartner.name,
            phone: selectedPartner.tel,
            email: selectedPartner.email,
          }}
        />
      )}
    </Box>
  );
}
