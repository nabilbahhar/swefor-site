'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Image
              src="/logo.png"
              alt="SweFOR Maghreb Network"
              width={80}
              height={80}
              className="object-contain mix-blend-lighten mb-3"
            />
            <p className="text-gray-400 text-sm">{t('tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('links')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('timeline')}
                </Link>
              </li>
              <li>
                <Link href="/people" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('people')}
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('vision')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('contact')}</h3>
            <p className="text-gray-400 text-sm">
              SweFOR Maghreb Network
              <br />
              {t('contactDesc')}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            {t('copyright')} {currentYear}
          </p>
          <p className="text-gray-400 text-sm">
            Powered by{' '}
            <span className="text-white font-medium">Erik Nilsson</span>
            {' '}&{' '}
            <span className="text-white font-medium">Nabil Bahhar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
