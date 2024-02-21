// src/components/PostList.js
import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Author = styled.p`
  font-style: italic;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const ContentPreview = styled.p`
  color: #333;
`;

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostContainer key={index}>
          <Title>{post.title}</Title>
          <Author>By {post.author}</Author>
          <Date>{post.date}</Date>
          <ContentPreview>{post.content.substring(0, 100)}...</ContentPreview>
        </PostContainer>
      ))}
    </div>
  );
}

export default PostList;
