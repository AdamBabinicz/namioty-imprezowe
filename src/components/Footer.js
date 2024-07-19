import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";

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
    margin: 0 1rem 1.5rem;
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

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Radom, 2024 - {new Date().getFullYear()}.</p>
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
      <SocialIcons>
        <a
          href="https://facebook.com"
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
          href="https://twitter.com"
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
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="instagramTooltip"
          data-tooltip-content="Instagram"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram />
          </motion.div>
        </a>
      </SocialIcons>

      <Tooltip id="tentTooltip" />
      <Tooltip id="facebookTooltip" />
      <Tooltip id="twitterTooltip" />
      <Tooltip id="instagramTooltip" />
    </FooterContainer>
  );
};
