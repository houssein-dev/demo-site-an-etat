// data/translations.js
export const projectData = {
  ar: [
    {
      id: 1,
      title: 'منصة "عين" - نظام إدارة الشكاوى',
      description: 'منصة "عين" هي بوابة إلكترونية تتيح للمواطنين الإبلاغ عن المشاكل الإدارية ومتابعة تطور شكاواهم. وهدف تعزيز الشفافية وتحسين معالجة برسائل الشكوى.',
      category: 'خدمات حكومية',
      status: 'مكتمل',
      progress: 100,
      icon: '👁️',
      color: 'bg-green-500',
      startDate: "يناير 2023",
      endDate: "يونيو 2023",
      features: [
        'واجهة سهلة الاستخدام للمواطنين',
        'نظام تتبع الشكاوى في الوقت الفعلي',
        'تصنيف تلقائي للشكاوى',
        'نظام إشعارات متطور'
      ]
    },
    {
      id: 2,
      title: 'منصة إدارة المخالفات المرورية',
      description: 'منصة إدارة المخالفات المرورية هي نظام رقمي يتيح تسجيل المخالفات ومعالجتها ومعالجة عبر الإنترنت. تسهل هذه المنصة تسجيل المخالفات وإصدار العقوبات بطريقة رقمية وحفظ السجلات والمساعدة على الطريق.',
      category: 'المرور والنقل',
      status: 'جاري التنفيذ',
      progress: 85,
      icon: '🚗',
      color: 'bg-blue-500',
      startDate: "مارس 2024",
      endDate: "ديسمبر 2024",
      features: [
        'تسجيل المخالفات إلكترونياً',
        'دفع الغرامات عبر الإنترنت',
        'نظام معالجة الطعون',
        'إحصائيات وتقارير شاملة'
      ]
    }
  ],
  fr: [
    {
      id: 1,
      title: 'Plateforme "Ain" - Système de Gestion des Plaintes',
      description: 'La plateforme "Ain" est un portail électronique permettant aux citoyens de signaler les problèmes administratifs et de suivre l\'évolution de leurs plaintes. Elle vise à renforcer la transparence et améliorer le traitement des plaintes.',
      category: 'Services gouvernementaux',
      status: 'Terminé',
      progress: 100,
      icon: '👁️',
      color: 'bg-green-500',
      startDate: "Janvier 2023",
      endDate: "Juin 2023",
      features: [
        'Interface conviviale pour les citoyens',
        'Système de suivi des plaintes en temps réel',
        'Classification automatique des plaintes',
        'Système de notifications avancé'
      ]
    },
    {
      id: 2,
      title: 'Plateforme de Gestion des Infractions Routières',
      description: 'La plateforme de gestion des infractions routières est un système numérique permettant l\'enregistrement et le traitement des infractions en ligne. Cette plateforme facilite l\'enregistrement des infractions et l\'émission des sanctions de manière numérique.',
      category: 'Trafic et Transport',
      status: 'En cours',
      progress: 85,
      icon: '🚗',
      color: 'bg-blue-500',
      startDate: "Mars 2024",
      endDate: "Décembre 2024",
      features: [
        'Enregistrement électronique des infractions',
        'Paiement des amendes en ligne',
        'Système de traitement des recours',
        'Statistiques et rapports complets'
      ]
    }
  ]
};

export const eventData = {
  ar: [
    {
      id: 1,
      title: 'مؤتمر التحول الرقمي 2024',
      description: 'مؤتمر سنوي يجمع خبراء التكنولوجيا وقادة الحكومة لمناقشة أحدث التطورات في مجال التحول الرقمي واستراتيجيات المستقبل.',
      category: 'مؤتمر',
      status: 'قادم',
      date: '15-17 ديسمبر 2024',
      time: '09:00 - 17:00',
      location: 'نواكشوط، موريتانيا',
      attendees: 500,
      icon: '🎯',
      color: 'bg-blue-500',
      registration: true,
      features: [
        'جلسات نقاش تفاعلية',
        'عرض أحدث التقنيات',
        'شبكة علاقات مهنية',
        'شهادات مشاركة'
      ]
    },
    {
      id: 2,
      title: 'ورشة عمل الذكاء الاصطناعي',
      description: 'ورشة تدريبية متخصصة في تطبيقات الذكاء الاصطناعي في القطاع الحكومي، تهدف إلى تطوير مهارات الموظفين.',
      category: 'ورشة عمل',
      status: 'جاري التسجيل',
      date: '20-22 نوفمبر 2024',
      time: '10:00 - 16:00',
      location: 'مركز التدريب الرقمي',
      attendees: 50,
      icon: '🤖',
      color: 'bg-green-500',
      registration: true,
      features: [
        'تدريب عملي على أدوات الذكاء الاصطناعي',
        'حالات دراسية واقعية',
        'دعم فني متخصص',
        'مواد تدريبية شاملة'
      ]
    }
  ],
  fr: [
    {
      id: 1,
      title: 'Conférence sur la Transformation Numérique 2024',
      description: 'Conférence annuelle réunissant des experts en technologie et des dirigeants gouvernementaux pour discuter des derniers développements en matière de transformation numérique.',
      category: 'Conférence',
      status: 'À venir',
      date: '15-17 Décembre 2024',
      time: '09:00 - 17:00',
      location: 'Nouakchott, Mauritanie',
      attendees: 500,
      icon: '🎯',
      color: 'bg-blue-500',
      registration: true,
      features: [
        'Sessions de discussion interactives',
        'Présentation des dernières technologies',
        'Réseautage professionnel',
        'Certificats de participation'
      ]
    },
    {
      id: 2,
      title: 'Atelier sur l\'Intelligence Artificielle',
      description: 'Atelier de formation spécialisé dans les applications de l\'intelligence artificielle dans le secteur gouvernemental.',
      category: 'Atelier',
      status: 'Inscriptions ouvertes',
      date: '20-22 Novembre 2024',
      time: '10:00 - 16:00',
      location: 'Centre de Formation Numérique',
      attendees: 50,
      icon: '🤖',
      color: 'bg-green-500',
      registration: true,
      features: [
        'Formation pratique sur les outils d\'IA',
        'Études de cas réels',
        'Support technique spécialisé',
        'Matériel de formation complet'
      ]
    }
  ]
};

