import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('common');

  const projects = [
    {
      id: 'spotify',
      title: t('projects.spotify.title'),
      urlImg: '/img/project-sportify.jpg',
      description: t('projects.spotify.description'),
      tags: ['TypeScript', 'React', 'Redux', 'Shadcn UI', 'Vercel'],
      github: 'https://github.com/TranTruong753/Spotify_Project_Frontend'
    },
    {
      id: 'taskManager',
      title: t('projects.taskManager.title'),
      urlImg: '/img/project-manager-work.jpg',
      description: t('projects.taskManager.description'),
      tags: ['React', 'JavaScript', 'Tailwind', 'Ant Design', 'Vercel'],
      github: 'https://github.com/TranTruong753/ProjectManagement-Frontend'
    },
    {
      id: 'jobPortal',
      title: t('projects.jobPortal.title'),
      urlImg: '/img/project-jobs.jpg',
      description: t('projects.jobPortal.description'),
      tags: ['Vue.js', 'Pinia', 'JavaScript', '.NET API'],
      github: 'https://github.com/TranTruong753/Job-Portal/'
    }
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold text-center mb-10 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
          {t('projects.title')}
        </h2>

        <div className="h-1 w-24 bg-blue-600 rounded mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col h-full rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
            >
              {project.urlImg ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.urlImg}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-48 object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gray-200 border-2 border-dashed"></div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <h3 className={`text-xl font-semibold mb-2  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`font-semibold text-xs px-3 py-1 rounded-full ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2  text-white rounded hover:bg-gray-700 transition ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}
                  >
                    <i className="fab fa-github"></i> {t('projects.github')}
                  </a>
                  {/* {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded border border-blue-600 transition ${isDarkMode ? 'text-white hover:bg-blue-700' : 'text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                      <i className="fas fa-external-link-alt"></i> {t('projects.demo')}
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;