// CenterAlert.jsx
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function CenterAlert({ message, show, onClose }) {
  const [render, setRender] = useState(show);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setRender(true);
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!render) return null;

  return (
    <Box
      onClick={onClose} // <-- закрытие по клику
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1400,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        cursor: "pointer", // чтобы показать интерактивность
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 300,
          minHeight: 140,
          px: 4,
          py: 3,
          borderRadius: 6,
          background:
            "linear-gradient(135deg, rgba(44,150,234,0.25), rgba(44,150,234,0.1))",
          border: "1px solid rgba(44,150,234,0.3)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 16,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          component="span"
          sx={{
            display: "inline-block",
            animation: "wave 1.5s infinite",
            transformOrigin: "70% 70%",
          }}
        >
          👋
        </Box>
        {message}
      </Box>

      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
          70% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </Box>
  );
}
