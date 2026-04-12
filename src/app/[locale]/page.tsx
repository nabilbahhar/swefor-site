'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Globe, Users, MessageSquare, Map } from 'lucide-react';

export default function Home() {
  const t = useTranslations('home');

  const stats = [
    {
      value: t('stats.communications'),
      label: t('stats.communicationsLabel'),
      icon: MessageSquare,
    },
    {
      value: t('stats.trips'),
      label: t('stats.tripsLabel'),
      icon: Map,
    },
    {
      value: t('stats.people'),
      label: t('stats.peopleLabel'),
      icon: Users,
    },
    {
      value: t('stats.countries'),
      label: t('stats.countriesLabel'),
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <div className="animate-fade-in mb-6">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
              Since 2018
            </div>
          </div>

          <h1 className="animate-fade-in-up-d1 text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>

          <p className="animate-fade-in-up-d2 text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          <p className="animate-fade-in-up-d3 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('description')}
          </p>

          <div className="animate-fade-in-up-d4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/timeline"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              {t('cta.timeline')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/vision"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 font-semibold rounded-lg transition-colors"
            >
              {t('cta.vision')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              7+ Years of Impact
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Measuring our commitment to peace and dialogue
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const delayClass = `animate-fade-in-up-d${Math.min(index + 1, 5)}`;
              return (
                <div
                  key={stat.label}
                  className={`${delayClass} bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow hover-lift`}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up-d1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What We Do
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                The SweFOR Maghreb Network is a cross-border initiative bringing together young peace
                advocates from Morocco, Algeria, Tunisia, and Western Sahara.
              </p>
              <p>
                Through dialogue workshops, training programs, and sustained engagement, we build skills
                in nonviolence, conflict transformation, and peacebuilding.
              </p>
              <p>
                Our work spans 8 years of continuous commitment, with 764 communications, 15
                international trips, and a network of 112+ youth leaders across 5 countries.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up-d2 grid grid-cols-2 gap-4">
            {[
              { title: 'Dialogue', description: 'Cross-border conversations' },
              { title: 'Training', description: 'Facilitator development' },
              { title: 'Research', description: 'Peace studies & climate' },
              { title: 'Network', description: '112+ youth leaders' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-6"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-in-up-d1 text-3xl font-bold text-white mb-4">
            Explore Our Work
          </h2>
          <p className="animate-fade-in-up-d2 text-blue-100 mb-8 max-w-2xl mx-auto">
            Learn about our timeline, travels, team, projects, and strategic vision for the future of
            peacebuilding in the Maghreb.
          </p>
          <div className="animate-fade-in-up-d3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/timeline"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Timeline
            </Link>
            <Link
              href="/people"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
