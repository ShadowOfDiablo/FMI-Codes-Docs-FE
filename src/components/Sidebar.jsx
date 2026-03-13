import React from 'react';
import styled from 'styled-components';
import { Terminal, Github } from 'lucide-react';

const SidebarNav = styled.nav`
  width: 280px;
  background: #0f0f12;
  border-right: 1px solid #1e1e22;
  padding: 2rem 1.5rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: ${props => props.open ? 'block' : 'none'};
    position: fixed;
    z-index: 100;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 3rem;
  letter-spacing: -0.025em;

  span {
    color: #38bdf8;
  }
`;

const NavSection = styled.div`
  margin-bottom: 2.5rem;
`;

const NavHeader = styled.h4`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #71717a;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.9375rem;
  border-radius: 6px;
  transition: all 0.2s;
  margin-bottom: 0.25rem;

  &:hover {
    background: #1e1e22;
    color: #fff;
  }

  &.active {
    background: #0ea5e920;
    color: #38bdf8;
  }
`;

export const Sidebar = ({ open, sections }) => (
  <SidebarNav open={open}>
    <Logo>
      <Terminal size={24} color="#38bdf8" />
      FMI<span>Codes</span>
    </Logo>
    
    {sections.map(section => (
      <NavSection key={section.title}>
        <NavHeader>{section.title}</NavHeader>
        {section.items.map(item => (
          <NavItem 
            key={item.label} 
            href={item.href} 
            className={item.active ? 'active' : ''}
          >
            {item.icon}
            {item.label}
          </NavItem>
        ))}
      </NavSection>
    ))}

    <NavSection style={{ marginTop: 'auto', paddingTop: '2rem' }}>
      <NavItem href="https://github.com/ShadowOfDiablo">
        <Github size={18} /> GitHub Repository
      </NavItem>
    </NavSection>
  </SidebarNav>
);
