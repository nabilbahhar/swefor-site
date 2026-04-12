import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SweFOR Maghreb Network | Building Peace Through Dialogue',
  description:
    'Since 2018, fostering cross-border youth dialogue and peacebuilding across Morocco, Algeria, Tunisia, and Western Sahara.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
