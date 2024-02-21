// src/pages/PostDetail.js
import React, { useState } from 'react';
import styled from 'styled-components';
import CommentForm from '../components/CommentForm';

const Container = styled.div`
  padding: 2rem;
`;

const PostDetail = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    // Add new comment to the existing list of comments
    setComments([...comments, newComment]);
    // Here you would typically submit the new comment to a backend for storage
  };

  return (
    <Container>
      <h1>Post Title</h1>
      <p>Post content goes here...</p>
      <h2>Comments</h2>
      {/* Render existing comments here */}
      {comments.map((comment, index) => (
        <div key={index}>
          <h3>{comment.name}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
      {/* Render CommentForm component to allow users to submit new comments */}
      <CommentForm onSubmit={handleCommentSubmit} />
    </Container>
  );
}

export default PostDetail;
