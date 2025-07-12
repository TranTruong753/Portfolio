import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { isDarkMode } = useTheme();

  const { t } = useTranslation('common');

  return (
    <footer className={`py-12 text-gray-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>Trần Quang Trường</h3>
            <p className={`mb-4 max-w-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'}`}>
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/TranTruong753"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}
                aria-label="GitHub"
              >

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#3b82f6">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>

              </a>
              <a
                href="mailto:truongtq753@gmail.com"
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#3b82f6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="tel:+84824431088"
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}
                aria-label="Phone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#3b82f6">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              {/* <a 
                  href="https://trantruong753.github.io/MyPortfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                   className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}
                  aria-label="Portfolio"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#3b82f6">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </a> */}
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#"
                  className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}>
                  {t('footer.home')}
                </a>
              </li>
              <li>
                <a href="#about" className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}>
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#skills" className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}>
                  {t('footer.skills')}
                </a>
              </li>
              <li>
                <a href="#experience" className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}>
                  {t('footer.experience')}
                </a>
              </li>
              <li>
                <a href="#projects" className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}>
                  {t('footer.projects')}
                </a>
              </li>
              <li>
                <a href="#contact" className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}>
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>
              {t('footer.projects')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/TranTruong753/Spotify_Project_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}
                >
                  Spotify Clone
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TranTruong753/ProjectManagement-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}
                >
                  Department Task Manager
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TranTruong753/Job-Portal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-400'} hover:opacity-80 cursor-pointer`}
                >
                  Job Portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t  ${isDarkMode ? 'border-blue-600' : 'border-gray-400'} mt-12 pt-6 text-center`}>
          <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-400'} `}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
