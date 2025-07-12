import React from 'react';
import { useRouter } from 'next/router';

const LanguageToggle = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLanguage = (lng: string) => {
    router.push({ pathname, query }, asPath, { locale: lng, scroll: false });
  };

  return (
    <div className="flex">
      <button
        onClick={() => changeLanguage('vi')}
        className={`px-3 py-1 rounded-l ${locale === 'vi'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 dark:bg-gray-200 text-blue-600 '
          }`}
      >
        VI
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-r ${locale === 'en'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 dark:bg-gray-200 text-blue-600 '
          }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;