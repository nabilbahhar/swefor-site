'use client';

import Link from 'next/link';
import {
  Sparkles, ArrowRight, ArrowLeft, AlertTriangle, CheckCircle, Target,
  Lightbulb, HelpCircle, Compass, Eye, Shield, Zap,
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
// MICRO ToCs : per causal arrow from RPP / Curle
// Format from handout: "If we do [X] we will reach [Y] because…"
// ============================================================
type MicroToC = {
  id: string;
  ifFr: string;
  ifAr: string;
  thenFr: string;
  thenAr: string;
  becauseFr: string;
  becauseAr: string;
  riskFr: string;
  riskAr: string;
  confidence: 'high' | 'medium' | 'low';
};

const microToCs: MicroToC[] = [
  {
    id: 'tc1',
    ifFr: 'Nous diffusons des contenus digitaux en Hassanya (TikTok, podcasts, témoignages de ralliés) ciblant les 18-30 ans à Tindouf (a3)',
    ifAr: 'بثّنا محتوى رقمياً بالحسانية يستهدف الشباب 18-30 بتندوف (a3)',
    thenFr: 'les jeunes connaîtront l\'existence d\'alternatives au récit Polisario',
    thenAr: 'الشباب يَعرفون بوجود بدائل لسردية البوليساريو',
    becauseFr: 'la jeune génération née après 1991 est déjà connectée socialement, fatiguée des camps, et plus réceptive à des récits alternatifs quand ils viennent de pairs sahraouis (cadres ralliés) plutôt que de sources marocaines officielles.',
    becauseAr: 'الجيل الشاب المولود بعد 1991 متصل رقمياً، مُنهك من المخيمات، وأكثر تقبّلاً للسرديات البديلة عندما تأتي من أقران صحراويين (كوادر عائدة) لا من مصادر مغربية رسمية.',
    riskFr: 'Si la sécurité algérienne identifie et bloque les comptes, ou si les contenus sont perçus comme propagande marocaine.',
    riskAr: 'إذا رصدت المخابرات الجزائرية الحسابات وحجبتها، أو إذا اعتُبر المحتوى دعاية مغربية.',
    confidence: 'medium',
  },
  {
    id: 'tc2',
    ifFr: 'Nous mettons en place une cellule case-work d\'accompagnement individuel (juridique, emploi, logement, psycho) pour les revenants (a4)',
    ifAr: 'نُنشئ خلية مرافقة فردية (قانون، شغل، سكن، نفسي) للعائدين (a4)',
    thenFr: 'les revenants vivront le retour comme digne et stable, créant un précédent rassurant pour les futurs candidats au retour',
    thenAr: 'العائدون سيعيشون العودة كريمة ومستقرة، مما يخلق سابقة مطمئنة للقادمين',
    becauseFr: 'les premiers revenants servent de signal social ; leur expérience (positive ou négative) se diffuse rapidement dans les réseaux familiaux entre Tindouf et le Sahara marocain. Une expérience positive devient un argument plus fort que toute communication officielle.',
    becauseAr: 'العائدون الأوائل يَخدمون كإشارة اجتماعية؛ تجربتهم (إيجابية أو سلبية) تنتشر سريعاً في الشبكات العائلية. تجربة إيجابية أقوى من أي تواصل رسمي.',
    riskFr: 'Si les ressources sont insuffisantes ou l\'accompagnement bâclé, l\'effet est inverse : les anti-retour utilisent les premiers cas comme contre-exemple.',
    riskAr: 'إذا كانت الموارد ناقصة أو المرافقة سطحية، يَنقلب الأثر: مَن يَرفض العودة يَستعمل الحالات الأولى كمضاد.',
    confidence: 'high',
  },
  {
    id: 'tc3',
    ifFr: 'Nous publions une charte d\'accueil signée par CNDH, universités et collectivités du Sud (a6) + plaidoyer parlementaire (a7)',
    ifAr: 'نَنشر ميثاق استقبال موقّع من المجلس الوطني لحقوق الإنسان، الجامعات وجماعات الجنوب (a6) + مناصرة برلمانية (a7)',
    thenFr: 'le retour digne aura un cadre juridique et institutionnel explicite, opposable',
    thenAr: 'العودة الكريمة ستكون لها إطار قانوني ومؤسساتي صريح وقابل للاحتجاج به',
    becauseFr: 'l\'expérience IER 2004-2005 a montré que des chartes formelles signées par les institutions clés créent un standard que les acteurs locaux ne peuvent plus contourner. Le pouvoir d\'agenda passe de l\'État aux institutions civiles.',
    becauseAr: 'تجربة هيئة الإنصاف والمصالحة 2004-2005 أثبتت أن المواثيق الرسمية المُوقّعة من المؤسسات الكبرى تُنشئ معياراً لا يستطيع الفاعلون المحليون تجاوزه. سلطة جدول الأعمال تَنتقل من الدولة إلى المؤسسات المدنية.',
    riskFr: 'Si la signature est purement symbolique sans mécanisme de suivi, la charte devient lettre morte.',
    riskAr: 'إذا كان التوقيع رمزياً فقط دون آلية للمتابعة، يَصبح الميثاق حبراً على ورق.',
    confidence: 'medium',
  },
  {
    id: 'tc4',
    ifFr: 'Nous ouvrons le centre Rihab al-Karama à Tan-Tan/Guelmim avec témoignages publics IER-style et médiation tribale (a10)',
    ifAr: 'نَفتح مركز رحاب الكرامة بطانطان/كلميم مع شهادات علنية بأسلوب هيئة الإنصاف والمصالحة (a10)',
    thenFr: 'la mémoire des deux camps sera reconnue et archivée, sans hiérarchie',
    thenAr: 'ذاكرة الطرفين ستُعترَف بها وتُؤرشَف، بدون تراتبية',
    becauseFr: 'l\'archivage public des récits change la nature du conflit : il passe de mémoire vivante (instable, manipulable) à mémoire institutionnelle (stable, partagée). C\'est le mécanisme central de toute réconciliation post-conflit (Rwanda Gacaca, Afrique du Sud TRC, IER Maroc).',
    becauseAr: 'الأرشفة العلنية للروايات تُغيّر طبيعة النزاع: تَنقُل من ذاكرة حيّة (غير مستقرة، قابلة للتلاعب) إلى ذاكرة مؤسساتية (مستقرة، مشتركة). آلية أساسية في كل مصالحة ما بعد النزاع.',
    riskFr: 'Si le centre est perçu comme bras de l\'État marocain, les Sahraouis sceptiques refuseront d\'y témoigner. Indépendance institutionnelle = condition sine qua non.',
    riskAr: 'إذا اعتُبر المركز ذراعاً للدولة، سيرفض المتشككون الصحراويون الإدلاء بشهاداتهم. الاستقلالية المؤسساتية شرط لازم.',
    confidence: 'high',
  },
  {
    id: 'tc5',
    ifFr: 'Nous mettons en place un mécanisme d\'alerte précoce avec leaders sahraouis fiables + alternatives économiques crédibles',
    ifAr: 'نُنشئ آلية إنذار مبكر مع قياديين صحراويين موثوقين + بدائل اقتصادية موثوقة',
    thenFr: 'le risque de radicalisation violente sera détecté tôt et neutralisé sans diabolisation',
    thenAr: 'خطر التطرف العنيف يُرصَد مبكراً ويُحيَّد دون شيطنة',
    becauseFr: 'la radicalisation se nourrit du sentiment d\'être trahi par toutes les options légitimes. Si l\'option du retour digne existe ET est crédible aux yeux du candidat, l\'option violente perd sa nécessité psychologique. Les pairs sahraouis (Fatimatou, Ghaylani, Hfdallah cités au Kenya 01/05/2026) sont les seuls détecteurs fiables.',
    becauseAr: 'التطرف يتغذى من شعور الخيانة من كل الخيارات المشروعة. إذا وُجد خيار العودة الكريمة بشكل موثوق، يَفقد الخيار العنيف ضرورته النفسية. الأقران الصحراويون هم الراصدون الموثوقون الوحيدون.',
    riskFr: 'Risque sécuritaire majeur si le mécanisme est compromis. Risque de criminalisation excessive si on étend trop la définition de radicalisation.',
    riskAr: 'خطر أمني كبير إذا تم اختراق الآلية. خطر التجريم المفرط إذا وُسّع تعريف التطرف.',
    confidence: 'low',
  },
];

// ============================================================
// MACRO ToC
// ============================================================
const macroToc = {
  goalFr: 'Un espace civil indépendant de paix, mosala7a et bina\'a mochtarak entre Marocains et Sahraouis revenants de Tindouf, opérationnel et reconnu, fonctionnant pendant la transition post-règlement.',
  goalAr: 'فضاء مدني مستقل للسلام والمصالحة والبناء المشترك بين المغاربة والصحراويين العائدين من تندوف، مُشتغِل ومُعترف به، يَعمل خلال مرحلة ما بعد التسوية.',
  peaceFr: 'Coexistence digne et participative entre Sahraouis revenants, Sahraouis du Maroc, et Marocains, avec identité sahraouie préservée, mémoire reconnue, mobilité sécurisée, et radicalisation prévenue.',
  peaceAr: 'تعايش كريم وتشاركي بين الصحراويين العائدين والصحراويين المغاربة والمغاربة، مع هوية صحراوية محفوظة، ذاكرة معترف بها، حركية مؤمَّنة، وتطرف ممنوع.',
  becauseFr: [
    'Le règlement institutionnel se profile (Résolution 2797, ~120 États) mais l\'absorption sociale n\'a pas été préparée — sans cela, le règlement reste administratif sans devenir humain.',
    'L\'expérience IER 2004-2005 a démontré que les commissions vérité-réconciliation marocaines fonctionnent ET que la société civile est plus crédible que l\'État pour ce travail.',
    'Le décalage de phase Curle (Tindouf en Phase 1-2, institutions en Phase 3-4) crée un risque de crise post-règlement si on ne fait rien — exactement ce que notre projet adresse.',
    'Le tissu transterritorial (parenté, Hassanya, Islam malékite, tribus) est un capital social latent que personne d\'autre ne peut activer — ni l\'État (suspect), ni l\'ONU (extérieur), ni le Polisario (compromis).',
    'Les peace builders sahraouis eux-mêmes (Fatimatou, Ghaylani, Hfdallah) demandent ce travail depuis 2018 — c\'est une demande locale, pas une projection externe.',
  ],
  becauseAr: [
    'الحل المؤسساتي يَلوح (قرار 2797، ~120 دولة) لكن الاستيعاب الاجتماعي لم يُحضَّر — بدون ذلك، يَبقى الحل إدارياً ولا يَصير إنسانياً.',
    'تجربة هيئة الإنصاف والمصالحة 2004-2005 أثبتت أن لجان الحقيقة والمصالحة المغربية تَنجح، وأن المجتمع المدني أكثر مصداقية من الدولة لهذا العمل.',
    'اختلال المرحلة في كيرل (تندوف بالمرحلة 1-2، المؤسسات بالمرحلة 3-4) يَخلق خطر أزمة بعد التسوية إذا لم نَفعل شيئاً — وهذا ما يَتصدّى له مشروعنا.',
    'النسيج العابر للحدود (قرابة، حسانية، إسلام مالكي، قبائل) هو رأسمال اجتماعي كامن لا يَستطيع أحدٌ آخر تفعيله — لا الدولة (مشكوك فيها) ولا الأمم المتحدة (خارجية) ولا البوليساريو (مَوصوم).',
    'بُناة السلام الصحراويون أنفسهم (فاطمتو، غيلاني، حفظ الله) يَطلبون هذا العمل منذ 2018 — طلب محلي لا إسقاط خارجي.',
  ],
};

// ============================================================
// Page
// ============================================================
export default function ToCPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Step 4 — Theory of Change</span>
            <span className="opacity-50">·</span>
            <ArOnly className="inline">المرحلة 4 — نظرية التغيير</ArOnly>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Théorie du Changement
          </h1>
          <ArOnly className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
            نظرية التغيير
          </ArOnly>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Test des hypothèses causales — formule SweFOR : « Si nous accomplissons X, cela mènera à Y parce que… »
          </p>
          <ArOnly className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-2">
            اختبار الفرضيات السببية — صيغة سويفور: «إذا أنجزنا X سيؤدي إلى Y لأنّ...»
          </ArOnly>
        </div>

        {/* Methodology recap */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-emerald-900 dark:text-emerald-200 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> Méthode ToC
          </h2>
          <Bi
            fr="On rend explicites les hypothèses causales (souvent implicites) qui sous-tendent la stratégie. On teste à deux niveaux : MACRO (l'objectif global mène-t-il à la paix ?) et MICRO (chaque activité mène-t-elle à son résultat ?). Si une hypothèse paraît douteuse — ne pas l'ignorer, c'est une opportunité de réajuster."
            ar="نُوضّح الفرضيات السببية (الضمنية غالباً) التي تَستند إليها الاستراتيجية. نَختبر على مستويين: الكلّي (هل يَقود الهدف العام إلى السلام؟) والجزئي (هل يَقود كل نشاط إلى نتيجته؟). إذا بَدت فرضية مَشكوكاً فيها — لا تَتجاهلها، فُرصة للضبط."
            small
            className="text-gray-800 dark:text-gray-200"
          />
        </div>

        {/* === MACRO ToC === */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-2 border-emerald-300 dark:border-emerald-800 rounded-2xl p-6 md:p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                MACRO ToC — Hypothèse globale
              </h2>
              <ArOnly className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                نظرية التغيير الكلّية
              </ArOnly>
            </div>
          </div>

          <div className="space-y-4">
            {/* IF */}
            <div className="bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700 rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-2">
                IF (Si nous accomplissons) — إذا أنجزنا
              </div>
              <Bi fr={macroToc.goalFr} ar={macroToc.goalAr} className="text-gray-800 dark:text-gray-200" />
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-emerald-600 dark:text-emerald-400 rotate-90" />
            </div>

            {/* THEN */}
            <div className="bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700 rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-2">
                THEN (cela mènera à) — سيؤدي إلى
              </div>
              <Bi fr={macroToc.peaceFr} ar={macroToc.peaceAr} className="text-gray-800 dark:text-gray-200" />
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-emerald-600 dark:text-emerald-400 rotate-90" />
            </div>

            {/* BECAUSE */}
            <div className="bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700 rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-3">
                BECAUSE (parce que) — لأنّ
              </div>
              <ol className="space-y-3">
                {macroToc.becauseFr.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {i + 1}
                    </span>
                    <Bi
                      fr={reason}
                      ar={macroToc.becauseAr[i]}
                      small
                      className="text-gray-800 dark:text-gray-200 flex-1"
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* === MICRO ToCs === */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <Compass className="w-6 h-6 text-emerald-600" />
            MICRO ToCs — Hypothèses par activité
          </h2>
          <ArOnly className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            نظريات التغيير الجزئية — فرضية لكل نشاط
          </ArOnly>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Chaque flèche causale de la matrice RPP est testée. Niveau de confiance estimé sur la base des données disponibles.
          </p>

          <div className="space-y-4">
            {microToCs.map((tc, idx) => (
              <div
                key={tc.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-900/50 px-5 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-500 dark:text-gray-400">
                      {tc.id}
                    </span>
                  </div>
                  <ConfidenceBadge level={tc.confidence} />
                </div>

                <div className="p-5 space-y-3">
                  {/* IF */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1">
                      IF — إذا
                    </div>
                    <Bi fr={tc.ifFr} ar={tc.ifAr} small className="text-gray-800 dark:text-gray-200" />
                  </div>

                  {/* THEN */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-lg p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-1">
                      THEN — سيؤدي إلى
                    </div>
                    <Bi fr={tc.thenFr} ar={tc.thenAr} small className="text-gray-800 dark:text-gray-200" />
                  </div>

                  {/* BECAUSE */}
                  <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 mb-1">
                      BECAUSE — لأنّ
                    </div>
                    <Bi fr={tc.becauseFr} ar={tc.becauseAr} small className="text-gray-800 dark:text-gray-200" />
                  </div>

                  {/* RISK */}
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-red-700 dark:text-red-300 mb-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> RISK — خطر
                    </div>
                    <Bi fr={tc.riskFr} ar={tc.riskAr} small className="text-gray-800 dark:text-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Critical questions === */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-800 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5" /> Questions à poser au groupe
            <span className="text-amber-600 dark:text-amber-400 text-base font-normal">— أسئلة للمجموعة</span>
          </h2>
          <ul className="space-y-3">
            {[
              {
                fr: 'Y a-t-il une hypothèse "BECAUSE" qui semble douteuse ou faible ? (Surtout pour tc1 et tc5 marqués MEDIUM/LOW)',
                ar: 'هل هناك فرضية "لأنّ" تَبدو ضعيفة؟ (خاصة tc1 وtc5 المُصنّفتان MEDIUM/LOW)',
              },
              {
                fr: 'Quelles activités peuvent compenser si une hypothèse échoue (plan B) ?',
                ar: 'ما هي الأنشطة التي يُمكن أن تَعوّض في حالة فشل فرضية (خطة بديلة)؟',
              },
              {
                fr: 'L\'hypothèse MACRO est-elle suffisante, ou avons-nous oublié un mécanisme causal ?',
                ar: 'هل الفرضية الكلّية كافية، أم أغفلنا آلية سببية؟',
              },
              {
                fr: 'Quels indicateurs permettront de tester chaque hypothèse en cours d\'exécution ?',
                ar: 'ما هي المؤشرات التي ستَسمح باختبار كل فرضية أثناء التنفيذ؟',
              },
            ].map((q, i) => (
              <li key={i} className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <Bi fr={q.fr} ar={q.ar} small className="text-gray-800 dark:text-gray-200" />
              </li>
            ))}
          </ul>
        </div>

        {/* === Conclusion / wrap up === */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 text-white rounded-2xl p-6 md:p-8 mb-8">
          <Sparkles className="w-10 h-10 mb-3" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Les 4 étapes sont complètes
          </h2>
          <ArOnly className="text-xl md:text-2xl font-bold mb-4">المراحل الأربع مكتملة</ArOnly>
          <Bi
            fr="Vous avez maintenant : (1) une analyse 3-Box explicite, (2) un plan d'intervention par phase Curle, (3) une stratégie validée par les 3 critères RPP, (4) des hypothèses causales explicites et testables (ToC). Le handout SweFOR rappelle : l'analyse n'est jamais finie — restez prêts à revenir et ajuster quand le contexte change."
            ar="عندكم الآن: (1) تحليل صناديق ثلاثة صريح، (2) خطة تدخل حسب مراحل كيرل، (3) استراتيجية مُتحقَّق منها بمعايير RPP الثلاثة، (4) فرضيات سببية صريحة وقابلة للاختبار (ToC). يُذكّرنا منهج سويفور: التحليل لا يَنتهي أبداً — ابقوا مستعدين للعودة والتعديل."
            className="text-blue-100"
          />
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg text-sm font-semibold">
            <CheckCircle className="w-4 h-4" /> Step 1 ✓ · Step 2 ✓ · Step 3 ✓ · Step 4 ✓
          </div>
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
            Curle Canvas
          </Link>
          <Link
            href="/proposition/rpp"
            className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            RPP Matrix
          </Link>
        </div>
      </section>
    </div>
  );
}

function ConfidenceBadge({ level }: { level: 'high' | 'medium' | 'low' }) {
  const config = {
    high: { label: 'HIGH confidence', icon: Shield, color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
    medium: { label: 'MEDIUM confidence', icon: Eye, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300' },
    low: { label: 'LOW confidence', icon: Zap, color: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
  }[level];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${config.color}`}>
      <config.icon className="w-3 h-3" /> {config.label}
    </span>
  );
}
