import React from 'react';
import { Title, Subtitle } from '../components/Typography';
import { CapabilityTemplate } from '../components/DocHelpers';
import './Pages.css';

export function QuickStart() {
  return (
    <div className="page-transition">
      <Title>Quick Start</Title>
      <Subtitle>Get up and running with FacePass in minutes.</Subtitle>

      <CapabilityTemplate 
        title="Installation" 
        explanation="To begin using the FacePass ecosystem, install the required dependencies using npm."
        codeTitle="bash — install"
      >
        
        <span className="comment"># Install dependencies</span><br />
        npm install login-with-facepass
      </CapabilityTemplate>

      <CapabilityTemplate 
        title="React Component" 
        explanation="Copy and paste this React Component into your project, and after that you can use it in the Authentication forms."
        codeTitle="React.js"
      >
        
        <span className="comment"># FacePass React Component</span><br />
        
        import LoginWithFacePass from 'login-with-facepass';

        {"\n\n<LoginWithFacePass setJwt={setJwt} setStatus={setStatus}/>"}
      </CapabilityTemplate>

    </div>
  );
}