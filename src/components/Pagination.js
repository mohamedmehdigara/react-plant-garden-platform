// src/components/Pagination.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <PageButton key={i} onClick={() => onPageChange(i)} disabled={i === currentPage}>
          {i}
        </PageButton>
      );
    }
    return buttons;
  };

  return (
    <Container>
      {currentPage > 1 && (
        <PageButton onClick={() => onPageChange(currentPage - 1)}>Prev</PageButton>
      )}
      {getPageButtons()}
      {currentPage < totalPages && (
        <PageButton onClick={() => onPageChange(currentPage + 1)}>Next</PageButton>
      )}
    </Container>
  );
};

export default Pagination;
