import React from 'react';
import { useTranslation } from 'next-i18next';
import Section from './Section';

interface ExperienceItem {
  label: string;
  text: string;
}

interface Job {
  title: string;
  company: string;
  duration: string;
  location: string;
  summary: string;
  stack: string[];
  items: ExperienceItem[];
  note?: string;
}

const Experience = () => {
  const { t } = useTranslation('common');

  // Jobs live in the locale files (newest first) so both languages stay in sync with the CV.
  const jobsData = t('experience.jobs', { returnObjects: true });
  const jobs = Array.isArray(jobsData) ? (jobsData as Job[]) : [];

  return (
    <Section id="experience" title={t('experience.title')}>
      <ol className="space-y-16">
        {jobs.map((job, index) => (
          <li key={`${job.company}-${job.duration}`} className="relative">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-2xl font-bold tracking-tight">
                {job.company}
                <span className="font-medium text-muted"> · {job.title}</span>
              </h3>
              <p className="font-mono text-[13px] text-muted">
                {index === 0 && <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" aria-hidden="true" />}
                {job.duration} · {job.location}
              </p>
            </div>

            <p className="mt-4 max-w-2xl text-muted">{job.summary}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {(job.stack ?? []).map((tech) => (
                <li key={tech} className="chip text-xs">
                  {tech}
                </li>
              ))}
            </ul>

            <dl className="mt-8 divide-y divide-line border-y border-line">
              {(job.items ?? []).map((item) => (
                <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="font-semibold">{item.label}</dt>
                  <dd className="text-muted">{item.text}</dd>
                </div>
              ))}
            </dl>

            {job.note && (
              <p className="mt-4 flex gap-2 text-sm text-muted">
                <i className="fas fa-circle-check mt-1 text-xs text-accent"></i>
                {job.note}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
