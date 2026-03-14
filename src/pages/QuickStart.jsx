import React from 'react';
import { Title, Subtitle } from '../components/Typography';
import { CapabilityTemplate } from '../components/DocHelpers';
import './Pages.css';

export function QuickStart() {
  return (
    <div className="page-transition">
      <Title>Quick Start</Title>
      <Subtitle>Get up and running with FMI-Codes in minutes.</Subtitle>

      <CapabilityTemplate 
        title="Installation" 
        explanation="To begin using the FMI-Codes ecosystem, clone the repository to your local machine and install the required dependencies using npm."
        codeTitle="bash — install"
      >
        <span className="comment"># Clone the repository</span><br />
        git clone https://github.com/ShadowOfDiablo/FMI-Codes-2026.git<br /><br />
        <span className="comment"># Enter the project</span><br />
        cd FMI-Codes-2026<br /><br />
        <span className="comment"># Install dependencies</span><br />
        npm install <span className="string">--recursive</span>
      </CapabilityTemplate>

    </div>
  );
}