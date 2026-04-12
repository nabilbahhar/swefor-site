'use client';

import { useTranslations } from 'next-intl';
import { teamMembers } from '@/lib/data';
import { Users, MessageSquare } from 'lucide-react';

export default function PeoplePage() {
  const t = useTranslations('people');

  // Separate staff and participants
  const staffMembers = teamMembers.filter((m) => m.category === 'staff');
  const participants = teamMembers.filter((m) => m.category === 'participant');

  const renderSection = (title: string, members: typeof teamMembers) => (
    <div key={title} className="animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12 flex items-center gap-2">
        <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div
            key={member.name}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow hover-lift animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">{member.role}</p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <p className="font-medium">{member.period}</p>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                <span>{member.communications} communications</span>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up">
        <div className="text-center mb-12 animate-fade-in-up animate-fade-in-up-d1">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-8 text-center animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">112+</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Network Members</p>
          </div>
          <div
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-8 text-center animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">8</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Years of Engagement</p>
          </div>
          <div
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-8 text-center animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Trained Facilitators</p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {renderSection('SweFOR Staff', staffMembers)}
        {renderSection('Network Participants', participants)}
      </section>

      {/* Impact Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up animate-fade-in-up-d1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Diverse, Committed, Impactful
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our team spans Sweden, Morocco, Algeria, Tunisia, and Western Sahara. Each member
              brings unique perspectives and expertise to our shared mission of peacebuilding and
              dialogue across borders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
