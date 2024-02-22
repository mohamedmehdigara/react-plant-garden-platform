// src/pages/Home.js
import React, { useState } from 'react';
import styled from 'styled-components';
import PostList from './PostList';
import SearchResult from '../components/SearchResult'; // Import SearchResult component

const Container = styled.div`
  padding: 2rem;
`;

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search query and update searchResults state
  const handleSearch = (query) => {
    // Perform search logic here and update searchResults state
    // For demonstration, let's assume searchResults is an array of search results
    setSearchResults(/* perform search based on query */);
  };

  return (
    <Container>
      <h1>Welcome to Plant & Garden Enthusiasts!</h1>
      <p>Share your gardening tips and plant care advice with fellow enthusiasts.</p>
      {/* Render the SearchBar component for users to input search queries */}
      <h2>Recent Posts</h2>
      {/* Render the PostList component to display recent posts */}
      <PostList />
      {/* Render the SearchResult component with search results */}
      <SearchResult results={searchResults} />
    </Container>
  );
};

export default Home;
