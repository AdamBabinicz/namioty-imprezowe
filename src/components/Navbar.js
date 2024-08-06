import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { motion } from "framer-motion";
import img from "../assets/8.avif";

const Navbar = ({ toggleTheme }) => {
  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(savedDarkMode);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.body.classList.toggle("dark-mode", newDarkMode);
    toggleTheme();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    document.body.classList.toggle("dark-mode", savedDarkMode);
  }, []);

  return (
    <NavbarContainer darkMode={darkMode}>
      <NavbarWrapper>
        <Logo onClick={scrollToTop}>
          <img src={img} alt="fotografia namiotu białego" />
          Wynajem Namiotów
        </Logo>
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </NavbarWrapper>
      <NavLinksContainer>
        <NavLinks isOpen={isOpen}>
          <NavLink
            href="#start"
            onClick={(e) => handleSmoothScroll(e, "start")}
          >
            Start
          </NavLink>
          <NavLink
            href="#o-firmie"
            onClick={(e) => handleSmoothScroll(e, "o-firmie")}
          >
            O&nbsp;firmie
          </NavLink>
          <NavLink
            href="#oferta"
            onClick={(e) => handleSmoothScroll(e, "oferta")}
          >
            Oferta
          </NavLink>
          <NavLink
            href="#kontakt"
            onClick={(e) => handleSmoothScroll(e, "kontakt")}
          >
            Kontakt
          </NavLink>
          <DarkModeToggle onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </DarkModeToggle>
          <MobileTentIcon>
            <span
              data-tooltip-id="tentTooltip"
              data-tooltip-content="Namioty Imprezowe"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaTent size={40} />
              </motion.div>
            </span>
          </MobileTentIcon>
        </NavLinks>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled(({ darkMode, ...props }) => <nav {...props} />)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  ${({ darkMode }) =>
    darkMode &&
    css`
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    `}
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  padding: 1.25rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  img {
    width: 3.125rem;
    height: auto;
    margin-right: 0.625rem;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    z-index: 1000;
  }
`;

const NavLinksContainer = styled.div`
  @media screen and (min-width: 961px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    background: none;
    color: ${({ theme }) => theme.text};
  }
`;

const NavLinks = styled(({ isOpen, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  width: 100%;
  z-index: 998;

  @media screen and (min-width: 961px) {
    display: flex;
    flex-direction: row;
    gap: 0;
    position: relative;
    transform: translateY(0);
    background: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 1rem 0;
  text-align: center;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }

  @media screen and (min-width: 961px) {
    padding: 0;
    margin: 0 10px;
  }
`;

const MobileTentIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    margin-top: 1.25rem;
  }
`;

const DarkModeToggle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s;
  }

  &:hover svg {
    color: ${({ theme }) => theme.linkHover};
  }

  @media screen and (min-width: 961px) {
    margin-top: 0;
    margin-left: 10px; /* Dodaj margines lewy */
  }
`;

export default Navbar;
