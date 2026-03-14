import React from 'react';
import { Title, Subtitle, SectionTitle } from '../components/Typography';
import { CardGrid, Card } from '../components/Card';
import { Cpu, Layers, Terminal } from 'lucide-react';
import { DocImage } from '../components/DocHelpers';
import './Pages.css';

export function Introduction() {
  return (
    <div className="page-transition">
      <Title>Introduction</Title>
      <Subtitle>
        A high-performance codebase architecture for the FMI-Codes ecosystem. 
        Built for scalability, speed, and developer experience.
      </Subtitle>

      {/* Example placeholder for your diagram */}
      <DocImage 
        src="https://placehold.co/800x300/1e1e22/38bdf8?text=System+Architecture+Diagram" 
        alt="System Architecture Placeholder" 
        caption="Figure 1: High-level overview of the application layers."
      />

      <SectionTitle>Core Modules</SectionTitle>
      <CardGrid>
        <Card icon={<Cpu size={24} color="#38bdf8" />} title="Backend API" description="Node.js based microservices architecture with high availability." />
        <Card icon={<Layers size={24} color="#38bdf8" />} title="Frontend Kit" description="Shared UI components built with React and standard CSS." />
        <Card icon={<Terminal size={24} color="#38bdf8" />} title="Mobile App" description="Cross-platform mobile solution for iOS and Android devices." />
      </CardGrid>
    </div>
  );
}