import React from 'react';
import './Header.css';

export function Header({ version }) {
  return (
    <header className="header">
      <div className="version-badge">{version}</div>
      <button className="search-button">Search...</button>
    </header>
  );
}