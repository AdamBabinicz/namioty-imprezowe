import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import Navbar from "./components/Navbar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import { EquipmentSlider } from "./components/EquipmentSlider";
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
        <CookieConsent>
          Ta strona korzysta z plików cookie, aby zapewnić najlepszą jakość
          korzystania z niej.
        </CookieConsent>
        <ScrollToTopButton />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
