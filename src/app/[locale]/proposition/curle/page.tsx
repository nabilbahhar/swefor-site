'use client';

import { useState } from 'react';
import {
  GitBranch, Target, ArrowRight, AlertTriangle, CheckCircle,
  Users, Eye, Sparkles, Compass, Flame
} from 'lucide-react';

// ============================================================
// Bilingual helpers
// ============================================================
function ArOnly({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className={`text-right ${className}`}
      style={{ fontFamily: '"Noto Naskh Arabic","Amiri","Geeza Pro",system-ui,sans-serif' }}
    >
      {children}
    </div>
  );
}

function Bi({ fr, ar, small = false, className = '' }: { fr: string; ar: string; small?: boolean; className?: string }) {
  const size = small ? 'text-xs md:text-sm' : 'text-sm md:text-base';
  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className={size}>{fr}</div>
      <ArOnly className={`${size} leading-loose font-medium opacity-90`}>{ar}</ArOnly>
    </div>
  );
}

// ============================================================
// Groups positioned on the Curle curve
// Coordinates in viewBox 0..900 × 0..560
// ============================================================
type Group = {
  id: string;
  fr: string;
  ar: string;
  x: number;
  y: number;
  color: string;
  textColor: string;
  phase: 1 | 2 | 3 | 4;
  size: number;
  noteFr: string;
  noteAr: string;
};

const groups: Group[] = [
  {
    id: 'tindouf-old',
    fr: 'Génération aînée camps Tindouf (50+)',
    ar: 'الجيل الأكبر بمخيمات تندوف (50+)',
    x: 105,
    y: 470,
    color: '#dc2626',
    textColor: 'text-red-700 dark:text-red-300',
    phase: 1,
    size: 14,
    noteFr: 'Identité forgée par la guerre, mémoire vive de l\'exil. Vit toujours phase 1 — récit d\'occupation.',
    noteAr: 'هوية صاغتها الحرب، ذاكرة حيّة للمنفى. لا يزالون في المرحلة 1 — سردية الاحتلال.',
  },
  {
    id: 'tindouf-young',
    fr: 'Jeunes Tindouf (18-30)',
    ar: 'شباب تندوف (18-30)',
    x: 220,
    y: 420,
    color: '#ea580c',
    textColor: 'text-orange-700 dark:text-orange-300',
    phase: 2,
    size: 16,
    noteFr: 'Connectés sociaux, voient Dakhla prospère. Conscience monte, pouvoir non équilibré → phase 2.',
    noteAr: 'متصلون رقمياً، يرون ازدهار الداخلة. الوعي يرتفع، السلطة لا تزال مختلّة → مرحلة 2.',
  },
  {
    id: 'polisario-rallied',
    fr: 'Cadres Polisario ralliés',
    ar: 'الكوادر العائدون من البوليساريو',
    x: 480,
    y: 245,
    color: '#ca8a04',
    textColor: 'text-yellow-700 dark:text-yellow-300',
    phase: 3,
    size: 14,
    noteFr: 'Ont déjà fait la transition. Ressource humaine clé pour faire passer les autres.',
    noteAr: 'قاموا بالانتقال. مورد بشري حاسم لمساعدة الآخرين على القيام به.',
  },
  {
    id: 'morocco-north',
    fr: 'Marocains Nord (Rabat, Casa)',
    ar: 'المغاربة بالشمال (الرباط، الدار البيضاء)',
    x: 640,
    y: 165,
    color: '#16a34a',
    textColor: 'text-green-700 dark:text-green-300',
    phase: 3,
    size: 14,
    noteFr: 'Acceptent l\'autonomie comme acquis politique. Doivent apprendre à accueillir sans paternalisme.',
    noteAr: 'يقبلون الحكم الذاتي كمكسب سياسي. يجب أن يتعلموا الاستقبال دون استعلاء.',
  },
  {
    id: 'morocco-south',
    fr: 'Sahraouis du Maroc (Laâyoune, Dakhla)',
    ar: 'الصحراويون المغاربة (العيون، الداخلة)',
    x: 720,
    y: 130,
    color: '#15803d',
    textColor: 'text-green-700 dark:text-green-300',
    phase: 4,
    size: 14,
    noteFr: 'Vivent déjà la régionalisation. Pivot culturel pour intégrer les revenants — risque jalousie.',
    noteAr: 'يعيشون فعلاً الجهوية المتقدمة. محور ثقافي لإدماج العائدين — مع خطر غيرة هوياتية.',
  },
  {
    id: 'state-un',
    fr: 'État marocain & ONU',
    ar: 'الدولة المغربية والأمم المتحدة',
    x: 805,
    y: 100,
    color: '#0e7490',
    textColor: 'text-cyan-700 dark:text-cyan-300',
    phase: 4,
    size: 16,
    noteFr: 'Phase 4 atteinte côté institutionnel. Cadre juridique et diplomatique en place.',
    noteAr: 'بلغت المرحلة 4 على المستوى المؤسساتي. الإطار القانوني والدبلوماسي قائم.',
  },
];

