'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FileText, Archive, BookOpen, BarChart3, Image } from 'lucide-react';

export default function DocumentsPage() {
  const t = useTranslations('documents');

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

  const categoryIcons = [FileText, Archive, BookOpen, BarChart3, Image];

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
          <p className="text-gray-700 dark:text-gray-300 mt-4">{t('description')}</p>
        </motion.div>
      </motion.section>

      {/* Status Alert */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <motion.div
          variants={itemVariants}
          className="bg-blue-50 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-700 rounded-lg p-8 text-center"
        >
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Coming Soon
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {t('status')}
          </p>
        </motion.div>
      </motion.section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Document Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.raw('categories').map((category: any, index: number) => {
              const Icon = categoryIcons[index];

              return (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Feature Highlights */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gray-50 dark:bg-gray-900 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What You'll Find Here
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Once available, our document library will contain comprehensive resources from our
              work
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Training Materials',
                description:
                  'Complete facilitator guides, workshop curricula, and participant handbooks from our Training of Trainers program',
              },
              {
                title: 'Travel & Meeting Records',
                description:
                  'Documentation of all 15 international trips, including logistics, reports, and learnings from each journey',
              },
              {
                title: 'Reports & Analysis',
                description:
                  'Annual reports, evaluation documents, impact assessments, and strategic planning materials covering 2018-2026',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Preview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Documents Coming Soon
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Workshop Materials</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Training modules and guides</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Travel Documents</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Trip reports and logistics</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Meeting Notes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Minutes and coordination records</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Reports</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Annual reports and evaluations</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Photo Archives</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visual documentation from events</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
