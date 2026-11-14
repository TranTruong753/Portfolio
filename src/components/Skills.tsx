import React from 'react';
import { useTranslation } from 'next-i18next';
import Section from './Section';

// Group order; names and items come from the locale files so they follow the CV per language.
const SKILL_GROUPS = ['backend', 'frontend', 'databases', 'tools', 'ai', 'process'] as const;

const Skills = () => {
  const { t } = useTranslation('common');

  return (
    <Section id="skills" title={t('skills.title')}>
      <div className="divide-y divide-line border-y border-line">
        {SKILL_GROUPS.map((id) => {
          const items = t(`skills.groups.${id}.items`, { returnObjects: true });
          const itemList = Array.isArray(items) ? (items as string[]) : [];

          return (
            <div key={id} className="grid gap-3 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
              <h3 className="eyebrow pt-1.5">{t(`skills.groups.${id}.name`)}</h3>
              <ul className="flex flex-wrap gap-2">
                {itemList.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
