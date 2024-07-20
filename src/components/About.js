import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Modal from "../hooks/Modal";
import img from "../assets/10.jpg";
import img1 from "../assets/12.jpg";
import img2 from "../assets/13.jpg";

const AboutSection = styled.section`
  padding: 2rem;
  margin: 0 5rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 15px;
  box-shadow: 0 10px 20px ${({ theme }) => theme.cardShadow};

  @media (max-width: 768px) {
    margin: 0 1rem 1.5rem;
    padding: 1rem;
  }
`;

const StyledHeading = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledParagraph = styled(motion.p)`
  max-width: 600px; /* Limit the width for better readability */
  margin: 0 auto; /* Center the paragraph */
  line-height: 1.6; /* Set a line height for better readability */
  padding: 0 1rem; /* Add some horizontal padding */
  text-align: left; /* Justify the text for a clean look */

  &:first-of-type {
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  flex-wrap: wrap;

  img {
    width: 30%;
    max-width: 200px;
    margin: 10px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 5px 15px ${({ theme }) => theme.cardShadow};
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px ${({ theme }) => theme.cardShadow};
    }

    @media (max-width: 768px) {
      width: 90%; /* Ustaw szerokość na 90% w wersji mobilnej */
      max-width: none; /* Usuń maksymalną szerokość */
      margin: 5px 0; /* Ustaw mniejszy margines */
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  button {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.hoverBackground};
      transform: scale(1.05);
    }
  }
`;

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleButtonClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <AboutSection id="o-firmie">
      <StyledHeading
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
      >
        O&nbsp;firmie
      </StyledHeading>
      <StyledParagraph
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 50 }}
      >
        Nasza firma <b>"Słodkolandia wita"</b> specjalizuje się w&nbsp;wynajmie
        wysokiej jakości namiotów imprezowych w kolorze białym, stołów
        kateringowych i&nbsp;krzeseł oraz oświetlenia do namiotów.
      </StyledParagraph>
      <StyledParagraph
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 50 }}
      >
        Dostarczamy wyżej wymieniony sprzęt na wszelkie uroczyste okazje typu:
        Komunie Św., wesela, urodziny, spotkania towarzyskie, rocznice
        i&nbsp;inne imprezy wymagające zabezpieczenia przed deszczem, słońcem
        i&nbsp;innymi niesprzyjającymi warunkami atmosferycznymi.
      </StyledParagraph>
      <ImageContainer>
        <motion.img
          src={img}
          alt="Przykład 1"
          onClick={() =>
            handleButtonClick(<img src={img} alt="Modal content" />)
          }
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
        />
        <motion.img
          src={img1}
          alt="Przykład 2"
          onClick={() =>
            handleButtonClick(<img src={img1} alt="Modal content" />)
          }
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.img
          src={img2}
          alt="Przykład 3"
          onClick={() =>
            handleButtonClick(<img src={img2} alt="Modal content" />)
          }
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5 }}
        />
      </ImageContainer>
      <ButtonContainer>
        <button
          onClick={() =>
            handleButtonClick(
              <div>
                <h2>Nasza misja</h2>
                <p>
                  Nasza misja to dostarczanie najlepszych namiotów imprezowych,
                  aby Twoje wydarzenie było niezapomniane.
                </p>
              </div>
            )
          }
        >
          Nasza misja
        </button>
        <button
          onClick={() =>
            handleButtonClick(
              <div>
                <h2>Nasza historia</h2>
                <p>
                  Nasza firma została założona w&nbsp;2014 roku i&nbsp;od tego
                  czasu dostarczamy namioty oraz pozostałe wyposażenie
                  najwyższej jakości.
                </p>
              </div>
            )
          }
        >
          Nasza historia
        </button>
        <button
          onClick={() =>
            handleButtonClick(
              <div>
                <h2>Nasza oferta</h2>
                <p>
                  Oferujemy szeroki wybór namiotów na różne okazje,
                  w&nbsp;różnych rozmiarach i&nbsp;stylach na 60 i&nbsp;30 osób.
                  Ponadto wynajmujemy stoły kateringowe na 6 osób, krzesła
                  i&nbsp;oświetlenie do namiotów (montaż, demontaż, transport
                  i&nbsp;trawa w&nbsp;gratisie!).
                </p>
              </div>
            )
          }
        >
          Nasza Oferta
        </button>
      </ButtonContainer>
      {modalOpen && <Modal closeModal={closeModal}>{modalContent}</Modal>}
    </AboutSection>
  );
};

export default About;
