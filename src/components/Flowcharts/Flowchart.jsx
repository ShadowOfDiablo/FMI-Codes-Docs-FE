import React, { useState, useRef, useEffect } from 'react';
import { 
  User, 
  Smartphone, 
  Server, 
  Database, 
  Globe, 
  LayoutDashboard, 
  Lock, 
  ShieldCheck,
  Send,
  Zap,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RefreshCw
} from 'lucide-react';
import './Flowchart.css';

const Flowchart = ({ nodes, edges, caption, viewBox = "0 0 800 400" }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setIsZoomed(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Prevent body scroll when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  const handleZoomIn = (e) => {
    if (e) e.stopPropagation();
    setScale(prev => Math.min(prev + 0.3, 5));
  };

  const handleZoomOut = (e) => {
    if (e) e.stopPropagation();
    setScale(prev => Math.max(prev - 0.3, 0.5));
  };

  const handleReset = (e) => {
    if (e) e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    if (!isZoomed) return;
    e.stopPropagation();
    if (e.deltaY < 0) handleZoomIn();
    else handleZoomOut();
  };

  const handleMouseDown = (e) => {
    if (isZoomed && scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && isZoomed && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  // Touch Support
  const [touchStartDist, setTouchStartDist] = useState(0);

  const handleTouchStart = (e) => {
    if (!isZoomed) return;
    if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - position.x, 
        y: e.touches[0].clientY - position.y 
      });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchStartDist(dist);
    }
  };

  const handleTouchMove = (e) => {
    if (!isZoomed) return;
    if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = dist / touchStartDist;
      setScale(prev => Math.min(Math.max(prev * delta, 0.5), 5));
      setTouchStartDist(dist);
    }
  };

  const renderContent = (isModal = false) => (
    <svg 
      viewBox={viewBox} 
      className={`flowchart-svg ${isModal ? 'is-modal' : ''}`}
      style={isModal ? {
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
      } : {}}
      onMouseDown={isModal ? handleMouseDown : undefined}
      onMouseMove={isModal ? handleMouseMove : undefined}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={isModal ? handleTouchStart : undefined}
      onTouchMove={isModal ? handleTouchMove : undefined}
      onTouchEnd={() => setIsDragging(false)}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>

      {/* Edges */}
      {edges.map((edge, index) => (
        <g key={`edge-${index}`}>
          <path
            d={edge.d}
            className={`flow-edge ${edge.active ? 'flow-edge-active' : ''}`}
            id={`edge-path-${index}`}
          />
          {edge.label && (
            <g transform={edge.labelPos ? `translate(${edge.labelPos.x}, ${edge.labelPos.y})` : ''}>
              {!edge.labelPos && (
                <text className="flow-edge-label-text">
                  <textPath href={`#edge-path-${index}`} startOffset="50%">
                    {edge.label}
                  </textPath>
                </text>
              )}
              {edge.labelPos && (
                 <>
                  <rect x="-40" y="-10" width="80" height="20" className="flow-edge-label-bg" />
                  <text className="flow-edge-label-text">{edge.label}</text>
                 </>
              )}
            </g>
          )}
        </g>
      ))}

      {/* Nodes */}
      {nodes.map((node, index) => (
        <g 
          key={`node-${index}`} 
          className={`flow-node ${node.glow || ''}`}
          style={{ '--node-color': node.color || 'var(--flow-primary)' }}
        >
          <rect 
            x={node.x} 
            y={node.y} 
            width={node.width || 120} 
            height={node.height || 80} 
          />
          
          {/* Icon */}
          {node.icon && (
            <g transform={`translate(${node.x + (node.width || 120)/2 - 12}, ${node.y + 15})`} className="icon-container">
              {node.icon}
            </g>
          )}

          <text 
            x={node.x + (node.width || 120)/2} 
            y={node.y + (node.icon ? 55 : 40)} 
            className="label"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );

  return (
    <>
      <div className="flowchart-container">
        <button className="flow-expand-btn" onClick={() => setIsZoomed(true)} title="Expand Diagram">
          <Maximize2 size={18} />
        </button>
        {renderContent()}
        {caption && <div className="flow-caption">{caption}</div>}
      </div>

      {isZoomed && (
        <div className="image-zoom-overlay" onClick={handleClose} onWheel={handleWheel}>
          <div className="zoom-controls-bottom-right">
            <button className="zoom-ctrl-btn" onClick={handleZoomIn} title="Zoom In"><ZoomIn size={20} /></button>
            <button className="zoom-ctrl-btn" onClick={handleZoomOut} title="Zoom Out"><ZoomOut size={20} /></button>
            <button className="zoom-ctrl-btn" onClick={handleReset} title="Reset"><RefreshCw size={20} /></button>
            <div className="zoom-divider" />
            <button className="zoom-ctrl-btn close-btn" onClick={handleClose} title="Close"><X size={20} /></button>
          </div>
          
          <div className="image-zoom-content" onClick={(e) => e.stopPropagation()}>
            {renderContent(true)}
          </div>
          
          {caption && <div className="zoomed-caption" onClick={(e) => e.stopPropagation()}>{caption}</div>}
        </div>
      )}
    </>
  );
};

export default Flowchart;

// Specific Flowchart Data Components
export const RegistrationFlow = () => {
  const nodes = [
    { x: 50, y: 150, label: 'User', icon: <User size={24} />, color: '#38bdf8' },
    { x: 250, y: 150, label: 'Mobile App', icon: <Smartphone size={24} />, color: '#a78bfa' },
    { x: 450, y: 150, label: 'Backend', icon: <Server size={24} />, color: '#fb7185' },
    { x: 650, y: 150, label: 'Database', icon: <Database size={24} />, color: '#34d399' },
  ];

  const edges = [
    { d: 'M 170 190 L 250 190', label: 'Download & Open', labelPos: { x: 210, y: 110 }, active: true },
    { d: 'M 370 190 L 450 190', label: 'Register, Create Private/Public KeyPair', labelPos: { x: 410, y: 110 }, active: true },
    { d: 'M 570 190 L 650 190', label: 'Save Identity and Public Key', labelPos: { x: 610, y: 110 }, active: true },
  ];

  return <Flowchart nodes={nodes} edges={edges} caption="Figure 1: Registration Workflow" />;
};

export const ChallengeCreationFlow = () => {
  const nodes = [
    { x: 50, y: 150, label: 'Website', icon: <Globe size={24} />, color: '#38bdf8' },
    { x: 340, y: 150, label: 'Backend', icon: <Server size={24} />, color: '#fb7185' },
    { x: 630, y: 150, label: 'Mobile App', icon: <Smartphone size={24} />, color: '#a78bfa' },
  ];

  const edges = [
    { d: 'M 170 190 L 340 190', label: 'Request Challenge', labelPos: { x: 255, y: 110 }, active: true },
    { d: 'M 460 190 L 630 190', label: 'Create Challenge & Push Notification', labelPos: { x: 545, y: 110 }, active: true },
  ];

  return <Flowchart nodes={nodes} edges={edges} caption="Figure 2: Challenge Creation" />;
};

export const ChallengeApprovalFlow = () => {
  const nodes = [
    { x: 50, y: 150, label: 'Mobile App', icon: <Smartphone size={24} />, color: '#a78bfa' },
    { x: 340, y: 150, label: 'Backend', icon: <Server size={24} />, color: '#fb7185' },
    { x: 630, y: 150, label: 'Auth Verified', icon: <ShieldCheck size={24} />, color: '#34d399', glow: 'glow-primary' },
  ];

  const edges = [
    { d: 'M 170 190 L 340 190', label: 'Sign', labelPos: { x: 255, y: 110 }, active: true },
    { d: 'M 460 190 L 630 190', label: 'Verify & Update Status', labelPos: { x: 545, y: 110 }, active: true },
  ];

  return <Flowchart nodes={nodes} edges={edges} caption="Figure 3: Challenge Approval" />;
};

export const UserLoginFlow = () => {
  const nodes = [
    { x: 50, y: 150, label: 'Website', icon: <Globe size={24} />, color: '#38bdf8' },
    { x: 340, y: 150, label: 'Backend', icon: <Server size={24} />, color: '#fb7185' },
    { x: 630, y: 150, label: 'Dashboard', icon: <LayoutDashboard size={24} />, color: '#34d399', glow: 'glow-primary' },
  ];

  const edges = [
    { d: 'M 170 190 L 340 190', label: 'Polling / Wait', labelPos: { x: 255, y: 110 }, active: true },
    { d: 'M 460 190 L 630 190', label: 'JWT Token', labelPos: { x: 545, y: 110 }, active: true },
  ];

  return <Flowchart nodes={nodes} edges={edges} caption="Figure 4: User Login Completion" />;
};

export const UXFlowchart = () => {
  const nodes = [
    { x: 40, y: 60, label: 'User', icon: <User size={20} />, color: '#f472b6', width: 100, height: 70 },
    { x: 250, y: 60, label: 'Website', icon: <Globe size={20} />, color: '#34d399', width: 100, height: 70 },
    { x: 250, y: 260, label: 'Backend', icon: <Server size={20} />, color: '#38bdf8', width: 100, height: 70 },
    { x: 460, y: 260, label: 'Mobile App', icon: <Smartphone size={20} />, color: '#38bdf8', width: 100, height: 70 },
  ];

  const edges = [
    { d: 'M 140 95 L 250 95', label: '1. Access', labelPos: { x: 195, y: 85 }, active: true  },
    { d: 'M 300 130 L 300 260', label: '2. Login Req', labelPos: { x: 340, y: 195 }, active: true  },
    { d: 'M 350 295 L 460 295', label: '3. Challenge', labelPos: { x: 405, y: 285 }, active: true  },
    { d: 'M 510 260 L 350 95', label: '4. Biometric Sign', labelPos: { x: 450, y: 160 }, active: true  },
    { d: 'M 300 260 L 300 130', label: '5. Success', labelPos: { x: 260, y: 195 }, active: true },
  ];

  return <Flowchart nodes={nodes} edges={edges} caption="Figure 1: High-level UX Overview" viewBox="0 0 600 400" />;
};

export const WebSocketFlow = () => {
  const nodes = [
    { x: 50, y: 150, label: 'Client A', icon: <LayoutDashboard size={24} />, color: '#38bdf8' },
    { x: 340, y: 150, label: 'Server (WS)', icon: <Send size={24} />, color: '#fb7185' },
    { x: 630, y: 150, label: 'Client B', icon: <LayoutDashboard size={24} />, color: '#34d399' },
  ];

  const edges = [
    { d: 'M 170 180 L 340 180', label: 'Emit Event', labelPos: { x: 255, y: 170 }, active: true },
    { d: 'M 340 210 L 170 210', label: 'Broadcast', labelPos: { x: 255, y: 220 }, active: true },
    { d: 'M 460 180 L 630 180', label: 'Broadcast', labelPos: { x: 545, y: 170 }, active: true },
    { d: 'M 630 210 L 460 210', label: 'Emit Event', labelPos: { x: 545, y: 220 }, active: true },
  ];

  return <Flowchart nodes={nodes} edges={edges} caption="Figure 1: Real-time Event Flow" />;
};
