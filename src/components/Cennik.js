import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PricingContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
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

const TitleContainer = styled.div`
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PricingList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 800px;
`;

const PricingItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${(props) => props.theme.cardBackground};
  box-shadow: 0 4px 8px ${(props) => props.theme.cardShadow};
  border-radius: 8px;
  transition: transform 0.3s, background 0.3s, color 0.3s; // Dodaj transition dla koloru

  &:hover {
    transform: translateY(-5px);
    background: ${(props) => props.theme.hoverBackground};
    color: ${(props) => props.theme.tooltipText}; // Dodaj transition dla koloru
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

const ProductDescription = styled.span`
  flex: 1;
  text-align: left;
  overflow-wrap: break-word; // Umożliwia łamanie długich słów
  transition: color 0.3s; // Dodaj transition dla koloru
`;

const ProductPrice = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.priceColor};
  white-space: nowrap; // Zapobiega łamaniu tekstu w cenie
  transition: color 0.3s; // Dodaj transition dla koloru

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    align-self: flex-end; // Wyrównuje cenę do końca w widoku mobilnym
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
    margin-bottom: 0;
    margin-left: 0;
    text-align: center;
    display: flex;
    align-items: center;
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
          <ProductDescription>Wynajem namiotu na 60 osób</ProductDescription>
          <ProductPrice>900 PLN</ProductPrice>
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <ProductDescription>Wynajem namiotu na 30 osób</ProductDescription>
          <ProductPrice>800 PLN</ProductPrice>
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <ProductDescription>Wynajem stołu dla 6 osób</ProductDescription>
          <ProductPrice>25 PLN</ProductPrice>
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <ProductDescription>Wynajem krzesła</ProductDescription>
          <ProductPrice>10 PLN</ProductPrice>
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <ProductDescription>Wynajem trawy</ProductDescription>
          <ProductPrice>gratis</ProductPrice>
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <ProductDescription>Wynajem oświetlenia nocnego</ProductDescription>
          <ProductPrice>gratis</ProductPrice>
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <ProductDescription>Wynajem obrusów</ProductDescription>
          <ProductPrice>gratis</ProductPrice>
        </PricingItem>
        <PricingItem
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <ProductDescription>
            Transport, montaż i&nbsp;demontaż
          </ProductDescription>
          <ProductPrice>gratis</ProductPrice>
        </PricingItem>
      </PricingList>
    </PricingContainer>
  );
};

export default Cennik;
