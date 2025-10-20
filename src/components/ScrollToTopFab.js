// components/ScrollToTopFab.jsx
import React, { useState, useEffect } from "react";
import { Fab, Zoom, Box } from "@mui/material";

export default function ScrollToTopFab() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowFab(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={showFab}>
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1500,
        }}
      >
        <Fab
          onClick={scrollToTop}
          sx={{
            width: 56,
            height: 56,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            color: "#1E90FF",
            "&:hover": { background: "rgba(255,255,255,0.25)" },
            animation: "rocketBounce 2s infinite",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          🚀
        </Fab>

        <style>{`
          @keyframes rocketBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </Box>
    </Zoom>
  );
}
