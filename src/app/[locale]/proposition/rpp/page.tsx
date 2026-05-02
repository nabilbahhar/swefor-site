'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Target, ArrowRight, ArrowLeft, AlertTriangle, CheckCircle, X,
  Users, User, Building2, Megaphone, Sparkles, ChevronRight,
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

function Bi({ fr, ar, className = '', small = false }: { fr: string; ar: string; className?: string; small?: boolean }) {
  const baseSize = small ? 'text-xs md:text-sm' : 'text-sm md:text-base';
  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className={baseSize}>{fr}</div>
      <ArOnly className={`${baseSize} leading-loose font-medium opacity-90`}>{ar}</ArOnly>
    </div>
  );
}

// ============================================================
// Activities placed on the RPP matrix
// quadrants: KI = Key×Individual, MI = More×Individual,
//            KS = Key×Socio-political, MS = More×Socio-political
// ============================================================
type Activity = {
  id: string;
  fr: string;
  ar: string;
  curlePhase: '1→2' | '2→3' | '3→4';
};

const KI: Activity[] = [
  {
    id: 'a1',
    fr: 'Témoignages publics IER-style des cadres Polisario ralliés (légitimité de pivot).',
    ar: 'شهادات علنية بنموذج هيئة الإنصاف والمصالحة من كوادر البوليساريو العائدة.',
    curlePhase: '3→4',
  },
  {
    id: 'a2',
    fr: 'Coaching de chouyoukh tribaux pour rouvrir les liens transterritoriaux.',
    ar: 'تكوين شيوخ القبائل لإعادة فتح الروابط العابرة للحدود.',
    curlePhase: '1→2',
  },
];

const MI: Activity[] = [
  {
    id: 'a3',
    fr: 'Diffusion contenus digitaux indirects (TikTok, podcasts Hassanya) → jeunes Tindouf.',
    ar: 'بث محتوى رقمي غير مباشر (تيك توك، بودكاست بالحسانية) → شباب تندوف.',
    curlePhase: '1→2',
  },
  {
    id: 'a4',
    fr: 'Cellule case-work d\'accompagnement individuel (juridique, emploi, logement, psycho).',
    ar: 'خلية مرافقة فردية (قانون، شغل، سكن، دعم نفسي).',
    curlePhase: '2→3',
  },
  {
    id: 'a5',
    fr: 'Caravanes culturelles Hassanya et programme académique sur la mémoire commune.',
    ar: 'قوافل ثقافية حسانية وبرنامج أكاديمي عن الذاكرة المشتركة.',
    curlePhase: '3→4',
  },
];

const KS: Activity[] = [
  {
    id: 'a6',
    fr: 'Charte d\'accueil signée par CNDH + universités + collectivités du Sud (non-discrimination explicite).',
    ar: 'ميثاق استقبال موقّع من المجلس الوطني لحقوق الإنسان + الجامعات + جماعات الجنوب.',
    curlePhase: '3→4',
  },
  {
    id: 'a7',
    fr: 'Plaidoyer auprès du Parlement marocain pour cadre légal "retour digne" (statut, droits, mémoire).',
    ar: 'مناصرة لدى البرلمان المغربي من أجل إطار قانوني «العودة الكريمة».',
    curlePhase: '3→4',
  },
  {
    id: 'a8',
    fr: 'Audit indépendant des conditions à Tindouf via partenaires HCR/CNDH.',
    ar: 'تدقيق مستقل لأوضاع تندوف عبر شركاء (المفوضية والمجلس الوطني).',
    curlePhase: '2→3',
  },
];

