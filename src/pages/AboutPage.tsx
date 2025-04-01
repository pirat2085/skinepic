import Layout from '../components/layout/Layout';
import { FiArrowRight } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cureskin-secondary py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Simplicity of technology to address the<br />complexity of skin and hair
          </h1>
          <p className="text-gray-700 max-w-3xl mb-8">
            Back in 2017, there was no easy access to a dermatologist's expertise for everyday skin and hair care.
            We identified this problem and worked towards making it accessible with the power of AI.
          </p>
          <p className="text-gray-700 max-w-3xl">
            As a result, Cureskin is the only app that now gives you continuous dermatologist care to manage
            ever-changing skin and hair conditions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Our story
              </h2>
              <p className="text-gray-700 mb-6">
                Guna Kakulapati found himself in a situation where he could not get proper care for his son's
                skin condition. After meeting countless doctors, he began to understand skin science and
                wanted to combine it with his field of expertise - technology.
              </p>
              <p className="text-gray-700">
                He then collaborated with his colleague Ramakrishna R, who developed AI-led diagnosis,
                assessment, and care capabilities. Dr. Charu, who understands every nuance of skincare,
                brought in medical expertise and presently leads a team of over 50 dermatologists.
              </p>
            </div>
            <div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <img
                  src="https://ext.same-assets.com/3431093080.svg"
                  alt="Cureskin founders team"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Milestones in the journey so far
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Timeline items */}
            {[
              { year: '2017', description: 'Launched Cureskin mobile application for diagnosis of skin conditions through AI' },
              { year: '2018', description: 'Launched AI engine to assist doctors in prescribing treatments for skin conditions' },
              { year: '2019', description: 'Formed in-house panel of dermatologists and got first 1000 customers' },
              { year: '2020', description: 'Launched 1st private label product and crossed 1 Lakh customers' },
              { year: '2021', description: 'Expanded SKU list and entered hair category' },
              { year: '2022', description: 'Got funding of $5M, introduced hair AI and crossed 10 Lakh customers' },
              { year: '2024', description: 'Secured Series B Funding of $20M, to scale high quality customised solutions' }
            ].map((item, index) => (
              <div key={item.year} className={`flex gap-6 mb-4 ${index % 2 === 0 ? 'bg-cureskin-secondary' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
                <div className="w-24 flex-shrink-0">
                  <h3 className="text-xl font-bold text-gray-800">{item.year}</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Brains behind the pursuit of 'skin health'
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src="https://ext.same-assets.com/0/3723656734.svg"
                  alt="Gunavardhan Kakulapati"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <div className="text-center">
                <span className="inline-block bg-cureskin-secondary px-4 py-1 rounded-full text-xs font-medium mb-3">
                  Data Luminary
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Gunavardhan Kakulapati</h3>
                <p className="text-gray-600 mb-4">Co-founder & CEO</p>
                <p className="text-gray-700 text-sm">
                  Before starting Cureskin, Guna worked in giant technology companies like Google and Amazon in
                  the United States for over 11 years. The idea of a holistic skincare platform was born out of
                  his questioning the norm of a single-point consultation for skin health.
                </p>
                <a
                  href="https://www.linkedin.com/in/guna-kakulapati-6981ba2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cureskin-primary mt-4"
                >
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src="https://ext.same-assets.com/0/3908536131.svg"
                  alt="Ramakrishna R"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <div className="text-center">
                <span className="inline-block bg-cureskin-secondary px-4 py-1 rounded-full text-xs font-medium mb-3">
                  The AI Pioneer
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Ramakrishna R</h3>
                <p className="text-gray-600 mb-4">Co-founder & CTO</p>
                <p className="text-gray-700 text-sm">
                  Ramakrishna R's intellect introduced the potential of AI to the field of skin health.
                  He pioneered the usage of artificial intelligence to identify and monitor outcomes of
                  various skin conditions with only photos taken on mobile phones.
                </p>
                <a
                  href="https://www.linkedin.com/in/ramakrishnarajanna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cureskin-primary mt-4"
                >
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src="https://ext.same-assets.com/0/1415408455.svg"
                  alt="Dr. Charu Sharma"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <div className="text-center">
                <span className="inline-block bg-cureskin-secondary px-4 py-1 rounded-full text-xs font-medium mb-3">
                  Eminent Skin Expert
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Charu Sharma</h3>
                <p className="text-gray-600 mb-4">Co-founder & Head of Dermatology</p>
                <p className="text-gray-700 text-sm">
                  Cureskin would not have been a dermatologist-driven app without Dr. Charu Sharma, who leads
                  the medical team of experts at Cureskin. She is a renowned dermatologist with over 19 years
                  of experience in treating different skin and hair-fall cases.
                </p>
                <a
                  href="https://www.linkedin.com/in/charu-sharma-3959114/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cureskin-primary mt-4"
                >
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cureskin-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Experience the future of skin & hair care
          </h2>
          <a
            href="https://app.curesk.in/KSjEbBWqQN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-cureskin-primary text-white px-8 py-4 rounded-full hover:bg-cureskin-dark transition-colors"
          >
            <span>Download App</span>
            <FiArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
