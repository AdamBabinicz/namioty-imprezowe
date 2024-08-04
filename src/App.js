import React, { useState, useEffect, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import ScrollToTopButton from "./ScrollToTopButton";
import { Footer } from "./components/Footer";
import image from "./assets/8.avif";
import Oferta from "./components/Oferta";
import Gallery from "./components/Gallery";

const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const CookieConsent = lazy(() => import("react-cookie-consent"));

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #f0f0f0;
  font-size: 1.5rem;
  color: #333;
  background: url(${image}) center center/contain no-repeat;

  @media (min-width: 460px) {
    background: url(${image}) center center/20% no-repeat;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    updateBodyClass(newTheme);
  };

  const updateBodyClass = (theme) => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    document.body.classList.toggle("light-mode", theme === "light");
  };

  useEffect(() => {
    updateBodyClass(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppContainer id="start">
        <Suspense
          fallback={
            <LoadingContainer>
              {/* Możesz również dodać tekst tutaj */}
            </LoadingContainer>
          }
        >
          <Navbar toggleTheme={toggleTheme} />
          <Header />
          <About />
          <Oferta theme={theme} /> {/* Dodaj nowy komponent tutaj */}
          <Contact />
          <Footer />
          <CookieConsent
            debug={true}
            location="bottom"
            style={{
              background: "#333",
              textAlign: "left",
              paddingBottom: "1rem",
              fontSize: "1rem",
              fontFamily: "Gideon Roman",
            }}
            buttonStyle={{
              color: "#333",
              background: "#fff",
              fontSize: "1.125rem",
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
        </Suspense>
        <ScrollToTopButton />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
