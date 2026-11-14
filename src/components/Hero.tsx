import React from 'react';
import { useTranslation } from 'next-i18next';

const CONTACTS = [
  { href: 'tel:+84824431088', icon: 'fas fa-phone', label: '+84 824 431 088' },
  { href: 'mailto:truongtq753@gmail.com', icon: 'fas fa-envelope', label: 'truongtq753@gmail.com' },
  { href: 'https://github.com/TranTruong753', icon: 'fab fa-github', label: 'TranTruong753', external: true },
];

const LABEL_STACK = ['Go', 'PostgreSQL', 'React', 'Angular'];

/** Hero signature: a shipping label, nodding to the logistics platforms the owner builds. */
const ShippingLabel = () => {
  const { t } = useTranslation('common');

  return (
    <div className="reveal relative mx-auto w-full max-w-sm rotate-[1.5deg] md:rotate-2" style={{ animationDelay: '250ms' }}>
      {/* Peeled backing sheet behind the label */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg border border-line bg-surface/60" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-lg border-2 border-ink bg-surface font-mono text-ink shadow-[0_24px_60px_-28px_rgb(var(--ink)/0.45)]">
        <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2 text-[11px] uppercase tracking-[0.2em]">
          <span>{t('hero.label.title')}</span>
          <span className="rounded-sm bg-stamp px-1.5 py-0.5 font-medium text-white">JP</span>
        </div>

        <div className="grid grid-cols-[96px_1fr] border-b-2 border-ink">
          <div className="border-r-2 border-ink p-3">
            <img src="/img/avatar.jpg" alt={t('hero.name')} className="aspect-[3/4] w-full rounded-sm object-cover grayscale-[30%]" />
          </div>
          <dl className="divide-y divide-line text-xs">
            <div className="px-3 py-2">
              <dt className="text-[10px] uppercase tracking-widest text-muted">{t('hero.label.from')}</dt>
              <dd className="mt-0.5 font-sans text-sm font-semibold">{t('hero.label.fromValue')}</dd>
            </div>
            <div className="px-3 py-2">
              <dt className="text-[10px] uppercase tracking-widest text-muted">{t('hero.label.to')}</dt>
              <dd className="mt-0.5 font-sans text-sm font-semibold">{t('hero.label.toValue')}</dd>
            </div>
            <div className="px-3 py-2">
              <dt className="text-[10px] uppercase tracking-widest text-muted">{t('hero.label.status')}</dt>
              <dd className="mt-0.5 flex items-center gap-1.5 font-sans text-sm font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                {t('hero.label.statusValue')}
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-b-2 border-ink px-4 py-2.5">
          <p className="text-[10px] uppercase tracking-widest text-muted">{t('hero.label.stack')}</p>
          <p className="mt-1 text-sm">{LABEL_STACK.join(' / ')}</p>
        </div>

        <div className="relative px-4 pb-3 pt-4">
          <div className="barcode h-14 w-full" aria-hidden="true" />
          <div className="scan-line pointer-events-none absolute left-4 top-3 h-16 w-0.5 bg-stamp/80" aria-hidden="true" />
          <p className="mt-2 text-center text-[11px] tracking-[0.3em]">@TranTruong753</p>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:min-h-[100dvh] md:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 md:grid-cols-[1.25fr_1fr] md:px-6">
        <div>
          <p className="eyebrow reveal flex items-center gap-2">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {t('hero.eyebrow')}
          </p>

          <h1 className="reveal mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: '80ms' }}>
            <span className="block text-lg font-medium tracking-normal text-muted sm:text-xl">{t('hero.title')}</span>
            {t('hero.name')}
            <span className="text-accent">.</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg text-muted" style={{ animationDelay: '160ms' }}>
            {t('hero.description')}
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: '220ms' }}>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              {t('hero.viewExperience')}
              <i className="fas fa-arrow-down text-xs"></i>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {t('hero.contactMe')}
            </a>
          </div>

          <ul className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[13px] text-muted" style={{ animationDelay: '280ms' }}>
            {CONTACTS.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <i className={`${c.icon} text-xs`}></i>
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ShippingLabel />
      </div>
    </section>
  );
};

export default Hero;
