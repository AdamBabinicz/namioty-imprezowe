import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled, { ThemeProvider, withTheme } from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import image1 from "../assets/21.webp";
import image2 from "../assets/7.webp";
import image3 from "../assets/23.webp";
import image4 from "../assets/20.webp";
import image5 from "../assets/3.webp";
import image6 from "../assets/17.webp";
import { lightTheme, darkTheme } from "../styles/themes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled components
const GalleryContainer = styled.section`
  margin: 0 5rem;
  padding: 2rem;
  background: ${(props) => props.theme.background};
  position: relative;
  z-index: 0;
  border-radius: 15px;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding: 1rem;
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

const SliderWrapper = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center; // Wyśrodkowanie zdjęć
  }

  .slick-list {
    margin: 0;
  }

  .slick-track {
    display: flex;
    align-items: center; // Wyśrodkowanie zdjęć
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden; // Ukrywa wszelkie niechciane paski
  width: 100%; // Szerokość obrazka na 100%
`;

const Image = styled.img`
  width: 100%;
  max-height: auto; // Utrzymuje proporcje obrazka
  height: 400px; // Maksymalna wysokość obrazka
  object-fit: cover; // Dopasowuje obraz do kontenera
  display: block; // Usuwa marginesy
  padding: 0 0.1rem;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    height: 600px; // Ustawia stałą wysokość na większych ekranach
    object-fit: contain;
  }
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.color};
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ImageWrapperHover = styled(ImageWrapper)`
  &:hover ${ImageOverlay} {
    opacity: 1;
    overflow: hidden;
  }
`;

const NavigationButton = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.hoverBackground};
  }

  ${(props) => props.$left && "left: 16px;"}
  ${(props) => props.$right && "right: 16px;"}

  @media (max-width: 768px) {
    ${(props) => props.$left && "left: 8px;"}
    ${(props) => props.$right && "right: 8px;"}
  }
`;

const CustomNextArrow = ({ onClick }) => (
  <NavigationButton $right onClick={onClick}>
    <FaArrowRight />
  </NavigationButton>
);

const CustomPrevArrow = ({ onClick }) => (
  <NavigationButton $left onClick={onClick}>
    <FaArrowLeft />
  </NavigationButton>
);

// Gallery component
const Gallery = ({ theme }) => {
  const images = [
    { src: image1, title: "Namiot na 30 osób, biały", year: "" },
    { src: image2, title: "Namiot na 30 osób, biały", year: "" },
    { src: image3, title: "Namiot na 60 osób, biały", year: "" },
    { src: image4, title: "Krzesło białe, składane", year: "" },
    { src: image5, title: "Stół biały dla 6 osób, składany", year: "" },
    { src: image6, title: "Girlanda świetlna LED Ogrodowa 15m 30x", year: "" },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const gallerySection = document.getElementById("galeria");

      if (gallerySection && scrollPosition > gallerySection.offsetTop) {
        controls.start("visible");
        setIsVisible(true);
      } else {
        controls.start("hidden");
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GalleryContainer id="galeria">
        <MotionTitle
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Nasza oferta
        </MotionTitle>
        <SliderWrapper>
          <Slider {...settings}>
            {images.map((image, index) => (
              <ImageWrapperHover
                key={index}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={image.src}
                  alt={`Artwork ${index + 1}`}
                  loading="lazy"
                />
                <ImageOverlay
                  initial={{ opacity: 0 }}
                  animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  color={theme === "light" ? "#fff" : theme.text}
                >
                  {image.title} - {image.year}
                </ImageOverlay>
              </ImageWrapperHover>
            ))}
          </Slider>
        </SliderWrapper>
      </GalleryContainer>
    </ThemeProvider>
  );
};

export default withTheme(Gallery);
