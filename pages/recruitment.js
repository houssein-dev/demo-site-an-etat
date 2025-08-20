// pages/recruitment.js
import Layout from '../components/Layout'

export default function Recruitment() {
  const jobOffers = [
    {
      id: 1,
      title: "مطور تطبيقات الويب",
      department: "القسم التقني",
      type: "دوام كامل",
      location: "نواكشوط",
      experience: "3-5 سنوات",
      deadline: "2025/03/15",
      requirements: [
        "خبرة في React.js و Node.js",
        "معرفة بقواعد البيانات MySQL/PostgreSQL",
        "مهارات في تصميم APIs",
        "إتقان اللغة العربية والفرنسية"
      ],
      responsibilities: [
        "تطوير تطبيقات الويب للخدمات الحكومية",
        "صيانة وتحديث الأنظمة الموجودة",
        "التعاون مع فريق التصميم والمشاريع",
        "كتابة الوثائق التقنية"
      ]
    },
    {
      id: 2,
      title: "محلل أنظمة",
      department: "إدارة المشاريع",
      type: "دوام كامل",
      location: "نواكشوط",
      experience: "2-4 سنوات",
      deadline: "2025/03/20",
      requirements: [
        "شهادة في علوم الحاسوب أو مجال ذي صلة",
        "خبرة في تحليل الأنظمة",
        "مهارات في إدارة المشاريع",
        "إتقان اللغة العربية والإنجليزية"
      ],
      responsibilities: [
        "تحليل متطلبات الأنظمة الجديدة",
        "إعداد التوثيق التقني",
        "التنسيق مع الفرق المختلفة",
        "ضمان جودة التطبيقات"
      ]
    },
    {
      id: 3,
      title: "مختص أمن سيبراني",
      department: "الأمن والحماية",
      type: "دوام كامل",
      location: "نواكشوط",
      experience: "4-6 سنوات",
      deadline: "2025/03/25",
      requirements: [
        "شهادات في الأمن السيبراني",
        "خبرة في أدوات الحماية",
        "معرفة بمعايير الأمن الدولية",
        "إتقان اللغة الإنجليزية"
      ],
      responsibilities: [
        "تطوير سياسات الأمن السيبراني",
        "مراقبة الأنظمة والشبكات",
        "إجراء تقييمات الأمان",
        "التدريب على الأمن السيبراني"
      ]
    }
  ];

  const benefits = [
    {
      title: "راتب تنافسي",
      description: "رواتب مجزية تتماشى مع السوق المحلي والخبرة",
      icon: "💰"
    },
    {
      title: "التطوير المهني",
      description: "برامج تدريب مستمرة وفرص التطوير الوظيفي",
      icon: "📈"
    },
    {
      title: "بيئة عمل متطورة",
      description: "أحدث التقنيات وأدوات العمل المتقدمة",
      icon: "💻"
    },
    {
      title: "التأمين الصحي",
      description: "تغطية صحية شاملة للموظف وعائلته",
      icon: "🏥"
    },
    {
      title: "المرونة في العمل",
      description: "خيارات العمل المرن والعمل عن بُعد",
      icon: "🏠"
    },
    {
      title: "الإجازات",
      description: "نظام إجازات سخي ومتوازن",
      icon: "🌴"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">فرص التوظيف</h1>
          <p className="text-xl text-center opacity-90">
            انضم إلى فريقنا المتخصص وساهم في قيادة التحول الرقمي في موريتانيا
          </p>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          
          {/* Why Join Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">لماذا تنضم إلينا؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Current Openings */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">الوظائف المتاحة حالياً</h2>
            <div className="space-y-6">
              {jobOffers.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {job.department}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {job.type}
                          </span>
                          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            📍 {job.location}
                          </span>
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-600 mb-1">آخر موعد للتقديم</p>
                        <p className="font-bold text-red-600">{job.deadline}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">المتطلبات:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <span className="text-blue-600 ml-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">المسؤوليات:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <span className="text-green-600 ml-2">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                        تقدم الآن
                      </button>
                      <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition font-medium">
                        مشاركة الوظيفة
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">عملية التقديم</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">التقديم الإلكتروني</h3>
                <p className="text-gray-600 text-sm">املأ الطلب الإلكتروني وأرفق سيرتك الذاتية</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">المراجعة الأولية</h3>
                <p className="text-gray-600 text-sm">مراجعة الطلبات من قبل فريق الموارد البشرية</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">المقابلة</h3>
                <p className="text-gray-600 text-sm">مقابلة شخصية أو عبر الفيديو مع الفريق</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">القرار النهائي</h3>
                <p className="text-gray-600 text-sm">إشعار بالقبول وتحديد تاريخ بدء العمل</p>
              </div>
            </div>
          </section>

          {/* Internship Program */}
          <section className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">برنامج التدريب والتكوين</h2>
              <p className="text-gray-700 text-lg">
                نوفر فرص تدريب للطلاب والخريجين الجدد لاكتساب الخبرة العملية في مجال التكنولوجيا
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-purple-800 mb-3">التدريب الصيفي</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• مدة 3 أشهر خلال العطلة الصيفية</li>
                  <li>• للطلاب في السنوات الأخيرة</li>
                  <li>• مشاريع عملية حقيقية</li>
                  <li>• إشراف من خبراء متخصصين</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-purple-800 mb-3">برنامج الخريجين الجدد</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• مدة 6-12 شهر</li>
                  <li>• للخريجين الجدد</li>
                  <li>• تدريب شامل ومتنوع</li>
                  <li>• فرصة للتوظيف الدائم</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                قدم طلب التدريب
              </button>
            </div>
          </section>

          {/* Contact HR */}
          <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">هل لديك أسئلة حول التوظيف؟</h3>
            <p className="mb-6 opacity-90">
              تواصل مع فريق الموارد البشرية للحصول على مزيد من المعلومات
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                📧 hr@an-etat.gov.mr
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition">
                📞 (+222) 45 25 XX XX
              </button>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}