import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { Router } from './routes/routes';
import { GlobalStyles } from './styles/GlobalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>
);
