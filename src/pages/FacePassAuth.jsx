import React from 'react';
import { Title, Subtitle } from '../components/Typography';
import { CapabilityTemplate, DocImage } from '../components/DocHelpers';
import './Pages.css';

export function FacePassAuth() {
  return (
    <div className="page-transition">
      <Title>FacePass Authentication</Title>
      <Subtitle>Secure, passwordless login using advanced biometric models.</Subtitle>

      <DocImage 
        src="https://placehold.co/800x300/1e1e22/38bdf8?text=FacePass+Scanning+UI" 
        alt="FacePass scanning interface" 
        caption="Figure 1: The user's camera feed analyzing facial landmarks."
      />

      <CapabilityTemplate 
        title="Implementation" 
        explanation="Our proprietary FacePass login system allows users to securely authenticate without traditional passwords, utilizing models directly in the browser. Call this function when the video stream is ready."
        codeTitle="javascript — auth.js"
      >
        <span className="keyword">import</span> {'{ authenticateFace }'} <span className="keyword">from</span> <span className="string">'@fmi-codes/auth'</span>;<br /><br />
        <span className="keyword">async function</span> <span className="function">loginUser</span>(videoStream) {'{'}<br />
        &nbsp;&nbsp;<span className="keyword">const</span> userToken = <span className="keyword">await</span> <span className="function">authenticateFace</span>(videoStream);<br />
        &nbsp;&nbsp;<span className="keyword">if</span> (userToken) {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;console.<span className="function">log</span>(<span className="string">"Login successful!"</span>);<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> userToken;<br />
        &nbsp;&nbsp;{'}'}<br />
        {'}'}
      </CapabilityTemplate>
    </div>
  );
}