// ============================================================
// Phase data
// ============================================================
const phases = [
  {
    n: 1,
    fr: 'Conflit Latent',
    ar: 'النزاع الكامن',
    color: 'from-red-500 to-red-700',
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-300 dark:border-red-800',
    text: 'text-red-800 dark:text-red-300',
    descFr: 'Pouvoir déséquilibré, conscience du problème basse. Le conflit existe mais n\'est pas nommé.',
    descAr: 'السلطة غير متوازنة، الوعي بالقضية منخفض. النزاع موجود لكنه لم يُسَمَّ بعد.',
    interventionFr: 'Conscientisation, organisation communautaire, construction de coalitions, alerte précoce.',
    interventionAr: 'التحسيس، تنظيم المجتمع، بناء التحالفات، الإنذار المبكر.',
  },
  {
    n: 2,
    fr: 'Conflit Ouvert',
    ar: 'النزاع الظاهر',
    color: 'from-orange-500 to-orange-700',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-300 dark:border-orange-800',
    text: 'text-orange-800 dark:text-orange-300',
    descFr: 'Conscience haute, pouvoir toujours déséquilibré. Le conflit éclate publiquement.',
    descAr: 'الوعي مرتفع، السلطة لا تزال غير متوازنة. النزاع يَطفُو علنياً.',
    interventionFr: 'Action non-violente pour rééquilibrer le pouvoir, plaidoyer, monitoring droits humains, protection civile.',
    interventionAr: 'العمل اللاعنفي لتوازن السلطة، المناصرة، رصد حقوق الإنسان، حماية مدنية.',
  },
  {
    n: 3,
    fr: 'Tsuwiyat al-Niza‘',
    ar: 'تسوية النزاع',
    color: 'from-yellow-500 to-yellow-700',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-300 dark:border-yellow-800',
    text: 'text-yellow-800 dark:text-yellow-300',
    descFr: 'Pouvoir s\'équilibre. Reconnaissance que le statu quo est intenable. Négociation possible.',
    descAr: 'السلطة بدأت تتوازن. اعتراف بأن الوضع القائم غير قابل للاستمرار. التفاوض ممكن.',
    interventionFr: 'Médiation, négociation, persuasion pour convertir ou accommoder les intérêts des autres.',
    interventionAr: 'وساطة، تفاوض، إقناع لتحويل أو استيعاب مصالح الأطراف الأخرى.',
  },
  {
    n: 4,
    fr: 'Paix & Justice durables',
    ar: 'سلام وعدالة مستدامين',
    color: 'from-green-500 to-emerald-700',
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-300 dark:border-green-800',
    text: 'text-green-800 dark:text-green-300',
    descFr: 'Pouvoir équilibré, conscience haute. Négociation de principe qui adresse les intérêts essentiels.',
    descAr: 'سلطة متوازنة، وعي عالٍ. تفاوض مبدئي يُلبّي المصالح الأساسية.',
    interventionFr: 'Construction d\'institutions inclusives, mécanismes de réconciliation, mémoire partagée, prévention récidive.',
    interventionAr: 'بناء مؤسسات شاملة، آليات للمصالحة، ذاكرة مشتركة، الوقاية من الانتكاسة.',
  },
];

