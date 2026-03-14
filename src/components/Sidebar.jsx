import React from 'react';
import './Sidebar.css';

export function Sidebar({ open, sections }) {
  return (
    <nav className={`sidebar-nav ${open ? 'is-open' : ''}`}>
      <div className="logo">
        FMI <span>Codes</span>
      </div>

      {sections.map((section, idx) => (
        <div key={idx} className="nav-section">
          <h4 className="nav-header">{section.title}</h4>
          {section.items.map((item, itemIdx) => (
            <a 
              key={itemIdx} 
              href={item.href} 
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}