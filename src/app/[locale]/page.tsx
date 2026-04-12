'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Globe, Users, MessageSquare, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const t = useTranslations('home');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
              Since 2018
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {t('description')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gray-50 dark:bg-gray-900 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              7+ Years of Impact
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Measuring our commitment to peace and dialogue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
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
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
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
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-4">
            Explore Our Work
          </motion.h2>
          <motion.p variants={itemVariants} className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Learn about our timeline, travels, team, projects, and strategic vision for the future of
            peacebuilding in the Maghreb.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
