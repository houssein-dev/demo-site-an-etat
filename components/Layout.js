// components/Layout.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import { useLanguage } from '../contexts/LanguageContext';

export default function Layout({ children }) {
  const { language, t } = useLanguage();
  
  return (
    <div 
      className="min-h-screen flex flex-col bg-gray-50" 
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      style={{ fontFamily: language === 'ar' ? 'inherit' : 'Arial, sans-serif' }}
    >
      <Navbar />
      
      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 ml-3">
                  <Image
                    src="/images/logo.jpg"
                    alt="Logo Agence Numérique"
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('agencyName')}</h3>
                  <p className="text-sm opacity-80">{t('agencySubtitle')}</p>
                </div>
              </div>
              <p className="text-blue-200 mb-4">
                {language === 'ar' 
                  ? 'نقود التحول الرقمي في موريتانيا من خلال تطوير حلول تقنية مبتكرة وتقديم خدمات رقمية عالية الجودة.'
                  : 'Nous dirigeons la transformation numérique en Mauritanie en développant des solutions techniques innovantes et en fournissant des services numériques de haute qualité.'
                }
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-blue-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-blue-200 hover:text-white">{t('aboutUs')}</Link></li>
                <li><Link href="/project" className="text-blue-200 hover:text-white">{t('projects')}</Link></li>
           
                <li><Link href="/recruitment" className="text-blue-200 hover:text-white">{t('recruitment')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('contactInfo')}</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center">
                  <span className="ml-2">📍</span>
                  {language === 'ar' ? 'نواكشوط، موريتانيا' : 'Nouakchott, Mauritanie'}
                </li>
                <li className="flex items-center">
                  <span className="ml-2">📧</span>
                  contact@anetat.mr
                </li>
                <li className="flex items-center">
                  <span className="ml-2">📞</span>
                  +222 45 25 XX XX
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}