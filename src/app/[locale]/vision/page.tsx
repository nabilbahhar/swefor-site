'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { globalVision, visionProjects } from '@/lib/data';
import type { VisionProject, ProjectPhase } from '@/lib/data';
import {
  Target, Users, CheckCircle, Globe, ChevronDown, ChevronUp,
  Calendar, DollarSign, MapPin, BarChart3, Shield, Handshake,
  ArrowRight, BookOpen, Lightbulb, TrendingUp, AlertTriangle,
  Award, Leaf, MessageCircle, Scale
} from 'lucide-react';

const projectIcons = [Leaf, MessageCircle, Award];
const trackColors = [
  'from-emerald-600 to-teal-700 dark:from-emerald-500 dark:to-teal-600',
  'from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600',
  'from-purple-600 to-violet-700 dark:from-purple-500 dark:to-violet-600',
];

const smartLabelsMap: Record<string, string> = {
  Specific: 'specific',
  Measurable: 'measurable',
  Achievable: 'achievable',
  Realistic: 'realistic',
  'Time-bound': 'timeBound',
};

function SmartBadge({ label, t }: { label: string; t: (key: string) => string }) {
  const colors: Record<string, string> = {
    Specific: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    Measurable: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    Achievable: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    Realistic: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
    'Time-bound': 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
  };
  const translatedLabel = smartLabelsMap[label] ? t(smartLabelsMap[label]) : label;
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded-full ${colors[label] || 'bg-gray-100 text-gray-800'}`}>
      {translatedLabel}
    </span>
  );
}

function YearTimeline({ year, theme, phases, yearNum, color, t }: { year: string; theme: string; phases: ProjectPhase[]; yearNum: number; color: string; t: (key: string) => string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r ${color} text-white hover:opacity-90 transition-opacity`}
      >
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5" />
          <span className="font-bold text-lg">{t('year')} {yearNum}: {theme}</span>
        </div>
        {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {expanded && (
        <div className="p-6 space-y-6 bg-white dark:bg-gray-800">
          {phases.map((phase, i) => (
            <div key={i} className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
              <h5 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">{phase.quarter}</span>
              </h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">{t('activities')}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((a, j) => (
                      <li key={j} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 mt-1 text-blue-500 flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">{t('deliverables')}</p>
                  <ul className="space-y-1">
                    {phase.deliverables.map((d, j) => (
                      <li key={j} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 mt-1 text-green-500 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index, t }: { project: VisionProject; index: number; t: (key: string) => string }) {
  const [showDetails, setShowDetails] = useState(false);
  const Icon = projectIcons[index] || Target;
  const color = trackColors[index] || trackColors[0];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div className={`bg-gradient-to-r ${color} px-8 py-8`}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                {t('project')} {project.number}
              </span>
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <DollarSign className="w-3 h-3" /> {project.totalBudget}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-white/80 italic text-sm mb-2">{project.titleFr}</p>
            <div className="flex items-center gap-4 text-white/90 text-sm">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {project.duration}</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {project.countries.length} {t('countriesCount')}</span>
            </div>
          </div>
          <Icon className="w-14 h-14 text-white/30" />
        </div>
      </div>

      {/* Overview */}
      <div className="px-8 py-6 space-y-6">
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.overview}</p>
        </div>

        {/* Countries */}
        <div className="flex flex-wrap gap-2">
          {project.countries.map(c => (
            <span key={c} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
              <Globe className="w-3 h-3" /> {c}
            </span>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-bold text-red-800 dark:text-red-300 mb-1 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> {t('problemStatement')}
          </h4>
          <p className="text-sm text-red-700 dark:text-red-300/80">{project.problemStatement}</p>
        </div>

        {/* Target Group */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center gap-2">
            <Users className="w-4 h-4" /> {t('targetGroup')}
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300/80">{project.targetGroup}</p>
        </div>

        {/* SMART Objectives */}
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" /> {t('smartObjectives')}
          </h4>
          <div className="space-y-3">
            {project.smartObjectives.map((obj, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                <div className="flex items-start gap-3">
                  <SmartBadge label={obj.label} t={t} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{obj.target}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t('measurement')}: {obj.measurement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expand/Collapse for detailed timeline */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {showDetails ? t('hideTimeline') : t('showTimeline')}
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showDetails && (
          <div className="space-y-6 animate-fade-in">
            {/* 3-Year Timeline */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" /> {t('implementationPlan')}
              </h4>
              <div className="space-y-3">
                <YearTimeline year="1" theme={project.year1.theme} phases={project.year1.phases} yearNum={1} color={color} t={t} />
                <YearTimeline year="2" theme={project.year2.theme} phases={project.year2.phases} yearNum={2} color={color} t={t} />
                <YearTimeline year="3" theme={project.year3.theme} phases={project.year3.phases} yearNum={3} color={color} t={t} />
              </div>
            </div>

            {/* Expected Outputs */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" /> {t('expectedOutputs')}
              </h4>
              <ul className="space-y-2">
                {project.expectedOutputs.map((o, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcomes */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" /> {t('expectedOutcomes')}
              </h4>
              <ul className="space-y-2">
                {project.expectedOutcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" /> {t('risksMitigation')}
              </h4>
              <ul className="space-y-2">
                {project.risks.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-blue-600" /> {t('partners')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.partners.map((p, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-800">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Sustainability */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-bold text-green-800 dark:text-green-300 mb-1 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> {t('sustainabilityPlan')}
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300/80">{project.sustainability}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VisionPage() {
  const t = useTranslations('vision');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>

        {/* Global Vision */}
        <div className="animate-fade-in-up-d1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600" /> {t('globalVision')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">{globalVision.statement}</p>
          <p className="text-gray-600 dark:text-gray-400 italic mb-6">{globalVision.approach}</p>

          {/* Countries */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('targetCountries')}</h3>
            <div className="flex flex-wrap gap-2">
              {globalVision.countries.map(c => (
                <span key={c} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" /> {c}
                </span>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('guidingPrinciples')}</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {globalVision.principles.map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SMART Approach Explanation */}
        <div className="animate-fade-in-up-d2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" /> {t('smartFramework')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {['Specific', 'Measurable', 'Achievable', 'Realistic', 'Time-bound'].map(s => (
              <div key={s} className="text-center">
                <SmartBadge label={s} t={t} />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
            {t('smartDescription')}
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          {visionProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} t={t} />
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{t('totalImpact')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-4xl font-bold">370</div>
              <div className="text-blue-200 text-sm">{t('youthTrained')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">5</div>
              <div className="text-blue-200 text-sm">{t('countries')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">€1.35M</div>
              <div className="text-blue-200 text-sm">{t('totalBudget')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">3</div>
              <div className="text-blue-200 text-sm">{t('years')}</div>
            </div>
          </div>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('summaryText')}
          </p>
        </div>
      </section>
    </div>
  );
}
