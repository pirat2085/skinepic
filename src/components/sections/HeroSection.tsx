import { FiArrowRight } from 'react-icons/fi';
import heroImage from '../../assets/images/hero-image.jpeg';

export default function HeroSection() {
  return (
    <section className="bg-cureskin-secondary py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Healthy Skin<br />Starts Here
            </h1>
            <p className="text-gray-700 mb-8 max-w-lg">
              With a complete regimen made using expertise of dermatologists
              and the power of AI
            </p>
            <a
              href="https://app.curesk.in/KSjEbBWqQN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cureskin-primary text-white px-6 py-3 rounded-full hover:bg-cureskin-dark transition-colors"
            >
              <span>Download App</span>
              <FiArrowRight className="ml-2" />
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-full overflow-hidden w-full max-w-md mx-auto">
              <img
                src={heroImage}
                alt="Woman using the Cureskin app to analyze her skin"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
