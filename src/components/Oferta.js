import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import Cennik from "./Cennik";

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  background: ${({ active, theme }) =>
    active ? theme.linkHover : theme.background};
  color: ${({ active, theme }) => (active ? theme.background : theme.text)};
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
  margin: 0 1rem;

  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

// Użyj `aria-pressed` dla atrybutu aktywności
const TabButton = ({ isActive, onClick, children }) => (
  <Tab
    aria-pressed={isActive} // użyj aria-pressed dla dostępności
    onClick={onClick}
  >
    {children}
  </Tab>
);

const ContentContainer = styled.div`
  padding: 2rem 0;
`;

const Oferta = () => {
  const [activeTab, setActiveTab] = useState("Wizualna");

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
    <div id="oferta">
      <TabsContainer>
        <TabButton
          isActive={activeTab === "Wizualna"}
          onClick={() => setActiveTab("Wizualna")}
        >
          Wizualna
        </TabButton>
        <TabButton
          isActive={activeTab === "Cenowa"}
          onClick={() => setActiveTab("Cenowa")}
        >
          Cenowa
        </TabButton>
      </TabsContainer>
      <ContentContainer>
        {activeTab === "Wizualna" && <Gallery theme={theme} />}
        {activeTab === "Cenowa" && <Cennik theme={theme} />}
      </ContentContainer>
    </div>
  );
};

export default Oferta;
