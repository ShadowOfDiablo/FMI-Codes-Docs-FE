import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0a0a0c;
    color: #e4e4e7;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  
  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0a0a0c;
  }
  ::-webkit-scrollbar-thumb {
    background: #27272a;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #3f3f46;
  }
`;
