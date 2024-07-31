import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PricingContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 5rem;
  border-radius: 15px;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding: 1rem;
  }
`;

// Kontener dla tytułu, aby przesunąć go na lewo
const TitleContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const PricingList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 600px;
`;

const PricingItem = styled(motion.li)`
  font-size: 1.25rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 4px 8px ${({ theme }) => theme.cardShadow};
  border-radius: 8px;
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

const MotionTitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 2rem;
  margin-left: 5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    margin-left: 0;
    text-align: center;
  }
`;

const Cennik = () => {
  return (
    <PricingContainer id="cennik">
      <TitleContainer>
        <MotionTitle
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cennik
        </MotionTitle>
      </TitleContainer>
      <PricingList
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Wynajem namiotu na 60 osób - 900 PLN
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Wynajem namiotu na 30 osób - 800 PLN
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Wynajem stołu dla 6 osób - 25 PLN
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Wynajem krzesła - 10 PLN
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Wynajem trawy - gratis
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          Wynajem oświetlenia nocnego - gratis
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          Wynajem obrusów - gratis
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          Transport, montaż i&nbsp;demontaż - gratis
        </PricingItem>
      </PricingList>
    </PricingContainer>
  );
};

export default Cennik;
