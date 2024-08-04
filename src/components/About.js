import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Modal from "../hooks/Modal";
import img from "../assets/5.avif";
import img1 from "../assets/14.avif";
import img2 from "../assets/15.avif";
import { Tooltip } from "react-tooltip"; // Import Tooltip z react-tooltip

const AboutSection = styled.section`
  padding: 2rem;
  margin: 0 5rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 0.9375rem;
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
  margin-left: 5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    margin-left: 0;
    text-align: center;
  }
`;

const StyledParagraph = styled(motion.p)`
  max-width: 37.5rem; /* Limit the width for better readability */
  margin: 0 auto; /* Center the paragraph */
  line-height: 1.6; /* Set a line height for better readability */
  padding: 0 1rem; /* Add some horizontal padding */
  text-align: left; /* Justify the text for a clean look */
  margin-bottom: 1.5rem;
  hyphens: auto;
  text-wrap: balance;

  @media (min-width: 768px) {
    text-align: start;
  }

  &:first-of-type {
    margin-top: 0; /* Ensure no top margin for the first paragraph */
  }
`;

const AdditionalContent = styled(motion.div)`
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  border-radius: 0.3125rem;
  box-shadow: 0 5px 15px ${({ theme }) => theme.cardShadow};
`;

const IconContainer = styled.span`
  margin-top: 0.625rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
    width: 1.5em;
    height: 1.5em;
    color: ${({ theme }) => theme.text};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  flex-wrap: wrap;

  img {
    width: 30%;
    /* max-width: 200px; */
    margin: 0.625rem;
    object-fit: cover;
    border-radius: 0.625rem;
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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        Nasza firma <b>"Słodkolandia&nbsp;wita:"</b> specjalizuje się
        w&nbsp;wynajmie wysokiej jakości namiotów imprezowych w&nbsp;kolorze
        białym, stołów kateringowych i&nbsp;krzeseł oraz oświetlenia do
        namiotów. Dostarczamy wyżej wymieniony sprzęt na wszelkie uroczyste
        okazje typu: Komunie Św., wesela, chrzciny, urodziny, spotkania
        towarzyskie, imprezy firmowe, rocznice i&nbsp;inne imprezy wymagające
        zabezpieczenia przed deszczem, słońcem i&nbsp;innymi niesprzyjającymi
        warunkami atmosferycznymi. (...)
        {!expanded && (
          <IconContainer
            onClick={handleExpandClick}
            data-tooltip-id="expand-tooltip" // Tooltip ID dla ikony rozwiń
          >
            <IoMdArrowDropdown />
          </IconContainer>
        )}
      </StyledParagraph>
      {expanded && (
        <AdditionalContent
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StyledParagraph>
            Nasza firma stawia na najwyższą jakość obsługi i&nbsp;dostosowuje
            ofertę do indywidualnych potrzeb Klienta. Jesteśmy elastyczni
            i&nbsp;gotowi na wszelkie wyzwania, jakie mogą się pojawić podczas
            organizacji wydarzeń. Nasze namioty i&nbsp;sprzęt są regularnie
            serwisowane i&nbsp;sprawdzane, aby zapewnić ich pełną funkcjonalność
            i&nbsp;bezpieczeństwo podczas użytkowania.
          </StyledParagraph>
          <StyledParagraph>
            Wierzymy, że każdy detal ma znaczenie, dlatego dbamy o&nbsp;to, aby
            nasze namioty były nie tylko funkcjonalne, ale także estetycznie
            wykonane. Współpracujemy z&nbsp;najlepszymi dostawcami materiałów
            i&nbsp;korzystamy z&nbsp;nowoczesnych technologii, aby zapewnić
            trwałość i&nbsp;bezpieczeństwo naszych produktów. Wybierając nasze
            namioty, wybierasz profesjonalizm, zaangażowanie i&nbsp;
            niezawodność. Dziękujemy za&nbsp;zaufanie i&nbsp;cieszymy się,
            że&nbsp;możemy być częścią Twoich wyjątkowych chwil.
          </StyledParagraph>
          <StyledParagraph>
            Początki były skromne – zaczynaliśmy jako mała firma rodzinna, ale
            dzięki determinacji i&nbsp;ciężkiej pracy stopniowo rozwinęliśmy
            się, zyskując zaufanie coraz większej liczby Klientów. Nasza
            właścicielka, zainspirowana potrzebami rynku i&nbsp;pragnieniem
            dostarczania wyjątkowych doświadczeń, nieustannie dąży do
            doskonałości. Podążając za potrzebami naszych Klientów, stale
            poszerzamy naszą ofertę i&nbsp;wprowadzamy nowe, innowacyjne
            rozwiązania. Dbałość o&nbsp;szczegóły i&nbsp;indywidualne podejście
            do każdego zlecenia sprawiają, że&nbsp;nasze namioty są idealnym
            wyborem na wszelkiego rodzaju imprezy – od małych, kameralnych
            spotkań po duże, spektakularne wydarzenia.
          </StyledParagraph>
          <StyledParagraph>
            Nasza historia to opowieść o&nbsp;pasji, poświęceniu
            i&nbsp;nieustannym dążeniu do rozwoju. Dzięki temu możemy oferować
            naszym Klientom nie tylko produkty najwyższej jakości, ale także
            profesjonalne wsparcie na każdym etapie współpracy. Jesteśmy dumni
            z&nbsp;naszych osiągnięć i&nbsp;z&nbsp;niecierpliwością czekamy na
            kolejne wyzwania, które przyniesie przyszłość. Nasze namioty
            charakteryzują się solidną konstrukcją i&nbsp;eleganckim wyglądem,
            co czyni je idealnym wyborem na wszelkiego rodzaju wydarzenia – od
            uroczystych przyjęć weselnych, przez imprezy firmowe, aż&nbsp;po
            rodzinne spotkania na świeżym powietrzu. Każdy namiot jest starannie
            przygotowany i&nbsp;sprawdzany, aby zapewnić maksymalny komfort
            i&nbsp;bezpieczeństwo uczestników.
          </StyledParagraph>
          <StyledParagraph>
            Oprócz namiotów oferujemy również pełne wyposażenie eventowe, takie
            jak stoły kateringowe i&nbsp;wygodne krzesła, które dopełniają
            całości aranżacji. Dbamy o&nbsp;to, aby każdy detal był na
            najwyższym poziomie, dlatego nasze stoły i&nbsp;krzesła są nie tylko
            funkcjonalne, ale także estetycznie wykonane. Oświetlenie to
            kluczowy element każdej imprezy, dlatego w&nbsp;naszej ofercie
            znajdują się nowoczesne systemy oświetleniowe, które tworzą
            niepowtarzalną atmosferę i&nbsp;podkreślają wyjątkowy charakter
            wydarzenia. Nasz zespół profesjonalistów zajmie się montażem
            i&nbsp;demontażem całego sprzętu, a&nbsp;także zapewni transport,
            abyś Ty mógł cieszyć się swoim dniem bez zbędnych zmartwień.
          </StyledParagraph>
          <StyledParagraph>
            Dodatkowo, jako wyraz naszego zaangażowania i&nbsp;chęci zadowolenia
            Klientów, oferujemy <b>trawę</b> oraz <b>oświetlenie</b> jako
            gratis, co dodatkowo podnosi komfort korzystania z&nbsp;naszych
            namiotów. Wybierając naszą firmę, otrzymujesz kompleksową obsługę
            na&nbsp;najwyższym poziomie, która sprawi, że&nbsp;Twoje wydarzenie
            będzie niezapomniane.
          </StyledParagraph>
          <IconContainer
            onClick={handleExpandClick}
            data-tooltip-id="collapse-tooltip" // Tooltip ID dla ikony zwijania
          >
            <IoMdArrowDropup />
          </IconContainer>
        </AdditionalContent>
      )}
      <Tooltip id="expand-tooltip" place="top" effect="solid">
        Rozwiń
      </Tooltip>{" "}
      {/* Tooltip dla ikony rozwiń */}
      <Tooltip id="collapse-tooltip" place="top" effect="solid">
        Zwiń
      </Tooltip>{" "}
      {/* Tooltip dla ikony zwijania */}
      <ImageContainer>
        <motion.img
          src={img}
          loading="lazy"
          alt="Przykład 1"
          onClick={() =>
            handleButtonClick(
              <img src={img} loading="lazy" alt="Modal content" />
            )
          }
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
        />
        <motion.img
          src={img1}
          loading="lazy"
          alt="Przykład 2"
          onClick={() =>
            handleButtonClick(
              <img src={img1} loading="lazy" alt="Modal content" />
            )
          }
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.img
          src={img2}
          loading="lazy"
          alt="Przykład 3"
          onClick={() =>
            handleButtonClick(
              <img src={img2} loading="lazy" alt="Modal content" />
            )
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
                <StyledParagraph>
                  Nasza misja to dostarczanie najlepszych namiotów imprezowych,
                  aby Twoje wydarzenie było niezapomniane. Dokładamy wszelkich
                  starań, aby zapewnić najwyższą jakość i&nbsp;komfort naszym
                  Klientom, oferując szeroki wybór namiotów dostosowanych do
                  każdej okazji. Niezależnie od tego, czy organizujesz kameralne
                  przyjęcie, firmowy event, czy wielką uroczystość, nasze
                  namioty są idealnym rozwiązaniem.
                </StyledParagraph>
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
                <StyledParagraph>
                  Nasza firma została założona w 2014 roku i&nbsp;od tego czasu
                  dostarczamy namioty oraz pozostałe wyposażenie najwyższej
                  jakości. Firma jest prowadzona przez kobietę, która
                  z&nbsp;pasją i&nbsp;zaangażowaniem dba o&nbsp;każdy aspekt
                  działalności. Nasze przedsiębiorstwo opiera się na
                  wieloletniej tradycji, która łączy rodzinne wartości
                  z&nbsp;nowoczesnym podejściem do biznesu.
                </StyledParagraph>
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
                <StyledParagraph>
                  Oferujemy szeroki wybór namiotów na różne okazje,
                  w&nbsp;różnych rozmiarach i&nbsp;stylach na 60 i&nbsp;30 osób.
                  Ponadto wynajmujemy stoły kateringowe na 6 osób, krzesła
                  i&nbsp;oświetlenie do namiotów (montaż, demontaż, transport
                  i&nbsp;trawa w&nbsp;gratisie!). Nasza oferta jest elastyczna
                  i&nbsp;dopasowana do indywidualnych potrzeb każdego Klienta,
                  co sprawia, że&nbsp;jesteśmy w&nbsp;stanie zrealizować nawet
                  najbardziej wymagające zlecenia.
                </StyledParagraph>
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
