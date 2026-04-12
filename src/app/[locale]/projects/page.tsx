'use client';

import { useTranslations } from 'next-intl';
import { projects } from '@/lib/data';
import * as Icons from 'lucide-react';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Globe: Icons.Globe,
      Users: Icons.Users,
      MessageCircle: Icons.MessageCircle,
      Leaf: Icons.Leaf,
      Zap: Icons.Zap,
    };
    return iconMap[iconName] || Icons.Circle;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up">
        <div className="text-center mb-12 animate-fade-in-up animate-fade-in-up-d1">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up"
        >
          {projects.map((project, index) => {
            const Icon = getIcon(project.icon);

            return (
              <div
                key={project.name}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 px-8 py-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <Icon className="w-8 h-8 text-blue-100" />
                </div>

                <div className="p-8">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      Communications
                    </span>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {project.communications}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up animate-fade-in-up-d1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Project Impact Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Total Communications Across All Projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {project.communications}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.name}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg text-center animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {projects.reduce((sum, p) => sum + p.communications, 0)}
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Total Communications (2018-2026)
            </p>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up">
        <div className="text-center animate-fade-in-up animate-fade-in-up-d1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Building on Success
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            These five projects form the foundation of our work. As we move forward, we're designing
            new initiatives focused on climate-peace integration, cross-border dialogue, and
            formalizing youth leadership development.
          </p>
          <a
            href="/vision"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
          >
            Explore Strategic Vision
          </a>
        </div>
      </section>
    </div>
  );
}
