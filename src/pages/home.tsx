// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Loot In The Boot</h1>
        <p>Your main page content goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
