import React from 'react';
import './Typography.css';

export function Title({ children }) {
  return <h1 className="typo-title">{children}</h1>;
}

export function Subtitle({ children }) {
  return <p className="typo-subtitle">{children}</p>;
}

export function SectionTitle({ children }) {
  return <h2 className="typo-section-title">{children}</h2>;
}

export function Footer({ children }) {
  return <footer className="typo-footer">{children}</footer>;
}