'use client';

import { useTranslations, useLocale } from 'next-intl';
import {
  Wrench, Box, GitBranch, Grid3x3, ArrowRight, Network,
  Users, Swords, Heart, TrendingUp, AlertTriangle, CheckCircle,
  Lightbulb, Target, Zap, Eye, Scale, Compass
} from 'lucide-react';

// Arabic content — always shown alongside the current locale's content
const ar = {
  badge: 'صندوق الأدوات — مراجعة سريعة',
  title: 'أدوات بناء السلام',
  subtitle: 'مراجعة سريعة قبل تصميم أفكار مشاريعكم',
  introTitle: 'لماذا تهمّ هذه الأدوات',
  intro: 'قبل الانطلاق في تصميم مشروعكم، خذوا لحظة لتأطير تفكيركم. هذه الأدوات الأربع تعمل معاً: تحليل النزاع (الصناديق الثلاثة)، فهم مساره (كيرل)، تحديد موقع استراتيجيتكم (RPP)، ثم رسم منطق التغيير (نظرية التغيير). إنها ليست قوائم مراجعة بيروقراطية — بل تحمي مشروعكم من النقاط العمياء الشائعة.',
  flow: {
    analyze: 'تحليل',
    transform: 'تحويل',
    position: 'تموقع',
    design: 'تصميم',
  },
  threeBox: {
    title: 'نموذج الصناديق الثلاثة',
    subtitle: 'فرز ما تعرفونه عن النزاع',
    description: 'إطار فرز بسيط لفهم المعلومات المعقدة حول النزاع. ضعوا كل المعطيات التي بحوزتكم في إحدى الأعمدة الثلاثة. الهدف هو الوضوح — لا الكمال.',
    box1: {
      title: 'القوى الدافعة للسلام / ضد النزاع',
      q1: 'ما القوى الموجودة الآن التي يمكن البناء عليها؟',
      q2: 'أين يتعاون الناس فعلاً عبر خطوط النزاع؟',
    },
    box2: {
      title: 'الفاعلون الأساسيون',
      q1: 'من يستطيع التأثير بقوة على النزاع — إيجاباً أو سلباً؟',
      q2: 'ملاحظة: ليسوا بالضرورة المشاركين في البرنامج — هؤلاء هم صنّاع القرار.',
    },
    box3: {
      title: 'القوى الدافعة للنزاع / ضد السلام',
      q1: 'ما الديناميكيات التي تدفع الناس نحو العنف أو الانقسام؟',
      q2: 'ما القضايا التي تفرّق الناس، وكيف؟',
    },
    useTitle: 'متى تستخدمونه',
    use: 'عند بدء تحليل جديد وحاجة لتنظيم المعلومات الخام قبل تحديد العوامل الدافعة الرئيسية للنزاع (KDFs).',
  },
  curle: {
    title: 'مخطط كيرل',
    subtitle: 'أين يقف النزاع على منحنى التحول؟',
    description: 'يرسم نموذج آدم كيرل المسار من النزاع الكامن إلى السلام المستدام. كل مرحلة تتطلب نوعاً مختلفاً من التدخل — ما ينجح في المرحلة الأولى يفشل في الرابعة، والعكس صحيح.',
    axis: {
      unbalanced: 'سلطة غير متوازنة',
      balanced: 'سلطة متوازنة',
      lowAware: 'وعي منخفض بالقضايا',
      highAware: 'وعي عالٍ',
    },
    phase1: {
      title: 'النزاع الكامن',
      desc: 'التوعية، تنظيم المجتمع، بناء التحالفات، التحسيس.',
    },
    phase2: {
      title: 'النزاع الظاهر',
      desc: 'العمل اللاعنفي لتوازن السلطة: الرصد، المناصرة، الحماية.',
    },
    phase3: {
      title: 'تسوية النزاع',
      desc: 'التفاوض، الوساطة، الإقناع لتحويل المصالح أو استيعابها.',
    },
    phase4: {
      title: 'سلام وعدالة مستدامين',
      desc: 'تفاوض مبدئي يلبي المصالح الأساسية لجميع الأطراف.',
    },
    useTitle: 'متى تستخدمونه',
    use: 'حين تحتاجون اختيار النوع الصحيح للتدخل حسب المرحلة الراهنة. برنامج حوار في نزاع كامن يخطئ الهدف — تحتاجون أولاً إلى التوعية والتحسيس.',
  },
  rpp: {
    title: 'مصفوفة RPP',
    subtitle: 'التفكير في ممارسة السلام — حدّدوا موقع استراتيجيتكم',
    description: 'مصفوفة 2×2 تطرح سؤالين على مشروعكم: مع من تشتغلون، وأي نوع من التغيير تسعون إليه؟ معظم المشاريع تقع في خانة واحدة فقط — والدرس من RPP أن هذا نادراً ما يكفي.',
    colMore: 'عدد أكبر من الأشخاص (الساكنة)',
    colKey: 'الأشخاص الرئيسيون (صنّاع القرار)',
    rowIndividual: 'تغيير فردي / شخصي',
    rowSocial: 'تغيير اجتماعي - سياسي',
    cell1: { label: 'جماهيري × فردي', example: 'حوار جماهيري، تكوين الشباب، حملات توعية واسعة.' },
    cell2: { label: 'رئيسي × فردي', example: 'تكوين القيادات، العمل مع أفراد مؤثرين لتغيير قناعاتهم.' },
    cell3: { label: 'جماهيري × سياسي', example: 'التعبئة، الحركات المدنية، الضغط الشعبي للإصلاح البنيوي.' },
    cell4: { label: 'رئيسي × سياسي', example: 'المناصرة السياسية، الإصلاح المؤسسي، اتفاقات السلام مع النخب.' },
    keyTitle: 'ثلاثة دروس تكررها RPP باستمرار',
    key1: 'العمل في خانة واحدة فقط نادراً ما يخلق تغييراً دائماً — تحتاجون جسوراً بين الخانات.',
    key2: 'العمل على المستوى الفردي وحده لا يُترجَم إلى تغيير سياسي/بنيوي.',
    key3: 'إشراك الأشخاص الرئيسيين فقط دون دعم شعبي — أو الساكنة فقط دون قيادات — كلاهما يفشل.',
    useTitle: 'متى تستخدمونها',
    use: 'حين تكون لديكم فكرة مشروع وتريدون اختبار ما إذا كانت ستتطور فعلاً إلى تغيير بنيوي. ضعوا أنشطتكم على المصفوفة — أين الفجوات؟',
  },
  toc: {
    title: 'نظرية التغيير',
    subtitle: 'من أنشطتكم إلى التغيير الذي تريدون رؤيته',
    description: 'نظرية التغيير هي المنطق الصريح الذي يربط ما تفعلونه بالتغيير الذي تريدون رؤيته. تكشف الفرضيات المخفية بين الأنشطة والأثر — حيث تفشل المشاريع غالباً.',
    step1: { label: 'المدخلات', desc: 'موارد، تمويل، شركاء، خبرات تجلبونها.' },
    step2: { label: 'الأنشطة', desc: 'ورشات، حوارات، تكوينات، مناصرة تنفذونها.' },
    step3: { label: 'المخرجات', desc: 'نتائج مباشرة قابلة للقياس: عدد المتدربين، عدد الفعاليات.' },
    step4: { label: 'النتائج', desc: 'تغيرات في السلوك، المواقف، القدرات لدى المشاركين.' },
    step5: { label: 'الأثر', desc: 'تحوّل طويل المدى نحو السلام والعدالة.' },
    questionsTitle: 'أسئلة جوهرية لاختبار نظرية التغيير الخاصة بكم',
    q1: 'لماذا نعتقد أن فعل X سيؤدي إلى Y؟ ما هي الفرضية؟',
    q2: 'ما الأدلة المتوفرة على أن هذه السلسلة السببية تشتغل؟',
    q3: 'ما الذي قد يكسر السلسلة — وكيف نخفف من ذلك؟',
    q4: 'هل النتائج فعلاً ضمن قدرتنا على التأثير — أم نعد بما لا نستطيع تحقيقه؟',
    useTitle: 'متى تستخدمونها',
    use: 'عند تصميم مشروع أو الدفاع عنه. نظرية تغيير واضحة تكشف الفرضيات، تساعد المموّلين على الثقة في المنطق، وتمنحكم خارطة طريق لقياس النجاح الفعلي.',
  },
  tips: {
    title: 'نصائح سريعة قبل البدء',
    subtitle: 'مزالق شائعة يجب تجنبها عند تصميم مشروعكم',
    t1: 'لا تخلطوا بين تحليل النزاع وتحليل السياق — ركّزوا على الديناميكيات لا على الخلفية.',
    t2: 'لا توجد حقيقة موضوعية واحدة عن النزاع. تحليلكم يتشكّل بحسب من في القاعة.',
    t3: 'حدّثوا تحليلكم باستمرار. النزاعات تتطور — وأدواتكم كذلك.',
    t4: 'حدّدوا العوامل ككميات (مستوى، مقدار) — لا كأشخاص. الفاعلون ليسوا عوامل؛ بل سلوكهم.',
    t5: 'اختبروا كل عامل دافع رئيسي: إذا تغيّر، هل تتغير الوضعية فعلاً؟',
    t6: 'اجمعوا بين الأدوات عند الحاجة. تتكامل فيما بينها — لا أداة واحدة تعطي الصورة الكاملة.',
  },
  cta: {
    title: 'الآن — صمّموا مشروعكم',
    text: 'هذه الأدوات سقالة، لا قفص. استخدموها لكشف النقاط العمياء، ثم ثقوا بحكمكم كممارسين وممارسات. الهدف هو مشروع واضح، صادق في فرضياته، متجذّر في الديناميكيات الحقيقية للنزاع — لا مشروع يكتفي بملء الخانات.',
  },
};