const MS: Activity[] = [
  {
    id: 'a9',
    fr: 'Plateforme média trilingue (Hassanya/Darija/Espagnol) — façonner l\'opinion sociale.',
    ar: 'منصة إعلامية ثلاثية اللغة (حسانية/دارجة/إسبانية) — تشكيل الرأي الاجتماعي.',
    curlePhase: '2→3',
  },
  {
    id: 'a10',
    fr: 'Centre Rihab al-Karama à Tan-Tan/Guelmim (espace civil structuré, indépendant de l\'État).',
    ar: 'مركز رحاب الكرامة بطانطان أو كلميم (فضاء مدني مهيكل، مستقل عن الدولة).',
    curlePhase: '3→4',
  },
  {
    id: 'a11',
    fr: 'Programme insertion économique des revenants (bourses, micro-crédit, partenariats Dakhla).',
    ar: 'برنامج إدماج اقتصادي للعائدين (منح، قروض صغرى، شراكات الداخلة).',
    curlePhase: '3→4',
  },
];

// ============================================================
// Causal arrows (between activity ids)
// ============================================================
const arrows: Array<{ from: string; to: string; label?: string }> = [
  { from: 'a3', to: 'a4', label: 'attire' },
  { from: 'a4', to: 'a11', label: 'feed' },
  { from: 'a2', to: 'a1', label: 'amplifie' },
  { from: 'a1', to: 'a10', label: 'légitime' },
  { from: 'a8', to: 'a9', label: 'documente' },
  { from: 'a9', to: 'a3', label: 'amplifie' },
  { from: 'a6', to: 'a11', label: 'cadre' },
  { from: 'a5', to: 'a10', label: 'nourrit' },
];

