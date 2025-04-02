import { FiArrowRight } from 'react-icons/fi';
import appStore from '../../assets/images/app-store.png';
import playStore from '../../assets/images/play-store.png';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Find out your skin concerns and<br />
            what a dermatologist advises for them, for free.
          </h2>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://skinepic.club/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cureskin-primary text-white px-8 py-4 rounded-full hover:bg-cureskin-dark transition-colors"
            >
              <span>Download App</span>
              <FiArrowRight className="ml-2" />
            </a>

            <div className="flex items-center space-x-4">
              <a
                href="https://skinepic.club/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appStore} alt="Download on the App Store" className="h-10" />
              </a>
              <a
                href="https://skinepic.club/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playStore} alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
