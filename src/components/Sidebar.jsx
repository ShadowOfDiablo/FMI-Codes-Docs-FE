import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { ScanFace } from 'lucide-react'; 


export function Sidebar({ open, sections }) {
  return (
    <nav className={`sidebar-nav ${open ? 'is-open' : ''}`}>
      
     <div className="logo">
      <ScanFace size={24} strokeWidth={3} />
      Face<span className="logo-text">Pass</span>
    </div>

      {sections.map((section, idx) => (
        <div key={idx} className="nav-section">
          <h4 className="nav-header">{section.title}</h4>
          
          {section.items.map((item, itemIdx) => {
            // If the link goes to an outside website, use an <a> tag
            const isExternal = item.href.startsWith('http');

            if (isExternal) {
              return (
                <a 
                  key={itemIdx} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-item"
                >
                  {item.icon}
                  {item.label}
                </a>
              );
            }

            // If it's an internal app route, use React Router's NavLink
            return (
              <NavLink 
                key={itemIdx} 
                to={item.href} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                {item.icon}
                {item.label}
              </NavLink>
            );
          })}
        </div>
      ))}
    </nav>
  );
}