import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import LegalPage from './components/LegalPage.tsx';
import './index.css';

const path = window.location.pathname.toLowerCase();
const content =
  path === '/impressum' ? <LegalPage type="impressum" /> :
  path === '/datenschutz' ? <LegalPage type="datenschutz" /> :
  <App />;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {content}
  </StrictMode>,
);
