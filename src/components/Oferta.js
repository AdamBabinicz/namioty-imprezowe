import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import Cennik from "./Cennik";
import { motion } from "framer-motion";

// Styled components
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: -0.7rem;
  }
`;

const Tab = styled.button`
  background: ${({ $active, theme }) =>
    $active ? theme.text : theme.background};
  color: ${({ $active, theme }) => ($active ? theme.background : theme.text)};
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s, transform 0.3s;
  margin: 0 1rem;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21);

  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
    transform: scale(1.05);
  }
`;

const TabButton = ({ isActive, onClick, children }) => (
  <Tab
    aria-pressed={isActive}
    onClick={onClick}
    $active={isActive} // użyj transient prop `$active`
  >
    {children}
  </Tab>
);

const ContentContainer = styled.div`
  padding: 2rem 0;
`;

const StyledHeading = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  margin-left: 12.3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    margin-left: 0;
    text-align: center;
  }
`;

const Oferta = ({ theme }) => {
  const [activeTab, setActiveTab] = useState("Wizualna");

  return (
    <>
      <StyledHeading
        id="oferta"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
      >
        Oferta
      </StyledHeading>

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
    </>
  );
};

export default Oferta;
