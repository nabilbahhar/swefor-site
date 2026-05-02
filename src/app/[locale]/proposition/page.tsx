'use client';

import {
  Heart, Users, Swords, AlertTriangle, CheckCircle, Target, Zap,
  Shield, Globe, TrendingUp, Sparkles, MessageSquare, Quote,
  ArrowRight, Calendar, MapPin, BookOpen, Network, Compass,
  Briefcase, Flame, Scale
} from 'lucide-react';

// ===== Bilingual helpers =====
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

function SectionTitle({
  icon: Icon,
  fr,
  ar,
  color,
  number,
}: {
  icon: any;
  fr: string;
  ar: string;
  color: string;
  number?: string;
}) {
  return (
    <div className={`bg-gradient-to-r ${color} px-6 md:px-8 py-5 rounded-t-2xl text-white`}>
      <div className="flex items-start gap-4">
        <div className="bg-white/20 backdrop-blur p-3 rounded-xl flex-shrink-0">
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex-1 min-w-0">
          {number && (
            <div className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">
              {number}
            </div>
          )}
          <h2 className="text-xl md:text-2xl font-bold leading-tight">{fr}</h2>
          <ArOnly className="text-xl md:text-2xl font-bold leading-snug mt-1">{ar}</ArOnly>
        </div>
      </div>
    </div>
  );
}

