import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import Navbar from "./components/Navbar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
// import { EquipmentSlider } from "./components/EquipmentSlider";
import { CookieConsent } from "react-cookie-consent";
import { GlobalStyle } from "./styles/GlobalStyle";
import ScrollToTopButton from "./ScrollToTopButton";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  // Przechowywanie motywu w stanie komponentu
  const [theme, setTheme] = useState(() => {
    // Odczyt motywu z localStorage lub ustawienie domyślnego
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // Funkcja do zmiany motywu
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Zapisanie nowego motywu w localStorage
    updateBodyClass(newTheme);
  };

  // Funkcja do aktualizacji klasy na body w zależności od motywu
  const updateBodyClass = (theme) => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    document.body.classList.toggle("light-mode", theme === "light");
  };

  // Ustawienie klasy body po załadowaniu komponentu
  useEffect(() => {
    updateBodyClass(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppContainer id="start">
        <Navbar toggleTheme={toggleTheme} />
        <Header />
        <About />
        {/* <EquipmentSlider theme={theme} /> */}
        <Contact />
        <Gallery theme={theme} />
        {/* Przekazanie aktualnego motywu do Gallery */}
        <Footer />
        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            background: "#333",
            textAlign: "left",
            paddingBottom: "1rem",
            fontSize: "16px",
            fontFamily: "Gideon Roman",
          }}
          buttonStyle={{
            color: "#333",
            background: "#fff",
            fontSize: "18px",
            fontFamily: "Gideon Roman",
            marginRight: "1rem",
          }}
          buttonText="OK, rozumiem"
          expires={365}
        >
          "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
          Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
          indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
          dotyczących cookies oznacza, że będą one zamieszczane w Państwa
          urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
          ustawień dotyczących cookies."
        </CookieConsent>
        <ScrollToTopButton />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