// ============================================================
// Page
// ============================================================
export default function RPPPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
            <Target className="w-4 h-4" />
            <span>Step 3 — RPP Matrix</span>
            <span className="opacity-50">·</span>
            <ArOnly className="inline">المرحلة 3 — مصفوفة RPP</ArOnly>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Stratégie sur la Matrice RPP
          </h1>
          <ArOnly className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
            الاستراتيجية على مصفوفة RPP
          </ArOnly>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Activités positionnées + flèches causales + vérification des 3 critères RPP.
          </p>
          <ArOnly className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-2">
            الأنشطة موضوعة + أسهم سببية + التحقق من معايير RPP الثلاثة.
          </ArOnly>
        </div>

        {/* Methodology recap */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-purple-900 dark:text-purple-200 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Méthode RPP — منهجية
          </h2>
          <Bi
            fr="La matrice RPP croise 4 dimensions : Key people / More people × Individual change / Socio-political change. Une stratégie efficace doit (1) ne pas rester confinée dans un seul quadrant, (2) lier individual à socio-political, et (3) au niveau socio-political, atteindre à la fois Key people ET More people."
            ar="مصفوفة RPP تَتقاطع فيها أربعة أبعاد: الأشخاص الرئيسيون / عدد أكبر × تغيير فردي / اجتماعي-سياسي. الاستراتيجية الفعّالة يجب: (1) ألا تَنحصر في خانة واحدة، (2) أن تَربط الفردي بالاجتماعي-السياسي، (3) على المستوى الاجتماعي-السياسي، أن تَطال الأشخاص الرئيسيين وعدد أكبر معاً."
            small
            className="text-gray-800 dark:text-gray-200"
          />
        </div>

        {/* === The matrix === */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 md:p-8 mb-8">
          {/* Column headers */}
          <div className="grid grid-cols-[160px_1fr_1fr] gap-3 mb-2">
            <div></div>
            <div className="text-center px-3 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg">
              <User className="w-5 h-5 mx-auto mb-1" />
              <div className="font-bold text-sm">Key People</div>
              <ArOnly className="font-bold text-sm">الأشخاص الرئيسيون</ArOnly>
            </div>
            <div className="text-center px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg">
              <Users className="w-5 h-5 mx-auto mb-1" />
              <div className="font-bold text-sm">More People</div>
              <ArOnly className="font-bold text-sm">عدد أكبر من الأشخاص</ArOnly>
            </div>
          </div>

          {/* Row 1: Individual change */}
          <div className="grid grid-cols-[160px_1fr_1fr] gap-3 mb-3">
            <div className="flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-lg p-3 text-center">
              <div>
                <User className="w-5 h-5 mx-auto mb-1" />
                <div className="font-bold text-sm">Individual / Personal change</div>
                <ArOnly className="font-bold text-xs">تغيير فردي / شخصي</ArOnly>
              </div>
            </div>

            {/* KI quadrant */}
            <Quadrant
              activities={KI}
              prefix="KI"
              bg="bg-violet-50 dark:bg-violet-900/20"
              border="border-violet-300 dark:border-violet-800"
              accent="text-violet-700 dark:text-violet-300"
            />

            {/* MI quadrant */}
            <Quadrant
              activities={MI}
              prefix="MI"
              bg="bg-blue-50 dark:bg-blue-900/20"
              border="border-blue-300 dark:border-blue-800"
              accent="text-blue-700 dark:text-blue-300"
            />
          </div>

          {/* Row 2: Socio-political change */}
          <div className="grid grid-cols-[160px_1fr_1fr] gap-3">
            <div className="flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white rounded-lg p-3 text-center">
              <div>
                <Building2 className="w-5 h-5 mx-auto mb-1" />
                <div className="font-bold text-sm">Socio-political change</div>
                <ArOnly className="font-bold text-xs">تغيير اجتماعي - سياسي</ArOnly>
              </div>
            </div>

            {/* KS quadrant */}
            <Quadrant
              activities={KS}
              prefix="KS"
              bg="bg-fuchsia-50 dark:bg-fuchsia-900/20"
              border="border-fuchsia-300 dark:border-fuchsia-800"
              accent="text-fuchsia-700 dark:text-fuchsia-300"
            />

            {/* MS quadrant */}
            <Quadrant
              activities={MS}
              prefix="MS"
              bg="bg-emerald-50 dark:bg-emerald-900/20"
              border="border-emerald-300 dark:border-emerald-800"
              accent="text-emerald-700 dark:text-emerald-300"
            />
          </div>
        </div>

        {/* === Causal arrows === */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-purple-600" />
            Flèches causales — العلاقات السببية
          </h2>
          <Bi
            fr="Comment les activités s'enchaînent pour produire un effet cumulatif. Lecture : A → B = A alimente, attire, légitime ou cadre B."
            ar="كيف تتسلسل الأنشطة لتُنتج أثراً تراكمياً. القراءة: A → B تعني A يُغذّي أو يَجلب أو يُشَرعن أو يؤطّر B."
            small
            className="text-gray-700 dark:text-gray-300 mb-4"
          />
          <div className="grid md:grid-cols-2 gap-2">
            {arrows.map((a, i) => {
              const fromAct = [...KI, ...MI, ...KS, ...MS].find((x) => x.id === a.from);
              const toAct = [...KI, ...MI, ...KS, ...MS].find((x) => x.id === a.to);
              return (
                <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-900/40 rounded-lg text-xs md:text-sm">
                  <span className="bg-violet-200 dark:bg-violet-900/40 text-violet-800 dark:text-violet-200 px-2 py-0.5 rounded font-mono font-bold flex-shrink-0">
                    {a.from}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 truncate flex-1 italic">
                    {fromAct?.fr.slice(0, 35)}...
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  {a.label && (
                    <span className="text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase">
                      {a.label}
                    </span>
                  )}
                  <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span className="bg-emerald-200 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded font-mono font-bold flex-shrink-0">
                    {a.to}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* === RPP criteria check === */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            Vérification des 3 critères RPP
            <span className="text-gray-400 text-base font-normal">— التحقق من المعايير الثلاثة</span>
          </h2>
          <ul className="space-y-4">
            {[
              {
                ok: true,
                fr: 'Critère 1 : ne pas rester dans un seul quadrant — la stratégie couvre les 4 quadrants (KI: 2 activités, MI: 3, KS: 3, MS: 3). ✓',
                ar: 'المعيار 1: عدم الانحصار في خانة واحدة — الاستراتيجية تغطي الخانات الأربع. ✓',
              },
              {
                ok: true,
                fr: 'Critère 2 : lier Individual à Socio-political — flèches a4→a11 (case-work → insertion économique structurelle), a1→a10 (témoignages → centre Rihab al-Karama), a5→a10 (programmes culturels → infrastructure). ✓',
                ar: 'المعيار 2: ربط الفردي بالاجتماعي-السياسي — أسهم a4→a11، a1→a10، a5→a10. ✓',
              },
              {
                ok: true,
                fr: 'Critère 3 : au niveau Socio-political, atteindre Key people ET More people — KS (charte CNDH, plaidoyer Parlement, audit) et MS (média, Centre, insertion économique) avec liens entre eux (a6→a11). ✓',
                ar: 'المعيار 3: على المستوى الاجتماعي-السياسي، الوصول للأشخاص الرئيسيين وعدد أكبر معاً — KS (ميثاق المجلس الوطني، مناصرة البرلمان، التدقيق) وMS (الإعلام، المركز، الإدماج الاقتصادي) مع روابط بينها (a6→a11). ✓',
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <Bi fr={item.fr} ar={item.ar} small className="text-gray-800 dark:text-gray-200" />
              </li>
            ))}
          </ul>
        </div>

        {/* === Gaps + warnings === */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-800 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Vigilances et déséquilibres détectés
            <span className="text-amber-600 dark:text-amber-400 text-base font-normal">— التحذيرات</span>
          </h2>
          <ul className="space-y-3">
            {[
              {
                fr: 'Quadrant KI (Key×Individual) léger : seulement 2 activités. Renforcer la médiation tribale pourrait être utile.',
                ar: 'خانة KI خفيفة: نشاطان فقط. تعزيز الوساطة القبلية قد يكون مفيداً.',
              },
              {
                fr: 'Manque de pont KI → KS direct. Les ralliés (KI) doivent influencer le plaidoyer institutionnel (KS) plus explicitement.',
                ar: 'لا يوجد جسر مباشر KI → KS. على العائدين (KI) أن يؤثّروا على المناصرة المؤسساتية (KS) بشكل أوضح.',
              },
              {
                fr: 'Côté Tindouf : les activités MI (jeunes via TikTok) doivent être protégées de l\'instrumentalisation politique algérienne.',
                ar: 'الجانب التندوفي: أنشطة MI (شباب عبر تيك توك) يجب حمايتها من التوظيف السياسي الجزائري.',
              },
              {
                fr: 'Risque sécuritaire : le passage MI → MS (jeunes engagés → action structurelle) doit être surveillé pour détection précoce de radicalisation.',
                ar: 'خطر أمني: الانتقال MI → MS (شباب منخرط → فعل بنيوي) يجب رصده للكشف المبكر عن التطرف.',
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <Bi fr={item.fr} ar={item.ar} small className="text-gray-800 dark:text-gray-200" />
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/proposition"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour Proposition
          </Link>
          <Link
            href="/proposition/curle"
            className="inline-flex items-center gap-2 px-5 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Curle Canvas <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/proposition/toc"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Step 4 — Theory of Change <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// Quadrant component
// ============================================================
function Quadrant({
  activities,
  prefix,
  bg,
  border,
  accent,
}: {
  activities: Activity[];
  prefix: string;
  bg: string;
  border: string;
  accent: string;
}) {
  return (
    <div className={`${bg} border-2 ${border} rounded-xl p-3 min-h-[260px]`}>
      <div className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${accent}`}>
        Quadrant {prefix} — {activities.length} activité{activities.length > 1 ? 's' : ''}
      </div>
      <ul className="space-y-2">
        {activities.map((a) => (
          <li
            key={a.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2.5"
          >
            <div className="flex items-start gap-2 mb-1">
              <span className={`${accent} text-[10px] font-mono font-bold px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded`}>
                {a.id}
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                Phase {a.curlePhase}
              </span>
            </div>
            <Bi fr={a.fr} ar={a.ar} small className="text-gray-700 dark:text-gray-300" />
          </li>
        ))}
      </ul>
    </div>
  );
}
