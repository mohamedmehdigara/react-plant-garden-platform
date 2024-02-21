// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import PostList from '../components/PostList';

const Container = styled.div`
  padding: 2rem;
`;

const posts = [
  {
    id: 1,
    title: "How to Propagate Succulents",
    author: "Jane Doe",
    date: "February 18, 2024",
    content: "Succulents are easy to propagate through stem or leaf cuttings. Make sure to use well-draining soil and water sparingly until roots develop.",
  },
  {
    id: 2,
    title: "Tips for Pruning Roses",
    author: "John Smith",
    date: "February 20, 2024",
    content: "Pruning roses promotes healthy growth and flowering. Remember to remove dead or diseased branches and cut at a 45-degree angle just above a bud.",
  },
  // Add more posts as needed
];

const Home = () => {
  return (
    <Container>
      <h1>Welcome to Plant & Garden Enthusiasts!</h1>
      <p>Share your gardening tips and plant care advice with fellow enthusiasts.</p>
      <h2>Recent Posts</h2>
      <PostList posts={posts} />
    </Container>
  );
}

export default Home;
