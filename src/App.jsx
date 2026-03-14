import React, { useState } from 'react';
import { BookOpen, Terminal, Cpu, Layers, Code2 } from 'lucide-react';

import './styles/global.css';

import { Layout, Main } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Title, Subtitle, SectionTitle, Footer } from './components/Typography';
import { CodeBlock } from './components/CodeBlock';
import { CardGrid, Card } from './components/Card';

const navSections = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', icon: <BookOpen size={18} />, href: '#', active: true },
      { label: 'Quick Start', icon: <Terminal size={18} />, href: '#' },
      { label: 'Architecture', icon: <Cpu size={18} />, href: '#' },
    ]
  },
  {
    title: 'Components',
    items: [
      { label: 'UI Kit', icon: <Layers size={18} />, href: '#' },
      { label: 'API Reference', icon: <Code2 size={18} />, href: '#' },
    ]
  }
];

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Layout>
        <Sidebar open={mobileMenuOpen} sections={navSections} />
        <Main>
          <Header version="v1.0.0" />
          
          <Title>Documentation</Title>
          <Subtitle>
            A high-performance codebase architecture for the FMI-Codes ecosystem. 
            Built for scalability, speed, and developer experience.
          </Subtitle>

          <CodeBlock title="bash — install">
            <span className="comment"># Clone the repository</span><br />
            git clone https://github.com/ShadowOfDiablo/FMI-Codes-2026.git<br /><br />
            <span className="comment"># Enter the project</span><br />
            cd FMI-Codes-2026<br /><br />
            <span className="comment"># Install dependencies</span><br />
            npm install <span className="string">--recursive</span>
          </CodeBlock>

          <SectionTitle>Core Modules</SectionTitle>
          <CardGrid>
            <Card 
              icon={<Cpu size={24} color="#38bdf8" />}
              title="Backend API"
              description="Node.js based microservices architecture with high availability and robust data processing."
            />
            <Card 
              icon={<Layers size={24} color="#38bdf8" />}
              title="Frontend Kit"
              description="Shared UI components built with React and standard CSS for consistent design across apps."
            />
            <Card 
              icon={<Terminal size={24} color="#38bdf8" />}
              title="Mobile App"
              description="Cross-platform mobile solution for seamless user experience on iOS and Android devices."
            />
          </CardGrid>

          <Footer>
            © 2026 FMI-Codes. Built with React and standard CSS.
          </Footer>
        </Main>
      </Layout>
    </>
  );
};

export default App;