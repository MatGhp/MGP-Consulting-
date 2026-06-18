import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import LegalPage from './components/LegalPage.tsx';
import { I18nProvider } from './i18n';
import './index.css';

const path = window.location.pathname.toLowerCase();
const content =
  path === '/impressum' ? <LegalPage type="impressum" /> :
  path === '/datenschutz' ? <LegalPage type="datenschutz" /> :
  <App />;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      {content}
    </I18nProvider>
  </StrictMode>,
);
