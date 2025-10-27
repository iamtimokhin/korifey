import React, { useState, useEffect } from "react";
import {
  Card,
  BackgroundTemplate,
  ProfileHeader,
  Content,
  DividerGradient,
  Statistics,
  Advantages,
  Contacts,
  ProfileFooter,
  ThemeButton,
  YandexMapEmbed,
  ScrollToTopFab,
  ScrollProgress,
  PartnersSection,
} from "./components";
import profileData from "./data/profileData";
import footerData from "./data/footerData";
import themes from "./data/colors";
import ThemeContext from "./context/context";
import { motion } from "framer-motion";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved && themes[saved] ? saved : Object.keys(themes)[0];
  });

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ScrollProgress />
      <BackgroundTemplate>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <ProfileHeader {...profileData} />
            <DividerGradient direction="right" />
            <Content>
              <Statistics />
              <DividerGradient direction="left" />
              <Advantages />
              <DividerGradient direction="right" />
              <PartnersSection />
              <DividerGradient direction="left" />
              <Contacts />
              <DividerGradient direction="left" />
              <YandexMapEmbed />
              <DividerGradient direction="right" />
              <ThemeButton />
              <DividerGradient direction="left" />
              <ProfileFooter {...footerData} />
            </Content>
            <ScrollToTopFab />
          </Card>
        </motion.div>
      </BackgroundTemplate>
    </ThemeContext.Provider>
  );
}
