'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 flex items-center justify-center">
                <Image src="/logo.png" alt="SweFOR Logo" width={48} height={48} className="rounded-lg object-contain" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">SweFOR</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Maghreb Network</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('contact')}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              SweFOR Maghreb Network
              <br />
              Building Peace Through Dialogue
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-0">
            {t('copyright')} {currentYear}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
            Deployed on{' '}
            <a
              href="https://coolify.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Coolify
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
