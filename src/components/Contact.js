import React from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../assets/4.avif";

const Contact = () => {
  return (
    <ContactContainer id="kontakt">
      <Title
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
      >
        Kontakt
      </Title>
      <CenteredContent>
        <ContentWrapper>
          <ImageContainer>
            <motion.img
              src={img}
              loading="lazy"
              alt="Contact"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </ImageContainer>
          <ContactInfo>
            <ContactItem
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9, rotate: -2 }}
            >
              <FaPhone />
              <a href="tel:+48531890827">
                <span>Telefon: 531 890 827</span>
              </a>
            </ContactItem>
            <ContactItem
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9, rotate: -2 }}
            >
              <FaEnvelope />
              <a href="mailto:mariusz1989poczta@wp.pl">
                <span>E-mail: mariusz1989poczta@wp.pl</span>
              </a>
            </ContactItem>
          </ContactInfo>
        </ContentWrapper>
      </CenteredContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  margin: 0 5rem 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  box-shadow: 0 10px 20px ${({ theme }) => theme.cardShadow};
  max-width: 100%;

  @media (max-width: 768px) {
    margin: 0 1rem 1.5rem;
    padding: 1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
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

const CenteredContent = styled.div`
  display: flex;
  justify-content: center; /* Wyśrodkowanie w poziomie */
  align-items: center; /* Wyśrodkowanie w pionie */
  height: 100%; /* Wysokość 100% kontenera rodzica */
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1000px; /* Maksymalna szerokość kontenera */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center; /* Wyśrodkowanie treści na mniejszych ekranach */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* Wyśrodkowanie zdjęcia */
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.cardShadow};
  cursor: pointer;
  transition: all 0.2s;

  svg {
    margin-right: 15px;
    color: ${({ theme }) => theme.linkHover};

    @media (max-width: 768px) {
      margin-right: 10px;
    }
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

export default Contact;
