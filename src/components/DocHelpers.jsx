import React from 'react';
import { SectionTitle } from './Typography';
import { CodeBlock } from './CodeBlock';
import './DocHelpers.css';

export function DocImage({ src, alt, caption }) {
  return (
    <figure className="doc-image-figure">
      <img src={src} alt={alt} className="doc-image-img" />
      {caption && <figcaption className="doc-image-caption">{caption}</figcaption>}
    </figure>
  );
}

export function CapabilityTemplate({ title, explanation, codeTitle, children }) {
  return (
    <div className="capability-wrapper">
      <SectionTitle>{title}</SectionTitle>
      <p className="capability-text">{explanation}</p>
      
      {/* The code block goes inside here */}
      <CodeBlock title={codeTitle}>
        {children}
      </CodeBlock>
    </div>
  );
}