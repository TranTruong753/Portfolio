import React from 'react';
import { useRouter } from 'next/router';

const LOCALES = ['vi', 'en'] as const;

const LanguageToggle = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLanguage = (lng: string) => {
    router.push({ pathname, query }, asPath, { locale: lng, scroll: false });
  };

  return (
    <div className="flex h-9 items-center rounded-md border border-line p-0.5 font-mono text-xs">
      {LOCALES.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          aria-pressed={locale === lng}
          className={`h-full rounded px-2.5 uppercase transition-colors ${
            locale === lng ? 'bg-ink text-bg' : 'text-muted hover:text-ink'
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
