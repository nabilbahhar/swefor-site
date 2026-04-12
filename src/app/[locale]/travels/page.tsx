'use client';

import { useTranslations } from 'next-intl';
import { travels } from '@/lib/data';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

export default function TravelsPage() {
  const t = useTranslations('travels');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Group travels by destination
  const destinationGroups = travels.reduce(
    (acc, trip) => {
      const country = trip.location.split(',')[1]?.trim() || trip.location;
      if (!acc[country]) {
        acc[country] = [];
      }
      acc[country].push(trip);
      return acc;
    },
    {} as Record<string, typeof travels>,
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={containerVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {t('summary.total')}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Across 3 continents</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Tunisia</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Sweden</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Turkey</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Travels by Destination */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {Object.entries(destinationGroups).map(([country, countryTravels], countryIndex) => (
          <motion.div key={country} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              {country}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryTravels.map((trip, index) => (
                <motion.div
                  key={trip.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (countryIndex + index) * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 px-6 py-4">
                    <div className="text-white font-bold text-lg mb-1">Trip #{trip.number}</div>
                    <div className="flex items-center gap-2 text-blue-100">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{trip.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{trip.location}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{trip.purpose}</p>
                    {trip.details && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{trip.details}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Summary */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gray-50 dark:bg-gray-900 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              A Global Network
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our 15 international trips have connected youth across the Maghreb, Northern Europe,
              and Turkey. These travels have been essential to building relationships, sharing
              knowledge, and strengthening the network's commitment to peacebuilding.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
