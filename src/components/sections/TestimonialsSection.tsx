import beforeAfterImage from '../../assets/images/before-after.png';
import { FiArrowRight } from 'react-icons/fi';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Real skin & hair results
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="mb-6">
              <img
                src={beforeAfterImage}
                alt="Before and after treatment results"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800">Vibha, <span className="italic font-normal text-gray-600">Amritsar</span></h4>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Cureskin's monthly skin check-ups are fantastic. When I mentioned my pregnancy, the doctor
              promptly adjusted my skincare products to ensure my well-being.
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Effectively reduced:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Inflammatory Acne</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Acne Marks</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Oily Skin</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Uneven Skin Texture</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="mb-6">
              <img
                src={beforeAfterImage}
                alt="Before and after treatment results"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800">Pratyusha, <span className="italic font-normal text-gray-600">Orissa (Student)</span></h4>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Comedones on my skin really affected my self-confidence & I was embarrassed to socialise.
              But Cureskin treatment kit improved my skin concerns drastically!
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Effectively reduced:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Comedones</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Darkspots</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Inflammatory Acne</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Acne Marks</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="mb-6">
              <img
                src={beforeAfterImage}
                alt="Before and after treatment results"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800">Neelam, <span className="italic font-normal text-gray-600">Punjab (Yoga Instructor)</span></h4>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Cureskin not only helped improve my melasma but also enhanced my facial health while educating me
              about sustainable skin care methods. Their products are great!
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Effectively reduced:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Melasma</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Uneven Skin Texture</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Wrinkles</span>
                <span className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">Inflammatory Acne</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
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
      </div>
    </section>
  );
}
