// src/components/LikeButton.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.liked ? '#ff6347' : '#ccc')};
  color: ${(props) => (props.liked ? '#fff' : '#333')};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const LikeButton = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  return (
    <Button liked={liked} onClick={handleLikeClick}>
      {liked ? 'Liked' : 'Like'} ({likes})
    </Button>
  );
};

export default LikeButton;
