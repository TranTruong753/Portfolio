import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'next-i18next';

const NAV_IDS = ['about', 'skills', 'experience', 'contact'] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation('common');

  // Show the border/blur only after the page leaves the top, so the hero stays clean.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#home" className="font-mono text-sm font-medium tracking-tight text-ink">
          <span className="text-accent">~/</span>tran-quang-truong
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="text-sm font-medium text-muted transition-colors hover:text-ink">
                {t(`header.${id}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('header.openMenu')}
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-sm`}></i>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <ul className="mx-auto max-w-6xl space-y-1 px-4 pb-4 md:hidden">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-ink hover:bg-surface"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`header.${id}`)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
