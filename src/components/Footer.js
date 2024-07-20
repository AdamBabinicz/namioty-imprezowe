import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

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
      margin: 0 0.25rem; /* Zmniejsza marginesy w wersji mobilnej */
    }
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
      <FooterText>Radom, 2024 - {new Date().getFullYear()}.</FooterText>

      <Tooltip id="tentTooltip" />
      <Tooltip id="facebookTooltip" />
      <Tooltip id="twitterTooltip" />
      <Tooltip id="pinterestTooltip" />
    </FooterContainer>
  );
};
