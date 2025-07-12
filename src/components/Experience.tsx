import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'next-i18next';

const Experience = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('common');

  // Get responsibilities with proper fallback
  const responsibilities = t('experience.internResponsibilities', { returnObjects: true });
  const responsibilitiesArray = Array.isArray(responsibilities) ? responsibilities : [];

  return (
    <section
      id="experience"
      className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold text-center mb-10 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
          {t('experience.title')}
        </h2>

        <div className="h-1 w-24 bg-blue-600 rounded mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <div className={`relative pl-8 border-l-2 ${isDarkMode ? 'border-blue-600' : 'border-blue-300'}`}>
            <div className="mb-10">
              <div className={`absolute -left-6 w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                }`}>
                <i className="fas fa-briefcase text-blue-500 text-2xl"></i>
              </div>

              <div className={`p-6 rounded-lg shadow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {t('experience.internTitle')}
                </h3>
                <p className={`font-semibold mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}
                  }`}>
                  {t('experience.internCompany')}
                </p>
                <p  className={`text-sm mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  {t('experience.internDuration')}
                </p>

                <ul className="space-y-2">
                  {responsibilitiesArray.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <i className={`fas fa-check-circle mt-1 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'
                        }`}></i>
                      <span className={` ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`} >{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;