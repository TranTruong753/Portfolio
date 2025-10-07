import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'next-i18next';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('common');

  const skills = {
    programming: ['JavaScript/TypeScript', 'HTML/CSS', 'SQL'],
    databases: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB'],
    tools: ['Git/GitHub', 'VS Code', 'Vercel', 'Figma', 'Postman'],
    frameworks: ['Next.js', 'NestJS'],
    libraries: ['React','Redux', 'Ant Design', 'Tailwind CSS', 'Shadcn UI', 'Material UI', 'React Hook Form']
  };

  return (
    <section 
      id="skills" 
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold text-center mb-10 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
          {t('skills.title')}
        </h2>

        <div className="h-1 w-24 bg-blue-600 rounded mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`rounded-xl p-6 shadow ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
              <i className="fas fa-laptop-code mr-2"></i>
              {t('skills.programming')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.programming.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-4 py-2 rounded-full font-semibold ${
                    isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className={`rounded-xl p-6 shadow ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
              <i className="fas fa-database mr-2"></i>
              {t('skills.databases')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.databases.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-4 py-2 rounded-full font-semibold ${
                    isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className={`rounded-xl p-6 shadow ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
              <i className="fas fa-tools mr-2"></i>
              {t('skills.tools')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-4 py-2 rounded-full font-semibold ${
                    isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className={`rounded-xl p-6 shadow ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
              <i className="fab fa-react mr-2"></i>
              {t('skills.frameworks')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-4 py-2 rounded-full font-semibold ${
                    isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className={`rounded-xl p-6 shadow ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
              <i className="fas fa-book mr-2"></i>
              {t('skills.libraries')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.libraries.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-4 py-2 rounded-full font-semibold ${
                    isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;