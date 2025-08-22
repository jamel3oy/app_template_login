'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppStyleProvider from '@crema/context/AppStyleProvider';
// import AppLocaleProvider from '@crema/context/AppLocaleProvider';

import AuthRoutes from '@crema/components/AuthRoutes';
import InfoViewContextProvider from '@crema/context/AppContextProvider/InfoViewContextProvider';
// import AppAuthProvider from '@crema/core/AppAuthProvider';

import { SessionProvider } from 'next-auth/react';


import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../public/styles/vendors/index.css';

const clientSideEmotionCache = createEmotionCache();
type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Template ระบบ</title>
      </head>
      <body>
      {/* <SessionProvider basePath='/apppath/api/auth'> */}
      <SessionProvider>
        <CacheProvider value={clientSideEmotionCache}>
          <AppContextProvider>
            <AppThemeProvider>
              <AppStyleProvider>
                {/* <AppLocaleProvider> */}
                  <InfoViewContextProvider>
                    {/* <AppAuthProvider> */}
                      <AuthRoutes>
                        <CssBaseline />
                        {children}
                      </AuthRoutes>
                    {/* </AppAuthProvider> */}
                  </InfoViewContextProvider>
                {/* </AppLocaleProvider> */}
              </AppStyleProvider>
            </AppThemeProvider>
          </AppContextProvider>
        </CacheProvider>
      </SessionProvider>
      </body>
    </html>
  );
}
