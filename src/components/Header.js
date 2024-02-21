// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Plant & Garden Enthusiasts</Title>
    </HeaderContainer>
  );
}

export default Header;
