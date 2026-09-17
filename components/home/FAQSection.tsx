'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { hospitalFAQs } from '@/lib/data/hospital-data';
import { FAQItem } from '@/lib/types';

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = [
    'All',
    'Appointments',
    'General Consultation',
    'Diabetes Care',
    'Diagnostics',
    'Location',
  ];

  const filteredFAQs = activeCategory === 'All'
    ? hospitalFAQs
    : hospitalFAQs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-brand-border/60" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <span className="badge-warm">Got Questions?</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Essential information regarding consultations, appointment bookings, diagnostic services, and hospital visits.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-brand-orange-600 text-white shadow-xs'
                  : 'bg-white text-brand-darkText border border-brand-border hover:bg-brand-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="mt-10 space-y-3">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="hospital-card overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-orange-500 rounded-2xl"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-brand-darkText">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-brand-border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-orange-50 border-brand-orange-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-brand-darkText" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-secondaryText leading-relaxed border-t border-brand-border/40 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    <div className="mt-3 pt-2 flex items-center gap-2">
                      <span className="text-[10px] uppercase font-semibold text-brand-copper bg-brand-cream px-2 py-0.5 rounded border border-brand-beige">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-brand-secondaryText">
          Have a specific query not covered here?{' '}
          <Link href="/contact" className="text-brand-orange-700 font-semibold underline underline-offset-2">
            Contact our hospital reception
          </Link>
        </div>
      </div>
    </section>
  );
}
