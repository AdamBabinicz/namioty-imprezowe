import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import lowResImage from "../assets/8.avif";
import highResImage from "../assets/1.avif";
import mobileImage from "../assets/2.avif";

const HeaderContainer = styled.header`
  height: 100vh;
  background: center center / cover no-repeat fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 5rem;
  margin: 1rem 5rem 2rem;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 768px) {
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
  overflow: visible;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 1.3rem;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    text-wrap: balance;
  }

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: -5rem;
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
  z-index: 1000;

  &::after {
    content: "";
    position: absolute;
    bottom: -1.21rem;
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
  width: fit-content;

  @media (max-width: 768px) {
    line-height: 2.3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 3rem;
    width: 100%;
    padding: 0;
  }

  a {
    display: inline-block;
    margin: 0 20px;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }
  }

  button {
    background: #333; /* Stałe ciemne tło */
    color: #f0f0f0; /* Stały jasny tekst */
    border: none;
    padding: 15px 40px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 1.3rem;
      width: 100%;
      margin: 0;
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
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage(mobileImage);
      } else {
        const img = new Image();
        img.src = highResImage;
        img.onload = () => setBgImage(highResImage);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
