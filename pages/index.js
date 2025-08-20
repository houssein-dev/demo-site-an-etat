import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">{t('heroTitle')}</h1>
          <p className="text-xl mb-8">{t('heroSubtitle')}</p>
          <div className="flex justify-center gap-4">
            <Link href="/project">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                {t('discoverProjects')}
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition">
                {t('contactUs')}
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Presentation Section */}
        <section id="presentation" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-blue-800">عرض تقديمي للوكالة الرقمية للدولة</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  تُعد الوكالة الرقمية للدولة المؤسسة الرائدة في مجال التحول الرقمي في موريتانيا، حيث تسعى إلى 
                  تطوير وتحديث البنية التحتية الرقمية وتعزيز الخدمات الإلكترونية الحكومية لخدمة المواطنين والمؤسسات 
                  على أكمل وجه.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  نعمل على تنفيذ استراتيجية شاملة للتحول الرقمي تشمل جميع القطاعات الحكومية، مع التركيز على 
                  الابتكار والجودة في تقديم الخدمات الرقمية المتطورة.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800">50+</h3>
                    <p className="text-gray-600">مشروع رقمي</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800">25+</h3>
                    <p className="text-gray-600">وزارة شريكة</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold text-orange-800">1M+</h3>
                    <p className="text-gray-600">مستفيد</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <Image
                    src="./images/presentation.jpg"
                    alt="صورة تقديمية للوكالة"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Director Message Section */}
        <section id="director" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <div className="bg-white h-96 rounded-lg shadow-lg flex items-center justify-center mb-4">
                  <Image
                    src="./images/directeur.jpg"
                    alt="صورة المدير العام"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover h-full w-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">المدير العام</h3>
                <p className="text-gray-600">الوكالة الرقمية للدولة</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-blue-800">كلمة المدير العام</h2>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "يسرني أن أرحب بكم في الموقع الرسمي للوكالة الرقمية للدولة. نحن نعيش في عصر التطور 
                    التكنولوجي السريع، ومن هذا المنطلق تسعى الوكالة إلى مواكبة هذا التطور من خلال تنفيذ 
                    استراتيجية شاملة للتحول الرقمي."
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "هدفنا هو بناء موريتانيا رقمية متطورة تواكب التطورات العالمية في مجال التكنولوجيا، 
                    وتقدم خدمات رقمية متميزة للمواطنين والمؤسسات. نحن ملتزمون بالشفافية والجودة في 
                    جميع أعمالنا."
                  </p>
                  <p className="text-gray-600 font-semibold">
                    المدير العام - الوكالة الرقمية للدولة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">آخر الأخبار</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* خبر 1 */}
              <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <Image
                  src="./images/news1.jpg"
                  alt="خبر 1"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">إطلاق منصة حكومية جديدة</h3>
                  <p className="text-gray-600 text-sm">
                    تم إطلاق منصة جديدة تهدف إلى تسهيل الوصول إلى الخدمات الرقمية للمواطنين.
                  </p>
                </div>
              </div>
              {/* خبر 2 */}
              <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <Image
                  src="./images/news2.jpg"
                  alt="خبر 2"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">شراكة مع وزارات الدولة</h3>
                  <p className="text-gray-600 text-sm">
                    وقعت الوكالة الرقمية اتفاقيات تعاون مع عدد من الوزارات لدعم التحول الرقمي.
                  </p>
                </div>
              </div>
              {/* خبر 3 */}
              <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <Image
                  src="./images/news3.jpg"
                  alt="خبر 3"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">ورشات تدريبية للموظفين</h3>
                  <p className="text-gray-600 text-sm">
                    تنظيم ورشات تدريبية لرفع الكفاءات الرقمية لدى موظفي الإدارات الحكومية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
