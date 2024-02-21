// src/components/TagList.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
`;

const Tag = styled.span`
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #555;
  }
`;

const TagList = ({ tags, onTagClick }) => {
  return (
    <Container>
      {tags && tags.map((tag, index) => (
        <Tag key={index} onClick={() => onTagClick(tag)}>
          {tag}
        </Tag>
      ))}
    </Container>
  );
}

export default TagList;
