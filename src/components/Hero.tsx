import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'next-i18next';


const Hero = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('common');

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center  ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-blue-100'}`}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {t('hero.title')} <span className={`${isDarkMode ? 'text-blue-600' : 'text-blue-600'}`}>{t('hero.name')}</span>
            </h1>
            <p className={`text-xl mb-8 max-w-xl ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:+84824431088"
                className={`font-semibold flex items-center gap-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'} shadow transition`}
              >
                <i className="fas fa-phone text-blue-500"></i> (+84) 824 431 088
              </a>
              <a
                href="mailto:truongtq753@gmail.com"
                className={`font-semibold flex items-center gap-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'} shadow transition`}
              >
                <i className="fas fa-envelope text-blue-500"></i> truongtq753@gmail.com
              </a>
              <a
                href="https://github.com/TranTruong753"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold flex items-center gap-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'} shadow transition`}
              >
                <i className="fab fa-github text-blue-500"></i> github.com/TranTruong753
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="font-semibold bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                {t('hero.viewProjects')}
              </a>
              <a
                href="#contact"
                className={`font-semibold border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition ${isDarkMode ? 'text-gray-200' : 'text-blue-600'
                  }`}
              >
                {t('hero.contactMe')}
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white shadow-xl">
                <div className="bg-gray-200 border border-dashed rounded-full w-full h-full flex items-center justify-center">
                  <img
                    src="/img/avatar.jpg"
                    alt="Avatar"
                    className="object-cover w-62 h-62 md:w-74 md:h-74 rounded-full shadow-lg border border-white"
                  />
                </div>
              </div>
              <div className="font-semibold absolute -bottom-4 -left-4 bg-blue-600 text-white px-6 py-2 rounded-full transform -rotate-6 shadow-lg">
                Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;