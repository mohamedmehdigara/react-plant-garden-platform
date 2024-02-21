// src/pages/Home.js
import React, {useState} from 'react';
import styled from 'styled-components';
import PostList from './PostList';
import SearchResult from './SearchResult';




const Home = () => {
  const Container = styled.div`
  padding: 2rem;
`;



  const [SearchResult, setSearchResult] = useState([]);

  // Function to handle search query and update searchResults state
  const handleSearch = (query) => {
    // Perform search logic here and update searchResults state
    setSearchResult(/* perform search based on query */);
  };
  return (
    <Container>
      <h1>Welcome to Plant & Garden Enthusiasts!</h1>
      <p>Share your gardening tips and plant care advice with fellow enthusiasts.</p>
      <h2>Recent Posts</h2>
      <PostList  />
      <SearchResult results={SearchResult} />
    </Container>
  );
}

export default Home;
