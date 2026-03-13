import React from 'react';
import styled from 'styled-components';
import { Search } from 'lucide-react';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: #71717a;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const Header = ({ version }) => (
  <StyledHeader>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <span style={{ color: '#38bdf8', fontWeight: '600', fontSize: '0.875rem' }}>{version}</span>
    </div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <SearchButton>
        <Search size={20} />
      </SearchButton>
    </div>
  </StyledHeader>
);
