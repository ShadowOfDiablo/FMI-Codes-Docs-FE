import React from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export function Header({ version, onMenuToggle, menuOpen }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="mobile-menu-toggle" onClick={onMenuToggle}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="version-badge">{version}</div>
      </div>
      <button className="search-button">Search...</button>
    </header>
  );
}