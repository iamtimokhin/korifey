import React, { useState, useContext, useMemo } from "react";
import { Button, Box } from "@mui/material";
import themes from "../data/colors";
import ThemeContext from "../context/context";
import ThemedCircularProgress from "./ThemedCircularProgress";

function SaveContactButton({ contact }) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const { name, phone, email } = contact;
      const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
END:VCARD`;

      const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${name}.vcf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setLoading(false);
    }, 800);
  };

  return (
    <Box sx={{ width: "100%", mt: 1, mb: 3 }}>
      <Button
        onClick={handleSave}
        fullWidth
        disabled={loading} // блокировка при загрузке
        sx={{
          background: colors.contacts.buttonColor,
          color: colors.contacts.color,
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: 3,
          py: 1.2,
          boxShadow: colors.contacts.boxShadow,
          position: "relative",
        }}
      >
        {loading ? <ThemedCircularProgress size={24} /> : "Сохранить контакт"}
      </Button>
    </Box>
  );
}

export default SaveContactButton;
