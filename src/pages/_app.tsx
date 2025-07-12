import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from "next/app";
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);