// pages/Contact.js
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t, language } = useLanguage();
  
  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">{t('contact')}</h1>
          <p className="text-xl text-center opacity-90">
            {language === 'ar' ? 'نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلة التحول الرقمي' : 'Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours de transformation numérique'}
          </p>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          
          {/* Contact Information - Full Width */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-800">{language === 'ar' ? 'معلومات الاتصال' : 'Informations de contact'}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{language === 'ar' ? 'العنوان' : 'Adresse'}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        425C+672, Av. Moktar Ould Daddah<br />
                        {language === 'ar' ? 'نواكشوط، موريتانيا' : 'Nouakchott, Mauritanie'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{language === 'ar' ? 'البريد الإلكتروني' : 'E-mail'}</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@anetat.mr" className="text-blue-600 hover:text-blue-800">
                          contact@anetat.mr
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{language === 'ar' ? 'الهاتف' : 'Téléphone'}</h3>
                      <p className="text-gray-600">+222 45 25 xx xx</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{language === 'ar' ? 'ساعات العمل' : 'Heures de travail'}</h3>
                      <p className="text-gray-600">
                        {language === 'ar' ? 'الأحد - الخميس: 8:00 - 16:00' : 'Dimanche - Jeudi: 8:00 - 16:00'}<br />
                        {language === 'ar' ? 'الجمعة: مغلق' : 'Vendredi: Fermé'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-blue-800">{language === 'ar' ? 'تابعنا على وسائل التواصل الاجتماعي' : 'Suivez-nous sur les réseaux sociaux'}</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:bg-blue-700 transition">
                      <span className="text-lg font-bold">f</span>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold text-gray-900">Facebook</h4>
                      <p className="text-sm text-gray-600">{language === 'ar' ? 'تابعنا على فيسبوك' : 'Suivez-nous sur Facebook'}</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition group">
                    <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center group-hover:bg-sky-600 transition">
                      <span className="text-lg font-bold">t</span>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold text-gray-900">Twitter</h4>
                      <p className="text-sm text-gray-600">{language === 'ar' ? 'تابعنا على تويتر' : 'Suivez-nous sur Twitter'}</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                    <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center group-hover:bg-blue-900 transition">
                      <span className="text-sm font-bold">in</span>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                      <p className="text-sm text-gray-600">{language === 'ar' ? 'تابعنا على لينكدإن' : 'Suivez-nous sur LinkedIn'}</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition group">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center group-hover:bg-red-700 transition">
                      <span className="text-sm font-bold">yt</span>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold text-gray-900">YouTube</h4>
                      <p className="text-sm text-gray-600">{language === 'ar' ? 'قناتنا على يوتيوب' : 'Notre chaîne YouTube'}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 text-center">{language === 'ar' ? 'موقعنا' : 'Notre localisation'}</h3>
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-6xl mb-4">📍</div>
                  <p className="text-gray-600">{language === 'ar' ? 'خريطة الموقع' : 'Carte du site'}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    425C+672, Av. Moktar Ould Daddah, Nouakchott
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}