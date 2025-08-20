// contexts/LanguageContext.js
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ar'); // 'ar' pour arabe, 'fr' pour français

  const translations = {
    ar: {
      // Navigation
      home: 'الرئيسية',
      about: 'عن الوكالة',
      projects: 'المشاريع',
      events: 'الفعاليات',
     
      roadmap: 'خارطة الطريق',
      recruitment: 'التوظيف',
      contact: 'اتصل بنا',
      
      // Header
      agencyName: 'الوكالة الرقمية للدولة',
      agencySubtitle: 'AN-ETAT',
      heroTitle: 'الوكالة الرقمية للدولة',
      heroSubtitle: 'قيادة التحول الرقمي نحو مستقبل متطور ومبتكر',
      discoverProjects: 'اكتشف مشاريعنا',
      contactUs: 'تواصل معنا',
      
      // Projects Page
      projectsTitle: 'المشاريع والمبادرات الرقمية',
      projectsSubtitle: 'استكشف المشاريع الرقمية الرائدة التي تقود التحول التكنولوجي في موريتانيا',
      completedProjects: 'مشاريع مكتملة',
      inProgress: 'قيد التنفيذ',
      inDesign: 'في التصميم',
      planned: 'مخطط ومقترح',
      progressRate: 'نسبة الإنجاز',
      startDate: 'بداية',
      endDate: 'نهاية',
      mainFeatures: 'الميزات الأساسية',
      suggestProject: 'اقتراح مشروع جديد',
      viewAllProjects: 'عرض جميع المشاريع',
      haveProjectIdea: 'هل لديك فكرة مشروع رقمي؟',
      projectIdeaText: 'نحن نسعى دائماً لتطوير حلول رقمية مبتكرة تخدم المواطنين وتحسن الخدمات الحكومية. شاركنا أفكارك ومقترحاتك للمساهمة في التحول الرقمي.',
      
      // Events Page
      eventsTitle: 'الفعاليات والأنشطة',
      eventsSubtitle: 'اكتشف الفعاليات والأنشطة التي تنظمها الوكالة الرقمية للدولة',
      upcomingEvents: 'فعاليات قادمة',
      openRegistration: 'مفتوح للتسجيل',
      completed: 'مكتملة',
      ongoing: 'جارية',
      registerNow: 'سجل الآن',
      registrationClosed: 'انتهى التسجيل',
      suggestEvent: 'اقتراح فعالية',
      viewAllEvents: 'عرض جميع الفعاليات',
      wantToOrganize: 'هل تريد تنظيم فعالية؟',
      eventText: 'نحن نرحب بالشراكة مع المؤسسات والمنظمات لتنظيم فعاليات رقمية مشتركة تساهم في تطوير المجتمع الرقمي في موريتانيا.',
      
      // About Page
      aboutTitle: 'عن الوكالة الرقمية للدولة',
      aboutSubtitle: 'تعرف على رؤيتنا ومهمتنا وقيمنا في قيادة التحول الرقمي',
      ourVision: 'رؤيتنا',
      ourMission: 'مهمتنا',
      coreValues: 'قيمنا الأساسية',
      innovation: 'الابتكار',
      collaboration: 'التعاون',
      efficiency: 'الكفاءة',
      security: 'الأمان',
      history: 'مسيرتنا التاريخية',
      organizationalStructure: 'هيكلنا التنظيمي',
      generalManagement: 'الإدارة العامة',
      technicalDepartment: 'القسم التقني',
      projectManagement: 'إدارة المشاريع',
      contactCTA: 'تواصل معنا',
      contactCTAText: 'هل لديك استفسارات حول خدماتنا أو تريد معرفة المزيد عن مشاريعنا؟',
      contactNow: 'اتصل بنا الآن',
      
      // Footer
      quickLinks: 'روابط سريعة',
      aboutUs: 'من نحن',
      contactInfo: 'تواصل معنا',
      copyright: '© 2024 الوكالة الرقمية للدولة - جميع الحقوق محفوظة',
      
      // Language Switcher
      switchToFrench: 'Français',
      switchToArabic: 'العربية'
    },
    fr: {
      // Navigation
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      events: 'Événements',
      
      roadmap: 'Feuille de route',
      recruitment: 'Recrutement',
      contact: 'Contact',
      
      // Header
      agencyName: 'Agence Numérique de l\'État',
      agencySubtitle: 'AN-ETAT',
      heroTitle: 'Agence Numérique de l\'État',
      heroSubtitle: 'Diriger la transformation numérique vers un avenir évolué et innovant',
      discoverProjects: 'Découvrir nos projets',
      contactUs: 'Nous contacter',
      
      // Projects Page
      projectsTitle: 'Projets et Initiatives Numériques',
      projectsSubtitle: 'Découvrez les projets numériques pionniers qui dirigent la transformation technologique en Mauritanie',
      completedProjects: 'Projets terminés',
      inProgress: 'En cours',
      inDesign: 'En conception',
      planned: 'Planifiés et proposés',
      progressRate: 'Taux de progression',
      startDate: 'Début',
      endDate: 'Fin',
      mainFeatures: 'Fonctionnalités principales',
      suggestProject: 'Suggérer un nouveau projet',
      viewAllProjects: 'Voir tous les projets',
      haveProjectIdea: 'Avez-vous une idée de projet numérique ?',
      projectIdeaText: 'Nous cherchons toujours à développer des solutions numériques innovantes qui servent les citoyens et améliorent les services gouvernementaux. Partagez vos idées et suggestions pour contribuer à la transformation numérique.',
      
      // Events Page
      eventsTitle: 'Événements et Activités',
      eventsSubtitle: 'Découvrez les événements et activités organisés par l\'Agence Numérique de l\'État',
      upcomingEvents: 'Événements à venir',
      openRegistration: 'Inscriptions ouvertes',
      completed: 'Terminés',
      ongoing: 'En cours',
      registerNow: 'S\'inscrire maintenant',
      registrationClosed: 'Inscriptions fermées',
      suggestEvent: 'Suggérer un événement',
      viewAllEvents: 'Voir tous les événements',
      wantToOrganize: 'Voulez-vous organiser un événement ?',
      eventText: 'Nous accueillons le partenariat avec les institutions et organisations pour organiser des événements numériques conjoints qui contribuent au développement de la société numérique en Mauritanie.',
      
      // About Page
      aboutTitle: 'À propos de l\'Agence Numérique de l\'État',
      aboutSubtitle: 'Découvrez notre vision, notre mission et nos valeurs dans la direction de la transformation numérique',
      ourVision: 'Notre Vision',
      ourMission: 'Notre Mission',
      coreValues: 'Nos Valeurs Fondamentales',
      innovation: 'Innovation',
      collaboration: 'Collaboration',
      efficiency: 'Efficacité',
      security: 'Sécurité',
      history: 'Notre Parcours Historique',
      organizationalStructure: 'Notre Structure Organisationnelle',
      generalManagement: 'Direction Générale',
      technicalDepartment: 'Département Technique',
      projectManagement: 'Gestion de Projets',
      contactCTA: 'Contactez-nous',
      contactCTAText: 'Avez-vous des questions sur nos services ou souhaitez-vous en savoir plus sur nos projets ?',
      contactNow: 'Contactez-nous maintenant',
      
      // Footer
      quickLinks: 'Liens rapides',
      aboutUs: 'À propos',
      contactInfo: 'Contactez-nous',
      copyright: '© 2024 Agence Numérique de l\'État - Tous droits réservés',
      
      // Language Switcher
      switchToFrench: 'Français',
      switchToArabic: 'العربية'
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'fr' : 'ar');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

