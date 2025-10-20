const themes = {
  midnightOcean: {
    backgroundTemplate: {
      background: "linear-gradient(180deg, #0A0A20, #14144C)", // глубокий океанический фон
    },
    card: {
      background: "#1C1C50",
      color: "white",
      boxShadow: "0px 6px 25px rgba(0,150,255,0.4)",
    },
    profileHeader: {
      boxBackground: "linear-gradient(45deg, #003366, #0066CC)",
      avatarBorder: "2px solid #1C1C50",
      typographyColor: "#80CFFF",
    },
    gradientRight:
      "linear-gradient(to right, rgba(0,102,204,0.6), rgba(0,102,204,0))",
    gradientLeft:
      "linear-gradient(to left, rgba(0,102,204,0.6), rgba(0,102,204,0))",
    statiscics: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#0077CC",
      typographyLabelColor: "#80CFFF",
    },
    advantages: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#0099FF",
      typographyLabelColor: "#80CFFF",
    },
    contacts: {
      buttonColor: "#00BFFF",
      color: "white",
      boxShadow: "0px 4px 15px rgba(0,191,255,0.5)",
      boxShadowHover: "#0077CC",
    },
    profileFooter: {
      typographyColor: "rgba(255,255,255,0.4)",
      hoverColor: "#00BFFF",
    },
    boxMarginBottom: 5,
  },

  darkSapphire: {
    backgroundTemplate: {
      background: "linear-gradient(180deg, #0B0B14, #1A1A2E)",
    },
    card: {
      background: "#1F1F3F",
      color: "white",
      boxShadow: "0px 6px 20px rgba(70,130,180,0.2)", // мягкий сапфир
    },
    profileHeader: {
      boxBackground: "linear-gradient(45deg, #4682B4, #4169E1)",
      avatarBorder: "2px solid #1F1F3F",
      typographyColor: "#B0C4DE",
    },
    gradientRight:
      "linear-gradient(to right, rgba(70,130,180,0.3), rgba(70,130,180,0))",
    gradientLeft:
      "linear-gradient(to left, rgba(70,130,180,0.3), rgba(70,130,180,0))",
    statiscics: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#4682B4",
      typographyLabelColor: "#B0C4DE",
    },
    advantages: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#4169E1",
      typographyLabelColor: "#B0C4DE",
    },
    contacts: {
      buttonColor: "#4682B4",
      color: "black",
      boxShadow: "0px 4px 12px rgba(70,130,180,0.2)",
      boxShadowHover: "#4169E1",
    },
    profileFooter: {
      typographyColor: "rgba(255,255,255,0.4)",
      hoverColor: "#4682B4",
    },
    boxMarginBottom: 5,
  },

  oceanBlue: {
    backgroundTemplate: {
      background: "linear-gradient(180deg, #141E30, #243B55)",
    },
    card: {
      background: "#1B2735",
      color: "white",
      boxShadow: "0px 6px 25px rgba(44,150,234,0.4)",
    },
    profileHeader: {
      boxBackground: "linear-gradient(45deg, #2C96EA, #3DD598)",
      avatarBorder: "2px solid #1B2735",
      typographyColor: "#9CAAB9",
    },
    gradientRight:
      "linear-gradient(to right, rgba(44,150,234,0.6), rgba(44,150,234,0))",
    gradientLeft:
      "linear-gradient(to left, rgba(44,150,234,0.6), rgba(44,150,234,0))",
    statiscics: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#2C96EA",
      typographyLabelColor: "#C9D6E4",
    },
    advantages: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#3DD598",
      typographyLabelColor: "#C9D6E4",
    },
    contacts: {
      buttonColor: "#2C96EA",
      color: "white",
      boxShadow: "0px 4px 15px rgba(44,150,234,0.4)",
      boxShadowHover: "#2380c7",
    },
    profileFooter: {
      typographyColor: "rgba(255,255,255,0.4)",
      hoverColor: "#2C96EA",
    },
    boxMarginBottom: 5,
  },

  darkNavy: {
    backgroundTemplate: {
      background: "linear-gradient(180deg, #0B0B1A, #1A1A2E)",
    },
    card: {
      background: "#1F1F3F",
      color: "white",
      boxShadow: "0px 6px 20px rgba(70,130,180,0.2)", // мягкий голубой
    },
    profileHeader: {
      boxBackground: "linear-gradient(45deg, #4682B4, #5F9EA0)",
      avatarBorder: "2px solid #1F1F3F",
      typographyColor: "#B0C4DE",
    },
    gradientRight:
      "linear-gradient(to right, rgba(70,130,180,0.4), rgba(70,130,180,0))",
    gradientLeft:
      "linear-gradient(to left, rgba(70,130,180,0.4), rgba(70,130,180,0))",
    statiscics: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#4682B4",
      typographyLabelColor: "#B0C4DE",
    },
    advantages: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#5F9EA0",
      typographyLabelColor: "#B0C4DE",
    },
    contacts: {
      buttonColor: "#4682B4",
      color: "black",
      boxShadow: "0px 4px 12px rgba(70,130,180,0.2)",
      boxShadowHover: "#5F9EA0",
    },
    profileFooter: {
      typographyColor: "rgba(255,255,255,0.4)",
      hoverColor: "#4682B4",
    },
    boxMarginBottom: 5,
  },
  darkBlue: {
    backgroundTemplate: {
      background: "linear-gradient(180deg, #0B0B1A, #1A1A2E)",
    },
    card: {
      background: "#1F1F3F",
      color: "white",
      boxShadow: "0px 6px 25px rgba(0,191,255,0.4)", // голубой блеск
    },
    profileHeader: {
      boxBackground: "linear-gradient(45deg, #00BFFF, #1E90FF)",
      avatarBorder: "2px solid #1F1F3F",
      typographyColor: "#87CEFA",
    },
    gradientRight:
      "linear-gradient(to right, rgba(0,191,255,0.6), rgba(0,191,255,0))",
    gradientLeft:
      "linear-gradient(to left, rgba(0,191,255,0.6), rgba(0,191,255,0))",
    statiscics: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#00BFFF",
      typographyLabelColor: "#87CEFA",
    },
    advantages: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#1E90FF",
      typographyLabelColor: "#87CEFA",
    },
    contacts: {
      buttonColor: "#00BFFF",
      color: "black",
      boxShadow: "0px 4px 15px rgba(0,191,255,0.4)",
      boxShadowHover: "#0099cc",
    },
    profileFooter: {
      typographyColor: "rgba(255,255,255,0.4)",
      hoverColor: "#00BFFF",
    },
    boxMarginBottom: 5,
  },
  oceanDark: {
    backgroundTemplate: {
      background: "linear-gradient(180deg, #0A0A1F, #101031)", // глубокий тёмный фон
    },
    card: {
      background: "#1B1B3C",
      color: "white",
      boxShadow: "0px 6px 25px rgba(0,70,180,0.5)", // мягкий синий блеск
    },
    profileHeader: {
      boxBackground: "linear-gradient(45deg, #003366, #0055AA)", // синий градиент
      avatarBorder: "2px solid #1B1B3C",
      typographyColor: "#66B2FF", // яркий, но не неоновый
    },
    gradientRight:
      "linear-gradient(to right, rgba(0,85,170,0.6), rgba(0,85,170,0))",
    gradientLeft:
      "linear-gradient(to left, rgba(0,85,170,0.6), rgba(0,85,170,0))",
    statiscics: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#004080",
      typographyLabelColor: "#66B2FF",
    },
    advantages: {
      paperBackground: "rgba(255,255,255,0.05)",
      typographyValueColor: "#0055AA",
      typographyLabelColor: "#66B2FF",
    },
    contacts: {
      buttonColor: "#00A0FF", // яркая кнопка
      color: "white",
      boxShadow: "0px 4px 15px rgba(0,160,255,0.5)",
      boxShadowHover: "#0077CC",
    },
    profileFooter: {
      typographyColor: "rgba(255,255,255,0.4)",
      hoverColor: "#00A0FF",
    },
    boxMarginBottom: 5,
  },
  oceanBreeze: {
    backgroundTemplate: {
      background: "linear-gradient(180deg, #0C2B4B, #1F4F7A)", // свежий морской фон
    },
    card: {
      background: "#1A3B60", // контрастный, но гармоничный
      color: "white",
      boxShadow: "0px 6px 25px rgba(30,120,200,0.4)",
    },
    profileHeader: {
      boxBackground: "linear-gradient(45deg, #338BC1, #3EC1D3)", // яркий градиент без неона
      avatarBorder: "2px solid #1A3B60",
      typographyColor: "#CFE8F5", // светлый голубой текст
    },
    gradientRight:
      "linear-gradient(to right, rgba(62,193,211,0.6), rgba(62,193,211,0))",
    gradientLeft:
      "linear-gradient(to left, rgba(62,193,211,0.6), rgba(62,193,211,0))",
    statiscics: {
      paperBackground: "rgba(255,255,255,0.07)",
      typographyValueColor: "#338BC1",
      typographyLabelColor: "#CFE8F5",
    },
    advantages: {
      paperBackground: "rgba(255,255,255,0.07)",
      typographyValueColor: "#3EC1D3",
      typographyLabelColor: "#CFE8F5",
    },
    contacts: {
      buttonColor: "#338BC1",
      color: "white",
      boxShadow: "0px 4px 15px rgba(30,120,200,0.4)",
      boxShadowHover: "#2A6B90",
    },
    profileFooter: {
      typographyColor: "rgba(255,255,255,0.5)",
      hoverColor: "#3EC1D3",
    },
    boxMarginBottom: 5,
  },
  brightOcean: {
    backgroundTemplate: {
      background: "linear-gradient(180deg, #0A1F33, #1B3B5A)", // насыщенный морской фон
    },
    card: {
      background: "#1F456D", // выделяется на фоне, но гармонично
      color: "white",
      boxShadow: "0px 6px 25px rgba(30,100,180,0.35)", // мягкий блеск
    },
    profileHeader: {
      boxBackground: "linear-gradient(45deg, #2C7EB8, #3ABFD9)", // яркий, но не неоновый градиент
      avatarBorder: "2px solid #1F456D",
      typographyColor: "#D0E7F7", // светлый голубой текст
    },
    gradientRight:
      "linear-gradient(to right, rgba(58,127,184,0.6), rgba(58,127,184,0))",
    gradientLeft:
      "linear-gradient(to left, rgba(58,127,184,0.6), rgba(58,127,184,0))",
    statiscics: {
      paperBackground: "rgba(255,255,255,0.08)",
      typographyValueColor: "#2C7EB8",
      typographyLabelColor: "#D0E7F7",
    },
    advantages: {
      paperBackground: "rgba(255,255,255,0.08)",
      typographyValueColor: "#3ABFD9",
      typographyLabelColor: "#D0E7F7",
    },
    contacts: {
      buttonColor: "#2C7EB8", // яркие кнопки
      color: "white",
      boxShadow: "0px 4px 15px rgba(44,150,234,0.35)",
      boxShadowHover: "#1B5F8A",
    },
    profileFooter: {
      typographyColor: "rgba(255,255,255,0.5)",
      hoverColor: "#3ABFD9",
    },
    boxMarginBottom: 5,
  },
};

export default themes;
