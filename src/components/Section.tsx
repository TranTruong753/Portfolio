import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/** Shared section layout: title in a narrow left column, content on the right (stacked on mobile). */
const Section = ({ id, title, children, className = '' }: SectionProps) => (
  <section id={id} className={`border-t border-line py-20 md:py-28 ${className}`}>
    <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[220px_1fr] md:gap-16 md:px-6">
      <h2 className="section-title md:sticky md:top-28 md:self-start">{title}</h2>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export default Section;
