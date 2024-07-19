import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton
      onClick={scrollToTop}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <FaArrowUp />
    </ScrollButton>
  );
};

const ScrollButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.bodyHover};
    color: ${({ theme }) => theme.textHover};
  }
`;

export default ScrollToTopButton;
