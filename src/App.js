// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <UserProfile />
      <Footer />
    </div>
  );
}

export default App;
