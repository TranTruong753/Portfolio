import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'next-i18next';

const About = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('common');

  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold text-center mb-10 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
          {t('about.title')}
        </h2>
        <div className="h-1 w-24 bg-blue-600 rounded mx-auto mb-12"></div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="mx-auto w-full max-w-4xl">
            <h3 className={`text-3xl font-bold mb-6 tracking-tight ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              {t('about.subtitle')}
            </h3>
            <p className={`mb-4 text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              {t('about.description1')}
            </p>
            <p className={`mb-6 text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              {t('about.description2')}
            </p>

            <div className={`rounded-2xl p-8 shadow-xl border border-blue-100 dark:border-blue-600 transition-all duration-300`}>
              <h4 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
                <i className="fas fa-graduation-cap mr-2 text-blue-600 "></i>
                {t('about.educationTitle')}
              </h4>
              <div className="mb-6"></div>
              {/* Education */}
              <h5 className={`text-xl font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{t('about.university')}</h5>
              <p className={`text-md font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{t('about.degree')}</p>
              <p className={`text-md font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {t('about.gpa')} <span className="font-bold">3.35/4.0</span>
              </p>
              <p className={`text-md font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{t('about.time')}</p>
              <div className="my-6 border-t border-blue-200 dark:border-blue-600"></div>
              {/* Languages */}
              <h4 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
                <i className="fas fa-language mr-2 text-blue-600 "></i>
                {t('about.languages')}
              </h4>
              <div className="flex flex-wrap gap-3 mb-2">
                <span className={`px-4 py-2 rounded-full font-semibold ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                  Vietnamese (Native)
                </span>
                <span className={`px-4 py-2 rounded-full font-semibold ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                  English (Aptis B2)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Xóa card Languages bên phải */}
      </div>

    </section >
  );
};

export default About;