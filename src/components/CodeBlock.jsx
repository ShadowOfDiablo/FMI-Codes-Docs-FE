import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 8px;
  margin: 2rem 0;
  overflow: hidden;
`;

const Header = styled.div`
  background: #27272a;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const Pre = styled.pre`
  margin: 0;
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.875rem;
  line-height: 1.7;
  color: #e4e4e7;
  overflow-x: auto;

  code {
    background: none;
    padding: 0;
  }

  .keyword { color: #f472b6; }
  .function { color: #38bdf8; }
  .string { color: #4ade80; }
  .comment { color: #71717a; }
`;

export const CodeBlock = ({ title, children }) => (
  <Container>
    <Header>
      <Dot color="#ff5f56" />
      <Dot color="#ffbd2e" />
      <Dot color="#27c93f" />
      {title && <span style={{ marginLeft: '1rem', fontSize: '0.75rem', color: '#71717a', fontFamily: 'monospace' }}>{title}</span>}
    </Header>
    <Pre>
      <code>{children}</code>
    </Pre>
  </Container>
);
