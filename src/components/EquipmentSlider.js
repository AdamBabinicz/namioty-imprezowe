import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Stylizacja kontenera slidera
const SliderContainer = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: relative; /* Umożliwia umiejscowienie strzałek wewnątrz kontenera */

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.text};
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    transition: color 0.3s;
  }
`;

// Stylizacja slajdów
const EquipmentSlide = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  img {
    width: 100%;
    max-width: 600px; /* Ustawienie maksymalnej szerokości dla zdjęć */
    /* height: auto; */
    height: 400px;
    border-radius: 15px;
    margin-bottom: 1rem;
    object-fit: cover;
    filter: brightness(80%);
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      transform: scale(1.05);
      filter: brightness(100%);
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    transition: color 0.3s;
  }
`;

// Dane slajdów
const slides = [
  { src: "/assets/1.gif", description: "Namiot 1", price: "100 zł" },
  { src: "/assets/16.jpg", description: "Namiot 2", price: "200 zł" },
  { src: "/assets/4.gif", description: "Namiot 3", price: "300 zł" },
];

// Ustawienia slidera
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true, // Dodanie strzałek nawigacyjnych
  appendDots: (dots) => <DotsContainer>{/* <ul>{dots}</ul> */}</DotsContainer>,
  customPaging: (i) => (
    <Dot
      style={{
        background: "#333",
      }}
    />
  ),
};

// Stylizacja kontenera kropek
const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 10px; /* Odstęp między kropkami */
  }

  li {
    margin: 0;
  }
`;

// Stylizacja kropki
const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary}; /* Kolor po najechaniu */
  }
`;

// Stylizacja strzałek
const Arrow = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* background: ${({ theme }) => theme.body}; */
  /* border: 2px solid ${({ theme }) => theme.text}; */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 1;
    /* transform: scale(1.1); */
  }

  svg {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
  }

  &.slick-prev {
    left: 10px;
  }

  &.slick-next {
    right: 10px;
  }
`;

export const EquipmentSlider = () => {
  return (
    <SliderContainer>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        Galeria sprzętu
      </motion.h2>
      <Slider
        {...settings}
        nextArrow={<Arrow className="slick-next">→</Arrow>}
        prevArrow={<Arrow className="slick-prev">←</Arrow>}
      >
        {slides.map((slide, index) => (
          <EquipmentSlide key={index}>
            <motion.img
              src={slide.src}
              alt={slide.description}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slide.description}
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {slide.price}
            </motion.p>
          </EquipmentSlide>
        ))}
      </Slider>
    </SliderContainer>
  );
};
