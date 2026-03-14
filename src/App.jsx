import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// I've imported some specific icons for the new capabilities!
import { BookOpen, Terminal, User, ScanFace, RefreshCw } from 'lucide-react'; 
import { GlobalStyle } from './styles/GlobalStyle';
import { Layout, Main } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Footer } from './components/Typography';

// Import Pages
import { Introduction } from './pages/Introduction';
import { QuickStart } from './pages/QuickStart';
import { PassFaceAuth } from './pages/PassFaceAuth';
import { RealTimeSync } from './pages/RealTimeSync';
import { Demo } from './pages/Demo';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Not strictly needed anymore since NavLink handles active state, but safe to keep

  const navSections = [
    {
      title: 'Getting Started',
      items: [
        { label: 'Introduction', icon: <BookOpen size={18} />, href: '/' },
        { label: 'Quick Start', icon: <Terminal size={18} />, href: '/quick-start' },
      ]
    },
    {
      title: 'Capabilities', // <-- New header!
      items: [
        { label: 'Pass-face Auth', icon: <ScanFace size={18} />, href: '/capabilities/pass-face' },
        { label: 'Real-time Sync', icon: <RefreshCw size={18} />, href: '/capabilities/sync' },
      ]
    },
    {
      title: 'Account',
      items: [
        { label: 'Login Demo', icon: <User size={18} />, href: '/login' },
      ]
    }
  ];

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar open={mobileMenuOpen} sections={navSections} />
        
        <Main>
          <Header version="v1.0.0" />
          
          <div style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/quick-start" element={<QuickStart />} />
              
              {/* New Individual Capability Routes */}
              <Route path="/capabilities/pass-face" element={<PassFaceAuth />} />
              <Route path="/capabilities/sync" element={<RealTimeSync />} />
              
              <Route path="/login" element={<Demo />} />
            </Routes>
          </div>

          <Footer>
            © 2026 FMI-Codes. Built with React and Styled Components.
          </Footer>
        </Main>
      </Layout>
    </>
  );
};

export default App;