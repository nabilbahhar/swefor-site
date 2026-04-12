'use client';

import { useTranslations } from 'next-intl';
import { visionProposals } from '@/lib/data';
import { CheckCircle, Target, Users } from 'lucide-react';

export default function VisionPage() {
  const t = useTranslations('vision');

  const proposalIcons = [Target, Users, CheckCircle];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>

        <div className="animate-fade-in-up-d1 bg-blue-50 dark:bg-blue-900 rounded-lg p-8 mb-12">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{t('context')}</p>
        </div>
      </section>

      {/* Proposals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          {visionProposals.map((proposal, index) => {
            const Icon = proposalIcons[index];
            const delayClass = [
              'animate-fade-in-up',
              'animate-fade-in-up-d1',
              'animate-fade-in-up-d2',
              'animate-fade-in-up-d3',
              'animate-fade-in-up-d4',
            ][index % 5];

            return (
              <div
                key={proposal.number}
                className={`${delayClass} bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow hover-lift`}
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 px-8 py-8 flex items-start justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-3">
                      Proposal {proposal.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{proposal.title}</h3>
                    <p className="text-blue-100 font-semibold">{proposal.duration}</p>
                  </div>
                  <Icon className="w-12 h-12 text-blue-100 flex-shrink-0" />
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Overview</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{proposal.overview}</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Rationale</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{proposal.rationale}</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Key Activities</h4>
                    <ul className="space-y-3">
                      {proposal.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Alignment</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">{proposal.alignment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Steps */}
      <section className="animate-fade-in-up bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
            <p className="text-lg text-blue-100 leading-relaxed">{t('nextSteps')}</p>
            <p className="text-sm text-blue-200 mt-6 font-semibold">Building on 2018-2026, we move forward with purpose.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in-up text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Implementation Timeline</h2>
          <p className="text-gray-600 dark:text-gray-400">Each proposal is designed as a 3-year program</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ year: '2026-2027', phase: 'Design & Piloting', description: 'Finalize proposals, secure partnerships, pilot initial activities' }, { year: '2027-2028', phase: 'Scaling', description: 'Expand to all Maghreb countries, establish networks' }, { year: '2028-2029', phase: 'Institutionalization', description: 'Embed programs, build alumni networks, sustain impact' }].map((tl, i) => (
            <div key={tl.year} className={`${['animate-fade-in-up', 'animate-fade-in-up-d1', 'animate-fade-in-up-d2'][i]} bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover-lift`}>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">{tl.year}</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{tl.phase}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{tl.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="animate-fade-in-up bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Together We Build Peace</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">The SweFOR Maghreb Network invites partners, donors, and supporters to join us in scaling these initiatives.</p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">Get Involved</button>
        </div>
      </section>
    </div>
  );
}
