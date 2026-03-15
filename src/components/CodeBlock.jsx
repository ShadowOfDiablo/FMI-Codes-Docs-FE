import React, { useState, useRef } from 'react';
import { Copy, Check } from 'lucide-react';
import './CodeBlock.css';

export function CodeBlock({ title, children }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = () => {
    if (codeRef.current) {
      const clone = codeRef.current.cloneNode(true);
      
      const comments = clone.querySelectorAll('.comment');
      comments.forEach(comment => comment.remove());
      
      const text = clone.innerText.trim();
      
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="code-container">
      <div className="code-header">
        <div className="code-dots">
          <span className="dot" style={{ '--dot-color': '#ff5f56' }}></span>
          <span className="dot" style={{ '--dot-color': '#ffbd2e' }}></span>
          <span className="dot" style={{ '--dot-color': '#27c93f' }}></span>
        </div>
        {title && <span className="code-title">{title}</span>}
        <button 
          className={`copy-button ${copied ? 'copied' : ''}`} 
          onClick={handleCopy}
          title="Copy to clipboard"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      
      <pre className="code-pre">
        <code ref={codeRef}>{children}</code>
      </pre>
    </div>
  );
}