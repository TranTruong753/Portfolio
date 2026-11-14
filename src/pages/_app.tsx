import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from "next/app";
import { Be_Vietnam_Pro, JetBrains_Mono } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';

const sans = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {/* Font variables live on this wrapper; globals.css reads them through Tailwind's font-sans/font-mono. */}
      <div className={`${sans.variable} ${mono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
