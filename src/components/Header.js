// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import PostList from "./PostList";
import SearchResult from "./SearchResult";

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  const [PostList, setPostList] = useState();
  const [SearchResult, setSearchResult] = useState();

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <HeaderContainer>
        <Title>Plant & Garden Enthusiasts</Title>
      <Navigation>
        <NavLink onClick={() => handleNavigation('home')}>Home</NavLink>
        <NavLink onClick={() => handleNavigation('posts')}>Posts</NavLink>
        <NavLink onClick={() => handleNavigation('about')}>About Us</NavLink>
        <NavLink onClick={() => handleNavigation('contact')}>Contact</NavLink>
      </Navigation>
      <div>
        {activeSection === 'home' && <Home />}
        {activeSection === 'posts' && <UserPosts />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
    </HeaderContainer>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
      <h1>Welcome to Plant & Garden Enthusiasts!</h1>
      <p>Share your gardening tips and plant care advice with fellow enthusiasts.</p>
      {/* Render the SearchBar component for users to input search queries */}
      <h2>Recent Posts</h2>
      {/* Render the PostList component to display recent posts */}
      <PostList />
      {/* Render the SearchResult component with search results */}
      <SearchResult  />

    {/* Add Home content here */}
  </div>
);

const UserPosts = (posts) => (
  <div>
    <h2>Posts</h2>



  return (
      <h2>User Posts</h2>
      {posts && posts.map((post, index) => (
        <div>
          <Title>{post.title}</Title>
          <div>{post.content}</div>
          <p>Author: {post.author}</p>
          </div>
      ))}
  );


    {/* Add Posts content here */}
  </div>
);

const AboutSection = () => (
  <div>
    <h2>About Us</h2>
    <p>Welcome to Plant & Garden Enthusiasts! We are passionate about all things related to plants and gardening. Our mission is to provide a platform where enthusiasts can share knowledge, tips, and experiences to foster a thriving gardening community.</p>
    {/* Add more about us content here */}
  </div>
);

const ContactSection = () => (
  <div>
    <h2>Contact</h2>
    <p>For any inquiries or feedback, please feel free to reach out to us:</p>
    <ul>
      <li>Email: contact@plantgardenenthusiasts.com</li>
      <li>Phone: 123-456-7890</li>
      {/* Add more contact information here */}
    </ul>
  </div>
);

export default Header;