// Bilingual block: shows current-locale text + Arabic underneath
function Bi({
  en,
  ar: arText,
  className = '',
  small = false,
}: {
  en: string;
  ar: string;
  className?: string;
  small?: boolean;
}) {
  const baseSize = small ? 'text-xs md:text-sm' : 'text-sm md:text-base';
  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className={baseSize}>{en}</div>
      <div
        dir="rtl"
        lang="ar"
        className={`${baseSize} text-right leading-loose font-medium opacity-90`}
        style={{ fontFamily: '"Noto Naskh Arabic","Amiri","Geeza Pro",system-ui,sans-serif' }}
      >
        {arText}
      </div>
    </div>
  );
}

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

function ToolCard({
  icon: Icon,
  number,
  enTitle,
  arTitle,
  enSubtitle,
  arSubtitle,
  color,
  children,
}: {
  icon: any;
  number: string;
  enTitle: string;
  arTitle: string;
  enSubtitle: string;
  arSubtitle: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 animate-fade-in-up">
      <div className={`bg-gradient-to-r ${color} px-6 md:px-8 py-6`}>
        <div className="flex items-start gap-4">
          <div className="bg-white/20 backdrop-blur p-3 rounded-xl flex-shrink-0">
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">
              Tool {number}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">{enTitle}</h2>
            <ArOnly className="text-xl md:text-2xl font-bold text-white leading-snug mt-1">
              {arTitle}
            </ArOnly>
            <p className="text-white/80 text-xs md:text-sm mt-2">{enSubtitle}</p>
            <ArOnly className="text-white/80 text-xs md:text-sm mt-1">{arSubtitle}</ArOnly>
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
  const locale = useLocale();

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="animate-fade-in text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            <span>{t('badge')}</span>
            <span className="opacity-50">·</span>
            <ArOnly className="inline">{ar.badge}</ArOnly>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            {t('title')}
          </h1>
          <ArOnly className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {ar.title}
          </ArOnly>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <ArOnly className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-2 leading-relaxed">
            {ar.subtitle}
          </ArOnly>
        </div>

        {/* Intro card */}
        <div className="animate-fade-in-up-d1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t('introTitle')}</h3>
              <ArOnly className="font-bold text-gray-900 dark:text-white mb-3">
                {ar.introTitle}
              </ArOnly>
              <Bi en={t('intro')} ar={ar.intro} className="text-gray-700 dark:text-gray-300 leading-relaxed" />
            </div>
          </div>
        </div>

        {/* Workflow nav */}
        <div className="animate-fade-in-up-d2 flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 text-sm">
          {[
            { n: '1', en: t('flow.analyze'), ar: ar.flow.analyze, icon: Eye },
            { n: '2', en: t('flow.transform'), ar: ar.flow.transform, icon: GitBranch },
            { n: '3', en: t('flow.position'), ar: ar.flow.position, icon: Grid3x3 },
            { n: '4', en: t('flow.design'), ar: ar.flow.design, icon: Compass },
          ].map((step, i, arr) => (
            <div key={step.n} className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {step.n}
                </span>
                <step.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">{step.en}</span>
                <span className="text-gray-400">·</span>
                <ArOnly className="font-medium text-gray-700 dark:text-gray-300">{step.ar}</ArOnly>
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
            enTitle={t('threeBox.title')}
            arTitle={ar.threeBox.title}
            enSubtitle={t('threeBox.subtitle')}
            arSubtitle={ar.threeBox.subtitle}
            color="from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600"
          >
            <Bi
              en={t('threeBox.description')}
              ar={ar.threeBox.description}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Box 1 */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-bold text-green-800 dark:text-green-300 text-sm">
                    {t('threeBox.box1.title')}
                  </h4>
                </div>
                <ArOnly className="font-bold text-green-800 dark:text-green-300 text-sm mb-3">
                  {ar.threeBox.box1.title}
                </ArOnly>
                <Bi
                  en={t('threeBox.box1.q1')}
                  ar={ar.threeBox.box1.q1}
                  small
                  className="text-green-700 dark:text-green-300/80"
                />
                <div className="h-2" />
                <Bi
                  en={t('threeBox.box1.q2')}
                  ar={ar.threeBox.box1.q2}
                  small
                  className="text-green-700 dark:text-green-300/80"
                />
              </div>

              {/* Box 2 */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="font-bold text-amber-800 dark:text-amber-300 text-sm">
                    {t('threeBox.box2.title')}
                  </h4>
                </div>
                <ArOnly className="font-bold text-amber-800 dark:text-amber-300 text-sm mb-3">
                  {ar.threeBox.box2.title}
                </ArOnly>
                <Bi
                  en={t('threeBox.box2.q1')}
                  ar={ar.threeBox.box2.q1}
                  small
                  className="text-amber-700 dark:text-amber-300/80"
                />
                <div className="h-2" />
                <Bi
                  en={t('threeBox.box2.q2')}
                  ar={ar.threeBox.box2.q2}
                  small
                  className="text-amber-700 dark:text-amber-300/80"
                />
              </div>

              {/* Box 3 */}
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Swords className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="font-bold text-red-800 dark:text-red-300 text-sm">
                    {t('threeBox.box3.title')}
                  </h4>
                </div>
                <ArOnly className="font-bold text-red-800 dark:text-red-300 text-sm mb-3">
                  {ar.threeBox.box3.title}
                </ArOnly>
                <Bi
                  en={t('threeBox.box3.q1')}
                  ar={ar.threeBox.box3.q1}
                  small
                  className="text-red-700 dark:text-red-300/80"
                />
                <div className="h-2" />
                <Bi
                  en={t('threeBox.box3.q2')}
                  ar={ar.threeBox.box3.q2}
                  small
                  className="text-red-700 dark:text-red-300/80"
                />
              </div>
            </div>

            {/* Use case */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                    {t('threeBox.useTitle')}
                  </p>
                  <ArOnly className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
                    {ar.threeBox.useTitle}
                  </ArOnly>
                  <Bi
                    en={t('threeBox.use')}
                    ar={ar.threeBox.use}
                    small
                    className="text-blue-800 dark:text-blue-300/90"
                  />
                </div>
              </div>
            </div>
          </ToolCard>
        </div>

        {/* === TOOL 2 : CURLE === */}
        <div className="mb-12">
          <ToolCard
            icon={GitBranch}
            number="02"
            enTitle={t('curle.title')}
            arTitle={ar.curle.title}
            enSubtitle={t('curle.subtitle')}
            arSubtitle={ar.curle.subtitle}
            color="from-amber-600 to-orange-700 dark:from-amber-500 dark:to-orange-600"
          >
            <Bi
              en={t('curle.description')}
              ar={ar.curle.description}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            />

            {/* Visual curve */}
            <div className="bg-gradient-to-br from-gray-50 to-amber-50/50 dark:from-gray-900/50 dark:to-amber-900/10 border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6">
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-1">
                <div>
                  <div>{t('curle.axis.unbalanced')}</div>
                  <ArOnly className="font-normal opacity-80">{ar.curle.axis.unbalanced}</ArOnly>
                </div>
                <div className="text-right">
                  <div>{t('curle.axis.balanced')}</div>
                  <ArOnly className="font-normal opacity-80">{ar.curle.axis.balanced}</ArOnly>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {[
                  {
                    n: '1',
                    enTitle: t('curle.phase1.title'),
                    arTitle: ar.curle.phase1.title,
                    enDesc: t('curle.phase1.desc'),
                    arDesc: ar.curle.phase1.desc,
                    color: 'from-red-500 to-red-600',
                    bg: 'bg-red-50 dark:bg-red-900/20',
                    border: 'border-red-200 dark:border-red-800',
                  },
                  {
                    n: '2',
                    enTitle: t('curle.phase2.title'),
                    arTitle: ar.curle.phase2.title,
                    enDesc: t('curle.phase2.desc'),
                    arDesc: ar.curle.phase2.desc,
                    color: 'from-orange-500 to-orange-600',
                    bg: 'bg-orange-50 dark:bg-orange-900/20',
                    border: 'border-orange-200 dark:border-orange-800',
                  },
                  {
                    n: '3',
                    enTitle: t('curle.phase3.title'),
                    arTitle: ar.curle.phase3.title,
                    enDesc: t('curle.phase3.desc'),
                    arDesc: ar.curle.phase3.desc,
                    color: 'from-yellow-500 to-yellow-600',
                    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
                    border: 'border-yellow-200 dark:border-yellow-800',
                  },
                  {
                    n: '4',
                    enTitle: t('curle.phase4.title'),
                    arTitle: ar.curle.phase4.title,
                    enDesc: t('curle.phase4.desc'),
                    arDesc: ar.curle.phase4.desc,
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
                      {p.enTitle}
                    </h4>
                    <ArOnly className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                      {p.arTitle}
                    </ArOnly>
                    <Bi en={p.enDesc} ar={p.arDesc} small className="text-gray-700 dark:text-gray-300" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-3 px-1">
                <div>
                  <div>{t('curle.axis.lowAware')}</div>
                  <ArOnly className="font-normal opacity-80">{ar.curle.axis.lowAware}</ArOnly>
                </div>
                <div className="text-right">
                  <div>{t('curle.axis.highAware')}</div>
                  <ArOnly className="font-normal opacity-80">{ar.curle.axis.highAware}</ArOnly>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                    {t('curle.useTitle')}
                  </p>
                  <ArOnly className="text-sm font-semibold text-amber-900 dark:text-amber-200 mb-2">
                    {ar.curle.useTitle}
                  </ArOnly>
                  <Bi
                    en={t('curle.use')}
                    ar={ar.curle.use}
                    small
                    className="text-amber-800 dark:text-amber-300/90"
                  />
                </div>
              </div>
            </div>
          </ToolCard>
        </div>

        {/* === TOOL 3 : RPP === */}
        <div className="mb-12">
          <ToolCard
            icon={Grid3x3}
            number="03"
            enTitle={t('rpp.title')}
            arTitle={ar.rpp.title}
            enSubtitle={t('rpp.subtitle')}
            arSubtitle={ar.rpp.subtitle}
            color="from-purple-600 to-violet-700 dark:from-purple-500 dark:to-violet-600"
          >
            <Bi
              en={t('rpp.description')}
              ar={ar.rpp.description}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            />

            {/* 2x2 matrix */}
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-2">
                <div></div>
                <div className="text-center text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 px-2 py-2">
                  <div>{t('rpp.colMore')}</div>
                  <ArOnly className="font-normal mt-1">{ar.rpp.colMore}</ArOnly>
                </div>
                <div className="text-center text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 px-2 py-2">
                  <div>{t('rpp.colKey')}</div>
                  <ArOnly className="font-normal mt-1">{ar.rpp.colKey}</ArOnly>
                </div>

                {/* Row label: Individual */}
                <div className="flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 [writing-mode:vertical-rl] rotate-180 py-2 leading-tight">
                  {t('rpp.rowIndividual')}
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-800 rounded-lg p-3 min-h-[140px]">
                  <MiniLabel color="blue">{t('rpp.cell1.label')}</MiniLabel>
                  <ArOnly className="mt-1 text-[11px] font-bold text-blue-800 dark:text-blue-300">
                    {ar.rpp.cell1.label}
                  </ArOnly>
                  <Bi
                    en={t('rpp.cell1.example')}
                    ar={ar.rpp.cell1.example}
                    small
                    className="mt-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-300 dark:border-indigo-800 rounded-lg p-3 min-h-[140px]">
                  <MiniLabel color="blue">{t('rpp.cell2.label')}</MiniLabel>
                  <ArOnly className="mt-1 text-[11px] font-bold text-indigo-800 dark:text-indigo-300">
                    {ar.rpp.cell2.label}
                  </ArOnly>
                  <Bi
                    en={t('rpp.cell2.example')}
                    ar={ar.rpp.cell2.example}
                    small
                    className="mt-2 text-gray-700 dark:text-gray-300"
                  />
                </div>

                {/* Row label: Socio-political */}
                <div className="flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 [writing-mode:vertical-rl] rotate-180 py-2 leading-tight">
                  {t('rpp.rowSocial')}
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-800 rounded-lg p-3 min-h-[140px]">
                  <MiniLabel color="blue">{t('rpp.cell3.label')}</MiniLabel>
                  <ArOnly className="mt-1 text-[11px] font-bold text-purple-800 dark:text-purple-300">
                    {ar.rpp.cell3.label}
                  </ArOnly>
                  <Bi
                    en={t('rpp.cell3.example')}
                    ar={ar.rpp.cell3.example}
                    small
                    className="mt-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="bg-violet-50 dark:bg-violet-900/20 border-2 border-violet-300 dark:border-violet-800 rounded-lg p-3 min-h-[140px]">
                  <MiniLabel color="blue">{t('rpp.cell4.label')}</MiniLabel>
                  <ArOnly className="mt-1 text-[11px] font-bold text-violet-800 dark:text-violet-300">
                    {ar.rpp.cell4.label}
                  </ArOnly>
                  <Bi
                    en={t('rpp.cell4.example')}
                    ar={ar.rpp.cell4.example}
                    small
                    className="mt-2 text-gray-700 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Mobile/secondary row labels in Arabic for clarity */}
              <div className="md:hidden mt-3 text-xs text-gray-500 dark:text-gray-400">
                <ArOnly>* الصف العلوي: {ar.rpp.rowIndividual} | الصف السفلي: {ar.rpp.rowSocial}</ArOnly>
              </div>
            </div>

            {/* Key takeaways */}
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" /> {t('rpp.keyTitle')}
                </h4>
                <ArOnly className="font-bold text-gray-900 dark:text-white text-sm mt-1">
                  {ar.rpp.keyTitle}
                </ArOnly>
              </div>
              <ul className="space-y-3">
                {[
                  { en: t('rpp.key1'), ar: ar.rpp.key1 },
                  { en: t('rpp.key2'), ar: ar.rpp.key2 },
                  { en: t('rpp.key3'), ar: ar.rpp.key3 },
                ].map((k, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-1" />
                    <Bi en={k.en} ar={k.ar} small />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-purple-900 dark:text-purple-200">
                    {t('rpp.useTitle')}
                  </p>
                  <ArOnly className="text-sm font-semibold text-purple-900 dark:text-purple-200 mb-2">
                    {ar.rpp.useTitle}
                  </ArOnly>
                  <Bi
                    en={t('rpp.use')}
                    ar={ar.rpp.use}
                    small
                    className="text-purple-800 dark:text-purple-300/90"
                  />
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
            enTitle={t('toc.title')}
            arTitle={ar.toc.title}
            enSubtitle={t('toc.subtitle')}
            arSubtitle={ar.toc.subtitle}
            color="from-emerald-600 to-teal-700 dark:from-emerald-500 dark:to-teal-600"
          >
            <Bi
              en={t('toc.description')}
              ar={ar.toc.description}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            />

            {/* Chain visualization */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
                {[
                  { enLabel: t('toc.step1.label'), arLabel: ar.toc.step1.label, enDesc: t('toc.step1.desc'), arDesc: ar.toc.step1.desc, icon: Wrench },
                  { enLabel: t('toc.step2.label'), arLabel: ar.toc.step2.label, enDesc: t('toc.step2.desc'), arDesc: ar.toc.step2.desc, icon: Zap },
                  { enLabel: t('toc.step3.label'), arLabel: ar.toc.step3.label, enDesc: t('toc.step3.desc'), arDesc: ar.toc.step3.desc, icon: CheckCircle },
                  { enLabel: t('toc.step4.label'), arLabel: ar.toc.step4.label, enDesc: t('toc.step4.desc'), arDesc: ar.toc.step4.desc, icon: TrendingUp },
                  { enLabel: t('toc.step5.label'), arLabel: ar.toc.step5.label, enDesc: t('toc.step5.desc'), arDesc: ar.toc.step5.desc, icon: Target },
                ].map((s, i, arr) => (
                  <div key={i} className="relative">
                    <div className="bg-white dark:bg-gray-800 border-2 border-emerald-300 dark:border-emerald-700 rounded-xl p-3 h-full">
                      <s.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1" />
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                        {s.enLabel}
                      </h4>
                      <ArOnly className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                        {s.arLabel}
                      </ArOnly>
                      <Bi en={s.enDesc} ar={s.arDesc} small className="text-gray-600 dark:text-gray-400" />
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500 z-10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Critical questions */}
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" /> {t('toc.questionsTitle')}
                </h4>
                <ArOnly className="font-bold text-gray-900 dark:text-white text-sm mt-1">
                  {ar.toc.questionsTitle}
                </ArOnly>
              </div>
              <ul className="space-y-3">
                {[
                  { en: t('toc.q1'), ar: ar.toc.q1 },
                  { en: t('toc.q2'), ar: ar.toc.q2 },
                  { en: t('toc.q3'), ar: ar.toc.q3 },
                  { en: t('toc.q4'), ar: ar.toc.q4 },
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">?</span>
                    <Bi en={q.en} ar={q.ar} small />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                    {t('toc.useTitle')}
                  </p>
                  <ArOnly className="text-sm font-semibold text-emerald-900 dark:text-emerald-200 mb-2">
                    {ar.toc.useTitle}
                  </ArOnly>
                  <Bi
                    en={t('toc.use')}
                    ar={ar.toc.use}
                    small
                    className="text-emerald-800 dark:text-emerald-300/90"
                  />
                </div>
              </div>
            </div>
          </ToolCard>
        </div>

        {/* === Practical Tips === */}
        <div className="animate-fade-in-up bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            {t('tips.title')}
          </h2>
          <ArOnly className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {ar.tips.title}
          </ArOnly>
          <Bi
            en={t('tips.subtitle')}
            ar={ar.tips.subtitle}
            small
            className="text-gray-600 dark:text-gray-400 mb-6"
          />
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { en: t('tips.t1'), ar: ar.tips.t1 },
              { en: t('tips.t2'), ar: ar.tips.t2 },
              { en: t('tips.t3'), ar: ar.tips.t3 },
              { en: t('tips.t4'), ar: ar.tips.t4 },
              { en: t('tips.t5'), ar: ar.tips.t5 },
              { en: t('tips.t6'), ar: ar.tips.t6 },
            ].map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <Bi en={tip.en} ar={tip.ar} small className="text-gray-700 dark:text-gray-300 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Scale className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-1">{t('cta.title')}</h2>
          <ArOnly className="text-2xl md:text-3xl font-bold mb-4">{ar.cta.title}</ArOnly>
          <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">{t('cta.text')}</p>
          <ArOnly className="text-blue-100 leading-loose max-w-2xl mx-auto mt-3">
            {ar.cta.text}
          </ArOnly>
        </div>
      </section>
    </div>
  );
}
