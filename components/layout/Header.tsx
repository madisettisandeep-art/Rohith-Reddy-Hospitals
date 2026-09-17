'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Navigation, Menu, X, ChevronDown } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Doctor', href: '/about/dr-rohith-reddy' },
    {
      name: 'Services',
      href: '/services',
      hasChildren: true,
      children: [
        { name: 'All Services', href: '/services' },
        { name: 'General Medicine', href: '/services/general-medicine' },
        { name: 'Diabetes Care', href: '/services/diabetes-care' },
        { name: 'ECG & Diagnostics', href: '/services/diagnostic-services' },
        { name: 'Preventive Health', href: '/services/preventive-healthcare' },
      ],
    },
    { name: 'Specialities', href: '/specialities' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Location', href: '/location' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFCF8]/95 backdrop-blur-md shadow-sm border-b border-brand-border/80 py-2.5'
          : 'bg-[#FFFCF8] border-b border-brand-border/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Official Logo Brand Asset */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-orange-500 rounded-lg p-0.5 transition-transform hover:scale-[1.03]"
            aria-label="Rohith Reddy Hospitals Homepage"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Rohith Reddy Hospitals Official Logo"
                fill
                sizes="(max-width: 640px) 56px, 64px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-brand-darkText" aria-label="Main Navigation">
            {navLinks.map((link) =>
              link.hasChildren ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <button
                    type="button"
                    className={`px-3 py-2 rounded-lg inline-flex items-center gap-1 transition-colors hover:text-brand-orange-600 hover:bg-brand-cream ${
                      pathname.startsWith('/services') ? 'text-brand-orange-600 font-semibold bg-brand-orange-50' : ''
                    }`}
                    aria-expanded={servicesDropdown}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full mt-1 w-56 bg-[#FFF9F0] border border-brand-border rounded-xl shadow-lg p-2 transition-all duration-200 ${
                      servicesDropdown
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {link.children?.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={`block px-3 py-2 text-xs font-medium rounded-lg transition-colors hover:bg-brand-orange-100/60 hover:text-brand-orange-700 ${
                          pathname === child.href ? 'bg-brand-orange-100 text-brand-orange-800 font-semibold' : 'text-brand-darkText'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg transition-colors hover:text-brand-orange-600 hover:bg-brand-cream ${
                    pathname === link.href ? 'text-brand-orange-600 font-semibold bg-brand-orange-50' : ''
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${hospitalSettings.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-darkText bg-brand-cream hover:bg-brand-orange-50 hover:text-brand-orange-700 border border-brand-border rounded-full transition-all"
              title="Call Hospital Desk"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange-600" />
              <span>Call Now</span>
            </a>

            <a
              href={hospitalSettings.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-darkText bg-brand-cream hover:bg-brand-orange-50 hover:text-brand-orange-700 border border-brand-border rounded-full transition-all"
              title="Get Directions on Google Maps"
            >
              <Navigation className="w-3.5 h-3.5 text-brand-copper" />
              <span>Directions</span>
            </a>

            <Link
              href="/appointments"
              className="btn-primary text-xs uppercase tracking-wider py-2.5 px-4 shadow-cta"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Right Bar: Call button + Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${hospitalSettings.phone}`}
              aria-label="Call Hospital Desk"
              className="p-2 text-brand-orange-700 bg-brand-orange-50 border border-brand-orange-200 rounded-full"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-darkText hover:text-brand-orange-600 hover:bg-brand-cream rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border/80 bg-[#FFF9F0] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1 text-base font-medium text-brand-darkText">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  className={`px-3 py-2.5 rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'bg-brand-orange-100/70 text-brand-orange-700 font-semibold'
                      : 'hover:bg-brand-cream hover:text-brand-orange-600'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasChildren && (
                  <div className="pl-4 space-y-1 py-1 border-l-2 border-brand-orange-300 ml-3">
                    {link.children?.slice(1).map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={`block px-3 py-1.5 text-sm rounded-lg ${
                          pathname === child.href
                            ? 'text-brand-orange-700 font-semibold'
                            : 'text-brand-secondaryText hover:text-brand-orange-600'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="pt-4 border-t border-brand-border/60 flex flex-col gap-2.5">
            <Link
              href="/appointments"
              className="btn-primary w-full text-center py-3 text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Link>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${hospitalSettings.phone}`}
                className="btn-secondary text-center py-2 text-xs"
              >
                <Phone className="w-3.5 h-3.5 mr-1" />
                Call Now
              </a>
              <a
                href={hospitalSettings.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center py-2 text-xs"
              >
                <Navigation className="w-3.5 h-3.5 mr-1" />
                Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
