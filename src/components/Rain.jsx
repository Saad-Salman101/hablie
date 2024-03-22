// Rain.jsx
import React from 'react';
import './rain.css';

const Rain = () => {
  // Create an array to render multiple raindrops
  const raindrops = Array.from({ length: 100 }).map((_, index) => (
    <div
      key={index}
      className="raindrop"
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 2 + 0.5}s`,
        animationDelay: `${Math.random() * -20}s`,
      }}
    />
  ));

  return <>{raindrops}</>;
};

export default Rain;
