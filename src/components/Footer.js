import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaExternalLinkAlt,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 5rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column; /* Zmienia układ na kolumnowy w wersji mobilnej */
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin: 0 0.5rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.linkHover};
      transform: scale(1.2);
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin: 0 1.25rem; /* Zmniejsza marginesy w wersji mobilnej */
    }
  }
`;

const ExternalLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    margin: 0 1rem; /* Dodałem margines po bokach */
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.linkHover};
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin: 0.5rem 0; /* Marginesy góra-dół w wersji mobilnej */
    }
  }

  span {
    margin-left: 0.5rem;
  }
`;

const TooltipText = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const FooterText = styled.p`
  @media (max-width: 768px) {
    margin-top: 1rem; /* Dodaje margines górny w wersji mobilnej */
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a
          href="https://www.facebook.com/wata.cukrowa.popcorn"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="facebookTooltip"
          data-tooltip-content="Facebook"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaFacebook />
          </motion.div>
        </a>
        <a
          href="https://twitter.com/popcorn_wata"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="twitterTooltip"
          data-tooltip-content="Twitter"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaTwitter />
          </motion.div>
        </a>
        <a
          href="https://www.pinterest.com/watapopcorn"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="pinterestTooltip"
          data-tooltip-content="Pinterest"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaPinterest />
          </motion.div>
        </a>
      </SocialIcons>
      <ExternalLinks>
        <a
          href="https://www.slodkolandia.cba.pl"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="slodkolandiaTooltip"
          data-tooltip-content="Słodkolandia wita"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaExternalLinkAlt />
            <span>Słodkolandia wita</span>
          </motion.div>
        </a>
        <a
          href="https://zamki.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="zamkiTooltip"
          data-tooltip-content="Zamki"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaExternalLinkAlt />
            <span>Zamki</span>
          </motion.div>
        </a>
        <a
          href="https://www.fontanny.slodkolandia.cba.pl"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="fontannyTooltip"
          data-tooltip-content="Fontanny"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaExternalLinkAlt />
            <span>Fontanny</span>
          </motion.div>
        </a>
      </ExternalLinks>
      <FooterText>Radom, 2024 - {new Date().getFullYear()}.</FooterText>

      <Tooltip id="facebookTooltip" />
      <Tooltip id="twitterTooltip" />
      <Tooltip id="pinterestTooltip" />
      <Tooltip id="slodkolandiaTooltip" />
      <Tooltip id="zamkiTooltip" />
      <Tooltip id="fontannyTooltip" />
    </FooterContainer>
  );
};
