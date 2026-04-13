'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-swefor-gold/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="SweFOR Maghreb Network"
                width={100}
                height={44}
                className="object-contain mix-blend-lighten"
              />
            </div>
            <p className="text-gray-400 text-sm">{t('tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-swefor-gold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-swefor-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-400 hover:text-swefor-gold transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-400 hover:text-swefor-gold transition-colors">
                  Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-swefor-gold mb-4">{t('contact')}</h3>
            <p className="text-gray-400 text-sm">
              SweFOR Maghreb Network
              <br />
              Building Peace Through Dialogue
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            {t('copyright')} {currentYear}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Deployed on{' '}
            <a
              href="https://coolify.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-swefor-gold hover:underline"
            >
              Coolify
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
