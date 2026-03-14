import React, { useState, useRef, useEffect } from 'react';
import { SectionTitle } from './Typography';
import { CodeBlock } from './CodeBlock';
import { X, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import './DocHelpers.css';

export function DocImage({ src, alt, caption }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  // Reset state when closing
  const handleClose = () => {
    setIsZoomed(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

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

  // Scroll wheel support
  const handleWheel = (e) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Support
  const [touchStartDist, setTouchStartDist] = useState(0);

  const handleTouchStart = (e) => {
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

  return (
    <>
      <figure className="doc-image-figure">
        <div className="doc-image-wrapper" onClick={() => setIsZoomed(true)}>
          <img src={src} alt={alt} className="doc-image-img" />
          <div className="doc-image-overlay">Click to explore</div>
        </div>
        {caption && <figcaption className="doc-image-caption">{caption}</figcaption>}
      </figure>

      {isZoomed && (
        <div className="image-zoom-overlay" onClick={handleClose} onWheel={handleWheel}>
          <div className="zoom-controls-bottom-right">
            <button className="zoom-ctrl-btn" onClick={handleZoomIn} title="Zoom In"><ZoomIn size={20} /></button>
            <button className="zoom-ctrl-btn" onClick={handleZoomOut} title="Zoom Out"><ZoomOut size={20} /></button>
            <button className="zoom-ctrl-btn" onClick={handleReset} title="Reset"><RefreshCw size={20} /></button>
            <div className="zoom-divider" />
            <button className="zoom-ctrl-btn close-btn" onClick={handleClose} title="Close"><X size={20} /></button>
          </div>
          
          <div 
            className="image-zoom-content"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              ref={imgRef}
              src={src} 
              alt={alt} 
              className="zoomed-img" 
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              draggable="false"
            />
          </div>
          {caption && <div className="zoomed-caption" onClick={(e) => e.stopPropagation()}>{caption}</div>}
        </div>
      )}
    </>
  );
}

export function CapabilityTemplate({ title, explanation, codeTitle, children }) {
  return (
    <div className="capability-wrapper">
      <SectionTitle>{title}</SectionTitle>
      <p className="capability-text">{explanation}</p>

      {/* The code block goes inside here */}
      <CodeBlock title={codeTitle}>
        {children}
      </CodeBlock>
    </div>
  );
}