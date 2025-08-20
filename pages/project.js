// pages/projects.js
import Layout from '../components/Layout'
import { ChevronRight } from 'lucide-react'

export default function Projects() {
  const projects = [
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
    },
    {
      id: 3,
      title: 'المنصة الرقمية لقطاع الصحة',
      description: 'المنصة الرقمية لقطاع الصحة هي نظام الكتروني لإدارة المرافق الطبية والمواعيد. تهدف لتطوير قطاع الصحة متابعة التاريخ الطبي للمرضى وإدارة الاستشارات الطبية بشكل فعال. تسهم هذه المنصة في تسهيل الوصول إلى المعلومات الطبية وتحسين إدارة الرعاية الصحية.',
      category: 'قطاع الصحة',
      status: 'في التصميم',
      progress: 30,
      icon: '🏥',
      color: 'bg-red-500',
      startDate: "يناير 2024",
      endDate: "ديسمبر 2025",
      features: [
        'ربط جميع المستشفيات والمراكز الصحية',
        'إدارة السجلات الطبية الإلكترونية',
        'نظام حجز المواعيد الطبية',
        'إدارة المخزون الطبي'
      ]
    },
    {
      id: 4,
      title: 'منصة إدارة النظام القضائي التجاري',
      description: 'منصة إدارة النظام القضائي التجاري تتيع معالجة القضايا التجارية وصور عبر الإنترنت في الوثائق القانونية. معا يسهل إدارة الملفات ويعين محاولة النظام القضائي.',
      category: 'العدالة التجارية',
      status: 'مخطط',
      progress: 15,
      icon: '⚖️',
      color: 'bg-purple-500',
      startDate: "يوليو 2024",
      endDate: "يونيو 2026",
      features: [
        'إدارة الملفات القضائية إلكترونياً',
        'نظام المتابعة والإشعارات',
        'أرشفة القرارات القضائية',
        'إحصائيات وتقارير المحاكم'
      ]
    },
    {
      id: 5,
      title: 'نظام المعلومات الوطني للمياه والصرف الصحي (SNEAS)',
      description: 'نظام المعلومات الوطني للمياه والصرف الصحي (SNEAS) هو قاعدة بيانات تتيع معالجة جالة البيئة الصحية للمياه من البلد، معا يسهل إدارة الموارد المائية والصرف الصحي.',
      category: 'المياه والصرف الصحي',
      status: 'قيد الدراسة',
      progress: 5,
      icon: '💧',
      color: 'bg-cyan-500',
      startDate: "سبتمبر 2024",
      endDate: "مارس 2027",
      features: [
        'مراقبة جودة المياه في الوقت الفعلي',
        'إدارة شبكات التوزيع',
        'فوترة إلكترونية للخدمات',
        'نظام صيانة وقائية'
      ]
    },
    {
      id: 6,
      title: 'تعزيز التجارة الرقمية في الوزارة',
      description: 'برنامج تدريب متقدم لموظفي الحكومة المحليين لتحسين مهاراتهم في استخدام الأدوات الرقمية الحديثة وإدارة البيانات واستخدام المنصات الرقمية الحكومية.',
      status: 'جاري التنفيذ',
      progress: 75,
      category: 'تدريب وتأهيل',
      icon: '📚',
      color: 'bg-green-500',
      startDate: "يناير 2024",
      endDate: "ديسمبر 2024",
      features: [
        'دورات تدريبية متخصصة',
        'شهادات معتمدة',
        'تطبيق عملي على الأنظمة',
        'متابعة الأداء والتقييم'
      ]
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'مكتمل': 'bg-green-100 text-green-800',
      'جاري التنفيذ': 'bg-blue-100 text-blue-800',
      'في التصميم': 'bg-yellow-100 text-yellow-800',
      'مخطط': 'bg-gray-100 text-gray-800',
      'قيد الدراسة': 'bg-purple-100 text-purple-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'خدمات حكومية': 'bg-blue-50 text-blue-700 border-blue-200',
      'المرور والنقل': 'bg-orange-50 text-orange-700 border-orange-200',
      'قطاع الصحة': 'bg-red-50 text-red-700 border-red-200',
      'العدالة التجارية': 'bg-purple-50 text-purple-700 border-purple-200',
      'المياه والصرف الصحي': 'bg-cyan-50 text-cyan-700 border-cyan-200',
      'تدريب وتأهيل': 'bg-green-50 text-green-700 border-green-200'
    };
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const completedCount = projects.filter(p => p.status === 'مكتمل').length;
  const inProgressCount = projects.filter(p => p.status === 'جاري التنفيذ').length;
  const plannedCount = projects.filter(p => ['مخطط', 'قيد الدراسة', 'في التصميم'].includes(p.status)).length;

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">المشاريع والمبادرات الرقمية</h1>
          <p className="text-xl text-center opacity-90">
            استكشف المشاريع الرقمية الرائدة التي تقود التحول التكنولوجي في موريتانيا
          </p>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          
          {/* Statistics */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">{completedCount}</div>
                <p className="text-green-800 font-medium">مشاريع مكتملة</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{inProgressCount}</div>
                <p className="text-blue-800 font-medium">قيد التنفيذ</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center border border-yellow-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2">1</div>
                <p className="text-yellow-800 font-medium">في التصميم</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-gray-600 mb-2">{plannedCount}</div>
                <p className="text-gray-800 font-medium">مخطط ومقترح</p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Project Header */}
                  <div className={`h-2 ${project.color}`}></div>
                  
                  <div className="p-6">
                    {/* Category and Status */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{project.icon}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">الميزات الأساسية:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start text-xs text-gray-600">
                              <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 ml-1 transform rotate-180" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>نسبة الإنجاز</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${project.color}`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                      <span>بداية: {project.startDate}</span>
                      <span>نهاية: {project.endDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              هل لديك فكرة مشروع رقمي؟
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              نحن نسعى دائماً لتطوير حلول رقمية مبتكرة تخدم المواطنين وتحسن الخدمات الحكومية. 
              شاركنا أفكارك ومقترحاتك للمساهمة في التحول الرقمي.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center sm:flex-row-reverse">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                اقتراح مشروع جديد
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                عرض جميع المشاريع
              </button>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}