// ===== Page =====
export default function PropositionPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* === Header === */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-semibold mb-4">
            <Flame className="w-4 h-4" />
            <span>Document interne — Projet en cours</span>
            <span className="opacity-50">·</span>
            <ArOnly className="inline">وثيقة داخلية — مشروع قيد الإعداد</ArOnly>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Proposition Projet Maroc
          </h1>
          <ArOnly className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            مقترح المشروع — المغرب
          </ArOnly>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Espace de paix, mosala7a et bina'a mochtarak — préparer la transition post-règlement
          </p>
          <ArOnly className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-2 leading-relaxed">
            فضاء سلام، مصالحة وبناء مشترك — تهيئة مرحلة ما بعد التسوية
          </ArOnly>
        </div>

        {/* === Vision === */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 md:p-8 mb-10 animate-fade-in-up-d1">
          <div className="flex items-start gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Vision du projet</h3>
              <ArOnly className="font-bold text-gray-900 dark:text-white text-lg">رؤية المشروع</ArOnly>
            </div>
          </div>
          <Bi
            fr="Créer un espace civil — indépendant de l'État — où la mosala7a (réconciliation) et la bina'a mochtarak (construction commune) entre Marocains et Sahraouis revenant de Tindouf deviennent réalité avant que le règlement politique ne soit finalisé. Hypothèse stratégique : le moment où l'incertitude crée l'ouverture, c'est maintenant."
            ar="إنشاء فضاء مدني — مستقل عن الدولة — تتحقق فيه المصالحة والبناء المشترك بين المغاربة والصحراويين العائدين من تندوف، قبل أن يُحسم الملف السياسي رسمياً. الفرضية الاستراتيجية: اللحظة التي يخلق فيها الغموض الانفتاح هي الآن."
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          />
        </div>

        {/* === SECTION 1 : Three Box Analysis === */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            1. Analyse 3-Box <span className="text-gray-400 text-base font-normal">— تحليل الصناديق الثلاثة</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            Cartographie des forces en présence — base de toute la stratégie du projet.
          </p>

          {/* === BOX 1 : Forces POUR la paix === */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
            <SectionTitle
              icon={Heart}
              fr="Forces POUR la paix / la réconciliation"
              ar="القوى الدافعة للسلام والمصالحة"
              color="from-green-600 to-emerald-700 dark:from-green-500 dark:to-emerald-600"
              number="Box 1"
            />
            <div className="p-6 md:p-8 space-y-5">
              {/* 1A - terrain */}
              <div>
                <h4 className="font-bold text-green-800 dark:text-green-300 mb-2 text-sm uppercase tracking-wider">
                  Sur le terrain — على الأرض
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      fr: "IER (2004-2005) : le Maroc est l'unique pays arabe à avoir mené une commission vérité-réconciliation officielle. Précédent institutionnel et symbolique majeur — modèle réplicable.",
                      ar: "هيئة الإنصاف والمصالحة (2004-2005): المغرب الدولة العربية الوحيدة التي قادت تجربة عدالة انتقالية رسمية. سابقة مؤسساتية ورمزية قابلة للاستنساخ.",
                    },
                    {
                      fr: "Discours royal post-2797 : cadrage du retour (عودة) et non de l'intégration forcée. Mot-clé politique et culturel décisif.",
                      ar: "الخطاب الملكي بعد قرار 2797: تأطير العودة بدل الإدماج بالقوة. كلمة مفتاحية سياسياً وثقافياً.",
                    },
                    {
                      fr: "Liens de parenté traversant Tindouf-Sahara-Sud : familles séparées depuis 50 ans, mêmes tribus (Reguibat, Tekna, Ouled Delim). Chaque famille des camps a un parent à Laâyoune ou Dakhla.",
                      ar: "روابط القرابة العابرة بين تندوف والصحراء والجنوب: عائلات منفصلة منذ 50 سنة، نفس القبائل (الرڭيبات، تكنة، أولاد دليم).",
                    },
                    {
                      fr: "Hassanya partagée + Islam malékite + zaouïas : pas de barrière culturelle ou religieuse réelle.",
                      ar: "اللهجة الحسانية المشتركة + الإسلام المالكي + الزوايا: لا حاجز ثقافي أو ديني حقيقي.",
                    },
                    {
                      fr: "Génération de Tindouf née après 1991 : épuisée des camps, voit sur les réseaux sociaux la prospérité de Dakhla / Laâyoune.",
                      ar: "جيل تندوف المولود بعد 1991: مُنهك من المخيمات، يرى ازدهار الداخلة والعيون عبر الشبكات الاجتماعية.",
                    },
                    {
                      fr: "Régionalisation avancée du Maroc (réforme 2015) : cadre juridique pour absorber le statut d'autonomie, déjà existant.",
                      ar: "الجهوية المتقدمة (إصلاح 2015): الإطار القانوني لاستيعاب وضع الحكم الذاتي موجود بالفعل.",
                    },
                    {
                      fr: "Boom économique du Sahara marocain : port de Dakhla (~10 Mds $), énergies renouvelables, phosphates → opportunités d'emploi réelles pour les revenants.",
                      ar: "الازدهار الاقتصادي للصحراء المغربية: ميناء الداخلة (~10 مليار دولار)، طاقات متجددة، فوسفاط → فرص شغل حقيقية للعائدين.",
                    },
                    {
                      fr: "Ralliements antérieurs : des dizaines d'anciens cadres du Polisario rentrés depuis 2010 — capital humain de passeurs déjà disponible.",
                      ar: "التحاقات سابقة: عشرات الأطر السابقين للبوليساريو عادوا منذ 2010 — رأسمال بشري من حاملي الذاكرة متوفّر.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-green-50/50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/30">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* 1B - Diplomatic & Geopolitical force === NEW === */}
              <div>
                <h4 className="font-bold text-green-800 dark:text-green-300 mb-2 text-sm uppercase tracking-wider">
                  Force diplomatique du Maroc — القوة الدبلوماسية للمغرب
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      fr: "Soutien des États-Unis — première puissance mondiale (reconnaissance Trump 2020, réaffirmée 2025). Christopher Landau (sous-secrétaire d'État) appelle à une issue rapide.",
                      ar: "دعم الولايات المتحدة — القوة العالمية الأولى (اعتراف ترامب 2020، مُعاد تأكيده 2025). كريستوفر لانداو يدعو إلى حل سريع.",
                    },
                    {
                      fr: "France (oct. 2024), Royaume-Uni (juin 2025), Espagne (2022) — trois autres puissances occidentales ralliées au plan d'autonomie.",
                      ar: "فرنسا (أكتوبر 2024)، المملكة المتحدة (يونيو 2025)، إسبانيا (2022) — ثلاث قوى غربية أخرى منحازة لمخطط الحكم الذاتي.",
                    },
                    {
                      fr: "Résolution 2797 du Conseil de sécurité (oct. 2025) : 11 pour, Russie/Chine/Pakistan abstention, pas de veto. Cadre ONU explicitement basé sur le plan marocain.",
                      ar: "قرار مجلس الأمن 2797 (أكتوبر 2025): 11 مؤيد، روسيا/الصين/باكستان امتناع، دون فيتو. الإطار الأممي مُؤسّس صراحة على المخطط المغربي.",
                    },
                    {
                      fr: "~120 États soutiennent le plan d'autonomie marocain ; effondrement progressif du soutien régional au Polisario (Mali avril 2026, Mauritanie ambivalente).",
                      ar: "حوالي 120 دولة تدعم مخطط الحكم الذاتي المغربي؛ انهيار تدريجي للدعم الإقليمي للبوليساريو (مالي أبريل 2026، موريتانيا متذبذبة).",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                      <Globe className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* 1C - Maroc stable et développé === NEW === */}
              <div>
                <h4 className="font-bold text-green-800 dark:text-green-300 mb-2 text-sm uppercase tracking-wider">
                  Stabilité et développement du Maroc — استقرار وتنمية المغرب
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      fr: "5e économie d'Afrique en 2026 (PIB ~196 Mds $), diversifiée — automobile, aéronautique, agroalimentaire, énergies renouvelables. Source : Daba Finance / IMF 2026.",
                      ar: "خامس اقتصاد إفريقي في 2026 (الناتج الداخلي الخام ~196 مليار دولار)، اقتصاد متنوع — السيارات، الطيران، الصناعات الغذائية، الطاقات المتجددة.",
                    },
                    {
                      fr: "1er en Afrique au Indice de Propriété Intellectuelle 2026 (22e mondial, score 59,19) — Source : Ecofin Agency / U.S. Chamber.",
                      ar: "الأول إفريقياً في مؤشر الملكية الفكرية 2026 (22 عالمياً، نقطة 59.19) — وكالة إيكوفان / غرفة التجارة الأمريكية.",
                    },
                    {
                      fr: "Stratégie Digital 2030 : 1,1 Md $ investis, 240 000 emplois ciblés, 100 000 talents formés/an. Objectif : Top 50 mondial e-Gov (depuis 90e en 2024).",
                      ar: "استراتيجية الرقمنة 2030: 1.1 مليار دولار استثمار، 240,000 منصب شغل، تكوين 100,000 شاب سنوياً. الهدف: الـ50 عالمياً في الحكومة الرقمية.",
                    },
                    {
                      fr: "GITEX Africa accueilli au Maroc (4e édition 2026) — devenu hub technologique africain reconnu.",
                      ar: "احتضان GITEX إفريقيا في المغرب (الدورة الرابعة 2026) — قطب تكنولوجي إفريقي معترف به.",
                    },
                    {
                      fr: "Stabilité institutionnelle relative : Fragile States Index 2024 score 68,8 — meilleur que la moyenne des grands pays nord-africains (Algérie, Libye, Egypte).",
                      ar: "استقرار مؤسساتي نسبي: مؤشر الدول الهشّة 2024 نقطة 68.8 — أفضل من معدل دول شمال إفريقيا الكبرى.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                      <TrendingUp className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* 1D - Organisations internationales pour intégrité territoriale === NEW === */}
              <div>
                <h4 className="font-bold text-green-800 dark:text-green-300 mb-2 text-sm uppercase tracking-wider">
                  Organisations internationales contre la séparation des États — منظمات دولية ضد تفتيت الدول
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      fr: "Charte des Nations unies : principe d'intégrité territoriale (art. 2.4) — limite structurellement le droit de sécession en dehors du cadre colonial.",
                      ar: "ميثاق الأمم المتحدة: مبدأ السلامة الإقليمية (المادة 2.4) — يُقيّد بنيوياً حق الانفصال خارج الإطار الاستعماري.",
                    },
                    {
                      fr: "Charte de l'Union africaine et héritage de l'OUA (1964) : intangibilité des frontières héritées de l'indépendance — doctrine constante depuis 60 ans.",
                      ar: "ميثاق الاتحاد الإفريقي وإرث منظمة الوحدة الإفريقية (1964): مبدأ عدم المساس بحدود الاستقلال — عقيدة ثابتة منذ 60 سنة.",
                    },
                    {
                      fr: "Tendance globale post-2014 : majorité des États rejettent les sécessions unilatérales (Crimée, Catalogne, Kurdistan irakien) — ce courant conforte la position marocaine.",
                      ar: "اتجاه عالمي ما بعد 2014: أغلبية الدول ترفض الانفصالات الأحادية (شبه جزيرة القرم، كاتالونيا، كردستان العراق) — يُعزّز هذا التيار الموقف المغربي.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                      <Scale className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* === BOX 2 : Acteurs clés === */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
            <SectionTitle
              icon={Users}
              fr="Acteurs clés"
              ar="الفاعلون الأساسيون"
              color="from-amber-600 to-orange-700 dark:from-amber-500 dark:to-orange-600"
              number="Box 2"
            />
            <div className="p-6 md:p-8 space-y-5">
              {/* For peace */}
              <div>
                <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2 text-sm uppercase tracking-wider">
                  Acteurs qui peuvent décider POUR la paix — قادرون على ترجيح كفة السلام
                </h4>
                <ul className="space-y-3">
                  {[
                    { fr: "SM le Roi Mohammed VI : autorité morale + religieuse (Amir al-Mouminine) + politique. Cadrage du retour change tout.", ar: "صاحب الجلالة الملك محمد السادس: سلطة معنوية ودينية (أمير المؤمنين) وسياسية. تأطير العودة يُغيّر كل شيء." },
                    { fr: "Anciens cadres Polisario ralliés : légitimité de témoignage (j'y étais, j'ai changé d'avis, voici pourquoi).", ar: "أطر سابقون للبوليساريو التحقوا: شرعية الشهادة (كنتُ هناك، غيّرتُ رأيي، وهذا السبب)." },
                    { fr: "Femmes sahraouies des deux côtés : porteuses de mémoire familiale, souvent moins idéologisées. Pivot stratégique.", ar: "النساء الصحراويات من الجانبين: حاملات الذاكرة العائلية، أقل تأدلجاً غالباً. محور استراتيجي." },
                    { fr: "Chouyoukh des tribus traditionnelles : autorité prépolitique, capable de rouvrir les liens familiaux.", ar: "شيوخ القبائل التقليديون: سلطة ما قبل سياسية، قادرة على إعادة فتح الروابط العائلية." },
                    { fr: "Diaspora sahraouie en Espagne : pivot souvent négligé — beaucoup veulent une issue.", ar: "الجالية الصحراوية في إسبانيا: محور مُهمل غالباً — كثيرون يريدون مخرجاً." },
                    { fr: "Jeunes 18-30 ans des deux côtés : démographiquement majoritaires, fatigués de l'héritage, connectés. Cœur de cible.", ar: "الشباب من 18 إلى 30 سنة على الجانبين: أغلبية ديموغرافياً، مُتعَبون من الإرث، متصلون. الفئة المستهدفة الأساسية." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-amber-50/50 dark:bg-amber-900/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Against */}
              <div>
                <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2 text-sm uppercase tracking-wider">
                  Acteurs qui peuvent bloquer / saboter — قادرون على عرقلة المشروع
                </h4>
                <ul className="space-y-3">
                  {[
                    { fr: "Élite politico-militaire du Polisario à Tindouf : perdent statut, salaires, pouvoir → résistance maximale prévisible.", ar: "النخبة السياسية والعسكرية للبوليساريو في تندوف: يفقدون مكانة ورواتب ونفوذاً → مقاومة قصوى متوقعة." },
                    { fr: "Sécurité militaire algérienne : capacité de sabotage de toute initiative perçue comme « marocanisation ».", ar: "المخابرات العسكرية الجزائرية: قدرة على تخريب أي مبادرة تُعتبر مغربنة." },
                    { fr: "Marocains conservateurs voyant les ralliés comme « traîtres récompensés » : risque de rejet interne.", ar: "محافظون مغاربة يرون العائدين خونة يُكافأون: خطر رفض داخلي." },
                    { fr: "Sahraouis « historiques » du Maroc se sentant mis de côté si les revenants reçoivent un traitement préférentiel : risque de jalousie identitaire intra-sahraouie.", ar: "الصحراويون التاريخيون في المغرب الذين قد يشعرون بالتهميش: خطر غيرة هوياتية بين الصحراويين أنفسهم." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-red-50/50 dark:bg-red-900/10 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* === BOX 3 : Forces CONTRE la paix === */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
            <SectionTitle
              icon={Swords}
              fr="Forces CONTRE la paix / la réconciliation"
              ar="القوى الدافعة ضد السلام والمصالحة"
              color="from-red-600 to-rose-700 dark:from-red-500 dark:to-rose-600"
              number="Box 3"
            />
            <div className="p-6 md:p-8 space-y-5">

              {/* === CRITICAL : Risque terrorisme — NEW === */}
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="w-6 h-6 text-red-600 dark:text-red-400" />
                  <h4 className="font-bold text-red-800 dark:text-red-300 uppercase tracking-wider text-sm">
                    Risque critique : terrorisme et extrémisme violent
                  </h4>
                </div>
                <ArOnly className="font-bold text-red-800 dark:text-red-300 uppercase tracking-wider text-sm mb-3">
                  خطر حرج: الإرهاب والتطرف العنيف
                </ArOnly>
                <Bi
                  fr="Acceptation tactique du Hokm Dati (autonomie) par certains éléments avec arrière-pensée de retour sur le territoire marocain pour mener des actions violentes — pas nécessairement au Sahara, mais potentiellement à Rabat, Casablanca, Marrakech. Les liens avérés ou allégués entre certains éléments du Polisario et des groupes affiliés à Al-Qaïda au Sahel (JNIM) — confirmés par l'armée malienne en avril 2026 — rendent ce risque non hypothétique."
                  ar="قبول تكتيكي للحكم الذاتي من طرف بعض العناصر مع نية مبيتة للعودة إلى التراب المغربي لتنفيذ أعمال عنيفة — ليس بالضرورة في الصحراء، بل ربما في الرباط أو الدار البيضاء أو مراكش. الصلات المثبتة أو المُدّعاة بين بعض عناصر البوليساريو وجماعات تابعة للقاعدة في الساحل (نصرة الإسلام والمسلمين) — أكدها الجيش المالي في أبريل 2026 — تجعل هذا الخطر غير افتراضي."
                  className="text-red-900 dark:text-red-200 leading-relaxed"
                />

                {/* Quote des peace builders */}
                <div className="mt-5 bg-white dark:bg-gray-800 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <Quote className="w-6 h-6 text-red-500 mb-2" />
                  <p className="text-gray-700 dark:text-gray-300 italic mb-2 text-sm md:text-base">
                    « Nous, peace builders du Sahara, ne serons jamais à l'aise jusqu'au moment où nous verrons le sang. »
                  </p>
                  <ArOnly className="text-gray-700 dark:text-gray-300 italic mb-2 text-sm md:text-base leading-loose">
                    «نحن، بُناة السلام من الصحراء، لن نرتاح إلى أن نرى الدم.»
                  </ArOnly>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    — Fatimatou, Ghaylani, Hfdallah · Kenya, 1er mai 2026 · propos répétés depuis 2018
                  </p>
                  <ArOnly className="text-xs text-gray-500 dark:text-gray-400">
                    — فاطمتو، غيلاني، حفظ الله · كينيا، 1 ماي 2026 · كلام متكرر منذ 2018
                  </ArOnly>
                </div>
                <Bi
                  fr="Cette parole — répétée par des Sahraouis eux-mêmes engagés dans la paix depuis 2018 — n'est pas une projection extérieure. C'est une lecture interne du tissu social. Elle implique que le projet doit intégrer dès le départ une dimension de prévention de la radicalisation."
                  ar="هذه العبارة — يكرّرها صحراويون منخرطون أنفسهم في بناء السلام منذ 2018 — ليست إسقاطاً خارجياً. إنها قراءة داخلية للنسيج الاجتماعي. وهذا يعني أن المشروع يجب أن يُدمج منذ البداية بُعد الوقاية من التطرف."
                  small
                  className="mt-4 text-red-800 dark:text-red-300 font-medium"
                />
              </div>

              {/* Trauma + structures */}
              <div>
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm uppercase tracking-wider">
                  Forces structurelles — قوى بنيوية
                </h4>
                <ul className="space-y-3">
                  {[
                    { fr: "Trauma intergénérationnel des 50 ans : pour beaucoup à Tindouf, le Maroc reste l'ennemi dans le récit familial. La haine est mémorielle, pas seulement politique.", ar: "صدمة عابرة للأجيال خلال 50 سنة: لكثيرين في تندوف، المغرب يبقى العدو في السرد العائلي. الكراهية ذاكراتية لا سياسية فقط." },
                    { fr: "Économie de la rente du conflit : à Tindouf, des dizaines de milliers vivent de l'aide humanitaire. Pas d'alternative économique → résistance au changement.", ar: "اقتصاد ريع النزاع: في تندوف، عشرات الآلاف يعيشون من المساعدات الإنسانية. لا بديل اقتصادي → مقاومة التغيير." },
                    { fr: "Récit héroïque du Polisario : « la lutte armée nous a définis » — sortir de ce récit = perdre une identité collective.", ar: "السردية البطولية للبوليساريو: «الكفاح المسلح هو ما عرّفنا» — الخروج من هذه السردية = فقدان هوية جماعية." },
                    { fr: "Mémoire des disparus marocains des années de plomb au Sahara (1975-1999) : encore vive chez certains Sahraouis et leurs descendants.", ar: "ذاكرة المختفين المغاربة في سنوات الرصاص بالصحراء (1975-1999): لا تزال حية لدى بعض الصحراويين وأبنائهم." },
                    { fr: "Asymétrie de la souffrance perçue : « vous ne savez pas ce qu'on a vécu » — des deux côtés.", ar: "عدم تماثل الإحساس بالمعاناة: «لا تعرفون ما عشناه» — على الجانبين." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-red-50/30 dark:bg-red-900/10 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* International against */}
              <div>
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm uppercase tracking-wider">
                  Pression internationale opposée — ضغط دولي مضاد
                </h4>
                <ul className="space-y-3">
                  {[
                    { fr: "Organisations internationales pro-indépendance (Europe, Afrique du Sud, ~40 États) : maintiennent la sardia (récit) d'« occupation ».", ar: "منظمات دولية مؤيّدة للاستقلال (أوروبا، جنوب إفريقيا، ~40 دولة): تحافظ على سردية «الاحتلال»." },
                    { fr: "Union africaine reconnaît toujours la RASD comme membre — pression diplomatique persistante.", ar: "الاتحاد الإفريقي لا يزال يعترف بالجمهورية الصحراوية عضواً — ضغط دبلوماسي مستمر." },
                    { fr: "Régime algérien instable : peut instrumentaliser la cause sahraouie pour distraire de problèmes internes.", ar: "النظام الجزائري غير المستقر: قادر على توظيف القضية الصحراوية لصرف الانتباه عن مشاكله الداخلية." },
                    { fr: "Désignation terroriste US (en cours au Congrès) : si elle passe, elle radicalise des deux côtés et tue le dialogue civil.", ar: "التصنيف الإرهابي الأمريكي (قيد المناقشة): إذا مرّ، يُجذّر المواقف ويقتل الحوار المدني." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-orange-50/30 dark:bg-orange-900/10 rounded-lg">
                      <Globe className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project internal risks */}
              <div>
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm uppercase tracking-wider">
                  Risques internes au projet — مخاطر داخلية للمشروع
                </h4>
                <ul className="space-y-3">
                  {[
                    { fr: "Récupération étatique : si le projet est perçu comme bras civil du Makhzen, il perd toute crédibilité chez les Sahraouis sceptiques.", ar: "الاستحواذ الرسمي: إذا اعتُبر المشروع ذراعاً مدنياً للمخزن، يفقد كل مصداقية لدى المتشككين الصحراويين." },
                    { fr: "Asymétrie « accueillant / accueilli » : un Marocain qui accueille un Sahraoui qui revient → relation hiérarchique implicite. Toxique sur la durée.", ar: "عدم تماثل بين «المُستقبِل» و«المُستقبَل»: مغربي يستقبل صحراوياً عائداً → علاقة هرمية ضمنية. سامة على المدى البعيد." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-yellow-50/30 dark:bg-yellow-900/10 rounded-lg">
                      <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION 2 : Key Driving Factors === */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-300 dark:border-yellow-800 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                2. Key Driving Factors (KDFs)
              </h2>
              <ArOnly className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                العوامل الدافعة الرئيسية
              </ArOnly>
            </div>
          </div>
          <Bi
            fr="6 facteurs déterminants — si l'un dérape, le projet déraille."
            ar="6 عوامل محورية — إذا اختلّ أحدها، يخرج المشروع عن سكته."
            small
            className="text-gray-700 dark:text-gray-300 mb-5"
          />
          <ol className="space-y-3">
            {[
              { fr: "Niveau de confiance ressentie par les jeunes de Tindouf envers le projet marocain.", ar: "مستوى ثقة شباب تندوف في المشروع المغربي." },
              { fr: "Capacité à offrir une dignité économique aux revenants (place réelle, pas aumône).", ar: "القدرة على تقديم كرامة اقتصادية للعائدين (مكانة حقيقية، لا صدقة)." },
              { fr: "Espace symbolique préservé pour l'identité sahraouie distincte (langue, culture, mémoire — pas effacement).", ar: "الفضاء الرمزي المحفوظ للهوية الصحراوية المتميزة (لغة، ثقافة، ذاكرة — لا محو)." },
              { fr: "Visibilité et crédibilité des passeurs ralliés (nombre, écoute, non perçus comme vendus).", ar: "مرئية ومصداقية حاملي الذاكرة العائدين (عدد، استماع، عدم اعتبارهم مُباعين)." },
              { fr: "Niveau de protection contre l'instrumentalisation politique (élections, médias).", ar: "مستوى الحماية من التوظيف السياسي (انتخابات، إعلام)." },
              { fr: "Capacité de prévention de la radicalisation violente — surveillance discrète + alternatives crédibles.", ar: "قدرة الوقاية من التطرف العنيف — رصد متبصّر + بدائل موثوقة." },
            ].map((kdf, i) => (
              <li key={i} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-yellow-200 dark:border-yellow-800/50">
                <span className="bg-yellow-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <Bi fr={kdf.fr} ar={kdf.ar} className="text-gray-800 dark:text-gray-200 flex-1" />
              </li>
            ))}
          </ol>
        </div>

        {/* === SECTION 3 : Le Projet === */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            3. Le projet : Rihab al-Karama
          </h2>
          <ArOnly className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            المشروع: رحاب الكرامة
          </ArOnly>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm italic">
            « L'espace de la dignité » — nom court, neutre, ancré dans l'hospitalité maghrébine.
          </p>

          {/* Phases */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: 'Phase 0',
                durationFr: '12 mois — préparer le terrain',
                durationAr: '12 شهراً — تهيئة الميدان',
                color: 'from-blue-500 to-indigo-600',
                items: [
                  { fr: 'Cartographie des familles séparées', ar: 'رسم خريطة العائلات المنفصلة' },
                  { fr: 'Banque de 50 témoignages bilingues (FR/AR/EN)', ar: 'بنك 50 شهادة ثلاثية اللغة' },
                  { fr: 'Charte d\'éthique : pas de récupération étatique', ar: 'ميثاق أخلاقي: لا استحواذ من الدولة' },
                  { fr: 'Audit sécuritaire discret avec partenaires', ar: 'تدقيق أمني محتشم مع الشركاء' },
                ],
              },
              {
                num: 'Phase 1',
                durationFr: '18 mois — créer l\'espace',
                durationAr: '18 شهراً — خلق الفضاء',
                color: 'from-purple-500 to-violet-600',
                items: [
                  { fr: 'Lieu physique à Tan-Tan ou Guelmim (zone de contact historique)', ar: 'مكان مادي بطانطان أو كلميم' },
                  { fr: 'Format inspiré IER : témoignages publics, archivage, médiation', ar: 'شكل مستوحى من هيئة الإنصاف والمصالحة' },
                  { fr: 'Programme jeunes (18-30) : 100 participants/an', ar: 'برنامج للشباب: 100 مشارك سنوياً' },
                  { fr: 'Mécanisme d\'alerte précoce sur signaux de radicalisation', ar: 'آلية إنذار مبكر على إشارات التطرف' },
                ],
              },
              {
                num: 'Phase 2',
                durationFr: '3 ans — bridges & impact',
                durationAr: '3 سنوات — جسور وأثر',
                color: 'from-emerald-500 to-teal-600',
                items: [
                  { fr: 'Bourses universitaires marocaines pour étudiants de Tindouf', ar: 'منح جامعية للطلبة من تندوف' },
                  { fr: 'Caravanes culturelles Hassanya', ar: 'قوافل ثقافية حسانية' },
                  { fr: 'Plateforme média trilingue Hassanya/Darija/Espagnol', ar: 'منصة إعلامية ثلاثية اللغة' },
                  { fr: 'Programme insertion économique des revenants', ar: 'برنامج إدماج اقتصادي للعائدين' },
                ],
              },
            ].map((phase, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className={`bg-gradient-to-r ${phase.color} text-white p-4`}>
                  <div className="text-white/70 text-xs font-bold tracking-widest uppercase">{phase.num}</div>
                  <h3 className="font-bold text-base">{phase.durationFr}</h3>
                  <ArOnly className="font-bold text-sm mt-1">{phase.durationAr}</ArOnly>
                </div>
                <ul className="p-4 space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                      <Bi fr={item.fr} ar={item.ar} small className="text-gray-700 dark:text-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* === SECTION 4 : Ce qu'on prépare maintenant === */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-2xl p-6 md:p-8 text-white mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-7 h-7" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">4. Ce qu'on prépare maintenant</h2>
              <ArOnly className="text-xl md:text-2xl font-bold mt-1">ما نُحضّره الآن</ArOnly>
            </div>
          </div>
          <Bi
            fr="Prochaines étapes concrètes pour le groupe Mohamed Boussad, Soulaimane Mimouni, Kenza Samoud, Boutaina Benhmida — avant la prochaine rencontre :"
            ar="الخطوات الملموسة المقبلة للمجموعة (محمد بوسعد، سليمان ميموني، كنزة سامود، بثينة بنحميدة) — قبل اللقاء المقبل:"
            small
            className="mb-5 text-blue-100"
          />
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { fr: 'Finaliser l\'analyse 3-Box avec ce document comme base', ar: 'إنهاء تحليل الصناديق الثلاثة بناءً على هذه الوثيقة' },
              { fr: 'Passer à l\'analyse Curle (positionnement du conflit)', ar: 'الانتقال إلى تحليل كيرل (تموقع النزاع)' },
              { fr: 'Application matrice RPP (positionnement stratégique)', ar: 'تطبيق مصفوفة RPP (التموقع الاستراتيجي)' },
              { fr: 'Construire la Théorie du Changement complète', ar: 'بناء نظرية التغيير الكاملة' },
              { fr: 'Identifier 3 partenaires de mise en œuvre potentiels', ar: 'تحديد 3 شركاء محتملين للتنفيذ' },
              { fr: 'Plan de financement initial (montant, sources, jalons)', ar: 'خطة تمويل أولية (مبلغ، مصادر، محطات)' },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <Bi fr={step.fr} ar={step.ar} small className="text-white flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* === Sources === */}
        <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Sources vérifiées
            <span className="text-gray-400 text-sm font-normal">— مصادر موثّقة</span>
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'UN Security Council Resolution 2797 (2025) — MINURSO renewal', url: 'https://press.un.org/en/2025/sc16208.doc.htm' },
              { label: 'Western Sahara April 2026 Monthly Forecast — Security Council Report', url: 'https://www.securitycouncilreport.org/monthly-forecast/2026-04/western-sahara-16.php' },
              { label: 'Top 10 Largest African Economies by GDP in 2026 — Daba Finance', url: 'https://www.dabafinance.com/en/insights/top-10-largest-african-economies-by-gdp-in-2026' },
              { label: 'Morocco Leads Africa in 2026 Intellectual Property Index — Ecofin Agency', url: 'https://www.ecofinagency.com/news/1703-53839-morocco-leads-africa-in-2026-intellectual-property-index' },
              { label: 'Morocco Digital Economy — U.S. Department of Commerce', url: 'https://www.trade.gov/country-commercial-guides/morocco-digital-economy' },
              { label: 'Fragile States Index 2024 — Fund for Peace', url: 'https://fragilestatesindex.org/' },
              { label: 'AU Principle on Territorial Integrity — Princeton Encyclopedia', url: 'https://pesd.princeton.edu/node/686' },
              { label: 'Polisario Front and Algeria Reject US Resolution — Atalayar', url: 'https://www.atalayar.com/en/articulo/politics/polisario-front-and-algeria-reject-us-resolution-on-western-sahara/20251027160000219827.html' },
              { label: 'Polisario in Mali instability — Morocco World News (April 2026)', url: 'https://www.moroccoworldnews.com/2026/04/289112/video-captures-algerian-backed-polisarios-involvement-in-mali-instability/' },
              { label: 'Morocco-Algeria-Polisario US-Backed Talks in Madrid (Feb 2026)', url: 'https://www.moroccoworldnews.com/2026/02/277826/morocco-algeria-and-polisario-to-hold-us-backed-talks-in-madrid/' },
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
        <div className="mt-10 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-center">
          <p className="text-xs text-amber-800 dark:text-amber-300">
            Document de travail interne — diffusion restreinte au groupe SweFOR Maroc.
          </p>
          <ArOnly className="text-xs text-amber-800 dark:text-amber-300 mt-1">
            وثيقة عمل داخلية — توزيع محدود لمجموعة سويفور المغرب.
          </ArOnly>
        </div>
      </section>
    </div>
  );
}
