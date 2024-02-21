// src/components/PostList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

const Container = styled.div`
  margin-top: 2rem;
`;

const Post = styled.div`
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

const PostList = ({ posts, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      {currentPosts.map((post, index) => (
        <Post key={index}>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
        </Post>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(posts.length / postsPerPage)}
        onPageChange={paginate}
      />
    </Container>
  );
};

export default PostList;
