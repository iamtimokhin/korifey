import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../context/context";
import themes from "../data/colors";

export default function ScrollProgress() {
  const { currentTheme } = useContext(ThemeContext);
  const colors = themes[currentTheme];
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 4,
        width: `${scrollProgress}%`,
        backgroundColor: colors.contacts.buttonColor,
        zIndex: 2000,
        transition: "width 0.1s ease-out",
      }}
    />
  );
}
