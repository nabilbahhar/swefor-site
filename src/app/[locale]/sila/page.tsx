'use client';

import { useEffect } from 'react';

/* eslint-disable react/no-unescaped-entities */

// =====================================================
// SILA — A4-formatted strategic document, web view
// All Excel revisions applied.
// =====================================================

export default function SilaPage() {
  // Inject Google Fonts once
  useEffect(() => {
    const id = 'sila-fonts';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Reem+Kufi:wght@400;500;700&family=Amiri:wght@400;700&display=swap';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --primary: #1E3A8A;
          --accent: #0891B2;
          --warning: #D97706;
          --success: #047857;
          --danger: #B91C1C;
          --purple: #7C3AED;
          --muted: #6B7280;
          --light: #F3F4F6;
          --ink: #0F172A;
          --panel-blue: #EFF6FF;
          --panel-green: #ECFDF5;
          --panel-amber: #FEF3C7;
          --panel-red: #FEE2E2;
          --panel-purple: #F3E8FF;
        }

        .sila-doc {
          font-family: 'Tajawal', 'Amiri', 'Segoe UI', system-ui, sans-serif;
          color: var(--ink);
          direction: rtl;
          text-align: right;
          line-height: 1.75;
        }

        .a4-page {
          width: 210mm;
          min-height: 297mm;
          background: white;
          margin: 0 auto 18px;
          padding: 18mm 16mm 22mm 16mm;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
          page-break-after: always;
          position: relative;
          overflow: hidden;
        }

        @media print {
          .a4-page {
            box-shadow: none;
            margin: 0;
            padding: 18mm 16mm 22mm 16mm;
          }
        }

        @media (max-width: 220mm) {
          .a4-page {
            width: 100%;
            padding: 12mm 8mm 16mm 8mm;
          }
        }

        /* --- Cover --- */
        .cover {
          width: 210mm;
          height: 297mm;
          padding: 30mm 25mm;
          background: linear-gradient(160deg, #1E3A8A 0%, #0891B2 50%, #047857 100%);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          margin: 0 auto 18px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
        }
        .cover::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 40%);
          pointer-events: none;
        }
        .cover > div { position: relative; z-index: 2; }
        .cover .ribbon {
          font-family: 'Reem Kufi';
          font-size: 14pt;
          opacity: 0.9;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .cover .center { text-align: center; }
        .cover .badge {
          display: inline-block;
          padding: 8pt 20pt;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 30pt;
          font-size: 13pt;
          font-weight: 500;
          margin-bottom: 30pt;
          backdrop-filter: blur(10px);
        }
        .cover .title-ar {
          font-family: 'Reem Kufi';
          font-size: 130pt;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -3px;
          margin-bottom: 24pt;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
        }
        .cover .subtitle-main {
          font-family: 'Tajawal';
          font-size: 17pt;
          font-weight: 500;
          line-height: 1.7;
          max-width: 88%;
          margin: 0 auto;
        }
        .cover .bottom { border-top: 1px solid rgba(255,255,255,0.3); padding-top: 16pt; }
        .cover .bottom .lbl {
          font-size: 10pt;
          font-weight: 700;
          opacity: 0.85;
          letter-spacing: 1.5px;
          margin-bottom: 7pt;
          text-transform: uppercase;
        }
        .cover .bottom .names {
          font-size: 12pt;
          line-height: 1.95;
          direction: ltr;
          text-align: right;
        }
        .cover .bottom .meta {
          font-size: 10pt;
          opacity: 0.8;
          margin-top: 14pt;
          letter-spacing: 1.2px;
        }

        /* --- Typography --- */
        .sila-doc h1 {
          font-family: 'Reem Kufi';
          font-size: 28pt;
          font-weight: 700;
          color: var(--primary);
          margin: 18pt 0 8pt;
          line-height: 1.3;
        }
        .sila-doc h2 {
          font-family: 'Reem Kufi';
          font-size: 19pt;
          font-weight: 700;
          color: var(--primary);
          margin: 22pt 0 12pt;
          padding-bottom: 6pt;
          border-bottom: 2px solid var(--primary);
        }
        .sila-doc h3 {
          font-family: 'Tajawal';
          font-size: 14pt;
          font-weight: 700;
          color: var(--accent);
          margin: 16pt 0 6pt;
        }
        .sila-doc h4 {
          font-family: 'Tajawal';
          font-size: 12pt;
          font-weight: 700;
          color: var(--ink);
          margin: 10pt 0 4pt;
        }
        .sila-doc p {
          margin: 6pt 0;
          line-height: 1.85;
          font-size: 11.5pt;
        }
        .sila-doc ul, .sila-doc ol {
          margin: 6pt 0;
          padding-right: 22pt;
          font-size: 11.5pt;
        }
        .sila-doc li { margin: 4pt 0; line-height: 1.8; }
        .sila-doc strong { font-weight: 700; color: var(--ink); }
        .sila-doc em { font-style: normal; color: var(--accent); font-weight: 500; }
        .sila-doc .highlight {
          background: linear-gradient(transparent 60%, #FEF08A 60%);
          padding: 0 2pt;
        }

        /* --- Section header --- */
        .section-header {
          background: linear-gradient(95deg, var(--primary), var(--accent));
          color: white;
          padding: 14pt 22pt;
          border-radius: 10pt;
          margin: 0 0 22pt;
        }
        .section-header.amber  { background: linear-gradient(95deg, #D97706, #F59E0B); }
        .section-header.purple { background: linear-gradient(95deg, #7C3AED, #A855F7); }
        .section-header.green  { background: linear-gradient(95deg, #047857, #10B981); }
        .section-header.muted  { background: linear-gradient(95deg, #4B5563, #6B7280); }
        .section-header .num   { font-size: 10pt; opacity: 0.85; letter-spacing: 2px; }
        .section-header .title {
          font-family: 'Reem Kufi';
          font-size: 24pt;
          font-weight: 700;
          margin-top: 4pt;
        }

        /* --- Panels --- */
        .panel {
          border-radius: 10pt;
          padding: 16pt 20pt;
          margin: 14pt 0;
          border-right: 4pt solid var(--primary);
        }
        .panel.blue   { background: var(--panel-blue);   border-color: var(--primary); }
        .panel.green  { background: var(--panel-green);  border-color: var(--success); }
        .panel.amber  { background: var(--panel-amber);  border-color: var(--warning); }
        .panel.red    { background: var(--panel-red);    border-color: var(--danger); }
        .panel.purple { background: var(--panel-purple); border-color: var(--purple); }
        .panel.muted  { background: var(--light);        border-color: var(--muted); }
        .panel-label {
          font-size: 9.5pt;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 7pt;
          color: var(--primary);
        }
        .panel.green .panel-label   { color: var(--success); }
        .panel.amber .panel-label   { color: var(--warning); }
        .panel.red .panel-label     { color: var(--danger); }
        .panel.purple .panel-label  { color: var(--purple); }

        /* --- Tables --- */
        .sila-doc table {
          width: 100%;
          border-collapse: collapse;
          margin: 14pt 0;
          font-size: 10.5pt;
        }
        .sila-doc th {
          background: var(--primary);
          color: white;
          padding: 10pt 12pt;
          font-weight: 700;
          font-size: 10.5pt;
          text-align: right;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .sila-doc th.amber  { background: var(--warning); }
        .sila-doc th.purple { background: var(--purple); }
        .sila-doc th.green  { background: var(--success); }
        .sila-doc th.danger { background: var(--danger); }
        .sila-doc td {
          padding: 8pt 12pt;
          border: 1px solid #E5E7EB;
          vertical-align: top;
          line-height: 1.7;
        }
        .sila-doc tr:nth-child(even) td { background: #FAFAFA; }

        .table-3box th { padding: 14pt; font-size: 11pt; }
        .table-3box th.peace    { background: var(--success); }
        .table-3box th.actors   { background: var(--warning); }
        .table-3box th.conflict { background: var(--danger); }
        .table-3box td.peace    { background: var(--panel-green); vertical-align: top; }
        .table-3box td.actors   { background: var(--panel-amber); vertical-align: top; }
        .table-3box td.conflict { background: var(--panel-red); vertical-align: top; }
        .table-3box td ul { padding-right: 16pt; }
        .table-3box td li { font-size: 10pt; line-height: 1.65; margin: 6pt 0; }

        /* --- RPP matrix --- */
        .matrix-rpp {
          display: grid;
          grid-template-columns: 22% 39% 39%;
          gap: 5pt;
          margin: 16pt 0;
        }
        .matrix-rpp .head {
          background: linear-gradient(135deg, #4338CA, #7C3AED);
          color: white;
          padding: 12pt;
          text-align: center;
          font-weight: 700;
          border-radius: 6pt;
          font-size: 10.5pt;
          line-height: 1.4;
        }
        .matrix-rpp .head.row {
          background: linear-gradient(135deg, #4338CA, #2563EB);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .matrix-rpp .head.col-key  { background: linear-gradient(135deg, #7C3AED, #A855F7); }
        .matrix-rpp .head.col-more { background: linear-gradient(135deg, #0891B2, #06B6D4); }
        .matrix-rpp .empty { background: #1E1B4B; border-radius: 6pt; }
        .matrix-rpp .cell {
          background: white;
          border: 2pt solid;
          border-radius: 6pt;
          padding: 10pt;
        }
        .matrix-rpp .cell.q-ki { border-color: var(--purple);  background: var(--panel-purple); }
        .matrix-rpp .cell.q-mi { border-color: var(--accent);  background: var(--panel-blue); }
        .matrix-rpp .cell.q-ks { border-color: #A855F7;        background: #FAE8FF; }
        .matrix-rpp .cell.q-ms { border-color: var(--success); background: var(--panel-green); }
        .matrix-rpp .cell .quad-label {
          font-size: 9pt;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 6pt;
          padding-bottom: 4pt;
          border-bottom: 1pt dashed currentColor;
        }
        .matrix-rpp .cell.q-ki .quad-label { color: var(--purple); }
        .matrix-rpp .cell.q-mi .quad-label { color: var(--accent); }
        .matrix-rpp .cell.q-ks .quad-label { color: #A855F7; }
        .matrix-rpp .cell.q-ms .quad-label { color: var(--success); }
        .matrix-rpp .activity {
          background: white;
          border-radius: 4pt;
          padding: 7pt 9pt;
          margin: 5pt 0;
          font-size: 9.5pt;
          line-height: 1.6;
          border: 1px solid #E5E7EB;
        }
        .matrix-rpp .activity .id {
          display: inline-block;
          background: var(--ink);
          color: white;
          padding: 1pt 6pt;
          border-radius: 3pt;
          font-family: monospace;
          font-size: 8.5pt;
          margin-left: 5pt;
          vertical-align: middle;
        }
        .matrix-rpp .activity .phase {
          display: inline-block;
          color: var(--muted);
          font-size: 8.5pt;
          font-style: italic;
        }

        /* Legend for RPP codes */
        .rpp-legend {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8pt;
          margin: 14pt 0;
          padding: 14pt;
          background: var(--light);
          border-radius: 8pt;
          font-size: 9.5pt;
        }
        .rpp-legend .item {
          display: flex;
          align-items: center;
          gap: 8pt;
          line-height: 1.5;
        }
        .rpp-legend .code {
          display: inline-block;
          background: var(--primary);
          color: white;
          padding: 3pt 8pt;
          border-radius: 4pt;
          font-family: monospace;
          font-weight: 700;
          font-size: 9pt;
          min-width: 26pt;
          text-align: center;
        }
        .rpp-legend .code.ki { background: var(--purple); }
        .rpp-legend .code.mi { background: var(--accent); }
        .rpp-legend .code.ks { background: #A855F7; }
        .rpp-legend .code.ms { background: var(--success); }

        /* Curle diagram */
        .curle-diagram {
          margin: 16pt 0;
          padding: 16pt;
          background: linear-gradient(135deg, #FFF7ED, #FEF3C7);
          border-radius: 12pt;
        }
        .curle-axes {
          display: flex;
          justify-content: space-between;
          font-size: 9pt;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10pt;
        }
        .curle-phases {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8pt;
        }
        .curle-phase {
          border: 2pt solid;
          border-radius: 8pt;
          padding: 12pt;
          background: white;
        }
        .curle-phase .num {
          display: inline-flex;
          width: 24pt;
          height: 24pt;
          color: white;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-bottom: 6pt;
        }
        .curle-phase h4 { margin-top: 4pt; font-size: 11pt; }
        .curle-phase p { font-size: 9.5pt; line-height: 1.6; margin: 4pt 0; }
        .curle-phase.p1 { border-color: var(--danger); }
        .curle-phase.p1 .num { background: var(--danger); }
        .curle-phase.p2 { border-color: var(--warning); }
        .curle-phase.p2 .num { background: var(--warning); }
        .curle-phase.p3 { border-color: #EAB308; }
        .curle-phase.p3 .num { background: #EAB308; }
        .curle-phase.p4 { border-color: var(--success); }
        .curle-phase.p4 .num { background: var(--success); }

        /* ToC blocks */
        .toc-block {
          border: 2pt solid;
          border-radius: 10pt;
          padding: 14pt 18pt;
          margin: 10pt 0;
        }
        .toc-block.if      { border-color: var(--primary); background: var(--panel-blue); }
        .toc-block.then    { border-color: var(--success); background: var(--panel-green); }
        .toc-block.because { border-color: var(--warning); background: var(--panel-amber); }
        .toc-block.risk    { border-color: var(--danger);  background: var(--panel-red); }
        .toc-block .lbl {
          font-size: 9.5pt;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 5pt;
          text-transform: uppercase;
        }
        .toc-block.if .lbl      { color: var(--primary); }
        .toc-block.then .lbl    { color: var(--success); }
        .toc-block.because .lbl { color: var(--warning); }
        .toc-block.risk .lbl    { color: var(--danger); }

        .micro-toc {
          border: 1pt solid #E5E7EB;
          border-radius: 12pt;
          padding: 16pt;
          margin: 16pt 0;
          background: white;
        }
        .micro-toc .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10pt;
          border-bottom: 1px solid #E5E7EB;
          margin-bottom: 12pt;
        }
        .micro-toc .id {
          font-family: 'Tajawal';
          font-size: 12pt;
          font-weight: 700;
          color: var(--success);
        }
        .conf-badge {
          display: inline-block;
          padding: 4pt 12pt;
          border-radius: 14pt;
          font-size: 9pt;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .conf-high   { background: var(--panel-green); color: var(--success); }
        .conf-medium { background: var(--panel-amber); color: var(--warning); }
        .conf-low    { background: var(--panel-red);   color: var(--danger); }

        /* Arrows */
        .arrows-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8pt;
        }
        .arrow {
          background: var(--panel-purple);
          border: 1pt solid var(--purple);
          border-radius: 6pt;
          padding: 7pt 11pt;
          font-size: 10pt;
          text-align: center;
        }
        .arrow .from, .arrow .to {
          display: inline-block;
          background: var(--purple);
          color: white;
          padding: 2pt 7pt;
          border-radius: 4pt;
          font-family: monospace;
          font-weight: 700;
          font-size: 9.5pt;
        }
        .arrow .lbl {
          display: inline-block;
          margin: 0 6pt;
          color: var(--purple);
          font-weight: 700;
        }

        /* Numbered lists */
        .kdf-list { counter-reset: kdf; padding-right: 0; list-style: none; }
        .kdf-list li {
          counter-increment: kdf;
          list-style: none;
          position: relative;
          padding-right: 36pt;
          margin: 10pt 0;
          line-height: 1.7;
        }
        .kdf-list li::before {
          content: counter(kdf);
          position: absolute;
          right: 0;
          top: 0;
          width: 26pt;
          height: 26pt;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 11pt;
        }

        .sources { counter-reset: src; padding-right: 0; list-style: none; }
        .sources li {
          counter-increment: src;
          list-style: none;
          margin: 7pt 0;
          padding: 7pt 36pt 7pt 10pt;
          position: relative;
          font-size: 10.5pt;
          line-height: 1.6;
        }
        .sources li::before {
          content: counter(src);
          position: absolute;
          right: 0;
          top: 7pt;
          width: 26pt;
          height: 26pt;
          background: var(--muted);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 10pt;
        }

        /* Conclusion */
        .conclusion {
          background: linear-gradient(135deg, var(--panel-blue), white);
          border: 2pt solid var(--primary);
          border-radius: 12pt;
          padding: 20pt 24pt;
          margin: 16pt 0;
        }
        .conclusion h3 { color: var(--primary); margin-top: 10pt; }

        .toc-summary {
          background: var(--light);
          padding: 22pt 26pt;
          border-radius: 12pt;
          margin: 14pt 0;
        }
        .toc-summary h2 { border: none; margin-top: 0; padding-bottom: 6pt; }
        .toc-summary ol { padding-right: 22pt; }
        .toc-summary li { margin: 8pt 0; font-size: 12pt; }
        .toc-summary .num { color: var(--primary); font-weight: 700; margin-left: 8pt; }

        .footer-mark {
          margin-top: 32pt;
          text-align: center;
          padding: 20pt;
          border-top: 2pt solid var(--primary);
          color: var(--muted);
          font-size: 10pt;
        }
        .footer-mark p { margin: 4pt 0; }
      `}</style>

      <div className="sila-doc">

        {/* ============== COVER ============== */}
        <div className="cover">
          <div className="top">
            <div className="ribbon">وثيقة استراتيجية</div>
          </div>
          <div className="center">
            <div className="badge">مشروع مُجتَمَعي للسلام والمصالحة</div>
            <div className="title-ar">صِلَة</div>
            <div className="subtitle-main">
              فضاء مَدَني مُستَقِل للسلام والمصالحة والبناء المُشترَك<br />
              بين المغاربة والصحراويين العائدين من تندوف
            </div>
          </div>
          <div className="bottom">
            <div className="lbl">Team of Analysis and Drafting</div>
            <div className="names">
              Mohamed Boussad &nbsp;·&nbsp; Boutaina Benhmida &nbsp;·&nbsp; Kenza Sammoud &nbsp;·&nbsp; Soulaimane El Mimouni &nbsp;·&nbsp; Chaimae Haida
            </div>
            <div className="lbl" style={{ marginTop: 14 }}>Facilitator / الميسر</div>
            <div className="names">Nabil Bahhar</div>
            <div className="meta">ماي 2026 — وفق منهجية: الصناديق الثلاثة · مخطط كيرل · مصفوفة RPP · نظرية التغيير</div>
          </div>
        </div>

        {/* ============== ABOUT + TOC ============== */}
        <section className="a4-page">
          <h2>حول هذه الوثيقة</h2>
          <p>تَأتي هذه الوثيقة كَمُخرَج ختامي لمسار طويل من العمل التحليلي والميداني المنجز بشراكة مع <strong>شبكة سويفور المغاربية</strong>، التي رافَقت منذ عدة سنوات مجموعات مغربية متعاقبة من النشطاء والممارسين في حقل السلام وحل النزاعات.</p>
          <p>أُنجزَت هذه الوثيقة من قِبَل المجموعة المغربية الراهنة في إطار ورشاتها الختامية. وقد تَزامَن عملها مع <strong>المنعطف الديبلوماسي الذي عَرَفه ملف الصحراء سنة 2025</strong> (قرار مجلس الأمن 2797، التحاق نحو 120 دولة بدعم مخطط الحكم الذاتي، التحوّل في موقف الجزائر). هذا التزامُن جَعَل من الممكن — للمرة الأولى — أن نَنتقِل من التحليل النظري إلى <strong>اقتراح مشروع قابل للتنزيل الميداني</strong>، يَستجيب للحظة الراهنة ويُحَضّرها معاً.</p>

          <div className="panel blue">
            <div className="panel-label">لماذا الآن؟</div>
            <p>نَنطَلق من قناعة أنّ <span className="highlight">المرحلة المقبلة من ملف الصحراء لن تَكون سياسية بل مجتمعية</span>. حين يُوقَّع الاتفاق السياسي، تَكون السياسة قد انتهت — لكن العمل الإنساني الحقيقي يَكون قد بَدَأ للتو. هذه الوثيقة هي دعوة لِبَدء هذا العمل <strong>قبل التوقيع</strong>، لا بَعدَه.</p>
          </div>

          <h3>منهجية العمل</h3>
          <p>اعتَمَدت المجموعة منهجية «<strong>من النظرية إلى الممارسة</strong>» المستندة على أعمال «التفكير في ممارسة السلام» (RPP) و«مشروع تخطيط بناء السلام» (SNAP) لمعهد الولايات المتحدة للسلام (USIP).</p>
          <ol style={{ paddingRight: 22 }}>
            <li>الصناديق الثلاثة لتحليل النزاع</li>
            <li>مخطط كيرل لتحديد المرحلة</li>
            <li>مصفوفة RPP لِتَموقع الاستراتيجية</li>
            <li>نظرية التغيير لاختبار الفرضيات السببية</li>
          </ol>

          <div className="toc-summary" style={{ marginTop: 24 }}>
            <h2>الفهرس</h2>
            <ol>
              <li><span className="num">1.</span> سياق المشكلة — اللمحة التاريخية وآخر التطورات</li>
              <li><span className="num">2.</span> المنهجية المُعتَمَدة</li>
              <li><span className="num">3.</span> المرحلة 1 — تحليل الصناديق الثلاثة</li>
              <li><span className="num">4.</span> المرحلة 2 — مخطط كيرل</li>
              <li><span className="num">5.</span> المرحلة 3 — مصفوفة RPP</li>
              <li><span className="num">6.</span> المرحلة 4 — نظرية التغيير</li>
              <li><span className="num">7.</span> الخلاصة والتوصيات</li>
              <li><span className="num">8.</span> المصادر</li>
            </ol>
          </div>
        </section>

        {/* ============== §1 CONTEXT ============== */}
        <section className="a4-page">
          <div className="section-header">
            <div className="num">القسم 1</div>
            <div className="title">سياق المشكلة</div>
          </div>
          <p>قبل أي تحليل، من الضروري أن يَستوعب القارئ الإطار التاريخي والديبلوماسي لقضية الصحراء، حتى يَفهم لماذا تَفرض اللحظة الحالية على المجتمع المدني المغربي أن يَتدخّل بمشروع مصالحة وبناء مشترك.</p>

          <h2>1.1 — اللمحة التاريخية</h2>

          <h3>قبل 1975 — المرحلة الاستعمارية الإسبانية</h3>
          <p>الإقليم مستعمرة إسبانية تحت اسم «الصحراء الإسبانية» منذ 1884. السكان الصحراويون في معظمهم قبائل بدوية رحّل مُرتبطة بأطر القرابة العابرة للحدود (الرڭيبات، تكنة، أولاد دليم)، وهي روابط لا تَزال قائمة إلى اليوم وتُشكّل الأساس الاجتماعي لكل مشروع مصالحة.</p>

          <h3>1975 — السنة المفصلية</h3>
          <ul>
            <li><strong>أكتوبر 1975:</strong> محكمة العدل الدولية تَصدر رأيها الاستشاري. تَعترف بوجود روابط بيعة بين بعض القبائل الصحراوية وسلاطين المغرب، لكنها تَخلص إلى أن هذه الروابط لا تُثبت رابطة سيادة إقليمية تُلغي حق الشعب الصحراوي في تقرير المصير.</li>
            <li><strong>6 نوفمبر 1975:</strong> الحسن الثاني يُطلق المسيرة الخضراء — 350 ألف مدني مغربي يَدخلون الإقليم سلمياً.</li>
            <li><strong>14 نوفمبر 1975:</strong> اتفاقيات مدريد الثلاثية — إسبانيا تَتنازل عن إدارة الإقليم للمغرب (الثلثان الشماليان) وموريتانيا (الثلث الجنوبي).</li>
            <li><strong>27 فبراير 1976:</strong> اليوم التالي لانسحاب آخر جندي إسباني، البوليساريو يُعلن «الجمهورية العربية الصحراوية الديمقراطية» في بير لحلو. الحرب تَشتعل مباشرة، وعشرات الآلاف من الصحراويين يَنتقلون نحو منطقة تندوف بالجزائر.</li>
          </ul>

          <h3>1976 - 1991 — مرحلة الحرب</h3>
          <p>حرب غير متكافئة بين الجيش المغربي والبوليساريو، المدعوم عسكرياً ومالياً من الجزائر وليبيا القذافي. موريتانيا تَنسحب من النزاع سنة 1979، فيَستعيد المغرب باقي الأراضي المتنازع عليها. خلال الثمانينات، يَبني المغرب جداراً دفاعياً طوله 2700 كلم للحد من هجمات البوليساريو.</p>

          <h3>1991 — وقف إطلاق النار وبعثة المينورسو</h3>
          <p>الأمم المتحدة تَحصل على وقف إطلاق النار وتُنشئ «المينورسو». المهمة المُعلَنة: تنظيم استفتاء تقرير المصير. <strong>لم يُنظَّم هذا الاستفتاء أبداً</strong>، بسبب خلاف مستعصٍ حول قائمة الناخبين.</p>

          <h3>2007 — مخطط الحكم الذاتي المغربي</h3>
          <p>المغرب يُقدّم مخطط الحكم الذاتي: الإقليم يُصبح جهة ذات حكم ذاتي ببرلمان وحكومة وإدارة محلية، تحت السيادة المغربية.</p>

          <h3>2020 — اعتراف الولايات المتحدة</h3>
          <p>الولايات المتحدة الأمريكية تَعترف بالسيادة المغربية على الصحراء — وهي أوّل عُضْوٍ دائم في مجلس الأمن يَفعل ذلك. هذا الاعتراف شَكّل منعطفاً ديبلوماسياً كبيراً مَهَّد لما سيَأتي بعده على المستوى الدولي.</p>
        </section>

        {/* §1.2 — Updates table on its own page */}
        <section className="a4-page">
          <h2>1.2 — آخر التطورات (2022 - 2026)</h2>
          <p>الديناميكية الديبلوماسية مالت بشكل واضح لصالح المغرب منذ 2022، مع تسارع كبير بعد قرار مجلس الأمن 2797.</p>

          <table>
            <thead>
              <tr><th style={{ width: '22%' }}>التاريخ</th><th>الحدث</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>مارس 2022</strong></td><td>إسبانيا (القوة الاستعمارية التاريخية) تَدعم رسمياً مخطط الحكم الذاتي المغربي.</td></tr>
              <tr><td><strong>أكتوبر 2024</strong></td><td>الرئيس الفرنسي يُعلن أمام البرلمان المغربي أن «حاضر ومستقبل الصحراء يَندرجان في إطار السيادة المغربية».</td></tr>
              <tr><td><strong>يونيو 2025</strong></td><td>المملكة المتحدة تَنضم للمعسكر المؤيد، وتَصف الحكم الذاتي بـ«الأساس الأكثر مصداقية».</td></tr>
              <tr><td><strong>أكتوبر 2025</strong></td><td>قرار مجلس الأمن <strong>2797</strong>: 11 صوتاً مؤيداً، الجزائر لم تُشارك. القرار يُعيد توجيه المفاوضات صراحةً على أساس مخطط الحكم الذاتي المغربي.</td></tr>
              <tr><td><strong>نوفمبر 2025</strong></td><td>الجزائر تَقترح بشكل مفاجئ «الوساطة» بين المغرب والبوليساريو — مؤشر على إعادة تموقع.</td></tr>
              <tr><td><strong>فبراير 2026</strong></td><td>محادثات مدريد بين المغرب والجزائر والبوليساريو برعاية أمريكية. المغرب يُقدّم نسخة موسّعة من مخطط الحكم الذاتي (~40 صفحة).</td></tr>
              <tr><td><strong>مارس 2026</strong></td><td>سيناتورات أمريكيون يُودعون مشروع قانون «تصنيف البوليساريو منظمة إرهابية» في الكونغرس.</td></tr>
              <tr><td><strong>أبريل 2026</strong></td><td>مالي تُعلّق اعترافها بالجمهورية الصحراوية وتَدعم المخطط المغربي.</td></tr>
            </tbody>
          </table>

          <div className="panel blue">
            <div className="panel-label">الخلاصة</div>
            <p>حوالي <strong>120 دولة</strong> تَدعم المخطط المغربي. مجلس الأمن يُعيد توجيه المفاوضات على هذا الأساس. الجزائر تُلوّح بالوساطة. مالي تَسحب اعترافها. <span className="highlight">النافذة الزمنية للحل قد فُتحت — وهي تقريباً مَفتوحة الآن.</span></p>
          </div>
        </section>

        {/* ============== §2 METHODOLOGY ============== */}
        <section className="a4-page">
          <div className="section-header">
            <div className="num">القسم 2</div>
            <div className="title">المنهجية المُعتَمَدة</div>
          </div>
          <p>تَعتمد هذه الوثيقة منهجية «<strong>من النظرية إلى الممارسة</strong>» (From Theory to Practice) المستندة إلى أعمال «التفكير في ممارسة السلام» (Reflecting on Peace Practice — RPP) و«مشروع تخطيط بناء السلام» (Strategic Nonviolent Action and Peacebuilding — SNAP) لمعهد الولايات المتحدة للسلام (United States Institute of Peace — USIP).</p>

          <p>تَتألف من أربع أدوات متكاملة طُبِّقت بشكل تَتابُعي:</p>

          <table>
            <thead>
              <tr>
                <th className="amber" style={{ width: '6%' }}>#</th>
                <th className="amber" style={{ width: '18%' }}>الأداة</th>
                <th className="amber" style={{ width: '42%' }}>الوظيفة</th>
                <th className="amber">المُخرَج المُتَوَقَّع</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>1</strong></td><td><strong>الصناديق الثلاثة</strong></td><td>فرز المعلومات حول النزاع: قوى دفع للسلام، فاعلون أساسيون، قوى دفع للنزاع.</td><td>فهم بنيوي للوضع.</td></tr>
              <tr><td><strong>2</strong></td><td><strong>مخطط كيرل</strong></td><td>تحديد المرحلة الحالية للنزاع على منحنى التحوّل واختيار التدخل المناسب.</td><td>تموضع زمني للتدخل.</td></tr>
              <tr><td><strong>3</strong></td><td><strong>مصفوفة RPP</strong></td><td>تموقع الأنشطة على مصفوفة 2×2 بحسب الفئة المُستَهدَفة ومستوى التغيير المُستَهدف.</td><td>استراتيجية تدخّل متوازنة.</td></tr>
              <tr><td><strong>4</strong></td><td><strong>نظرية التغيير</strong></td><td>صياغة الفرضيات السببية بصيغة «إذا فعلنا X، فسيؤدي إلى Y لأنّ...».</td><td>منطق برنامج قابل للاختبار.</td></tr>
            </tbody>
          </table>

          <div className="panel blue">
            <div className="panel-label">مبدأ تأسيسي</div>
            <p>لا يَكفي تحديد الفاعلين والعوامل، بل يَجب فهم <strong>العلاقات والديناميكيات</strong> بينهم وكيفية تَطوّرها. التحليل الجيد ليس وصفياً، بل تفسيرياً وتنبؤياً.</p>
          </div>
        </section>

        {/* ============== §3 — 3-BOX ============== */}
        <section className="a4-page">
          <div className="section-header">
            <div className="num">القسم 3</div>
            <div className="title">المرحلة 1 — تحليل الصناديق الثلاثة</div>
          </div>
          <p>فَرز المعلومات حول قضية الصحراء وفق ثلاث خانات: قوى الدفع للسلام، الفاعلون الأساسيون، وقوى الدفع للنزاع. الهدف: <em>الوضوح، لا الكمال.</em></p>

          <table className="table-3box">
            <thead>
              <tr>
                <th className="peace">قوى الدفع للسلام<br />(للبناء عليها)</th>
                <th className="actors">الفاعلون الأساسيون</th>
                <th className="conflict">قوى الدفع للنزاع<br />(للتحييد)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="peace">
                  <ul>
                    <li>هيئة الإنصاف والمصالحة (IER 2004-2005): سابقة عربية وحيدة.</li>
                    <li>الخطاب الملكي بعد قرار 2797: إطار «العودة» بدل «الإدماج بالقوة».</li>
                    <li>روابط القرابة العابرة: عائلات مفصولة منذ 50 سنة، نفس القبائل (الرڭيبات، تكنة، أولاد دليم).</li>
                    <li>اللهجة الحسانية المشتركة.</li>
                    <li>الإسلام المالكي والزوايا.</li>
                    <li>الجهوية المتقدمة 2015: الإطار القانوني جاهز.</li>
                    <li>الازدهار الاقتصادي للصحراء المغربية: ميناء الداخلة، طاقات شمسية، فوسفاط — توفير فرص شغل حقيقية.</li>
                    <li>القوة الديبلوماسية للمغرب: دعم الولايات المتحدة، فرنسا، إسبانيا، المملكة المتحدة، وأكثر من 120 دولة.</li>
                    <li>الاستقرار السياسي والمؤسساتي للمغرب: من بين أكثر دول إفريقيا استقراراً.</li>
                  </ul>
                </td>
                <td className="actors">
                  <ul>
                    <li>الملك محمد السادس: سلطة معنوية + دينية + سياسية.</li>
                    <li>الكوادر السابقون للبوليساريو الذين عادوا.</li>
                    <li>النساء الصحراويات على الجانبين.</li>
                    <li>شيوخ القبائل التقليديون.</li>
                    <li>الجالية الصحراوية في إسبانيا.</li>
                    <li>الشباب 18-30 (الفئة المستهدفة الرئيسية).</li>
                    <li>المجلس الوطني لحقوق الإنسان.</li>
                    <li>الجامعات ومراكز البحث المغربية.</li>
                  </ul>
                </td>
                <td className="conflict">
                  <ul>
                    <li>النخبة العسكرية للبوليساريو في تندوف: ستَفقد النفوذ والامتيازات — مقاومة قصوى متوقعة.</li>
                    <li>المخابرات العسكرية الجزائرية.</li>
                    <li>المحافظون المغاربة الذين قد يَرون العائدين «خونة يُكافأون».</li>
                    <li>الصحراويون «التاريخيون» في المغرب: خطر الغيرة الهوياتية.</li>
                    <li>منظمات دولية مؤيدة لانفصال الأقاليم وتفكيك الدول، تَنشط في أوروبا وجنوب إفريقيا.</li>
                    <li>صدمة عابرة للأجيال: 50 سنة من السرد العائلي العدائي.</li>
                    <li>اقتصاد ريع النزاع في تندوف.</li>
                    <li><strong>خطر التطرف العنيف من بعض العائدين</strong>: قبول الحكم الذاتي قد يَكون لدى البعض ذريعة للوصول إلى التراب المغربي والقيام بأعمال عنيفة، حتى بعيداً عن الصحراء. هذا الخطر <strong>تَكرّر تَنبيهٌ صريح إليه من المشاركين الصحراويين أنفسهم</strong> خلال المسار التحليلي للمشروع.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* §3 KDFs */}
        <section className="a4-page">
          <h2>العوامل الدافعة الرئيسية (Key Driving Factors)</h2>
          <p>من تحليل الصناديق الثلاثة، تَنبثق <strong>خمسة عوامل محورية</strong> يَقوم عليها المشروع:</p>
          <ol className="kdf-list">
            <li>مستوى <strong>الثقة</strong> التي يَشعر بها شباب تندوف تجاه المشروع المغربي.</li>
            <li>القدرة على تقديم <strong>كرامة اقتصادية</strong> للعائدين (لا الصدقة، بل المكانة).</li>
            <li>حجم الفضاء الرمزي المتروك للهوية الصحراوية المتميزة (لغة، ثقافة، ذاكرة).</li>
            <li>مَرئية ومصداقية «حاملي الذاكرة» العائدين.</li>
            <li>مستوى الحماية من التوظيف السياسي والإعلامي، ومن الاختراق الأمني.</li>
          </ol>
        </section>

        {/* ============== §4 — CURLE ============== */}
        <section className="a4-page">
          <div className="section-header amber">
            <div className="num">القسم 4</div>
            <div className="title">المرحلة 2 — مخطط كيرل</div>
          </div>
          <p>يَرسم نموذج آدم كيرل المسار من النزاع الكامن إلى السلام المستدام عبر <strong>أربع مراحل</strong>، على محورين: درجة الوعي بالقضايا (أفقي)، توازن السلطة (عمودي).</p>

          <div className="curle-diagram">
            <div className="curle-axes">
              <span>سلطة غير متوازنة ←</span>
              <span>← سلطة متوازنة</span>
            </div>
            <div className="curle-phases">
              <div className="curle-phase p1">
                <div className="num">1</div>
                <h4>النزاع الكامن</h4>
                <p>سلطة غير متوازنة، وعي منخفض، الظلم لم يُسَمَّ بعد.</p>
                <p style={{ fontStyle: 'italic', color: 'var(--muted)' }}>التدخل: تحسيس، تنظيم، رفع الوعي.</p>
              </div>
              <div className="curle-phase p2">
                <div className="num">2</div>
                <h4>النزاع الظاهر</h4>
                <p>وعي مرتفع، سلطة لا تَزال غير متوازنة، الصراع يَطفو.</p>
                <p style={{ fontStyle: 'italic', color: 'var(--muted)' }}>التدخل: عمل لاعنفي، مناصرة، حماية.</p>
              </div>
              <div className="curle-phase p3">
                <div className="num">3</div>
                <h4>تسوية النزاع</h4>
                <p>اعتراف بضرورة الحل، السلطة بَدأت تَتوازن.</p>
                <p style={{ fontStyle: 'italic', color: 'var(--muted)' }}>التدخل: تفاوض، وساطة، استيعاب.</p>
              </div>
              <div className="curle-phase p4">
                <div className="num">4</div>
                <h4>سلام مستدام</h4>
                <p>سلطة متوازنة، وعي عالٍ، عدالة.</p>
                <p style={{ fontStyle: 'italic', color: 'var(--muted)' }}>التدخل: مصالحة، بناء المؤسسات.</p>
              </div>
            </div>
            <div className="curle-axes" style={{ marginTop: 8, marginBottom: 0 }}>
              <span>وعي منخفض</span>
              <span>وعي عالٍ بالقضايا</span>
            </div>
          </div>

          <h2>التشخيص: اختلال في المرحلة بين الأطراف</h2>
          <p>كل طرف من أطراف النزاع يَعيش في مرحلة مختلفة من المنحنى. فهم هذا الاختلال هو ما يَجعل تصميم التدخل دقيقاً:</p>

          <table>
            <thead>
              <tr>
                <th className="amber" style={{ width: '30%' }}>الطرف</th>
                <th className="amber" style={{ width: '18%' }}>المرحلة</th>
                <th className="amber">ما يَحتاجه</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>سكان تندوف</strong></td><td><strong>2 ← 1</strong></td><td>تحسيس بأن العالم تغيّر، عرض بدائل، فتح نوافذ معلومات.</td></tr>
              <tr><td><strong>العائدون / الراغبون في العودة</strong></td><td><strong>3 ← 2</strong></td><td>مرافقة في الانتقال، حماية الكرامة، استيعاب تدريجي.</td></tr>
              <tr><td><strong>مغاربة الجنوب والشمال</strong></td><td><strong>4 ← 3</strong></td><td>تأطير المصالحة، تجنّب خطاب الانتقام، استقبال متكافئ.</td></tr>
              <tr><td><strong>كوادر البوليساريو السابقة</strong></td><td><strong>4 ← 3</strong></td><td>مكانة، مرئية، شرعنة دور «حاملي الذاكرة».</td></tr>
            </tbody>
          </table>
        </section>

        {/* ============== §5 — RPP ============== */}
        <section className="a4-page">
          <div className="section-header purple">
            <div className="num">القسم 5</div>
            <div className="title">المرحلة 3 — مصفوفة RPP</div>
          </div>
          <p>مصفوفة RPP تُجبرنا على وَضع كل نشاط على إحدى الخانات الأربع الناتجة عن تقاطع بُعدين:</p>
          <ul>
            <li><strong>الفئة المُستَهدَفة:</strong> أشخاص رئيسيون (صنّاع قرار، قياديون، فاعلون مؤسساتيون) مقابل عدد أكبر من الأشخاص (الساكنة العامة، الشباب، الأسر).</li>
            <li><strong>مستوى التغيير:</strong> فردي / شخصي (تغيير في القيم، المعرفة، السلوك) مقابل اجتماعي - سياسي (تغيير في المؤسسات، السياسات، البِنى).</li>
          </ul>

          <div className="matrix-rpp">
            <div className="empty"></div>
            <div className="head col-key">الأشخاص الرئيسيون<br />(صنّاع القرار)</div>
            <div className="head col-more">عدد أكبر من الأشخاص<br />(الساكنة العامة)</div>

            <div className="head row">تغيير<br />فردي / شخصي</div>
            <div className="cell q-ki">
              <div className="quad-label">KI — الخانة 1: تغيير فردي عند الأشخاص الرئيسيين</div>
              <div className="activity"><span className="id">a1</span> شهادات علنية من كوادر البوليساريو العائدة. <span className="phase">— كيرل 4 ← 3</span></div>
              <div className="activity"><span className="id">a2</span> تكوين شيوخ القبائل لإعادة فتح الروابط العابرة للحدود. <span className="phase">— كيرل 2 ← 1</span></div>
            </div>
            <div className="cell q-mi">
              <div className="quad-label">MI — الخانة 2: تغيير فردي عند عدد أكبر من الأشخاص</div>
              <div className="activity"><span className="id">a3</span> بَثّ محتوى رقمي بالحسانية (تيك توك، يوتيوب، بودكاست) → شباب تندوف. <span className="phase">— كيرل 2 ← 1</span></div>
              <div className="activity"><span className="id">a4</span> خلية مرافقة فردية (قانون، شغل، سكن، نفسي) للعائدين. <span className="phase">— كيرل 3 ← 2</span></div>
              <div className="activity"><span className="id">a5</span> قوافل ثقافية حسّانية وبرنامج أكاديمي عن الذاكرة المشتركة. <span className="phase">— كيرل 4 ← 3</span></div>
            </div>

            <div className="head row">تغيير<br />اجتماعي - سياسي</div>
            <div className="cell q-ks">
              <div className="quad-label">KS — الخانة 3: تغيير اجتماعي-سياسي عند الأشخاص الرئيسيين</div>
              <div className="activity"><span className="id">a6</span> ميثاق استقبال موقّع من المجلس الوطني لحقوق الإنسان والجامعات والجماعات. <span className="phase">— كيرل 4 ← 3</span></div>
              <div className="activity"><span className="id">a7</span> مناصرة لدى البرلمان لإطار قانوني «العودة الكريمة». <span className="phase">— كيرل 4 ← 3</span></div>
              <div className="activity"><span className="id">a8</span> إطار قانوني وشباك وحيد «العودة الكريمة»: وضع مدني، معادلة شواهد كوادر البوليساريو، استرداد ملكيات، تمدرس، بطاقة تعريف، ضمان اجتماعي. <span className="phase">— كيرل 4 ← 3</span></div>
            </div>
            <div className="cell q-ms">
              <div className="quad-label">MS — الخانة 4: تغيير اجتماعي-سياسي عند عدد أكبر من الأشخاص</div>
              <div className="activity"><span className="id">a9</span> منصة إعلامية ثلاثية اللغة (حسّانية / دارجة / إسبانية). <span className="phase">— كيرل 3 ← 2</span></div>
              <div className="activity"><span className="id">a10</span> مركز صِلَة بطانطان أو كلميم (فضاء مدني مهيكل، مستقل عن الدولة). <span className="phase">— كيرل 4 ← 3</span></div>
              <div className="activity"><span className="id">a11</span> برنامج إدماج اقتصادي للعائدين (منح، قروض صغرى، شراكات الداخلة). <span className="phase">— كيرل 4 ← 3</span></div>
            </div>
          </div>

          {/* Legend for RPP codes */}
          <div className="rpp-legend">
            <div className="item"><span className="code ki">KI</span><span><strong>Key × Individual</strong> — الأشخاص الرئيسيون × تغيير فردي</span></div>
            <div className="item"><span className="code mi">MI</span><span><strong>More × Individual</strong> — عدد أكبر × تغيير فردي</span></div>
            <div className="item"><span className="code ks">KS</span><span><strong>Key × Socio-political</strong> — الأشخاص الرئيسيون × تغيير اجتماعي-سياسي</span></div>
            <div className="item"><span className="code ms">MS</span><span><strong>More × Socio-political</strong> — عدد أكبر × تغيير اجتماعي-سياسي</span></div>
          </div>
        </section>

        {/* RPP arrows + criteria */}
        <section className="a4-page">
          <h2>العلاقات السببية بين الأنشطة</h2>
          <p>كيف تَتسلسل الأنشطة لتُنتج أثراً تراكمياً:</p>

          <div className="arrows-grid">
            <div className="arrow"><span className="from">a3</span><span className="lbl">→ تجلب</span><span className="to">a4</span></div>
            <div className="arrow"><span className="from">a4</span><span className="lbl">→ تغذي</span><span className="to">a11</span></div>
            <div className="arrow"><span className="from">a2</span><span className="lbl">→ تضخم</span><span className="to">a1</span></div>
            <div className="arrow"><span className="from">a1</span><span className="lbl">→ تشرعن</span><span className="to">a10</span></div>
            <div className="arrow"><span className="from">a8</span><span className="lbl">→ تغذي</span><span className="to">a4</span></div>
            <div className="arrow"><span className="from">a8</span><span className="lbl">→ تؤطر</span><span className="to">a11</span></div>
            <div className="arrow"><span className="from">a9</span><span className="lbl">→ تضخم</span><span className="to">a3</span></div>
            <div className="arrow"><span className="from">a6</span><span className="lbl">→ تؤطر</span><span className="to">a11</span></div>
            <div className="arrow"><span className="from">a5</span><span className="lbl">→ تغذي</span><span className="to">a10</span></div>
          </div>

          <h2>التحقق من معايير RPP الثلاثة</h2>

          <div className="panel green">
            <div className="panel-label">المعيار 1 — مُحقَّق</div>
            <p><strong>عدم الانحصار في خانة واحدة:</strong> الاستراتيجية تُغطّي الخانات الأربع (الخانة 1: نشاطان، الخانة 2: ثلاثة أنشطة، الخانة 3: ثلاثة أنشطة، الخانة 4: ثلاثة أنشطة).</p>
          </div>

          <div className="panel green">
            <div className="panel-label">المعيار 2 — مُحقَّق</div>
            <p><strong>ربط التغيير الفردي بالتغيير الاجتماعي-السياسي:</strong> أسهم a4 → a11 (مرافقة فردية تَقود إلى إدماج اقتصادي بنيوي)، a1 → a10 (شهادات تَقود إلى المركز)، a5 → a10 (برامج ثقافية تَقود إلى البنية التحتية).</p>
          </div>

          <div className="panel green">
            <div className="panel-label">المعيار 3 — مُحقَّق</div>
            <p>على المستوى الاجتماعي-السياسي، <strong>الوصول للأشخاص الرئيسيين وعدد أكبر معاً:</strong> الخانة 3 (الميثاق، المناصرة البرلمانية، شباك «العودة الكريمة») والخانة 4 (الإعلام، المركز، الإدماج الاقتصادي) مع روابط فعلية بينها (a6 → a11، a8 → a11).</p>
          </div>
        </section>

        {/* ============== §6 — TOC ============== */}
        <section className="a4-page">
          <div className="section-header green">
            <div className="num">القسم 6</div>
            <div className="title">المرحلة 4 — نظرية التغيير</div>
          </div>
          <p>نَختبر الفرضيات السببية الكامنة وراء الاستراتيجية بصيغة: <em>«إذا فعلنا [X]، فسيؤدي إلى [Y] لأنّ [الآلية السببية]»</em>. على مستويين: الكلّي (الفرضية العامة للمشروع) والجزئي (فرضية لكل نشاط).</p>

          <h2>المستوى الكلّي — الفرضية العامة للمشروع</h2>

          <div className="toc-block if">
            <div className="lbl">إذا أنجزنا</div>
            <p>فضاءً مدنياً مستقلاً للسلام والمصالحة والبناء المشترك بين المغاربة والصحراويين العائدين من تندوف، مُشتغِلاً ومُعترفاً به، يَعمل خلال مرحلة ما بعد التسوية.</p>
          </div>

          <div className="toc-block then">
            <div className="lbl">سيُؤدّي إلى</div>
            <p>تعايش كريم وتشاركي بين الصحراويين العائدين والصحراويين المغاربة والمغاربة، مع هوية صحراوية محفوظة، ذاكرة معترف بها، حركية مُؤمّنة، وتطرف عنيف ممنوع.</p>
          </div>

          <div className="toc-block because">
            <div className="lbl">لأنّ</div>
            <ol style={{ paddingRight: 22 }}>
              <li>الحل المؤسساتي يَلوح (قرار 2797، حوالي 120 دولة) لكن الاستيعاب الاجتماعي لم يُحضَّر — بدون ذلك، يَبقى الحل إدارياً ولا يَصير إنسانياً.</li>
              <li>تجربة هيئة الإنصاف والمصالحة 2004-2005 أثبتت أن لجان الحقيقة والمصالحة المغربية تَنجح، وأن المجتمع المدني أكثر مصداقية من الدولة لهذا العمل.</li>
              <li>اختلال المرحلة في كيرل (تندوف بالمرحلة 1-2، المؤسسات بالمرحلة 3-4) يَخلق خطر أزمة بعد التسوية إذا لم نَفعل شيئاً.</li>
              <li>النسيج العابر للحدود (قرابة، حسانية، إسلام مالكي، قبائل) رأسمال اجتماعي كامن لا يَستطيع أحدٌ آخر تفعيله — لا الدولة (مشكوك فيها)، لا الأمم المتحدة (خارجية)، لا البوليساريو (مَوصوم).</li>
              <li>المشاركون الصحراويون أنفسهم عبروا بصراحة عن احتمال لجوء الصحراويين للعنف والحرب لتقويض مخرجات التسوية — وهو ما يَجعل التحضير الاجتماعي والأمني واجباً، لا اختياراً.</li>
            </ol>
          </div>
        </section>

        {/* MICRO ToCs */}
        <section className="a4-page">
          <h2>المستوى الجزئي — فرضية لكل نشاط محوري</h2>

          <div className="micro-toc">
            <div className="header">
              <span className="id">المحور 1 — المحتوى الرقمي</span>
              <span className="conf-badge conf-medium">ثقة متوسطة</span>
            </div>
            <div className="toc-block if"><div className="lbl">إذا</div><p>بَثّنا محتوى رقمياً بالحسانية يَستهدف الشباب 18-30 بتندوف (a3).</p></div>
            <div className="toc-block then"><div className="lbl">سيؤدي إلى</div><p>وُصول السرديات البديلة إلى مَن يَختار البحث عنها داخل المخيمات، وفتح نوافذ معلومات لمن هو مستعد لها.</p></div>
            <div className="toc-block because"><div className="lbl">لأنّ</div><p>الهدف ليس إقناع الجميع — معظم الجمهور لن يَتحرك. الهدف هو ضمان أن مَن يَتساءل أو يَتردّد فعلاً يَجد مادة بديلة بدل الفراغ الإعلامي. حتى تَأثير محدود جداً يَكفي لخلق تيار من الراغبين في العودة الفردية.</p></div>
            <div className="toc-block risk"><div className="lbl">⚠ خطر</div><p>إذا رَصدت المخابرات الجزائرية الحسابات وحَجبتها، أو إذا استَعمَله الرافضون لإطلاق حملة اتهامات بـ«الدعاية المغربية» تَدفع بمن كانوا مُتردّدين إلى التشدّد.</p></div>
          </div>

          <div className="micro-toc">
            <div className="header">
              <span className="id">المحور 2 — خلية المرافقة الفردية</span>
              <span className="conf-badge conf-high">ثقة عالية</span>
            </div>
            <div className="toc-block if"><div className="lbl">إذا</div><p>أنشأنا خلية مرافقة فردية (قانون، شغل، سكن، نفسي) للعائدين (a4).</p></div>
            <div className="toc-block then"><div className="lbl">سيؤدي إلى</div><p>العائدون سيَعيشون العودة كريمة ومستقرة، مما يَخلق سابقة مطمئنة للقادمين.</p></div>
            <div className="toc-block because"><div className="lbl">لأنّ</div><p>العائدون الأوائل يَخدمون كإشارة اجتماعية؛ تجربتهم تَنتشر سريعاً في الشبكات العائلية بين تندوف والصحراء المغربية. تجربة إيجابية أقوى من أي تواصل رسمي.</p></div>
            <div className="toc-block risk"><div className="lbl">⚠ خطر</div><p>إذا كانت الموارد ناقصة أو المرافقة سطحية، يَنقلب الأثر: مَن يَرفض العودة يَستعمل الحالات الأولى كمضاد.</p></div>
          </div>
        </section>

        <section className="a4-page">
          <div className="micro-toc">
            <div className="header">
              <span className="id">المحور 3 — الميثاق المؤسساتي والمناصرة</span>
              <span className="conf-badge conf-medium">ثقة متوسطة</span>
            </div>
            <div className="toc-block if"><div className="lbl">إذا</div><p>نَشَرنا ميثاق استقبال موقّع من المجلس الوطني لحقوق الإنسان والجامعات والجماعات (a6) + مناصرة برلمانية لإطار «العودة الكريمة» (a7).</p></div>
            <div className="toc-block then"><div className="lbl">سيؤدي إلى</div><p>العودة الكريمة ستَكون لها إطار قانوني ومؤسساتي صريح وقابل للاحتجاج به.</p></div>
            <div className="toc-block because"><div className="lbl">لأنّ</div><p>تجربة هيئة الإنصاف والمصالحة 2004-2005 أثبتت أن المواثيق الرسمية المُوقّعة تُنشئ معياراً لا يَستطيع الفاعلون المحليون تجاوزه.</p></div>
            <div className="toc-block risk"><div className="lbl">⚠ خطر</div><p>إذا كان التوقيع رمزياً فقط دون آلية للمتابعة، يَصبح الميثاق حبراً على ورق.</p></div>
          </div>

          <div className="micro-toc">
            <div className="header">
              <span className="id">المحور 4 — مركز صِلَة</span>
              <span className="conf-badge conf-high">ثقة عالية</span>
            </div>
            <div className="toc-block if"><div className="lbl">إذا</div><p>افتتحنا مركز صِلَة بطانطان أو كلميم مع شهادات علنية (a10).</p></div>
            <div className="toc-block then"><div className="lbl">سيؤدي إلى</div><p>ذاكرة الطرفين ستُعترَف بها وتُؤرشَف، بدون تراتبية.</p></div>
            <div className="toc-block because"><div className="lbl">لأنّ</div><p>الأرشفة العلنية للروايات تُغيّر طبيعة النزاع: تَنقُل من ذاكرة حيّة (غير مستقرة) إلى ذاكرة مؤسساتية (مستقرة، مشتركة). آلية أساسية في كل مصالحة ما بعد النزاع.</p></div>
            <div className="toc-block risk"><div className="lbl">⚠ خطر</div><p>إذا اعتُبر المركز ذراعاً للدولة، سيَرفض المتشككون الصحراويون الإدلاء بشهاداتهم. الاستقلالية المؤسساتية شرط لازم.</p></div>
          </div>
        </section>

        <section className="a4-page">
          <div className="micro-toc">
            <div className="header">
              <span className="id">المحور 5 — آلية الإنذار المبكر الأمنية</span>
              <span className="conf-badge conf-low">ثقة منخفضة (لكن ضرورية)</span>
            </div>
            <div className="toc-block if"><div className="lbl">إذا</div><p>أنشأنا آلية إنذار مبكر بالشراكة مع قياديين صحراويين موثوقين، تُستَخدم لرصد علامات التطرف العنيف لدى العائدين، إلى جانب توفير بدائل اقتصادية موثوقة.</p></div>
            <div className="toc-block then"><div className="lbl">سيؤدي إلى</div><p>خطر التطرف العنيف يُرصَد مبكراً ويُحيَّد، دون شيطنة جماعية ودون انعكاس على المجموع.</p></div>
            <div className="toc-block because"><div className="lbl">لأنّ</div><p>التحذيرات المُتكرّرة من المشاركين الصحراويين أنفسهم — على مدى ثماني سنوات من ورشات سويفور وآخرها الورشة الختامية — تُؤكّد أن جزءاً من الرافضين <strong>«لن يَهدأ حتى يَرى الدم»</strong>. الأقران الصحراويون وحدَهم هم الراصدون الموثوقون لهذا التيّار.</p></div>
            <div className="toc-block risk"><div className="lbl">⚠ خطر</div><p>اختراق الآلية يُعطي خطر اتهام صحراويين أبرياء. التَوسّع المُفرِط في تعريف «التطرف» قد يَنقلب إلى تجريم سياسي. الآلية يَجب أن تَبقى ضيّقة، عملياتية، ومستقلة.</p></div>
          </div>
        </section>

        {/* ============== §7 — CONCLUSION ============== */}
        <section className="a4-page">
          <div className="section-header">
            <div className="num">القسم 7</div>
            <div className="title">الخلاصة والتوصيات</div>
          </div>

          <p>بعد تطبيق المراحل الأربع، تَنتهي هذه الوثيقة إلى خمس قناعات استراتيجية:</p>

          <div className="conclusion">
            <h3>1 · النافذة الزمنية مفتوحة الآن</h3>
            <p>الديناميكية الديبلوماسية مالت بشكل واضح لصالح المغرب، لكن الاستيعاب الاجتماعي للحل لم يُحضَّر بعد. كل شهر يَمر دون تَحضير الأرضية الإنسانية والاجتماعية هو خسارة لا تَعوّض.</p>

            <h3>2 · مشروع صِلَة هو الجسر بين الديبلوماسية والإنسانية</h3>
            <p>دون هذا الجسر، يَبقى الحل إدارياً، ولا يَصير إنسانياً. والاتفاق السياسي بدون أرضية اجتماعية يَنفجر بعد سنوات — هذا ما تُعلّمه كل تجارب ما بعد النزاع في القرن الماضي.</p>

            <h3>3 · الاستقلالية المؤسساتية شرط لازم</h3>
            <p>إذا اعتُبر المشروع ذراعاً تواصلية للدولة، يَموت أمام الصحراويين. <span className="highlight">قوة المشروع هي مَدنيته، لا قُربه من السلطة.</span></p>

            <h3 style={{ color: 'var(--danger)' }}>4 · الخطر الأمني حقيقي ومُوَثَّق</h3>
            <p>التحذير من احتمال أن يَستغل بعض الرافضين الحكم الذاتي كذريعة للوصول إلى التراب المغربي والقيام بأعمال عنيفة، حتى بعيداً عن الصحراء (الرباط، الدار البيضاء وغيرهما)، تَكرّر بشكل صريح من <strong>المشاركين الصحراويين أنفسهم</strong> على مدى ثماني سنوات من الورشات. آلية الإنذار المبكر <strong>ليست خياراً، بل ضرورة وجودية للمشروع</strong>.</p>

            <h3>5 · العمل الحقيقي يَبدأ بعد التوقيع</h3>
            <p>السياسة ستَكون قد انتهت. مصالحة الناس ستَأخذ 20 سنة، ولا أحد غير المجتمع المدني المغربي قادر على إنجازها بمصداقية.</p>
          </div>

          <h2>التوصيات العملية</h2>
          <ol className="kdf-list">
            <li>تَأمين تمويلات مستقلة ومُتنوّعة (لا يَجب أن تَكون الدولة المغربية الممول الوحيد).</li>
            <li>اختيار الموقع الجغرافي للمركز (طانطان أو كلميم — منطقة احتكاك تاريخي محايدة).</li>
            <li>صياغة ميثاق أخلاقي للمشروع: لا استحواذ، لا سردية انتصار، تكافؤ في الكلام.</li>
            <li>بناء شراكات مع المجلس الوطني لحقوق الإنسان، الجامعات، والجماعات المحلية.</li>
            <li>وَضع آلية الإنذار المبكر.</li>
            <li>إطلاق المرحلة 0 (تهيئة الميدان، 12 شهراً): رسم خريطة العائلات المنفصلة، بنك شهادات، شراكات أولية.</li>
            <li>اعتماد لغة بَنكية للرسائل: لا «انتصار»، لا «نهاية»، بل «بداية مرحلة جديدة».</li>
          </ol>
        </section>

        {/* ============== §8 — SOURCES ============== */}
        <section className="a4-page">
          <div className="section-header muted">
            <div className="num">القسم 8</div>
            <div className="title">المصادر</div>
          </div>
          <ol className="sources">
            <li>قرار مجلس الأمن للأمم المتحدة 2797 (أكتوبر 2025).</li>
            <li>تقرير السياسة الشهري لمجلس الأمن، أبريل 2026 — securitycouncilreport.org.</li>
            <li>هيومن رايتس ووتش، «الأمم المتحدة: حق الشعب الصحراوي في تقرير المصير مهدد»، 25 مارس 2026.</li>
            <li>Modern Diplomacy, &quot;The Fall of the Polisario&quot;, 30 octobre 2025.</li>
            <li>Africa at LSE, &quot;Diplomatic realism is ending a post-colonial stalemate in Western Sahara&quot;, 10 février 2026.</li>
            <li>Atalayar, &quot;Polisario Front and Algeria reject US resolution on Western Sahara&quot;, 27 octobre 2025.</li>
            <li>Morocco World News, &quot;Morocco, Algeria, and Polisario to Hold US-Backed Talks in Madrid&quot;, février 2026.</li>
            <li>UK House of Commons Library, &quot;Western Sahara&quot; research briefing.</li>
            <li>CDA Collaborative Learning, &quot;Reflecting on Peace Practice (RPP) — From Theory to Practice&quot;.</li>
            <li>USIP, &quot;Synergizing Nonviolent Action and Peacebuilding (SNAP)&quot;, 2018.</li>
            <li>Tony Hodges, &quot;Western Sahara: The Roots of a Desert War&quot;, Lawrence Hill Books, 1983.</li>
            <li>Adam Curle, &quot;Making Peace&quot;, Tavistock Publications, 1971.</li>
            <li>تجربة هيئة الإنصاف والمصالحة (المغرب، 2004-2005).</li>
            <li>شهادات وملاحظات مسجّلة خلال ورشات تَدريبية متعاقبة (2018-2026)، ومنها الورشة الختامية لماي 2026.</li>
          </ol>

          <div className="footer-mark">
            <p><strong>صِلَة</strong> — وثيقة استراتيجية</p>
            <p>Mohamed Boussad · Boutaina Benhmida · Kenza Sammoud · Soulaimane El Mimouni · Chaimae Haida</p>
            <p>Facilitator: Nabil Bahhar &nbsp;·&nbsp; ماي 2026</p>
          </div>
        </section>

      </div>
    </>
  );
}
