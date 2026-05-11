import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sila — وثيقة استراتيجية',
};

// Standalone layout — no navbar, no footer. Like a PDF in a browser tab.
export default function SilaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#E5E7EB] py-8 print:bg-white print:py-0">
      {children}
    </div>
  );
}
