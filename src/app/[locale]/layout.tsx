import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GateEntry } from '@/components/GateEntry';
import '../globals.css';

export const metadata: Metadata = {
  title: 'SweFOR Maghreb Network | Building Peace Through Dialogue',
  description:
    'Since 2018, fostering cross-border youth dialogue and peacebuilding across Morocco, Algeria, Tunisia, and Western Sahara.',
  openGraph: {
    title: 'SweFOR Maghreb Network',
    description: 'Building Peace Through Dialogue and Nonviolence',
    url: 'https://swefor.nbahhar.com',
    siteName: 'SweFOR Maghreb Network',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://swefor.nbahhar.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SweFOR Maghreb Network',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'SweFOR Maghreb Network',
    description: 'Building Peace Through Dialogue and Nonviolence',
    images: ['https://swefor.nbahhar.com/og-image.png'],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <GateEntry locale={locale}>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            </GateEntry>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
