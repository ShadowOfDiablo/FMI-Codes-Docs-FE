import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  padding: 3rem 4rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;
