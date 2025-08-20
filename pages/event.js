// pages/events.js
import Layout from '../components/Layout';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Events() {
  const events = [
    {
      id: 1,
      title: "فعالية إطلاق البوابة الوطنية",
      excerpt: "تم تنظيم فعالية إطلاق البوابة الوطنية التي تهدف إلى تسهيل الوصول إلى جميع الخدمات الحكومية الإلكترونية من خلال منصة موحدة ومتطورة.",
      date: "2024-03-15",
      category: "إطلاق",
      image: "./images/article1.jpg"
    },
    {
      id: 2,
      title: "ورشة تدريبية حول التحول الرقمي",
      excerpt: "نُظمت ورشة تدريبية شاملة لتطوير قدرات الموظفين في استخدام التقنيات الحديثة وأدوات التحول الرقمي.",
      date: "2024-03-10",
      category: "تدريب",
      image: "./images/article2.jpg"
    },
    {
      id: 3,
      title: "شراكة مع الجامعات لتطوير الكفاءات الرقمية",
      excerpt: "تم توقيع اتفاقيات شراكة استراتيجية مع عدة جامعات وطنية لتطوير البرامج الأكاديمية المتخصصة في المجال الرقمي.",
      date: "2024-03-05",
      category: "شراكات",
      image: "./images/article3.jpg"
    },
    {
      id: 4,
      title: "فعالية عرض مشروع الهوية الرقمية",
      excerpt: "تم تقديم مشروع الهوية الرقمية الموحدة الذي سيسهل على المواطنين الوصول لجميع الخدمات الحكومية برقم موحد.",
      date: "2024-02-28",
      category: "مشاريع",
      image: "./images/article4.jpg"
    }
  ];

  const carouselImages = [
    "./images/slide1.jpg",
    "./images/slide2.jpg",
    "./images/slide3.jpg",
    "./images/slide4.jpg",
    "./images/slide5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // تغيير تلقائي كل 3 ثواني
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <Layout>
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">الفعاليات</h1>
          <p className="text-xl text-center mt-4 opacity-90">
            تابع أحدث الفعاليات والأنشطة الخاصة بالوكالة الرقمية
          </p>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">

          {/* Events Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-800 border-b-2 border-blue-200 pb-2">
              فعاليات الوكالة
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event) => (
                <article key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition={event.id === 3 ? "top" : "center"}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {event.category}
                      </span>
                      <span className="text-gray-500 text-sm">{event.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-xl">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.excerpt}
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                      تفاصيل الفعالية
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Carousel Section */}
          <section className="mb-16 relative">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">
              معرض الصور
            </h2>

            <div className="relative w-full h-[600px] flex items-center justify-center">

              {/* Slide Image */}
              <Image
                src={carouselImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition={currentIndex === 3 || currentIndex === 4 ? "40% 40%" : "center"}
                className="transition-transform duration-700 ease-in-out rounded-lg"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute -left-10 text-gray-800 bg-white bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full z-20"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-10 text-gray-800 bg-white bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full z-20"
              >
                &#10095;
              </button>

            </div>

            {/* Indicators (dots) */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    currentIndex === index ? "bg-purple-800" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>

          </section>

        </div>
      </main>
    </Layout>
  );
}
