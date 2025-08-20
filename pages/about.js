// pages/About.js
import Layout from '../components/Layout';
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t, language } = useLanguage();
  
  return (
    <Layout>
      {/* الترويسة */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">{t('aboutTitle')}</h1>
          <p className="text-xl text-center opacity-90">
            {t('aboutSubtitle')}
          </p>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          
          {/* الرؤية والمهمة */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-800">{t('ourVision')}</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  أن نكون الرائد الإقليمي في مجال التحول الرقمي، ونساهم في بناء موريتانيا رقمية متطورة 
                  تواكب أحدث التطورات التكنولوجية العالمية وتقدم خدمات رقمية عالية الجودة لجميع المواطنين والمؤسسات.
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-lg border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center ml-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h2 className="text-3xl font-bold text-green-800">{t('ourMission')}</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  قيادة وتنسيق جهود التحول الرقمي في موريتانيا من خلال تطوير البنية التحتية الرقمية، 
                  وتقديم الخدمات الإلكترونية المتطورة، وبناء القدرات البشرية في مجال التكنولوجيا.
                </p>
              </div>
            </div>
          </section>

          {/* قيمنا */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">{t('coreValues')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('innovation')}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'نسعى للتميز من خلال الحلول المبتكرة والتكنولوجيا المتطورة' : 'Nous visons l\'excellence à travers des solutions innovantes et des technologies avancées'}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('collaboration')}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'نؤمن بقوة الشراكة والعمل الجماعي لتحقيق أهدافنا المشتركة' : 'Nous croyons en la puissance du partenariat et du travail d\'équipe pour atteindre nos objectifs communs'}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('efficiency')}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'نلتزم بتقديم خدمات عالية الجودة بأقصى درجات الفعالية' : 'Nous nous engageons à fournir des services de haute qualité avec une efficacité maximale'}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('security')}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'نضمن أعلى معايير الأمن والخصوصية في جميع حلولنا الرقمية' : 'Nous garantissons les plus hauts standards de sécurité et de confidentialité dans toutes nos solutions numériques'}</p>
              </div>
            </div>
          </section>

          {/* الجدول الزمني التاريخي */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">{t('history')}</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                
                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                  </div>
                  <div className="order-1 bg-blue-50 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-blue-200">
                    <h3 className="mb-3 font-bold text-blue-800 text-xl">2020 - التأسيس</h3>
                    <p className="text-sm leading-snug tracking-wide text-gray-600">
                      تأسيس الوكالة الرقمية للدولة كمؤسسة متخصصة في قيادة التحول الرقمي
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                  </div>
                  <div className="order-1 bg-green-50 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-green-200">
                    <h3 className="mb-3 font-bold text-green-800 text-xl">2021 - البداية</h3>
                    <p className="text-sm leading-snug tracking-wide text-gray-600">
                      إطلاق أول المشاريع الرقمية وبناء الفريق المتخصص
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full">
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-orange-600 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                  </div>
                  <div className="order-1 bg-orange-50 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-orange-200">
                    <h3 className="mb-3 font-bold text-orange-800 text-xl">2022-2024 - التوسع</h3>
                    <p className="text-sm leading-snug tracking-wide text-gray-600">
                      توسيع نطاق العمل وإطلاق مشاريع كبرى في مختلف القطاعات
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* الهيكل التنظيمي */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">{t('organizationalStructure')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">إد</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{t('generalManagement')}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'التخطيط الاستراتيجي والإشراف العام على جميع الأنشطة' : 'Planification stratégique et supervision générale de toutes les activités'}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{language === 'ar' ? 'تق' : 'Tech'}</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{t('technicalDepartment')}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'تطوير وصيانة الأنظمة والتطبيقات الرقمية' : 'Développement et maintenance des systèmes et applications numériques'}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{language === 'ar' ? 'مش' : 'Proj'}</span>
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">{t('projectManagement')}</h3>
                <p className="text-gray-600">{language === 'ar' ? 'تنسيق وإدارة تنفيذ المشاريع الرقمية المختلفة' : 'Coordination et gestion de l\'exécution des différents projets numériques'}</p>
              </div>
            </div>
          </section>

          {/* دعوة للتواصل */}
          <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">{t('contactCTA')}</h3>
            <p className="mb-6 opacity-90">
              {t('contactCTAText')}
            </p>
            <Link href="/contact">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                {t('contactNow')}
              </button>
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  )
}