import { FiArrowRight } from 'react-icons/fi';
import appScreenshot from '../../assets/images/Frame.png';

export default function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Experience Skinepic and restore your skin health
            </h2>
            <p className="text-gray-700 mb-8">
              Our app's innovative AI technology examines your skin for over 400 different conditions.
              Drawing data from 12 million previous cases embedded into its deep learning infrastructure.
            </p>
            <a
              href="src/components/sections/HeroSection.tsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cureskin-primary text-white px-6 py-3 rounded-full hover:bg-cureskin-dark transition-colors"
            >
              <span>Download App</span>
              <FiArrowRight className="ml-2" />
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto md:mx-0">
              <img
                src={appScreenshot}
                alt="Cureskin app showing skin analysis"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
