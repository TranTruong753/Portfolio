import React from 'react';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center md:px-6">
        <p>{t('footer.copyright')}</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/TranTruong753" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink">
            <i className="fab fa-github text-base"></i>
          </a>
          <a href="mailto:truongtq753@gmail.com" aria-label="Email" className="hover:text-ink">
            <i className="fas fa-envelope text-base"></i>
          </a>
          <a href="#home" className="inline-flex items-center gap-1.5 hover:text-ink">
            {t('footer.backToTop')}
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
