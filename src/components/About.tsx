import React from 'react';
import { useTranslation } from 'next-i18next';
import Section from './Section';

const About = () => {
  const { t } = useTranslation('common');

  const facts = [
    {
      label: t('about.educationTitle'),
      value: t('about.university'),
      detail: `${t('about.degree')} · ${t('about.time')}`,
    },
    { label: t('about.gpa'), value: '3.38 / 4.0' },
    { label: t('about.languages'), value: t('about.vietnamese'), detail: t('about.english') },
    { label: t('about.location'), value: t('about.locationValue') },
  ];

  return (
    <Section id="about" title={t('about.title')}>
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
        <p>{t('about.description1')}</p>
        <p className="text-muted">{t('about.description2')}</p>
      </div>

      <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-surface p-5">
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-2 font-semibold">{fact.value}</dd>
            {fact.detail && <dd className="mt-0.5 text-sm text-muted">{fact.detail}</dd>}
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default About;
