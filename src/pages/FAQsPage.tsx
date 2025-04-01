import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

// FAQ category with a list of questions
interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('01');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqCategories: FAQCategory[] = [
    {
      id: '01',
      title: 'About Cureskin',
      items: [
        {
          id: '01-1',
          question: 'What is Cureskin?',
          answer: (
            <p>
              Cureskin is an AI-powered dermatology app that provides personalised, dermatologist-prescribed
              treatment kits for various skin and hair concerns. Through its app, Cureskin allows users to have
              their face and scalp photos analysed for a range of skin and hair conditions, such as acne, dark spots,
              pigmentation, wrinkles, dandruff, hair fall, and more. The app's AI-powered technology, guided by its
              in-house team of dermatologists, accurately detects skin conditions across different skin types.
              The Cureskin app is available on both Android and iOS devices.
            </p>
          )
        },
        {
          id: '01-2',
          question: 'What are the benefits of using Cureskin?',
          answer: (
            <p>
              Cureskin offers personalised skincare solutions that are both prescribed and formulated by dermatologists.
              By analysing uploaded photos and considering your medical history and lifestyle, our dermatologists create
              comprehensive treatment plans with clinically tested, FDA-approved medicated products. Along with personalised
              diet plans and lifestyle recommendations, you receive free monthly check-ups with your dermatologist to monitor
              progress and make necessary adjustments. With convenient app support from your skin expert, you'll receive
              holistic care for healthier skin and hair.
            </p>
          )
        },
        {
          id: '01-3',
          question: 'How does Cureskin treat my skin and hair using only a photo?',
          answer: (
            <div>
              <p className="mb-2">Once you take a photo using the Cureskin app:</p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Our smart AI detects your skin's health and conditions, such as acne, dark circles, pigmentation, and scars, even those invisible to the naked eye, and asks you a few questions.</li>
                <li>Our dermatologists review your AI report to understand your skin and hair conditions.</li>
                <li>The dermatologist curates a treatment regimen specifically for your skin and hair type and needs.</li>
                <li>Your photo serves as a reference for accurate diagnosis and monitoring progress during treatment.</li>
              </ol>
              <p>Get on the path to your healthiest skin ever in just a few clicks!</p>
            </div>
          )
        },
        {
          id: '01-4',
          question: 'Is the Cureskin app effective at treating my skin and hair problems?',
          answer: (
            <p>
              Yes. Cureskin has helped treat skin and hair concerns for over 17 lakh customers. You can explore
              their testimonials on our YouTube channel. Our products are formulated and prescribed by dermatologists.
              With the expertise of over 100+ board-certified dermatologists, the treatment kit is tailored to suit
              your skin type and address your specific concerns. However, it's important to recognise that individual
              results can vary due to factors such as skin type, the severity of the condition, adherence to treatment
              recommendations, and overall health.
            </p>
          )
        },
        {
          id: '01-5',
          question: 'What skin and hair conditions does Cureskin treat?',
          answer: (
            <p>
              Cureskin addresses all your skin and hair issues that can be treated with oral medications, medicated
              ointments, and prescription creams. Cureskin does not provide treatment for conditions requiring surgical
              intervention or cosmetic procedures.
            </p>
          )
        },
        {
          id: '01-6',
          question: 'Does Cureskin have a clinic?',
          answer: (
            <p>
              Cureskin does not have any physical clinics. Cureskin is an online app that provides treatment for your
              skin and hair concerns from dermatologists in the comfort of your home. To avail of our services, download
              the Cureskin app, available on both Android and iOS devices.
            </p>
          )
        },
      ]
    },
    {
      id: '02',
      title: 'About the Cureskin App',
      items: [
        {
          id: '02-1',
          question: 'How do I download the Cureskin app?',
          answer: (
            <div>
              <p className="mb-2">To download the Cureskin app, follow these simple steps:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>For Android users, navigate to the Google Play Store on your device, search for "Cureskin," locate the app in the search results, or simply click this link. Tap "Install" to download and install it on your device. Once installed, open the app and follow the setup instructions to create your account.</li>
                <li>If you're an iOS user, open the App Store on your iPhone, search for "Cureskin," tap on the app in the search results, or simply click this link. Select "Get" to download and install it. After installation, open the app and complete the account setup process. With Cureskin installed, you're ready to address your skin and hair care needs efficiently.</li>
              </ul>
            </div>
          )
        },
        {
          id: '02-2',
          question: 'What are the device requirements for the Cureskin app?',
          answer: (
            <p>
              The Cureskin app is compatible with Android devices running OS version 9 or above, and iOS devices
              running version 13 or above. Please ensure your device's OS version meets these requirements to find
              and download our app from the Google Play Store or the App Store.
            </p>
          )
        },
      ]
    },
    {
      id: '03',
      title: 'About Dermatologists',
      items: [
        {
          id: '03-1',
          question: 'Why should I consult a dermatologist for my skin or hair concern?',
          answer: (
            <p>
              Your skin and hair are unique, and so are their concerns. Using generic skin or hair care products can
              worsen the problem. Instead, do the smart thing and get the advice of a dermatologist with the Cureskin app.
              You can download the Cureskin app on both Android and iOS devices.
            </p>
          )
        },
        {
          id: '03-2',
          question: 'Are the dermatologists at Cureskin certified?',
          answer: (
            <p>
              All our dermatologists are certified by the Indian Association of Dermatologists (IADVL) and possess
              extensive expertise in treating various skin and hair conditions. Millions of people have achieved excellent
              results with Cureskin's expert guidance. You can learn more about our dermatologists here.
            </p>
          )
        },
      ]
    },
    {
      id: '04',
      title: 'About Your Photos',
      items: [
        {
          id: '04-1',
          question: 'Why do dermatologists need my photos?',
          answer: (
            <p>
              The dermatologists at Cureskin use your photos to analyse and treat your skin and hair concerns.
              According to your given photos and details, they prepare the correct treatment to suit your skin
              and hair needs. Rest assured, in the Cureskin app your photos remain completely safe and confidential.
              None of these photos are used or circulated without your consent.
            </p>
          )
        },
        {
          id: '04-2',
          question: 'Are my photos secure with Cureskin?',
          answer: (
            <p>
              Your photos are 100% secure and confidential. They're only seen by your dermatologist for analysis,
              assessment, and treatment monitoring. We guarantee they won't be shared with anyone else. Your privacy
              is our priority!
            </p>
          )
        },
      ]
    },
    {
      id: '05',
      title: 'About My Treatment',
      items: [
        {
          id: '05-1',
          question: 'What does my Cureskin regimen include?',
          answer: (
            <div>
              <p>Cureskin's regimen, tailored by a dermatologist after analysing your photos and details, includes:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>A dermatologist-verified customised treatment kit with usage instructions.</li>
                <li>Regular check-up sessions with your dedicated dermatologist.</li>
                <li>Personalised diet and lifestyle guidance.</li>
                <li>24/7 chat support from your skin or hair care advisor for any concerns.</li>
              </ul>
              <p className="mt-2">To speak with our advisor at Cureskin about your regimen, call us at 080-4709-5853, Monday to Saturday, 10 AM to 7 PM or chat with us via the app.</p>
            </div>
          )
        },
        {
          id: '05-2',
          question: 'What is the cost of the Cureskin regimen?',
          answer: (
            <p>
              Take your free analysis from our app to assess your needs. A customised treatment kit, recommended by a
              dermatologist based on the analysis, may vary in cost depending on the products included for your
              unique skin and hair concerns. Free monthly check-ups with your dermatologist post-purchase ensure
              results and regimen adjustments as necessary.
            </p>
          )
        },
      ]
    },
    {
      id: '06',
      title: 'About My Products',
      items: [
        {
          id: '06-1',
          question: 'Are the products in my kit recommended by dermatologists?',
          answer: (
            <p>
              Indeed! All Cureskin products in your treatment kit are recommended by our dermatologists after
              thoroughly analysing your concerns.
            </p>
          )
        },
        {
          id: '06-2',
          question: 'Are Cureskin products safe to use?',
          answer: (
            <p>
              An expert dermatologist selects the perfect products and creates a tailored regimen for you, based on
              your concerns. Regimen products are safe when used as instructed, paraben-free, clinically tested,
              and dermatologist-approved. Thousands of men and women have achieved excellent results using Cureskin
              products as directed by our dermatologists.
            </p>
          )
        },
      ]
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cureskin-secondary py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-700">
              Find answers to all your questions regarding Cureskin app, products, services and more
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Categories sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-1">
                {faqCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-cureskin-secondary font-semibold text-gray-800'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    {category.id}. {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs content */}
            <div className="md:col-span-3">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                  {activeCategory}. {faqCategories.find(c => c.id === activeCategory)?.title}
                </h2>

                <div className="space-y-4">
                  {faqCategories
                    .find(c => c.id === activeCategory)
                    ?.items.map(item => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <span className="font-medium text-gray-800">{item.question}</span>
                          {openItems.includes(item.id)
                            ? <FiChevronUp className="flex-shrink-0 ml-2" />
                            : <FiChevronDown className="flex-shrink-0 ml-2" />
                          }
                        </button>

                        {openItems.includes(item.id) && (
                          <div className="p-4 bg-white text-gray-700">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
