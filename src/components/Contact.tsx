import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import emailjs from '@emailjs/browser';
import Section from './Section';

const CONTACT_LINKS = [
  { key: 'phone', icon: 'fas fa-phone', value: '+84 824 431 088', href: 'tel:+84824431088' },
  { key: 'email', icon: 'fas fa-envelope', value: 'truongtq753@gmail.com', href: 'mailto:truongtq753@gmail.com' },
  { key: 'github', icon: 'fab fa-github', value: 'github.com/TranTruong753', href: 'https://github.com/TranTruong753', external: true },
];

const FIELDS = ['name', 'email', 'subject'] as const;

// Inputs stay at 16px+ so mobile browsers do not zoom on focus.
const inputClass =
  'w-full rounded-md border border-line bg-bg px-3.5 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20';

const Contact = () => {
  const [templateParams, setTemplateParams] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const { t } = useTranslation('common');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTemplateParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setTemplateParams({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitSuccess(false), 5000);
        },
        () => {
          setIsSubmitting(false);
          setSubmitError(true);
          setTimeout(() => setSubmitError(false), 5000);
        }
      );
  };

  return (
    <Section id="contact" title={t('contact.title')}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="max-w-sm text-lg text-muted">{t('contact.subtitle')}</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {CONTACT_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 py-4"
                >
                  <i className={`${link.icon} w-4 text-center text-muted transition-colors group-hover:text-accent`}></i>
                  <span className="font-mono text-sm transition-colors group-hover:text-accent">{link.value}</span>
                  <i className="fas fa-arrow-right ml-auto text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-surface p-6">
          {submitSuccess && (
            <p className="mb-5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
              {t('contact.form.successMessage')}
            </p>
          )}
          {submitError && (
            <p className="mb-5 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
              {t('contact.form.errorMessage')}
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {FIELDS.map((field) => (
              <div key={field} className={field === 'subject' ? 'sm:col-span-2' : ''}>
                <label htmlFor={field} className="eyebrow mb-2 block">
                  {t(`contact.form.${field}`)}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={templateParams[field]}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="eyebrow mb-2 block">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={templateParams.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-y`}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-xs`}></i>
            {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
