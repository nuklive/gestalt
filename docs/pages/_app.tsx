import '../docs.css';
// import css in the order rollut build them in the dist/
import 'gestalt/dist/gestalt.css';
import 'gestalt-datepicker/dist/gestalt-datepicker.css';
import { ReactNode, useEffect,useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import { Box, DeviceTypeProvider } from 'gestalt';
import App from '../docs-components/App';
import { DocsConfigProvider } from '../docs-components/contexts/DocsConfigProvider';
import DocsDefaultLabelProvider from '../docs-components/contexts/DocsDefaultLabelProvider';

function Providers({ children }: { children: ReactNode }) {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Client-side mobile detection using window.matchMedia
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobileDevice(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobileDevice(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    // Providers needed for visual diff tests are located here rather within components/App.tsx
    <DocsConfigProvider isMobile={isMobileDevice}>
      <DeviceTypeProvider deviceType={isMobileDevice ? 'mobile' : 'desktop'}>
        <DocsDefaultLabelProvider>{children}</DocsDefaultLabelProvider>
      </DeviceTypeProvider>
    </DocsConfigProvider>
  );
}

// This default export is required in a new `pages/_app.tsx` file.
function GestaltApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();
  const [cookies] = useState(() => new Cookies());

  // Hide navigation / sidebar for visual tests
  if (router.pathname.startsWith('/visual-test/')) {
    return (
      <Providers>
        <Box data-test-id="visual-test" display="inlineBlock">
          <Component {...pageProps} />
        </Box>
      </Providers>
    );
  }

  return (
    <CookiesProvider cookies={cookies}>
      <Providers>
        <App files={undefined}>
          <Component {...pageProps} />
        </App>
      </Providers>
    </CookiesProvider>
  );
}

// getInitialProps removed for static export compatibility
// Mobile detection now handled client-side in Providers component
// File loading (localFiles) removed - not compatible with static export

export default GestaltApp;
