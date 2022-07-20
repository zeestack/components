import * as ReactDOMClient from 'react-dom/client';

import App from './app/app';
import { StrictMode } from 'react';
import { ThemeProvider } from '@pms/ui';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
