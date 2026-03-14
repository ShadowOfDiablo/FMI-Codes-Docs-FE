import React from 'react';
import { Title, Subtitle } from '../components/Typography';
import { CapabilityTemplate, DocImage } from '../components/DocHelpers';
import './Pages.css'; // Keeps our smooth fade-in animation

export function Capabilities() {
  return (
    <div className="page-transition">
      <Title>App Capabilities</Title>
      <Subtitle>Explore the core features and functionality of our platform.</Subtitle>

      <DocImage 
        src="https://placehold.co/800x400/1e1e22/38bdf8?text=Feature+Showcase" 
        alt="Feature Showcase Placeholder" 
        caption="Figure 1: The main dashboard interface showing active capabilities."
      />

      {/* Capability 1 */}
      <CapabilityTemplate 
        title="Pass-face Authentication" 
        explanation="Our proprietary Pass-face login system allows users to securely authenticate without traditional passwords, utilizing advanced biometric models directly in the browser."
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

      {/* Capability 2 */}
      <CapabilityTemplate 
        title="Real-time Data Synchronization" 
        explanation="All data is synced across clients in real-time using secure WebSockets. When a user updates their profile, the changes are instantly reflected everywhere."
        codeTitle="javascript — sync.js"
      >
        <span className="keyword">const</span> socket = <span className="keyword">new</span> <span className="function">WebSocket</span>(<span className="string">'wss://api.fmi-codes.com/sync'</span>);<br /><br />
        socket.<span className="function">addEventListener</span>(<span className="string">'message'</span>, (event) =&gt; {'{'}<br />
        &nbsp;&nbsp;<span className="keyword">const</span> data = JSON.<span className="function">parse</span>(event.data);<br />
        &nbsp;&nbsp;<span className="function">updateDashboardUI</span>(data);<br />
        {'}'});
      </CapabilityTemplate>
    </div>
  );
}