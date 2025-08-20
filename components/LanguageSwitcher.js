// components/LanguageSwitcher.js
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
      style={{ 
        direction: language === 'ar' ? 'rtl' : 'ltr',
        fontFamily: language === 'ar' ? 'inherit' : 'Arial, sans-serif'
      }}
    >
      {language === 'ar' ? t('switchToFrench') : t('switchToArabic')}
    </button>
  );
}

