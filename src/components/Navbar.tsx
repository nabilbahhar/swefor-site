'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';
import Image from 'next/image';
import logo from '@/public/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');

  const navLinks: Array<{ href: any; label: string }> = [
    { href: '/', label: t('home') },
    { href: '/timeline', label: t('timeline') },
    { href: '/travels', label: t('travels') },
    { href: '/people', label: t('people') },
    { href: '/projects', label: t('projects') },
    { href: '/documents', label: t('documents') },
    { href: '/vision', label: t('vision') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Desktop: Logo + Menu as one truly centered block */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo}
                alt="SweFOR"
                width={120}
                height={56}
                className="h-16 w-auto object-contain mix-blend-lighten"
              />
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-swefor-gold dark:hover:text-swefor-gold relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-swefor-gold after:transition-all after:duration-300 hover:after:w-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile: logo */}
          <Link href="/" className="flex-shrink-0 lg:hidden mr-auto">
            <Image
              src={logo}
              alt="SweFOR"
              width={120}
              height={56}
              className="h-16 w-auto object-contain mix-blend-lighten"
            />
          </Link>

          {/* EN/FR + burger: absolute right so it doesn't push the center block */}
          <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-swefor-gold hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
