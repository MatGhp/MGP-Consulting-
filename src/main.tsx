import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import App from './App.tsx';
import LegalPage from './components/LegalPage.tsx';
import { I18nProvider } from './i18n';
import { resolveRoute } from './routes';
import './index.css';

const { route, canonicalPath } = resolveRoute(window.location.search, window.location.pathname);

if (canonicalPath) {
  window.history.replaceState(null, '', canonicalPath);
}

const content = route ? <LegalPage type={route} /> : <App />;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* LazyMotion + m.* keeps the animation runtime small; reducedMotion="user" honours the OS setting. */}
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <I18nProvider>
          {content}
        </I18nProvider>
      </MotionConfig>
    </LazyMotion>
  </StrictMode>,
);
