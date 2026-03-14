import React from 'react';
import './Card.css';

export function CardGrid({ children }) {
  return <div className="card-grid">{children}</div>;
}

export function Card({ icon, title, description }) {
  return (
    <div className="card-container">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}