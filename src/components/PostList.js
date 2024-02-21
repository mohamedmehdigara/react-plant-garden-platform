// src/components/PostList.js
import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';

const Container = styled.div`
  margin-top: 2rem;
`;

const PostContainer = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Content = styled.p`
  color: #333;
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

const PostList = ({ posts }) => {
  return (
    <Container>
      {posts && posts.map((post, index) => (
        <PostContainer key={index}>
          <Title>post.title</Title>
          <Content>post.content</Content>
          {/* Render LikeButton for each post */}
          <LikeButton initialLikes={post.likes} />
        </PostContainer>
      ))}
    </Container>
  );
};

export default PostList;
