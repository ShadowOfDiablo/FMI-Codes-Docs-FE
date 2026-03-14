import React from 'react';
import './Layout.css';

export function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

export function Main({ children }) {
  return <main className="main-content">{children}</main>;
}