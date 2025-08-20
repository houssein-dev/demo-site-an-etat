// pages/roadmap.js
import Layout from '../components/Layout'

import Head from 'next/head';

export default function Roadmap() {
  const roadmapItems = [
    {
      year: "2024",
      phase: "المرحلة الأولى",
      title: "تعزيز الخدمات الرقمية في الوزارة",
      items: [
        "إطلاق البوابة الوطنية الموحدة للخدمات الحكومية",
        "تطوير منصة الهوية الرقمية الموحدة",
        "رقمنة 15 خدمة حكومية أساسية",
        "تدريب 500 موظف حكومي على استخدام الأنظمة الرقمية"
      ],
      status: "في التنفيذ",
      completion: 65,
      color: "bg-blue-600"
    },
    {
      year: "2025",
      phase: "المرحلة الثانية", 
      title: "التوسع في التحول الرقمي",
      items: [
        "ربط جميع الوزارات بالشبكة الحكومية الموحدة",
        "إطلاق تطبيق موحد للخدمات الحكومية الذكية",
        "تطوير نظام الدفع الإلكتروني الحكومي",
        "إنشاء مراكز خدمة رقمية في جميع الولايات"
      ],
      status: "مخطط",
      completion: 15,
      color: "bg-green-600"
    },
    {
      year: "2026",
      phase: "المرحلة الثالثة",
      title: "الحكومة الذكية المتكاملة", 
      items: [
        "تنفيذ نظام الذكاء الاصطناعي في اتخاذ القرارات",
        "إطلاق منصة البيانات المفتوحة الحكومية",
        "تطبيق تقنيات البلوك تشين في المعاملات الرسمية",
        "تحقيق التكامل الكامل بين جميع الأنظمة الحكومية"
      ],
      status: "مستقبلي",
      completion: 5,
      color: "bg-purple-600"
    }
  ];

  const strategicGoals = [
    {
      icon: "🏛️",
      title: "الحكومة الرقمية",
      description: "تحويل جميع الخدمات الحكومية إلى رقمية بحلول 2026",
      target: "100% رقمنة"
    },
    {
      icon: "👥",
      title: "رضا المواطنين",
      description: "تحسين تجربة المستخدم للخدمات الحكومية الرقمية",
      target: "90% رضا"
    },
    {
      icon: "⚡",
      title: "الكفاءة التشغيلية",
      description: "تقليل وقت معالجة المعاملات الحكومية بنسبة 70%",
      target: "70% توفير وقت"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>خارطة الطريق | الوكالة الرقمية للدولة</title>
        <meta name="description" content="الاستراتيجية والخطة الزمنية للتحول الرقمي في موريتانيا" />
      </Head>

      <div dir="rtl" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">خارطة الطريق الاستراتيجية</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            الخطة الزمنية لتنفيذ التحول الرقمي في موريتانيا 2024-2026
          </p>
        </div>

        {/* المراحل الزمنية */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-2">المراحل التنفيذية</h2>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-32">
                {/* الخط الزمني */}
                <div className={`absolute left-0 sm:left-20 top-0 w-1 h-full ${item.color}`}></div>
                
                {/* النقطة الزمنية */}
                <div className={`absolute left-0 sm:left-16 top-4 w-6 h-6 rounded-full ${item.color} border-4 border-white`}></div>
                
                {/* محتوى المرحلة */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{item.phase}</h3>
                      <h4 className="text-lg font-semibold text-gray-700">{item.title}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.status === "في التنفيذ" ? "bg-green-100 text-green-800" : item.status === "مخطط" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <ul className="list-disc pr-5 space-y-2 mb-4 text-gray-700">
                    {item.items.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`${item.color} h-2.5 rounded-full`} 
                      style={{ width: `${item.completion}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">نسبة الإنجاز: {item.completion}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* الأهداف الاستراتيجية */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-2">الأهداف الاستراتيجية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategicGoals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{goal.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{goal.title}</h3>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium inline-block">
                  {goal.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}