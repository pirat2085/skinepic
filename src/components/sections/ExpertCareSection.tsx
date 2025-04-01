export default function ExpertCareSection() {
  return (
    <section className="py-16 md:py-24 bg-cureskin-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Guaranteeing specialised care of the experts
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
          After the AI plays its supporting role, our team of 100+ dermatologists creates a personalised regimen.
          These dermatologists hold experience in both curing and correcting mild to acute problems and giving
          efficient care solutions for the overall maintenance of skin and hair health. Presently, they are
          providing continuous monthly care to over 17 Lakh customers in our app.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-20 h-20 mx-auto bg-cureskin-primary/10 flex items-center justify-center rounded-full mb-4">
              <svg className="w-10 h-10 text-cureskin-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              1. Skin & Hair Regimen
            </h3>
            <p className="text-gray-600 text-sm">
              Clinically-tested ingredients and customised products to ensure you get visible results.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-20 h-20 mx-auto bg-cureskin-primary/10 flex items-center justify-center rounded-full mb-4">
              <svg className="w-10 h-10 text-cureskin-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              2. Nutritional Diet Plan
            </h3>
            <p className="text-gray-600 text-sm">
              Complimentary meal plans to make sure your daily diet contains food that boosts your skin & hair health.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-20 h-20 mx-auto bg-cureskin-primary/10 flex items-center justify-center rounded-full mb-4">
              <svg className="w-10 h-10 text-cureskin-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              3. Lifestyle Guidance By Experts
            </h3>
            <p className="text-gray-600 text-sm">
              Tips to lead a healthy, hygienic, and stress-free life so that you glow from within.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-20 h-20 mx-auto bg-cureskin-primary/10 flex items-center justify-center rounded-full mb-4">
              <svg className="w-10 h-10 text-cureskin-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              4. Regular Doctor Checkups
            </h3>
            <p className="text-gray-600 text-sm">
              Free routine checkups with a Cureskin doctor to measure your skin & hair progress in detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
