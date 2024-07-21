// Footer.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
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
    flex-direction: column;
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
      margin: 0 1.25rem;
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
    margin: 0 1rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.linkHover};
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin: 0.5rem 0;
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
  background-color: ${({ theme }) => theme.tooltipBackground};
  color: ${({ theme }) => theme.tooltipText};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const FooterText = styled.p`
  @media (max-width: 768px) {
    margin-top: 1rem;
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
          data-tooltip-content="Zamki dmuchane"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaExternalLinkAlt />
            <span>Zamki dmuchane</span>
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

      <ReactTooltip
        id="facebookTooltip"
        place="top"
        effect="solid"
        backgroundColor={({ theme }) => theme.tooltipBackground}
        textColor={({ theme }) => theme.tooltipText}
        border="1px solid rgba(0, 0, 0, 0.3)"
      />
      <ReactTooltip
        id="twitterTooltip"
        place="top"
        effect="solid"
        backgroundColor={({ theme }) => theme.tooltipBackground}
        textColor={({ theme }) => theme.tooltipText}
        border="1px solid rgba(0, 0, 0, 0.3)"
      />
      <ReactTooltip
        id="pinterestTooltip"
        place="top"
        effect="solid"
        backgroundColor={({ theme }) => theme.tooltipBackground}
        textColor={({ theme }) => theme.tooltipText}
        border="1px solid rgba(0, 0, 0, 0.3)"
      />
      <ReactTooltip
        id="slodkolandiaTooltip"
        place="top"
        effect="solid"
        backgroundColor={({ theme }) => theme.tooltipBackground}
        textColor={({ theme }) => theme.tooltipText}
        border="1px solid rgba(0, 0, 0, 0.3)"
      />
      <ReactTooltip
        id="zamkiTooltip"
        place="top"
        effect="solid"
        backgroundColor={({ theme }) => theme.tooltipBackground}
        textColor={({ theme }) => theme.tooltipText}
        border="1px solid rgba(0, 0, 0, 0.3)"
      />
      <ReactTooltip
        id="fontannyTooltip"
        place="top"
        effect="solid"
        backgroundColor={({ theme }) => theme.tooltipBackground}
        textColor={({ theme }) => theme.tooltipText}
        border="1px solid rgba(0, 0, 0, 0.3)"
      />
    </FooterContainer>
  );
};
