import React from 'react';
import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const CardContainer = styled.div`
  background: #0f0f12;
  border: 1px solid #1e1e22;
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: #38bdf8;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    color: #fff;
  }

  p {
    color: #71717a;
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

export const Card = ({ icon, title, description }) => (
  <CardContainer>
    {icon}
    <h3>{title}</h3>
    <p>{description}</p>
  </CardContainer>
);
