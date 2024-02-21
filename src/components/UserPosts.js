// src/components/UserPosts.js
import React from 'react';
import styled from 'styled-components';

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

const UserPosts = ({ posts }) => {
  return (
    <Container>
      <h2>User Posts</h2>
      {posts && posts.map((post, index) => (
        <PostContainer key={index}>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <p>Author: {post.author}</p>
        </PostContainer>
      ))}
    </Container>
  );
}

export default UserPosts;
