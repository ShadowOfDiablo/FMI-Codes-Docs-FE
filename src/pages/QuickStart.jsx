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
        <span className="keyword">import</span> {'{ FacePassAuth }'} <span className="keyword">from</span> <span className="string">'@fmi-codes/react-sdk'</span>;<br /><br />
        <span className="keyword">const</span> <span className="function">Login</span> = () =&gt; {'{'}<br />
        &nbsp;&nbsp;<span className="keyword">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="function">FacePassAuth</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;apiKey=<span className="string">"your-api-key"</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onSuccess={'{'}(token) =&gt; console.<span className="function">log</span>(token){'}'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />
        &nbsp;&nbsp;);<br />
        {'}'};
      </CapabilityTemplate>

    </div>
  );
}