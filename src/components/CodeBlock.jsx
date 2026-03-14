import React from 'react';
import './CodeBlock.css';

export function CodeBlock({ title, children }) {
  return (
    <div className="code-container">
      <div className="code-header">
        <div className="code-dots">
          <span className="dot" style={{ '--dot-color': '#ff5f56' }}></span>
          <span className="dot" style={{ '--dot-color': '#ffbd2e' }}></span>
          <span className="dot" style={{ '--dot-color': '#27c93f' }}></span>
        </div>
        {title && <span className="code-title">{title}</span>}
      </div>
      
      <pre className="code-pre">
        <code>{children}</code>
      </pre>
    </div>
  );
}