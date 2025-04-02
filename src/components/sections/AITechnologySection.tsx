import appScreenshot from '../../assets/images/5.png';

export default function AITechnologySection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div className="max-w-md mx-auto md:mx-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Employing the power of AI for skin analysis
            </h2>
            <p className="text-gray-700 mb-6">
              Our app's innovative AI technology examines your skin for over 400 different conditions.
              Drawing data from 12 million previous cases embedded into its deep learning infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-cureskin-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cureskin-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-800">Powered by artificial intelligence</h3>
                <p className="text-xs text-gray-600 mt-1">Deep learning based image recognition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cureskin-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cureskin-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-800">Instant Skin Analysis</h3>
                <p className="text-xs text-gray-600 mt-1">Get results in milli-seconds</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cureskin-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cureskin-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-800">Dermatologist grade accuracy</h3>
                <p className="text-xs text-gray-600 mt-1">For skin issues like acne & post-acne</p>
              </div>
            </div>
          </div>

          {/* Image Block */}
          <div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={appScreenshot}
                alt="Skinepic app screenshot showing skin analysis"
                className="w-full max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
