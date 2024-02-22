// src/components/Header.js
import React, { useState } from 'react';
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
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoImage src="/logo.svg" alt="Plant & Garden Enthusiasts Logo" />
        <Title>Plant & Garden Enthusiasts</Title>
      </Logo>
      <Navigation>
        <NavLink onClick={() => handleNavigation('home')}>Home</NavLink>
        <NavLink onClick={() => handleNavigation('posts')}>Posts</NavLink>
        <NavLink onClick={() => handleNavigation('about')}>About Us</NavLink>
        <NavLink onClick={() => handleNavigation('contact')}>Contact</NavLink>
      </Navigation>
      <div>
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'posts' && <PostsSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
    </HeaderContainer>
  );
}

const HomeSection = () => (
  <div>
    <h2>Home</h2>
    {/* Add Home content here */}
  </div>
);

const PostsSection = () => (
  <div>
    <h2>Posts</h2>
    {/* Add Posts content here */}
  </div>
);

const AboutSection = () => (
  <div>
    <h2>About Us</h2>
    {/* Add About Us content here */}
  </div>
);

const ContactSection = () => (
  <div>
    <h2>Contact</h2>
    {/* Add Contact content here */}
  </div>
);

export default Header;
