'use client';

import Link from 'next/link';
import {
  Heart, Users, Swords, AlertTriangle, CheckCircle, Target, Zap, Star,
  Shield, Globe, TrendingUp, Sparkles, Quote, ArrowRight, Calendar,
  BookOpen, GitBranch, Compass, Briefcase, Flame, Scale, Eye, ChevronRight,
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
// 3-Box DATA — exactly per document methodology
// 4 columns: Actors | Factors against peace | Definition of peace | Factors for peace
// ============================================================

type Item = {
  fr: string;
  ar: string;
  isKey?: boolean;
};

const factorsAgainst: Item[] = [
  { fr: 'Trauma intergénérationnel des 50 ans (Tindouf : Maroc = ennemi dans le récit familial transmis).', ar: 'صدمة عابرة للأجيال خلال 50 سنة (في تندوف: المغرب = العدو في السرد العائلي المتوارث).', isKey: true },
  { fr: 'Économie de rente du conflit à Tindouf (dizaines de milliers vivent de l\'aide humanitaire — pas d\'alternative).', ar: 'اقتصاد ريع النزاع بتندوف (عشرات الآلاف يعيشون من المساعدات الإنسانية — لا بديل).', isKey: true },
  { fr: 'Récit héroïque du Polisario : "la lutte armée nous a définis" — sortir de ce récit = perdre une identité.', ar: 'السردية البطولية للبوليساريو: "الكفاح المسلح هو ما عرّفنا" — الخروج منها = فقدان هوية.', isKey: true },
  { fr: 'Risque de radicalisation violente : acceptation tactique de l\'autonomie comme moyen de revenir au territoire pour mener des attaques (Rabat, Casa). Soutenu par cit. peace builders sahraouis (Kenya, 01/05/2026).', ar: 'خطر التطرف العنيف: قبول تكتيكي للحكم الذاتي كوسيلة للعودة لتنفيذ هجمات (الرباط، الدار البيضاء). تدعمه شهادات بُناة السلام الصحراويين (كينيا، 01/05/2026).', isKey: true },
  { fr: 'Asymétrie « accueillant / accueilli » : risque de relation hiérarchique implicite Marocain → Sahraoui revenant.', ar: 'عدم تماثل بين «المستقبِل» و«المستقبَل»: خطر علاقة هرمية ضمنية مغربي → صحراوي عائد.' },
  { fr: 'Risque de jalousie identitaire intra-sahraouie (Sahraouis du Maroc déjà installés vs. revenants traités comme prioritaires).', ar: 'خطر غيرة هوياتية بين الصحراويين (صحراويو المغرب القائمون مقابل عائدين تُمنح لهم الأولوية).' },
  { fr: 'Récupération étatique : si le projet est perçu comme bras civil du Makhzen, perd toute crédibilité côté Sahraouis sceptiques.', ar: 'الاستحواذ الرسمي: إذا اعتُبر المشروع ذراعاً مدنياً للمخزن، يفقد كل مصداقيته لدى المتشككين الصحراويين.' },
  { fr: 'Pression internationale opposée résiduelle (~40 États, ONG en Europe et Afrique du Sud) maintenant le récit d\'occupation.', ar: 'ضغط دولي مضاد متبقٍّ (~40 دولة، منظمات في أوروبا وجنوب إفريقيا) تحافظ على سردية الاحتلال.' },
  { fr: 'Régime algérien instable pouvant instrumentaliser la cause pour distraire de problèmes internes.', ar: 'النظام الجزائري غير المستقر، قد يوظّف القضية لصرف الانتباه عن مشاكله الداخلية.' },
  { fr: 'Désignation terroriste US potentielle (Polisario Terrorist Designation Act, mars 2026) — radicaliserait des deux côtés.', ar: 'التصنيف الإرهابي الأمريكي المحتمل (قانون مارس 2026) — يُجذّر المواقف على الجانبين.' },
];

const factorsFor: Item[] = [
  { fr: 'Liens de parenté tribaux transterritoriaux (Reguibat, Tekna, Ouled Delim) — chaque famille de Tindouf a un parent à Laâyoune ou Dakhla.', ar: 'روابط القرابة القبلية العابرة للحدود (الرڭيبات، تكنة، أولاد دليم) — لكل عائلة في تندوف قريب بالعيون أو الداخلة.', isKey: true },
  { fr: 'Hassanya partagée des deux côtés du mur — pas de barrière linguistique réelle.', ar: 'اللهجة الحسانية المشتركة على جانبي الجدار — لا حاجز لغوي حقيقي.', isKey: true },
  { fr: 'Précédent IER 2004-2005 : le Maroc est le seul pays arabe à avoir mené une commission vérité-réconciliation officielle.', ar: 'سابقة هيئة الإنصاف والمصالحة 2004-2005: المغرب البلد العربي الوحيد بتجربة عدالة انتقالية رسمية.', isKey: true },
  { fr: 'Discours royal du retour (Awda) post-2797 : cadrage politique et symbolique décisif.', ar: 'الخطاب الملكي عن "العودة" بعد قرار 2797: تأطير سياسي ورمزي حاسم.', isKey: true },
  { fr: 'Régionalisation avancée du Maroc (réforme 2015) : cadre juridique d\'autonomie déjà existant.', ar: 'الجهوية المتقدمة بالمغرب (إصلاح 2015): الإطار القانوني للحكم الذاتي موجود فعلاً.', isKey: true },
  { fr: 'Force diplomatique : ~120 États soutiennent le plan d\'autonomie. USA, France, UK, Espagne ralliés. Résolution 2797 ONU (oct. 2025).', ar: 'قوة دبلوماسية: ~120 دولة تدعم مخطط الحكم الذاتي. أمريكا، فرنسا، بريطانيا، إسبانيا منحازة. قرار 2797 (أكتوبر 2025).' },
  { fr: 'Stabilité institutionnelle relative du Maroc (FSI 2024 : 68,8 — meilleur que les grands voisins nord-africains).', ar: 'استقرار مؤسساتي نسبي للمغرب (مؤشر الدول الهشّة 2024: 68.8 — أفضل من جيرانه الكبار في شمال إفريقيا).' },
  { fr: 'Boom économique du Sahara : Dakhla port (~10 Mds $), énergies renouvelables, phosphates → opportunités emploi pour les revenants.', ar: 'ازدهار اقتصادي للصحراء: ميناء الداخلة (~10 مليار دولار)، طاقات متجددة، فوسفاط → فرص شغل للعائدين.' },
  { fr: 'Charte ONU (art. 2.4) + doctrine OUA/UA depuis 1964 : intégrité territoriale comme principe juridique cadre.', ar: 'ميثاق الأمم المتحدة (المادة 2.4) + عقيدة منظمة الوحدة الإفريقية/الاتحاد منذ 1964: السلامة الإقليمية كمبدأ قانوني.' },
  { fr: 'Maroc, leader Afrique en propriété intellectuelle 2026 (1er continental, 22e mondial). Stratégie Digital 2030 : 1,1 Md $ investis.', ar: 'المغرب، الأول إفريقياً في مؤشر الملكية الفكرية 2026 (22 عالمياً). استراتيجية رقمنة 2030: 1.1 مليار دولار.' },
  { fr: 'Génération jeune de Tindouf née après 1991 : épuisée des camps, connectée socialement, voit la prospérité de Dakhla.', ar: 'جيل تندوف المولود بعد 1991: مُنهك من المخيمات، متصل رقمياً، يرى ازدهار الداخلة.' },
  { fr: 'Cadres ralliés du Polisario (depuis 2010) : capital humain de passeurs déjà disponible.', ar: 'كوادر سابقة للبوليساريو عادت (منذ 2010): رأسمال بشري من حاملي الذاكرة متوفّر.' },
  { fr: 'Islam malékite + zaouïas : tissu religieux et autorité morale traditionnelle communs.', ar: 'الإسلام المالكي + الزوايا: نسيج ديني وسلطة معنوية تقليدية مشتركة.' },
];

const actors: Item[] = [
  { fr: 'SM le Roi Mohammed VI (autorité morale + religieuse + politique)', ar: 'صاحب الجلالة الملك محمد السادس (سلطة معنوية ودينية وسياسية)', isKey: true },
  { fr: 'Cadres Polisario ralliés (depuis 2010)', ar: 'الكوادر العائدون من البوليساريو (منذ 2010)', isKey: true },
  { fr: 'Élite politico-militaire Polisario à Tindouf', ar: 'النخبة السياسية والعسكرية للبوليساريو بتندوف', isKey: true },
  { fr: 'Jeunes 18-30 ans (Tindouf + Sud marocain)', ar: 'الشباب 18-30 سنة (تندوف + جنوب المغرب)', isKey: true },
  { fr: 'Sécurité militaire algérienne', ar: 'المخابرات العسكرية الجزائرية', isKey: true },
  { fr: 'Femmes sahraouies des deux côtés (porteuses de mémoire familiale)', ar: 'النساء الصحراويات على الجانبين (حاملات الذاكرة العائلية)' },
  { fr: 'Chouyoukh des tribus traditionnelles', ar: 'شيوخ القبائل التقليديون' },
  { fr: 'Sahraouis du Maroc (Laâyoune, Dakhla, Smara)', ar: 'الصحراويون المغاربة (العيون، الداخلة، السمارة)' },
  { fr: 'Marocains du Nord (perception "traître" possible)', ar: 'مغاربة الشمال (إمكانية تصور «الخائن»)' },
  { fr: 'Diaspora sahraouie en Espagne', ar: 'الجالية الصحراوية بإسبانيا' },
  { fr: 'CNDH — Conseil National des Droits de l\'Homme', ar: 'المجلس الوطني لحقوق الإنسان' },
  { fr: 'HCR / ONU / MINURSO', ar: 'المفوضية السامية للاجئين / الأمم المتحدة / المينورسو' },
  { fr: 'Union africaine (reconnaît toujours la RASD)', ar: 'الاتحاد الإفريقي (لا يزال يعترف بالجمهورية الصحراوية)' },
  { fr: 'Mauritanie (porte logistique potentielle)', ar: 'موريتانيا (بوابة لوجستيكية محتملة)' },
  { fr: 'ONG internationales pro-indépendance (Europe, Afrique du Sud)', ar: 'منظمات دولية مؤيّدة للاستقلال (أوروبا، جنوب إفريقيا)' },
];

// ============================================================
// Curle Result/Activity table — methodology Step 2
// ============================================================
const curleSteps = [
  {
    phase: 'Phase 1 → 2',
    transitionFr: 'Sortir du conflit latent vers la conscience',
    transitionAr: 'الخروج من النزاع الكامن نحو الوعي',
    color: 'from-red-500 to-orange-500',
    rows: [
      {
        result: { fr: 'Les jeunes de Tindouf (18-30) connaissent l\'existence d\'alternatives au récit Polisario.', ar: 'شباب تندوف (18-30) يعرفون بوجود بدائل لسردية البوليساريو.' },
        activity: { fr: 'Diffusion de contenus digitaux indirects (TikTok, podcasts en Hassanya), témoignages de ralliés via canaux discrets, blogs de la diaspora.', ar: 'بث محتوى رقمي غير مباشر (تيك توك، بودكاست بالحسانية)، شهادات لعائدين عبر قنوات مَخفيّة، مدوّنات الجالية.' },
      },
      {
        result: { fr: 'La famille élargie est consciente que le retour est possible et digne.', ar: 'العائلة الموسّعة واعية بأن العودة ممكنة وكريمة.' },
        activity: { fr: 'Cartographie des familles séparées + reprise de contact via émissaires tribaux (chouyoukh) et appels privés.', ar: 'خرائط العائلات المنفصلة + استئناف التواصل عبر مبعوثين قبليين والمكالمات الخاصة.' },
      },
    ],
  },
  {
    phase: 'Phase 2 → 3',
    transitionFr: 'Équilibrer le pouvoir vers la possibilité de négociation',
    transitionAr: 'موازنة السلطة نحو إمكانية التفاوض',
    color: 'from-orange-500 to-yellow-500',
    rows: [
      {
        result: { fr: 'Asymétrie informationnelle Tindouf-Maroc réduite — les conditions réelles dans les camps sont documentées et publiques.', ar: 'تقليص عدم التوازن المعلوماتي بين تندوف والمغرب — الأوضاع الحقيقية في المخيمات موثَّقة وعلنية.' },
        activity: { fr: 'Plateforme média trilingue (Hassanya / Darija / Espagnol) + audit indépendant des conditions à Tindouf via partenaires HCR/CNDH.', ar: 'منصة إعلامية ثلاثية اللغة + تدقيق مستقل لأوضاع تندوف عبر شركاء (المفوضية / المجلس الوطني لحقوق الإنسان).' },
      },
      {
        result: { fr: 'Les revenants ont une protection juridique et économique stable, créant un précédent rassurant.', ar: 'العائدون يتمتعون بحماية قانونية واقتصادية مستقرة، تخلق سابقة مطمئِنة.' },
        activity: { fr: 'Cellule d\'accompagnement individuel (case work) : statut juridique, emploi, logement, suivi psycho-social (CNDH + ONG).', ar: 'خلية مرافقة فردية (case work): وضع قانوني، شغل، سكن، متابعة نفسية اجتماعية.' },
      },
      {
        result: { fr: 'Risque de radicalisation violente détecté tôt, neutralisé sans diabolisation collective.', ar: 'خطر التطرف العنيف يُرصَد مبكراً ويُحيَّد دون شيطنة جماعية.' },
        activity: { fr: 'Mécanisme d\'alerte précoce avec leaders sahraouis fiables (cf. Fatimatou, Ghaylani, Hfdallah) + alternatives socio-économiques crédibles.', ar: 'آلية إنذار مبكر مع قياديين صحراويين موثوقين + بدائل اجتماعية اقتصادية موثوقة.' },
      },
    ],
  },
  {
    phase: 'Phase 3 → 4',
    transitionFr: 'Du settlement vers une paix et justice durables',
    transitionAr: 'من التسوية نحو سلام وعدالة مستدامين',
    color: 'from-yellow-500 to-emerald-500',
    rows: [
      {
        result: { fr: 'Espace civil indépendant existe physiquement et est utilisé pour la médiation entre revenants et Marocains.', ar: 'فضاء مدني مستقل قائم فعلياً ويُستخدم للوساطة بين العائدين والمغاربة.' },
        activity: { fr: 'Centre Rihab al-Karama à Tan-Tan ou Guelmim : témoignages publics format IER, archivage, médiation tribale + IER-style.', ar: 'مركز رحاب الكرامة بطانطان أو كلميم: شهادات علنية بنموذج هيئة الإنصاف والمصالحة، أرشفة، وساطة قبلية.' },
      },
      {
        result: { fr: 'Les institutions marocaines intègrent les revenants sans paternalisme — "marocains qui sont revenus", égaux.', ar: 'المؤسسات المغربية تُدمج العائدين دون استعلاء — «مغاربة عادوا»، متساوون.' },
        activity: { fr: 'Charte d\'accueil signée par CNDH + universités + collectivités du Sud : non-discrimination explicite, mémoire sahraouie protégée.', ar: 'ميثاق استقبال موقّع من المجلس الوطني لحقوق الإنسان + الجامعات + جماعات الجنوب: عدم تمييز صريح، حماية الذاكرة الصحراوية.' },
      },
      {
        result: { fr: 'Identité sahraouie distincte préservée et célébrée dans le cadre marocain (langue, mémoire, culture).', ar: 'الهوية الصحراوية المتميزة محفوظة ومحتفى بها داخل الإطار المغربي (لغة، ذاكرة، ثقافة).' },
        activity: { fr: 'Caravanes culturelles Hassanya, programme académique sur la mémoire, bourses aux étudiants de Tindouf, festival biennal.', ar: 'قوافل ثقافية حسانية، برنامج أكاديمي عن الذاكرة، منح للطلبة من تندوف، مهرجان كل سنتين.' },
      },
    ],
  },
];

// ============================================================
// Page
// ============================================================
export default function PropositionPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* === Header === */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-semibold mb-4">
            <Flame className="w-4 h-4" />
            <span>Document interne — Diffusion restreinte</span>
            <span className="opacity-50">·</span>
            <ArOnly className="inline">وثيقة داخلية — توزيع محدود</ArOnly>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Proposition Projet Maroc
          </h1>
          <ArOnly className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
            مقترح المشروع — المغرب
          </ArOnly>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Espace de paix, mosala7a et bina'a mochtarak — analyse selon la méthode SweFOR « From theory to practice ».
          </p>
          <ArOnly className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-2">
            فضاء سلام، مصالحة وبناء مشترك — تحليل وفق منهجية سويفور «من النظرية إلى الممارسة».
          </ArOnly>

          {/* Methodology badge */}
          <div className="mt-6 inline-flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-semibold">Step 1 — 3-Box ✓</span>
            <Link href="/proposition/curle" className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full font-semibold hover:bg-amber-200 transition-colors">Step 2 — Curle ✓</Link>
            <Link href="/proposition/rpp" className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full font-semibold hover:bg-purple-200 transition-colors">Step 3 — RPP ✓</Link>
            <Link href="/proposition/toc" className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full font-semibold hover:bg-emerald-200 transition-colors">Step 4 — ToC ✓</Link>
          </div>
        </div>

        {/* === Step 1 = Definition + 3-Box === */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 text-white rounded-t-2xl px-6 md:px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur p-3 rounded-xl">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <div className="text-white/70 text-xs font-bold tracking-widest uppercase">Step 1</div>
                <h2 className="text-xl md:text-2xl font-bold leading-tight">3-Box Analysis — تحليل الصناديق الثلاثة</h2>
                <p className="text-white/80 text-sm mt-1">Définition du conflit + facteurs + acteurs</p>
                <ArOnly className="text-white/80 text-sm">تعريف النزاع + العوامل + الفاعلون</ArOnly>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-b-2xl shadow-lg border-x border-b border-gray-200 dark:border-gray-700 p-6 md:p-8">

            {/* === Conflict / Peace definitions === */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h3 className="font-bold text-red-800 dark:text-red-300 text-sm uppercase tracking-wider">
                    Définition du conflit / problème
                  </h3>
                </div>
                <ArOnly className="font-bold text-red-800 dark:text-red-300 text-sm uppercase tracking-wider mb-3">
                  تعريف النزاع / المشكل
                </ArOnly>
                <Bi
                  fr="Le décalage croissant entre la résolution institutionnelle qui se profile (autonomie sous souveraineté marocaine, soutenue par ~120 États et la Résolution ONU 2797) et l'absorption sociale réelle dans les populations sahraouies de Tindouf et marocaines. Sans préparation civile, le règlement politique risque de produire une réconciliation administrative sans réconciliation humaine — terrain favorable à la radicalisation violente, à la marginalisation des revenants, et à la perte de l'identité sahraouie distincte."
                  ar="الفجوة المتنامية بين الحل المؤسساتي الذي يلوح في الأفق (حكم ذاتي تحت السيادة المغربية، مدعوم من حوالي 120 دولة وقرار 2797) والاستيعاب الاجتماعي الفعلي لدى السكان الصحراويين بتندوف والمغاربة. دون تهيئة مدنية، قد ينتج التسوية السياسية مصالحة إدارية بلا مصالحة إنسانية — أرض خصبة للتطرف العنيف، وتهميش العائدين، وضياع الهوية الصحراوية المتميزة."
                  className="text-gray-800 dark:text-gray-200 leading-relaxed"
                />
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h3 className="font-bold text-green-800 dark:text-green-300 text-sm uppercase tracking-wider">
                    Définition de la paix / état désiré
                  </h3>
                </div>
                <ArOnly className="font-bold text-green-800 dark:text-green-300 text-sm uppercase tracking-wider mb-3">
                  تعريف السلام / الحالة المرغوبة
                </ArOnly>
                <Bi
                  fr="Une coexistence digne et participative entre Sahraouis revenants de Tindouf, Sahraouis du Maroc et Marocains, dans un cadre où : (1) l'identité sahraouie distincte est préservée et célébrée, (2) la mobilité humaine et économique est sécurisée, (3) la mémoire des deux camps est reconnue sans hiérarchie, (4) les institutions du retour fonctionnent sans paternalisme, (5) la radicalisation violente est prévenue par des alternatives socio-économiques crédibles."
                  ar="تعايش كريم وتشاركي بين الصحراويين العائدين من تندوف، والصحراويين المغاربة، والمغاربة، في إطار: (1) الهوية الصحراوية المتميزة محفوظة ومحتفى بها، (2) الحركية البشرية والاقتصادية مؤمَّنة، (3) ذاكرة الطرفين معترف بها دون تراتبية، (4) مؤسسات العودة تشتغل بدون استعلاء، (5) التطرف العنيف يُمنَع ببدائل اجتماعية اقتصادية موثوقة."
                  className="text-gray-800 dark:text-gray-200 leading-relaxed"
                />
              </div>
            </div>

            {/* === The 3-Box table itself — 4 columns per document === */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mb-2">
                Table 3-Box (méthode SweFOR) — جدول الصناديق الثلاثة
              </p>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                <Star className="inline w-3 h-3 text-yellow-500 mr-1" />
                = Key actor / Key factor (changement = changement majeur du conflit)
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr>
                    <th className="bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 text-left px-4 py-3 border border-amber-300 dark:border-amber-700 text-sm w-1/4 align-top">
                      <div className="font-bold">4. Actors</div>
                      <ArOnly className="font-bold">الفاعلون</ArOnly>
                    </th>
                    <th className="bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-200 text-left px-4 py-3 border border-red-300 dark:border-red-700 text-sm w-1/4 align-top">
                      <div className="font-bold">2. Factors AGAINST peace</div>
                      <ArOnly className="font-bold">العوامل ضد السلام</ArOnly>
                    </th>
                    <th className="bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-200 text-left px-4 py-3 border border-blue-300 dark:border-blue-700 text-sm w-1/4 align-top">
                      <div className="font-bold">1. Definition of peace</div>
                      <ArOnly className="font-bold">تعريف السلام</ArOnly>
                    </th>
                    <th className="bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-200 text-left px-4 py-3 border border-green-300 dark:border-green-700 text-sm w-1/4 align-top">
                      <div className="font-bold">3. Factors FOR peace</div>
                      <ArOnly className="font-bold">العوامل من أجل السلام</ArOnly>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* Actors column */}
                    <td className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-3 align-top">
                      <ul className="space-y-2">
                        {actors.map((a, i) => (
                          <li key={i} className={`p-2 rounded-md ${a.isKey ? 'bg-amber-200/60 dark:bg-amber-800/30 border border-amber-400 dark:border-amber-700' : ''}`}>
                            <div className="flex items-start gap-1.5">
                              {a.isKey && <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 flex-shrink-0 mt-0.5" />}
                              <Bi fr={a.fr} ar={a.ar} small className="text-gray-800 dark:text-gray-200" />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* Factors against */}
                    <td className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/50 p-3 align-top">
                      <ul className="space-y-2">
                        {factorsAgainst.map((f, i) => (
                          <li key={i} className={`p-2 rounded-md ${f.isKey ? 'bg-red-200/60 dark:bg-red-800/30 border border-red-400 dark:border-red-700' : ''}`}>
                            <div className="flex items-start gap-1.5">
                              {f.isKey && <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 flex-shrink-0 mt-0.5" />}
                              <Bi fr={f.fr} ar={f.ar} small className="text-gray-800 dark:text-gray-200" />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* Definition of peace — center column */}
                    <td className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 p-4 align-top">
                      <div className="space-y-3">
                        <Bi
                          fr="Coexistence digne entre Sahraouis revenants, Sahraouis du Maroc, et Marocains."
                          ar="تعايش كريم بين الصحراويين العائدين، والصحراويين المغاربة، والمغاربة."
                          small
                          className="text-blue-900 dark:text-blue-200 font-semibold"
                        />
                        <Bi
                          fr="Identité sahraouie préservée et célébrée."
                          ar="هوية صحراوية محفوظة ومحتفى بها."
                          small
                          className="text-blue-900 dark:text-blue-200 font-semibold"
                        />
                        <Bi
                          fr="Mobilité humaine et économique sécurisée."
                          ar="حركية بشرية واقتصادية مؤمَّنة."
                          small
                          className="text-blue-900 dark:text-blue-200 font-semibold"
                        />
                        <Bi
                          fr="Mémoires reconnues sans hiérarchie."
                          ar="ذاكرات معترف بها دون تراتبية."
                          small
                          className="text-blue-900 dark:text-blue-200 font-semibold"
                        />
                        <Bi
                          fr="Retour digne, sans paternalisme."
                          ar="عودة كريمة، بلا استعلاء."
                          small
                          className="text-blue-900 dark:text-blue-200 font-semibold"
                        />
                        <Bi
                          fr="Radicalisation violente prévenue par alternatives socio-économiques."
                          ar="تطرف عنيف ممنوع ببدائل اجتماعية اقتصادية."
                          small
                          className="text-blue-900 dark:text-blue-200 font-semibold"
                        />
                      </div>
                    </td>

                    {/* Factors for peace */}
                    <td className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/50 p-3 align-top">
                      <ul className="space-y-2">
                        {factorsFor.map((f, i) => (
                          <li key={i} className={`p-2 rounded-md ${f.isKey ? 'bg-green-200/60 dark:bg-green-800/30 border border-green-400 dark:border-green-700' : ''}`}>
                            <div className="flex items-start gap-1.5">
                              {f.isKey && <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 flex-shrink-0 mt-0.5" />}
                              <Bi fr={f.fr} ar={f.ar} small className="text-gray-800 dark:text-gray-200" />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quote des peace builders */}
            <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 dark:border-red-400 p-5 rounded-r-xl">
              <Quote className="w-6 h-6 text-red-500 dark:text-red-400 mb-2" />
              <p className="text-gray-800 dark:text-gray-200 italic mb-2 text-sm md:text-base">
                « Nous, peace builders du Sahara, ne serons jamais à l'aise jusqu'au moment où nous verrons le sang. »
              </p>
              <ArOnly className="text-gray-800 dark:text-gray-200 italic mb-2 text-sm md:text-base leading-loose">
                «نحن، بُناة السلام من الصحراء، لن نرتاح إلى أن نرى الدم.»
              </ArOnly>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                — Fatimatou, Ghaylani, Hfdallah · Kenya, 1er mai 2026 · propos répétés depuis 2018
              </p>
              <ArOnly className="text-xs text-gray-600 dark:text-gray-400">
                — فاطمتو، غيلاني، حفظ الله · كينيا، 1 ماي 2026 · كلام متكرر منذ 2018
              </ArOnly>
              <Bi
                fr="Cette parole, exprimée par des Sahraouis eux-mêmes engagés dans la paix, n'est pas une projection externe. C'est une lecture interne du tissu social. Elle classe le risque de radicalisation violente comme key factor."
                ar="هذه العبارة، يعبّر عنها صحراويون منخرطون في بناء السلام، ليست إسقاطاً خارجياً. إنها قراءة داخلية للنسيج الاجتماعي. تُصنّف خطر التطرف العنيف كعامل أساسي."
                small
                className="mt-3 text-red-800 dark:text-red-300 font-medium"
              />
            </div>
          </div>
        </div>

        {/* === Step 2 = Curle === */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-amber-600 to-orange-700 dark:from-amber-500 dark:to-orange-600 text-white rounded-t-2xl px-6 md:px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur p-3 rounded-xl">
                <GitBranch className="w-7 h-7" />
              </div>
              <div>
                <div className="text-white/70 text-xs font-bold tracking-widest uppercase">Step 2</div>
                <h2 className="text-xl md:text-2xl font-bold leading-tight">Curle Diagram — مخطط كيرل</h2>
                <p className="text-white/80 text-sm mt-1">Position actuelle et trajectoire d'intervention</p>
                <ArOnly className="text-white/80 text-sm">الموقع الحالي ومسار التدخل</ArOnly>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-b-2xl shadow-lg border-x border-b border-gray-200 dark:border-gray-700 p-6 md:p-8">

            {/* Diagnostic */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-800 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-amber-900 dark:text-amber-200 mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5" /> Diagnostic central
                <span className="text-gray-400">·</span>
                <span>التشخيص المحوري</span>
              </h3>
              <Bi
                fr="Le dossier est officiellement entre Phase 3 (Settlement) et Phase 4 (Sustainable Peace) côté institutions et droit international. Mais les sahraouis de Tindouf vivent encore en Phase 1-2. Ce DÉCALAGE DE PHASE entre les groupes est le problème opérationnel principal et la valeur ajoutée du projet."
                ar="الملف رسمياً بين المرحلة 3 (تسوية) والمرحلة 4 (سلام مستدام) على مستوى المؤسسات والقانون الدولي. لكن صحراويي تندوف لا يزالون يعيشون في المرحلتين 1-2. هذا «اختلال المرحلة» بين الفئات هو المشكل التنفيذي الأساسي والقيمة المضافة للمشروع."
                className="text-gray-800 dark:text-gray-200 leading-relaxed"
              />

              {/* Link to canvas */}
              <Link
                href="/proposition/curle"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                <GitBranch className="w-4 h-4" />
                Voir le canevas Curle visualisé (SVG)
                <ChevronRight className="w-4 h-4" />
              </Link>
              <ArOnly className="mt-2 text-xs text-amber-800 dark:text-amber-300">
                للاطّلاع على المنحنى البصري انقر فوق الرابط أعلاه
              </ArOnly>
            </div>

            {/* Result / Activity tables per phase transition */}
            <div className="space-y-6">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mb-2">
                Tableau Result → Activity (méthode SweFOR : écrire le résultat AVANT l'activité)
              </p>
              <ArOnly className="text-xs text-gray-500 dark:text-gray-400">
                جدول النتيجة ← النشاط (المنهج: نكتب النتيجة المرغوبة قبل النشاط)
              </ArOnly>

              {curleSteps.map((step, idx) => (
                <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${step.color} text-white px-5 py-3`}>
                    <div className="flex items-center gap-3">
                      <span className="bg-white/20 backdrop-blur w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="text-white/80 text-xs font-bold tracking-wider">{step.phase}</div>
                        <div className="font-bold text-base">{step.transitionFr}</div>
                        <ArOnly className="font-bold text-base">{step.transitionAr}</ArOnly>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px]">
                      <thead className="bg-gray-50 dark:bg-gray-900/40">
                        <tr>
                          <th className="text-left px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 w-1/2">
                            Result · النتيجة
                          </th>
                          <th className="text-left px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 w-1/2">
                            Activity · النشاط
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {step.rows.map((r, i) => (
                          <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-3 align-top bg-blue-50/50 dark:bg-blue-900/10">
                              <Bi fr={r.result.fr} ar={r.result.ar} small className="text-gray-800 dark:text-gray-200" />
                            </td>
                            <td className="px-4 py-3 align-top bg-amber-50/50 dark:bg-amber-900/10">
                              <Bi fr={r.activity.fr} ar={r.activity.ar} small className="text-gray-800 dark:text-gray-200" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Spinning arrow note */}
            <div className="mt-6 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <Bi
                  fr="Note méthodologique : le processus n'est pas linéaire. Curle inclut une « flèche de retour » : les négociations peuvent échouer et nous ramener temporairement aux confrontations. Le projet doit prévoir des mécanismes de résilience pour absorber ces chocs sans abandonner."
                  ar="ملاحظة منهجية: العملية ليست خطية. كيرل يُضمّن «سهم الرجوع»: قد تفشل المفاوضات وتُعيدنا مؤقتاً إلى المواجهة. يجب أن يَتوقّع المشروع آليات صمود لاستيعاب هذه الصدمات دون التخلي."
                  small
                  className="text-gray-700 dark:text-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === Steps 3 + 4 — completed === */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <Link
            href="/proposition/rpp"
            className="bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 border-2 border-purple-300 dark:border-purple-700 rounded-2xl p-6 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-200 dark:bg-purple-800 p-2 rounded-lg">
                <Target className="w-6 h-6 text-purple-700 dark:text-purple-300" />
              </div>
              <div className="flex-1">
                <div className="text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">Step 3 ✓</div>
                <h3 className="font-bold text-gray-900 dark:text-white">RPP Matrix</h3>
                <ArOnly className="font-bold text-gray-900 dark:text-white">مصفوفة RPP</ArOnly>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <Bi
              fr="11 activités plottées sur la matrice 2×2, 8 flèches causales tracées, 3 critères RPP vérifiés ✓."
              ar="11 نشاط موضوع على المصفوفة 2×2، 8 أسهم سببية، 3 معايير RPP مُتحقَّق منها ✓."
              small
              className="text-gray-700 dark:text-gray-300"
            />
          </Link>

          <Link
            href="/proposition/toc"
            className="bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border-2 border-emerald-300 dark:border-emerald-700 rounded-2xl p-6 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-emerald-200 dark:bg-emerald-800 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-emerald-700 dark:text-emerald-300" />
              </div>
              <div className="flex-1">
                <div className="text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">Step 4 ✓</div>
                <h3 className="font-bold text-gray-900 dark:text-white">Theory of Change</h3>
                <ArOnly className="font-bold text-gray-900 dark:text-white">نظرية التغيير</ArOnly>
              </div>
              <ChevronRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <Bi
              fr="MACRO ToC + 5 MICRO ToCs (formule If/Then/Because/Risk) avec niveaux de confiance HIGH/MEDIUM/LOW."
              ar="نظرية تغيير كلّية + 5 جزئية (صيغة If/Then/Because/Risk) بمستويات ثقة HIGH/MEDIUM/LOW."
              small
              className="text-gray-700 dark:text-gray-300"
            />
          </Link>
        </div>

        {/* === Sources === */}
        <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Méthodologie + sources
            <span className="text-gray-400 text-sm font-normal">— المنهجية والمصادر</span>
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'SweFOR — From theory to practice : doing analysis to build strategy (handout interne)', url: '#' },
              { label: 'USIP (2018) — SNAP Synergizing Nonviolent Action and Peacebuilding Action Guide', url: 'https://www.usip.org/publications/2018/06/synergizing-nonviolent-action-and-peacebuilding-snap-action-guide' },
              { label: 'CDA Reflecting on Peace Practice (RPP) — manual in Arabic', url: 'https://www.cdacollaborative.org/publication/reflecting-on-peace-practice-rpp-training-of-consultants-and-advisers-manual-in-arabic/' },
              { label: 'UN Security Council Resolution 2797 (2025) — MINURSO renewal', url: 'https://press.un.org/en/2025/sc16208.doc.htm' },
              { label: 'Top 10 Largest African Economies by GDP 2026 — Daba Finance', url: 'https://www.dabafinance.com/en/insights/top-10-largest-african-economies-by-gdp-in-2026' },
              { label: 'Morocco Leads Africa in 2026 IP Index — Ecofin Agency', url: 'https://www.ecofinagency.com/news/1703-53839-morocco-leads-africa-in-2026-intellectual-property-index' },
              { label: 'Fragile States Index 2024 — Fund for Peace', url: 'https://fragilestatesindex.org/' },
              { label: 'Polisario in Mali instability — Morocco World News (April 2026)', url: 'https://www.moroccoworldnews.com/2026/04/289112/video-captures-algerian-backed-polisarios-involvement-in-mali-instability/' },
            ].map((src, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-gray-400">{i + 1}.</span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* === Footer note === */}
        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-center">
          <p className="text-xs text-amber-800 dark:text-amber-300">
            Document de travail interne — diffusion restreinte au groupe SweFOR Maroc (Mohamed Boussad, Soulaimane Mimouni, Kenza Samoud, Boutaina Benhmida).
          </p>
          <ArOnly className="text-xs text-amber-800 dark:text-amber-300 mt-1">
            وثيقة عمل داخلية — توزيع محدود لمجموعة سويفور المغرب.
          </ArOnly>
        </div>
      </section>
    </div>
  );
}
