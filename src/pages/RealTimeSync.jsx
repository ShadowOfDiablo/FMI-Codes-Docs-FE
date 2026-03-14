import React from 'react';
import { Title, Subtitle } from '../components/Typography';
import { CapabilityTemplate, DocImage } from '../components/DocHelpers';
import './Pages.css';

export function RealTimeSync() {
  return (
    <div className="page-transition">
      <Title>Real-time Synchronization</Title>
      <Subtitle>Keep your frontend perfectly in sync across all active clients.</Subtitle>

      <DocImage 
        src="https://placehold.co/800x300/1e1e22/38bdf8?text=WebSocket+Architecture" 
        alt="WebSocket connection diagram" 
        caption="Figure 1: Bi-directional event flow between server and clients."
      />

      <CapabilityTemplate 
        title="Listening for Updates" 
        explanation="All data is synced across clients in real-time using secure WebSockets. Whenever a payload is received, you can trigger a state update in React."
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