import React, { useEffect, useState } from "react";
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
  Preloader,
  Gallery,
  ThemeButton,
  CenterAlert,
  YandexMapEmbed,
  ScrollToTopFab,
  ScrollProgress,
} from "./components";
import profileData from "./data/profileData";
import footerData from "./data/footerData";
import themes from "./data/colors";
import ThemeContext from "./context/context";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved && themes[saved] ? saved : Object.keys(themes)[0];
  });

  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loading) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ScrollProgress />
      {loading ? (
        <Preloader />
      ) : (
        <BackgroundTemplate>
          <Card>
            <CenterAlert
              show={showAlert}
              message="Меня зовут Тимохин Филипп, и я рад, что вы заглянули на мою визитку"
              onClose={() => setShowAlert(false)}
            />

            <ProfileHeader {...profileData} />
            <DividerGradient direction="right" />
            <Content>
              <Statistics />
              <DividerGradient direction="left" />
              <Advantages />
              <DividerGradient direction="right" />
              <Gallery />
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
        </BackgroundTemplate>
      )}
    </ThemeContext.Provider>
  );
}
