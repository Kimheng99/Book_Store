import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// @ts-ignore: side-effect import of CSS file without module declarations
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
