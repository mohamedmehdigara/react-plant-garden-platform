// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import PostDetail from './components/PostDetail';
import TagList from './components/TagList';
import UserPosts from './components/UserPosts';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <UserProfile />
      <Footer />
      <PostDetail/>
      <TagList/>
      <UserPosts/>
    </div>
  );
}

export default App;
