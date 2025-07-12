import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'next-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [templateParams, setTemplateParams] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('common');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTemplateParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    )
      .then((result) => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTemplateParams({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, (error) => {
        setIsSubmitting(false);
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
      });
  };

  return (
    <section
      id="contact"
      className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold text-center mb-10 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
          {t('contact.title')}
        </h2>

        <div className="h-1 w-24 bg-blue-600 rounded mx-auto mb-12"></div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                  <i className="fas fa-phone text-blue-500"></i>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{t('contact.phone')}</h3>
                  <p className={`text-sm  ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>(+84) 824 431 088</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                  <i className="fas fa-envelope text-blue-500"></i>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{t('contact.email')}</h3>
                  <p className={`text-sm  ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>truongtq753@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                  <i className="fab fa-github text-blue-500"></i>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>GitHub</h3>
                  <p className={`text-sm  ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>github.com/TranTruong753</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                  <i className="fas fa-globe text-blue-500"></i>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Portfolio</h3>
                  <p className={`text-sm  ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>trantruong753.github.io/MyPortfolio/</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className={`rounded-xl p-6 shadow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
              {submitSuccess && (
                <div className="p-4 mb-4 rounded-lg bg-green-100 text-green-800">
                  <i className="fas fa-check-circle mr-2"></i>
                  {t('contact.form.successMessage')}
                </div>
              )}
              {submitError && (
                <div className="p-4 mb-4 rounded-lg bg-red-100 text-red-800">
                  <i className="fas fa-times-circle mr-2"></i>
                  {t('contact.form.errorMessage') || 'Gửi email thất bại. Vui lòng thử lại!'}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className={`block mb-2 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={templateParams.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg ${isDarkMode
                      ? 'bg-gray-600 text-white border-gray-500'
                      : 'bg-white text-gray-800 border-gray-300'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className={`block mb-2 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={templateParams.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg ${isDarkMode
                      ? 'bg-gray-600 text-white border-gray-500'
                      : 'bg-white text-gray-800 border-gray-300'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className={`block mb-2 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={templateParams.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg ${isDarkMode
                      ? 'bg-gray-600 text-white border-gray-500'
                      : 'bg-white text-gray-800 border-gray-300'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className={`block mb-2 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={templateParams.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg ${isDarkMode
                      ? 'bg-gray-600 text-white border-gray-500'
                      : 'bg-white text-gray-800 border-gray-300'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                    } text-white transition`}
                >
                  {isSubmitting ? (
                    <span>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      {t('contact.form.sending')}
                    </span>
                  ) : (
                    <span>
                      <i className="fas fa-paper-plane mr-2"></i>
                      {t('contact.form.send')}
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;