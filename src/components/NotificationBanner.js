// src/components/NotificationBanner.js
import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
`;

const NotificationBanner = ({ message }) => {
  return (
    <Banner>
      <strong>{message}</strong>
    </Banner>
  );
};

export default NotificationBanner;
