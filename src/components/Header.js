import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import lowResImage from "../assets/8.avif"; // Niska jakość
import highResImage from "../assets/1.avif"; // Wysoka jakość

// Stylizacja nagłówka z efektem parallax
const HeaderContainer = styled.header`
  height: 100vh;
  /* background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;  */
  background: center center / contain no-repeat fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 5rem;
  margin: 1rem 5rem 2rem;
  border-radius: 15px;
  overflow: hidden; /* Aby elementy nie wychodziły poza obszar nagłówka */

  @media (max-width: 768px) {
    background-size: cover;
    margin: 0 1rem 1.5rem;
    padding: 3.5rem 1rem 0;
  }
`;

const HeaderContent = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: visible; /* Umożliwienie widoczności tooltipa */
  z-index: 1; /* Upewnij się, że kontent jest na wierzchu */

  @media (max-width: 768px) {
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translate(-50%, -50%);
    animation: pulse 4s infinite;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.5;
    }
  }
`;

const Title = styled.h1`
  display: flex;
  font-size: 3rem;
  margin: 0;
  font-family: "Arial", sans-serif;
  color: #fff;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    text-wrap: balance;
  }

  &:hover {
    color: #ff0; /* Zmiana koloru na żółty po najechaniu */
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: -5rem; /* Dalsze oddalenie tooltipa od napisu */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  z-index: 1000; /* Upewnij się, że tooltip jest na wierzchu */

  &::after {
    content: "";
    position: absolute;
    bottom: -1.25rem; /* Dostosowany ogonek tooltipa */
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
  }
`;

const TooltipWrapper = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

const AnimatedLetter = styled(motion.span)`
  display: inline-block;
`;

const Promo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 1.5rem;
  line-height: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 4rem;
  width: fit-content; /* Dostosowanie szerokości do rodzica */

  @media (max-width: 768px) {
    line-height: 2.3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  z-index: 1; /* Upewnij się, że przycisk jest na wierzchu */

  a {
    display: inline-block;
    margin: 0 10px; /* Dodanie marginesu do linków */
  }

  button {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    border: none;
    padding: 15px 25px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    font-size: 1rem;

    @media (max-width: 768px) {
      padding: 10px 20px; /* Dostosowanie paddingu dla mniejszych ekranów */
      font-size: 0.9rem; /* Dostosowanie rozmiaru tekstu dla mniejszych ekranów */
    }

    &:hover {
      background: ${({ theme }) => theme.hoverBackground};
      transform: scale(1.05);
    }
  }
`;

const sentence = "Namioty imprezowe";
const letterVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export const Header = ({ theme }) => {
  const [bgImage, setBgImage] = useState(lowResImage);

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => setBgImage(highResImage);
  }, []);

  return (
    <HeaderContainer style={{ backgroundImage: `url(${bgImage})` }}>
      <HeaderContent
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TooltipWrapper>
          <Title>
            {sentence.split("").map((letter, index) => (
              <AnimatedLetter
                key={index}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </AnimatedLetter>
            ))}
          </Title>
          <Tooltip>Najlepsze namioty na każdą okazję!</Tooltip>
        </TooltipWrapper>
      </HeaderContent>
      <Promo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Wynajem namiotów imprezowych -<br /> Komfort i styl na Twojej imprezie!
      </Promo>
      <ButtonContainer>
        <a href="tel:+48531890827">
          <button aria-label="Numer telefonu do firmy">Zadzwoń!</button>
        </a>
      </ButtonContainer>
    </HeaderContainer>
  );
};
