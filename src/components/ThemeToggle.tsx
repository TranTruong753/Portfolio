import React from 'react';
import { useTranslation } from 'next-i18next';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation('common');

  // Icons swap with the "dark" class via CSS, so the right one shows before React hydrates.
  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-accent hover:text-accent"
      aria-label={t('header.toggleTheme')}
    >
      {/* Wrapper spans carry the visibility classes; Font Awesome's display rule would override them on <i>. */}
      <span className="dark:hidden"><i className="fas fa-moon text-sm"></i></span>
      <span className="hidden dark:inline"><i className="fas fa-sun text-sm"></i></span>
    </button>
  );
};

export default ThemeToggle;
