import React from 'react';
import { Title, Subtitle, SectionTitle } from '../components/Typography';
import { CardGrid, Card } from '../components/Card';
import { Cpu, Layers, Terminal } from 'lucide-react';
import { UXFlowchart } from '../components/Flowcharts/Flowchart';
import './Pages.css';

export function Introduction() {
  return (
    <div className="page-transition">
      <Title>Introduction</Title>
      <Subtitle>
        FacePass is the service that makes user authentication easy and secure for everyone involved - users and developers.
      </Subtitle>

      <UXFlowchart />

      <SectionTitle>Core Modules</SectionTitle>
      <CardGrid>
        <Card icon={<Cpu size={24} color="#38bdf8" />} title="Easy-to-use API" description="Server that authenticates the users with simple and easy to implement calls." />
        <Card icon={<Layers size={24} color="#38bdf8" />} title="Frontend Kit" description="Shared UI components, built with React and standard CSS, that take 2 minutes to implement." />
        <Card icon={<Terminal size={24} color="#38bdf8" />} title="Mobile App" description="Mobile solution for users to register to our service and track their logins." />
      </CardGrid>
    </div>
  );
}