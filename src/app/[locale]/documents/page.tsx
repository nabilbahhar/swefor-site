'use client';

import { useTranslations } from 'next-intl';
import { FileText, File, Table, Mail, Plane, BookOpen, Shield, FolderOpen } from 'lucide-react';
import { documents } from '@/lib/data';

const categoryIcons: Record<string, any> = {
  'Training Materials': BookOpen,
  'Handouts': FileText,
  'Administrative': Shield,
  'Travel & Logistics': Plane,
  'Key Communications': Mail,
};

const formatIcons: Record<string, any> = {
  pdf: FileText,
  docx: File,
  doc: File,
  xlsx: Table,
  email: Mail,
};

const formatColors: Record<string, string> = {
  pdf: 'text-red-500 bg-red-50 dark:bg-red-900/30',
  docx: 'text-blue-500 bg-blue-50 dark:bg-blue-900/30',
  doc: 'text-blue-500 bg-blue-50 dark:bg-blue-900/30',
  xlsx: 'text-green-500 bg-green-50 dark:bg-green-900/30',
  email: 'text-purple-500 bg-purple-50 dark:bg-purple-900/30',
};

export default function DocumentsPage() {
  const t = useTranslations('documents');

  // Group documents by category
  const categories = documents.reduce((acc, doc) => {
    if (!acc[doc.category]) acc[doc.category] = [];
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, typeof documents>);

  const categoryOrder = ['Training Materials', 'Handouts', 'Administrative', 'Travel & Logistics', 'Key Communications'];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up">
        <div className="text-center mb-8 animate-fade-in-up animate-fade-in-up-d1">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            Archive of {documents.length} documents collected from 7+ years of SweFOR Maghreb Network engagement,
            including training materials, handouts, administrative documents, and key communications.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {categoryOrder.map((cat, index) => {
            const Icon = categoryIcons[cat] || FolderOpen;
            const count = categories[cat]?.length || 0;
            return (
              <div
                key={cat}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{count}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{cat}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Document Library */}
      {categoryOrder.map((categoryName, categoryIndex) => {
        const docs = categories[categoryName];
        if (!docs) return null;
        const CategoryIcon = categoryIcons[categoryName] || FolderOpen;

        return (
          <section
            key={categoryName}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 animate-fade-in-up"
            style={{ animationDelay: `${categoryIndex * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <CategoryIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{categoryName}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                {docs.length} files
              </span>
            </div>

            <div className="space-y-3">
              {docs.map((doc, index) => {
                const FormatIcon = formatIcons[doc.format] || FileText;
                const colorClass = formatColors[doc.format] || 'text-gray-500 bg-gray-50 dark:bg-gray-800';

                return (
                  <div
                    key={doc.filename}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                      <FormatIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {doc.filename}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 flex-shrink-0">
                      <span className="text-xs text-gray-500 dark:text-gray-400 w-24 text-right">
                        {new Date(doc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 w-16 text-right">
                        {doc.size}
                      </span>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase w-10 text-center">
                        {doc.format}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Source Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center animate-fade-in-up">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Document Source
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These documents have been cataloged from email communications between SweFOR team members
            spanning 2018-2026. The collection includes training scripts, educational handouts in English
            and Arabic, partnership agreements, travel logistics, and key project communications from
            Erik Nilsson and the SweFOR team.
          </p>
        </div>
      </section>
    </div>
  );
}