// ============================================================
// Page
// ============================================================
export default function CurleCanvasPage() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-semibold mb-4">
            <GitBranch className="w-4 h-4" />
            <span>Curle Canvas — appliqué au Sahara</span>
            <span className="opacity-50">·</span>
            <ArOnly className="inline">منحنى كيرل — مطبَّق على الصحراء</ArOnly>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Le Canevas Curle — rempli
          </h1>
          <ArOnly className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
            منحنى كيرل — معبّأ
          </ArOnly>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Position de chaque groupe sur la courbe de transformation du conflit.
            <br className="hidden md:block" />
            <span className="text-amber-600 dark:text-amber-400 font-semibold">
              Le « décalage de phase » entre les groupes est le cœur opérationnel du projet.
            </span>
          </p>
          <ArOnly className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-2 leading-relaxed">
            موقع كل مجموعة على منحنى تحوّل النزاع. <span className="text-amber-600 dark:text-amber-400 font-semibold">«اختلال المرحلة» بين الفئات هو القلب التنفيذي للمشروع.</span>
          </ArOnly>
        </div>

        {/* === The Canvas === */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6 mb-8">
          <div className="relative w-full overflow-x-auto">
            <svg
              viewBox="0 0 900 560"
              className="w-full h-auto min-w-[700px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient curve red → green */}
                <linearGradient id="curveGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="33%" stopColor="#ea580c" />
                  <stop offset="66%" stopColor="#ca8a04" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
                {/* Soft band fills behind the curve */}
                <linearGradient id="bandRed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fee2e2" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#fee2e2" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="bandGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dcfce7" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#dcfce7" stopOpacity="0.2" />
                </linearGradient>
                {/* Drop shadow for points */}
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Background phase zones */}
              <rect x="60" y="40" width="200" height="480" fill="url(#bandRed)" />
              <rect x="260" y="40" width="220" height="480" fill="#fff7ed" opacity="0.5" className="dark:fill-orange-900/10" />
              <rect x="480" y="40" width="200" height="480" fill="#fefce8" opacity="0.5" className="dark:fill-yellow-900/10" />
              <rect x="680" y="40" width="180" height="480" fill="url(#bandGreen)" />

              {/* Phase labels TOP */}
              <text x="160" y="30" textAnchor="middle" fontSize="13" fontWeight="700" fill="#991b1b">
                Phase 1 — Conflit Latent
              </text>
              <text x="370" y="30" textAnchor="middle" fontSize="13" fontWeight="700" fill="#9a3412">
                Phase 2 — Conflit Ouvert
              </text>
              <text x="580" y="30" textAnchor="middle" fontSize="13" fontWeight="700" fill="#854d0e">
                Phase 3 — Settlement
              </text>
              <text x="770" y="30" textAnchor="middle" fontSize="13" fontWeight="700" fill="#166534">
                Phase 4 — Paix Durable
              </text>

              {/* Axes */}
              {/* X axis (bottom) */}
              <line x1="60" y1="520" x2="860" y2="520" stroke="#9ca3af" strokeWidth="2" />
              <polygon points="860,520 850,514 850,526" fill="#9ca3af" />
              <text x="60" y="546" fontSize="12" fontWeight="600" fill="#6b7280">
                Faible conscience · وعي منخفض
              </text>
              <text x="860" y="546" fontSize="12" fontWeight="600" fill="#6b7280" textAnchor="end">
                Forte conscience · وعي عالٍ
              </text>

              {/* Y axis (left) */}
              <line x1="60" y1="520" x2="60" y2="40" stroke="#9ca3af" strokeWidth="2" />
              <polygon points="60,40 54,50 66,50" fill="#9ca3af" />
              <text
                x="40"
                y="280"
                fontSize="12"
                fontWeight="600"
                fill="#6b7280"
                transform="rotate(-90 40 280)"
                textAnchor="middle"
              >
                Pouvoir déséquilibré → Pouvoir équilibré
              </text>

              {/* The Curle S-curve */}
              <path
                d="M 90,490 C 200,480 280,460 320,400 C 360,340 380,300 460,250 C 540,200 600,170 660,140 C 720,110 780,90 830,80"
                fill="none"
                stroke="url(#curveGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Phase dividers (vertical dashed) */}
              {[260, 480, 680].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="40"
                  x2={x}
                  y2="520"
                  stroke="#d1d5db"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* GROUP MARKERS */}
              {groups.map((g) => {
                const isHovered = hoveredGroup === g.id;
                return (
                  <g
                    key={g.id}
                    onMouseEnter={() => setHoveredGroup(g.id)}
                    onMouseLeave={() => setHoveredGroup(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulse ring on hover */}
                    {isHovered && (
                      <circle
                        cx={g.x}
                        cy={g.y}
                        r={g.size + 8}
                        fill={g.color}
                        opacity="0.25"
                      />
                    )}
                    <circle
                      cx={g.x}
                      cy={g.y}
                      r={g.size}
                      fill={g.color}
                      stroke="white"
                      strokeWidth="3"
                      filter="url(#shadow)"
                    />
                    {/* Numbered label */}
                    <text
                      x={g.x}
                      y={g.y + 4}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="800"
                      fill="white"
                    >
                      {groups.indexOf(g) + 1}
                    </text>
                  </g>
                );
              })}

              {/* Dashed gap arrow showing the "phase gap" */}
              <line
                x1="220"
                y1="420"
                x2="480"
                y2="245"
                stroke="#dc2626"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity="0.6"
              />
              <text
                x="350"
                y="320"
                fontSize="13"
                fontWeight="700"
                fill="#dc2626"
                transform="rotate(-32 350 320)"
              >
                ⚠ Phase Gap = Project's job
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {groups.map((g, i) => (
              <div
                key={g.id}
                onMouseEnter={() => setHoveredGroup(g.id)}
                onMouseLeave={() => setHoveredGroup(null)}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${
                  hoveredGroup === g.id
                    ? 'shadow-md scale-[1.02] border-gray-400 dark:border-gray-500'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                    style={{ background: g.color }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-bold text-sm ${g.textColor}`}>{g.fr}</div>
                    <ArOnly className={`font-bold text-sm ${g.textColor}`}>{g.ar}</ArOnly>
                    <div className="mt-1 text-[11px] text-gray-500 dark:text-gray-400 font-semibold">
                      Phase {g.phase}
                    </div>
                    <Bi
                      fr={g.noteFr}
                      ar={g.noteAr}
                      small
                      className="mt-2 text-gray-700 dark:text-gray-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Diagnostic Card === */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-300 dark:border-amber-800 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Flame className="w-7 h-7 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Diagnostic central — التشخيص المحوري
              </h2>
            </div>
          </div>
          <Bi
            fr="Le dossier est officiellement entre Phase 3 et Phase 4 côté institutions et droit international (Résolution 2797, soutien USA/France/UK/Espagne, ~120 États). MAIS la majorité des sahraouis de Tindouf vivent encore dans Phase 1-2 — récit d'occupation, conscience que le rapport de force a basculé n'est pas encore intégrée."
            ar="الملف رسمياً بين المرحلة 3 والمرحلة 4 على مستوى المؤسسات والقانون الدولي (قرار 2797، دعم أمريكا/فرنسا/المملكة المتحدة/إسبانيا، ~120 دولة). لكن أغلبية صحراويي تندوف لا يزالون يعيشون في المرحلتين 1-2 — سردية الاحتلال، الوعي بأن موازين القوى تغيّرت لم يُستوعَب بعد."
            className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4"
          />
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-amber-200 dark:border-amber-700">
            <div className="font-bold text-amber-800 dark:text-amber-300 mb-2 text-sm uppercase tracking-wider">
              Conséquence — النتيجة
            </div>
            <Bi
              fr="Toute proposition Phase 3-4 (autonomie, négociation) tombe dans des oreilles qui écoutent en Phase 1-2 (occupation, résistance). Le projet Rihab al-Karama doit faire monter progressivement les groupes sur la courbe — sa valeur ajoutée est exactement là."
              ar="كل عرض من المرحلة 3-4 (حكم ذاتي، تفاوض) يصل إلى آذان تستمع في المرحلة 1-2 (احتلال، مقاومة). مشروع رحاب الكرامة يجب أن يرفع المجموعات تدريجياً على المنحنى — قيمته المضافة هنا بالضبط."
              className="text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        {/* === Phase strategy table === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {phases.map((p) => (
            <div key={p.n} className={`${p.bg} ${p.border} border-2 rounded-xl overflow-hidden`}>
              <div className={`bg-gradient-to-r ${p.color} text-white px-4 py-3`}>
                <div className="text-white/70 text-[10px] font-bold uppercase tracking-wider">
                  Phase {p.n}
                </div>
                <div className="font-bold text-base">{p.fr}</div>
                <ArOnly className="font-bold text-base">{p.ar}</ArOnly>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${p.text}`}>
                    Description
                  </div>
                  <Bi fr={p.descFr} ar={p.descAr} small className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${p.text}`}>
                    Intervention
                  </div>
                  <Bi
                    fr={p.interventionFr}
                    ar={p.interventionAr}
                    small
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === Strategy : Dual-phase approach === */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 text-white px-6 md:px-8 py-5">
            <div className="flex items-center gap-3">
              <Compass className="w-7 h-7" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Stratégie « Dual-phase »</h2>
                <ArOnly className="text-xl md:text-2xl font-bold">استراتيجية المرحلة المزدوجة</ArOnly>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <Bi
              fr="Le projet doit appliquer un type d'intervention différent selon le groupe ciblé — pas une stratégie unique."
              ar="يجب أن يُطبّق المشروع نوع تدخّل مختلف حسب الفئة المستهدفة — لا استراتيجية واحدة."
              className="text-gray-700 dark:text-gray-300 mb-6"
            />
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  titleFr: 'Vers shabab Tindouf (Phase 1-2)',
                  titleAr: 'تجاه شباب تندوف (1-2)',
                  icon: Eye,
                  color: 'from-red-500 to-orange-600',
                  itemsFr: [
                    'Contenu digital indirect (TikTok, podcasts) — ouvre une fenêtre d\'info sans confrontation',
                    'Témoignages d\'anciens cadres ralliés diffusés via canaux discrets',
                    'Pas de plaidoyer frontal — éviter mode mobilisation Phase 2',
                  ],
                  itemsAr: [
                    'محتوى رقمي غير مباشر (تيك توك، بودكاست) — يفتح نافذة معلومة دون مواجهة',
                    'شهادات لكوادر سابقة ملتحقة عبر قنوات مَخفيّة',
                    'لا مناصرة صدامية — تجنّب أسلوب حشد المرحلة 2',
                  ],
                },
                {
                  titleFr: 'Vers les revenants (Phase 2-3)',
                  titleAr: 'تجاه العائدين (2-3)',
                  icon: Users,
                  color: 'from-yellow-500 to-amber-600',
                  itemsFr: [
                    'Accompagnement individuel (case work) : protection juridique, emploi, logement',
                    'Médiation intra-familiale entre revenants et leurs proches au Maroc',
                    'Espace de parole pour exprimer la perte sans pression vers le pardon',
                  ],
                  itemsAr: [
                    'مرافقة فردية (case work): حماية قانونية، شغل، سكن',
                    'وساطة داخل العائلة بين العائدين وأقاربهم في المغرب',
                    'فضاء للكلام للتعبير عن الفقدان دون ضغط نحو المغفرة',
                  ],
                },
                {
                  titleFr: 'Vers les Marocains (Phase 3-4)',
                  titleAr: 'تجاه المغاربة (3-4)',
                  icon: Sparkles,
                  color: 'from-emerald-500 to-green-700',
                  itemsFr: [
                    'Campagnes publiques : « accueil sans paternalisme », tafarroq (acceptation)',
                    'Formation des acteurs locaux Sud (Laâyoune, Dakhla) à éviter la jalousie identitaire',
                    'Récit de mémoire commune Hassanya — pas récit de victoire',
                  ],
                  itemsAr: [
                    'حملات عامة: «استقبال بلا استعلاء»، التَفَرُّق والقَبول',
                    'تكوين الفاعلين المحليين بالجنوب (العيون، الداخلة) لتجنّب الغيرة الهوياتية',
                    'سردية ذاكرة حسانية مشتركة — لا سردية انتصار',
                  ],
                },
              ].map((s, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${s.color} text-white p-3`}>
                    <s.icon className="w-5 h-5 mb-1" />
                    <div className="font-bold text-sm">{s.titleFr}</div>
                    <ArOnly className="font-bold text-sm">{s.titleAr}</ArOnly>
                  </div>
                  <ul className="p-3 space-y-2">
                    {s.itemsFr.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-1" />
                        <Bi
                          fr={item}
                          ar={s.itemsAr[j]}
                          small
                          className="text-gray-700 dark:text-gray-300"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === Pitfalls === */}
        <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Pièges à éviter selon Curle
              </h2>
              <ArOnly className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                مزالق يجب تجنّبها حسب كيرل
              </ArOnly>
            </div>
          </div>
          <ul className="space-y-3">
            {[
              {
                fr: 'Sauter directement à la Phase 4 (négociation finale) avec des publics encore en Phase 1 → rejet immédiat.',
                ar: 'القفز مباشرة للمرحلة 4 (تفاوض نهائي) مع جمهور لا يزال في المرحلة 1 → رفض فوري.',
              },
              {
                fr: 'Faire du plaidoyer Phase 2 alors qu\'institutionnellement on est en Phase 3-4 → contre-productif, ranime un récit obsolète.',
                ar: 'القيام بمناصرة المرحلة 2 بينما نحن مؤسساتياً في المرحلة 3-4 → عكسي، يُحيي سردية متجاوزة.',
              },
              {
                fr: 'Ouvrir un dialogue exposé sans protection : à Tindouf, qui parle au Maroc est traité de traître. Espaces sécurisés et déniables nécessaires.',
                ar: 'فتح حوار مكشوف دون حماية: في تندوف، من يتحدث للمغرب يُتَّهَم بالخيانة. فضاءات محمية وقابلة للإنكار ضرورية.',
              },
              {
                fr: 'Confondre "résolution institutionnelle" et "réconciliation sociale" — la première est presque acquise, la seconde demande 20 ans de travail.',
                ar: 'الخلط بين «الحل المؤسساتي» و«المصالحة الاجتماعية» — الأولى شبه محسومة، الثانية تتطلب 20 سنة من العمل.',
              },
              {
                fr: 'Négliger le risque sécuritaire de la Phase 2 résiduelle : l\'extrémisme violent reste une menace réelle (cf. déclarations Fatimatou, Ghaylani, Hfdallah, Kenya 01/05/2026).',
                ar: 'إهمال الخطر الأمني للمرحلة 2 المتبقية: التطرف العنيف يبقى تهديداً حقيقياً (تصريحات فاطمتو وغيلاني وحفظ الله بكينيا 01/05/2026).',
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
              </li>
            ))}
          </ul>
        </div>

        {/* === Question for the group === */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-500 dark:to-indigo-600 rounded-2xl p-6 md:p-8 text-white">
          <Target className="w-10 h-10 mb-3" />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Exercice pour le groupe
          </h2>
          <ArOnly className="text-xl md:text-2xl font-bold mb-4">تمرين للمجموعة</ArOnly>
          <Bi
            fr="Mohamed, Soulaimane, Kenza, Boutaina — chacun place individuellement les 6 groupes sur le canevas, puis comparez. Les divergences entre vous indiquent où l'analyse doit être approfondie. Décidez collectivement de la position consensuelle de chaque groupe avant la prochaine session de travail."
            ar="محمد، سليمان، كنزة، بثينة — كل واحد منكم يضع المجموعات الستّ على المنحنى بشكل فردي، ثم تقارنون النتائج. الاختلافات بينكم تُشير إلى حيث يجب تعميق التحليل. قرّروا جماعياً الموقع التوافقي لكل مجموعة قبل جلسة العمل القادمة."
            className="text-blue-100"
          />
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg text-sm font-semibold">
            <CheckCircle className="w-4 h-4" />
            Output: 1 canvas consensuel + 3 actions concrètes par groupe
          </div>
        </div>
      </section>
    </div>
  );
}
