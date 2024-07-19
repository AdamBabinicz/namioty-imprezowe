import React from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../assets/2.gif";

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
      <ImageContainer>
        <motion.img
          src={img}
          alt="..."
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </ImageContainer>
      <ContactInfo>
        <ContactItem
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          <FaPhone />
          <a href="tel:+48531890827">
            <span>Telefon: 531 890 827</span>
          </a>
        </ContactItem>
        <ContactItem
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          <FaEnvelope />
          <span>
            <a href="mailto:mariusz1989poczta@wp.pl">
              E-mail: mariusz1989poczta@wp.pl
            </a>
          </span>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  margin: 0 5rem 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 2rem;

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
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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
