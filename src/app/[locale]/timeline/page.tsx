'use client';

import { useTranslations } from 'next-intl';
import { timelineEvents } from '@/lib/data';

export default function TimelinePage() {
  const t = useTranslations('timeline');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up">
        <div className="text-center mb-16 animate-fade-in-up animate-fade-in-up-d1">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex md:gap-8 animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className="flex-1 md:flex-1 ml-8 md:ml-0">
                  <div
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow hover-lift"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {event.year}
                      </div>
                      <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                        {event.month}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-4 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-950 transform -translate-x-1.5 md:-translate-x-2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up animate-fade-in-up-d1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              2018 - 2026: A Journey of Impact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From the initial selection of 4 Moroccan youth to a network of 112+ peace advocates
              across 5 countries, the SweFOR Maghreb Network has grown into a powerful force for
              dialogue and peacebuilding in North Africa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
