// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Title>Plant & Garden Enthusiasts</Title>
      </Logo>
      <Navigation>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Posts</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;

