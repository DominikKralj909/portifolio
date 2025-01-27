import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx';
import './style/index.scss';
import 'font-awesome/css/font-awesome.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
