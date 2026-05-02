'use client';

import { useTranslations } from 'next-intl';
import {
  Wrench, Box, GitBranch, Grid3x3, ArrowRight, Network,
  Users, Swords, Heart, TrendingUp, AlertTriangle, CheckCircle,
  Lightbulb, Target, Zap, Eye, Scale, Compass
} from 'lucide-react';

function ToolCard({
  icon: Icon,
  number,
  title,
  subtitle,
  color,
  children,
}: {
  icon: any;
  number: string;
  title: string;
  subtitle: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 animate-fade-in-up">
      <div className={`bg-gradient-to-r ${color} px-8 py-6`}>
        <div className="flex items-center gap-4">
          <div className="bg-white/20 backdrop-blur p-3 rounded-xl">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">
              Tool {number}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
            <p className="text-white/80 text-sm mt-1">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-8 py-6 space-y-5">{children}</div>
    </div>
  );
}

function MiniLabel({ children, color = 'gray' }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    red: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  };
  return (
    <span className={`inline-block px-2 py-0.5 text-[11px] font-bold rounded-full ${colors[color]}`}>
      {children}
    </span>
  );
}

export default function ToolsPage() {
  const t = useTranslations('tools');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            {t('badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Intro card */}
        <div className="animate-fade-in-up-d1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('introTitle')}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t('intro')}</p>
            </div>
          </div>
        </div>

        {/* Workflow nav */}
        <div className="animate-fade-in-up-d2 flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 text-sm">
          {[
            { n: '1', label: t('flow.analyze'), icon: Eye },
            { n: '2', label: t('flow.transform'), icon: GitBranch },
            { n: '3', label: t('flow.position'), icon: Grid3x3 },
            { n: '4', label: t('flow.design'), icon: Compass },
          ].map((step, i, arr) => (
            <div key={step.n} className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {step.n}
                </span>
                <step.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">{step.label}</span>
              </div>
              {i < arr.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        {/* === TOOL 1 : 3-Box Model === */}
        <div className="mb-12">
          <ToolCard
            icon={Box}
            number="01"
            title={t('threeBox.title')}
            subtitle={t('threeBox.subtitle')}
            color="from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('threeBox.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-bold text-green-800 dark:text-green-300 text-sm">
                    {t('threeBox.box1.title')}
                  </h4>
                </div>
                <p className="text-xs text-green-700 dark:text-green-300/80 mb-2">
                  {t('threeBox.box1.q1')}
                </p>
                <p className="text-xs text-green-700 dark:text-green-300/80">
                  {t('threeBox.box1.q2')}
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="font-bold text-amber-800 dark:text-amber-300 text-sm">
                    {t('threeBox.box2.title')}
                  </h4>
                </div>
                <p className="text-xs text-amber-700 dark:text-amber-300/80 mb-2">
                  {t('threeBox.box2.q1')}
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300/80">
                  {t('threeBox.box2.q2')}
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Swords className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="font-bold text-red-800 dark:text-red-300 text-sm">
                    {t('threeBox.box3.title')}
                  </h4>
                </div>
                <p className="text-xs text-red-700 dark:text-red-300/80 mb-2">
                  {t('threeBox.box3.q1')}
                </p>
                <p className="text-xs text-red-700 dark:text-red-300/80">
                  {t('threeBox.box3.q2')}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-1">
                    {t('threeBox.useTitle')}
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-300/90">
                    {t('threeBox.use')}
                  </p>
                </div>
              </div>
            </div>
          </ToolCard>
        </div>

        {/* === TOOL 2 : CURLE Diagram === */}
        <div className="mb-12">
          <ToolCard
            icon={GitBranch}
            number="02"
            title={t('curle.title')}
            subtitle={t('curle.subtitle')}
            color="from-amber-600 to-orange-700 dark:from-amber-500 dark:to-orange-600"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('curle.description')}
            </p>

            {/* Visual curve */}
            <div className="bg-gradient-to-br from-gray-50 to-amber-50/50 dark:from-gray-900/50 dark:to-amber-900/10 border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6">
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-1">
                <span>{t('curle.axis.unbalanced')}</span>
                <span>{t('curle.axis.balanced')}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {[
                  {
                    n: '1',
                    title: t('curle.phase1.title'),
                    desc: t('curle.phase1.desc'),
                    color: 'from-red-500 to-red-600',
                    bg: 'bg-red-50 dark:bg-red-900/20',
                    border: 'border-red-200 dark:border-red-800',
                  },
                  {
                    n: '2',
                    title: t('curle.phase2.title'),
                    desc: t('curle.phase2.desc'),
                    color: 'from-orange-500 to-orange-600',
                    bg: 'bg-orange-50 dark:bg-orange-900/20',
                    border: 'border-orange-200 dark:border-orange-800',
                  },
                  {
                    n: '3',
                    title: t('curle.phase3.title'),
                    desc: t('curle.phase3.desc'),
                    color: 'from-yellow-500 to-yellow-600',
                    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
                    border: 'border-yellow-200 dark:border-yellow-800',
                  },
                  {
                    n: '4',
                    title: t('curle.phase4.title'),
                    desc: t('curle.phase4.desc'),
                    color: 'from-green-500 to-emerald-600',
                    bg: 'bg-green-50 dark:bg-green-900/20',
                    border: 'border-green-200 dark:border-green-800',
                  },
                ].map((p) => (
                  <div key={p.n} className={`${p.bg} ${p.border} border-2 rounded-xl p-3`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${p.color} text-white flex items-center justify-center font-bold mb-2`}>
                      {p.n}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-3 px-1">
                <span>{t('curle.axis.lowAware')}</span>
                <span>{t('curle.axis.highAware')}</span>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-200 mb-1">
                    {t('curle.useTitle')}
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-300/90">{t('curle.use')}</p>
                </div>
              </div>
            </div>
          </ToolCard>
        </div>

        {/* === TOOL 3 : RPP Matrix === */}
        <div className="mb-12">
          <ToolCard
            icon={Grid3x3}
            number="03"
            title={t('rpp.title')}
            subtitle={t('rpp.subtitle')}
            color="from-purple-600 to-violet-700 dark:from-purple-500 dark:to-violet-600"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('rpp.description')}
            </p>

            {/* 2x2 matrix */}
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-2">
                <div></div>
                <div className="text-center text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 px-2 py-2">
                  {t('rpp.colMore')}
                </div>
                <div className="text-center text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 px-2 py-2">
                  {t('rpp.colKey')}
                </div>

                {/* Row 1: Individual */}
                <div className="flex items-center justify-center text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 [writing-mode:vertical-rl] rotate-180 py-2">
                  {t('rpp.rowIndividual')}
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-800 rounded-lg p-3 min-h-[110px]">
                  <MiniLabel color="blue">{t('rpp.cell1.label')}</MiniLabel>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                    {t('rpp.cell1.example')}
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-300 dark:border-indigo-800 rounded-lg p-3 min-h-[110px]">
                  <MiniLabel color="blue">{t('rpp.cell2.label')}</MiniLabel>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                    {t('rpp.cell2.example')}
                  </p>
                </div>

                {/* Row 2: Socio-political */}
                <div className="flex items-center justify-center text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 [writing-mode:vertical-rl] rotate-180 py-2">
                  {t('rpp.rowSocial')}
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-800 rounded-lg p-3 min-h-[110px]">
                  <MiniLabel color="blue">{t('rpp.cell3.label')}</MiniLabel>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                    {t('rpp.cell3.example')}
                  </p>
                </div>
                <div className="bg-violet-50 dark:bg-violet-900/20 border-2 border-violet-300 dark:border-violet-800 rounded-lg p-3 min-h-[110px]">
                  <MiniLabel color="blue">{t('rpp.cell4.label')}</MiniLabel>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                    {t('rpp.cell4.example')}
                  </p>
                </div>
              </div>
            </div>

            {/* Key takeaways */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" /> {t('rpp.keyTitle')}
              </h4>
              <ul className="space-y-2">
                {[t('rpp.key1'), t('rpp.key2'), t('rpp.key3')].map((k, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-purple-900 dark:text-purple-200 mb-1">
                    {t('rpp.useTitle')}
                  </p>
                  <p className="text-sm text-purple-800 dark:text-purple-300/90">{t('rpp.use')}</p>
                </div>
              </div>
            </div>
          </ToolCard>
        </div>

        {/* === TOOL 4 : Theory of Change === */}
        <div className="mb-12">
          <ToolCard
            icon={Network}
            number="04"
            title={t('toc.title')}
            subtitle={t('toc.subtitle')}
            color="from-emerald-600 to-teal-700 dark:from-emerald-500 dark:to-teal-600"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('toc.description')}
            </p>

            {/* Chain visualization */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-stretch">
                {[
                  { label: t('toc.step1.label'), desc: t('toc.step1.desc'), icon: Wrench },
                  { label: t('toc.step2.label'), desc: t('toc.step2.desc'), icon: Zap },
                  { label: t('toc.step3.label'), desc: t('toc.step3.desc'), icon: CheckCircle },
                  { label: t('toc.step4.label'), desc: t('toc.step4.desc'), icon: TrendingUp },
                  { label: t('toc.step5.label'), desc: t('toc.step5.desc'), icon: Target },
                ].map((s, i, arr) => (
                  <div key={i} className="relative">
                    <div className="bg-white dark:bg-gray-800 border-2 border-emerald-300 dark:border-emerald-700 rounded-xl p-3 h-full">
                      <s.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1" />
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                        {s.label}
                      </h4>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-snug">
                        {s.desc}
                      </p>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500 z-10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Critical questions */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-500" /> {t('toc.questionsTitle')}
              </h4>
              <ul className="space-y-2">
                {[t('toc.q1'), t('toc.q2'), t('toc.q3'), t('toc.q4')].map((q, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">?</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200 mb-1">
                    {t('toc.useTitle')}
                  </p>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300/90">{t('toc.use')}</p>
                </div>
              </div>
            </div>
          </ToolCard>
        </div>

        {/* === Practical Tips === */}
        <div className="animate-fade-in-up bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            {t('tips.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">{t('tips.subtitle')}</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[t('tips.t1'), t('tips.t2'), t('tips.t3'), t('tips.t4'), t('tips.t5'), t('tips.t6')].map(
              (tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Scale className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('cta.title')}</h2>
          <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">{t('cta.text')}</p>
        </div>
      </section>
    </div>
  );
}
