'use client';
import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavBar({ currentScreen }) {
  const locales = ['ar', 'fr'];
  const localePrefix = 'always'; // Default
  const { usePathname } = createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
  const locale = useLocale();
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: `/${locale}`, current: true },
    { name: 'Documentaion', href: `/${locale}/Documentation`, current: false },
    { name: 'Contact', href: `/${locale}/Contact`, current: false },
    { name: 'About', href: `/${locale}/About`, current: false },
  ]);
  const [curScreen, setCurScreen] = useState(currentScreen);
  // useEffect(() => {
  //   setCurScreen(currentScreen);
  // }, []);

  // const navigation = ;
  const [auth, setauth] = useState(false);
  const t = useTranslations('Index');
  const router = useRouter();
  const pathname = usePathname();
  const handleChangeLanguage = (localee) => {
    let loc = '';
    if (locale == 'fr') {
      loc = 'ar';
    } else {
      loc = 'fr';
    }
    router.replace(`/${loc + pathname}`);
  };
  return (
    <div>
      <button
        href="#"
        className="hidden sm:flex justify-center items-center sm:mr-10 text-sm font-medium underline text-gray-400 hover:no-underline"
        onClick={() => {
          handleChangeLanguage(locale);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>

        {locale == 'fr' ? 'AR' : 'FR'}
      </button>
    </div>
  );
}

export default NavBar;
