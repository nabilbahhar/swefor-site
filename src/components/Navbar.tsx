'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';
import Image from 'next/image';

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
    <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-swefor-gold/20 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="SweFOR Maghreb Network Logo"
              width={140}
              height={60}
              className="object-contain mix-blend-lighten"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-swefor-gold text-lg font-semibold tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-swefor-gold after:transition-all after:duration-300 hover:after:w-full transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-swefor-gold/20 py-4 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-200 hover:text-swefor-gold hover:bg-gray-800/50 rounded-lg transition-colors text-lg font-semibold"
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
