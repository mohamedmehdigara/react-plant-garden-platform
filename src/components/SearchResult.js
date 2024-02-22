// src/components/SearchResults.js
import React from 'react';
import styled from 'styled-components';
import PostList from './PostList'; // Assuming you have a Post component to display individual posts

const Container = styled.div`
  margin-top: 2rem;
`;

const SearchResult = ({ results }) => {
  return (
    <Container>
      {results && results.length === 0 ? (
        <p>No results found</p>
      ) : (
        results && results.map((post, index) => (
          <PostList key={index} post={post} /> // Pass the post data as props to the PostList component
        ))
      )}
    </Container>
  );
};

export default SearchResult;
