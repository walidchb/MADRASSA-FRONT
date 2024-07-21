'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
function Register() {
  const router = useRouter();
  const locale = useLocale();
  return (
    <div>
      {' '}
      <button
        className="bg-green-400"
        onClick={() => {
          router.push(`/${locale}/register/school`);
        }}
      >
        school
      </button>
      <button
        className="bg-red-400"
        onClick={() => {
          router.push(`/${locale}/register/individual`);
        }}
      >
        individual
      </button>
    </div>
  );
}

export default Register;
