import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import heroImage1 from '../../assets/images/hero-image.png';
import heroImage2 from '../../assets/images/face_scanner.jpg';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage1, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-cureskin-secondary py-16 md:py-24 overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 xl:gap-2 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Healthy Skin<br />Starts Here
            </h1>
            <p className="text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
              With a complete regimen made using expertise of dermatologists
              and the power of AI
            </p>
            <a
              href="https://skinepic.club/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cureskin-primary text-white px-6 py-3 rounded-full hover:bg-cureskin-dark transition-colors"
            >
              <span>Download App</span>
              <FiArrowRight className="ml-2" />
            </a>
          </div>
          <div className="order-1 md:order-2 relative w-full max-w-md mx-auto h-[350px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Skinepic visual ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-1000 ease-in-out ${
                  currentImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
