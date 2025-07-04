// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-x-2 items-center">
      <button
        onClick={() => changeLanguage('en')}
        className="px-3 py-1 bg-blue-800 text-white rounded hover:bg-blue-700 transition text-sm"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className="px-3 py-1 bg-pink-800 text-white rounded hover:bg-pink-700 transition text-sm"
      >
        ES
      </button>
    </div>
  );
};
