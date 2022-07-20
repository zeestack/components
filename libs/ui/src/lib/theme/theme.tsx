/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { MantineProvider, MantineThemeOverride } from '@mantine/core';

import React from 'react';
import { colors } from './constants';

export const myTheme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    brand: [...colors] as any,
  },
  primaryColor: 'brand',
  headings: {
    sizes: {
      h1: { fontSize: '4rem', lineHeight: 1.5 },
      h2: { fontSize: '3rem', lineHeight: 1.5 },
      h3: { fontSize: '2rem', lineHeight: 1.5 },
      h4: { fontSize: '1.5rem', lineHeight: 1.5 },
      h5: { fontSize: '1.25rem', lineHeight: 1.5 },
      h6: { fontSize: '1rem', lineHeight: 1.5 },
    },
  },
};

export interface ThemeProps {
  children: React.ReactElement;
}

// TODO: Create a reusable theme provider component

export function ThemeProvider({ children }: ThemeProps) {
  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}

export default ThemeProvider;
