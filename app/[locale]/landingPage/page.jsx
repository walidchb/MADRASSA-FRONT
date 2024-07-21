'use client';
import React from 'react';
import NavBar from '@/components/navBar/navBar';
import SectionOne from '@/components/landingPage/SectionOne';
import SectionTwo from '@/components/landingPage/SectionTwo';
import SectioonThree from '@/components/landingPage/SectioonThree';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
function LandingPage() {
  const router = useRouter();
  const locale = useLocale();
  return (
    <div>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectioonThree />

      <button
        className="bg-green-400"
        onClick={() => {
          router.push(`/${locale}/register`);
        }}
      >
        register
      </button>
    </div>
  );
}

export default LandingPage;
