// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const SocialMediaLinks = styled.div`
  margin-top: 1rem;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Plant & Garden Enthusiasts. All rights reserved.</p>
     
    </FooterContainer>
  );
}

export default Footer;
