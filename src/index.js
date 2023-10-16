import { createRoot } from 'react-dom/client';
import App from 'src/components/App';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from 'src/components/ScrollToTop/scrollToTop';

const rootReactElement = (
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
