import Layout from '../components/layout/Layout';
import { FiArrowRight } from 'react-icons/fi';
import beforeAfterImage from '../assets/images/before-after.png';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Vibha',
      location: 'Amritsar',
      testimonial: "Cureskin's monthly skin check-ups are fantastic. When I mentioned my pregnancy, the doctor promptly adjusted my skincare products to ensure my well-being.",
      conditions: ['Inflammatory Acne', 'Acne Marks', 'Oily Skin', 'Uneven Skin Texture'],
      image: beforeAfterImage,
    },
    {
      id: 2,
      name: 'Pratyusha',
      location: 'Orissa',
      profession: 'Student',
      testimonial: "Comedones on my skin really affected my self-confidence & I was embarrassed to socialise. But Cureskin treatment kit improved my skin concerns drastically!",
      conditions: ['Comedones', 'Darkspots', 'Inflammatory Acne', 'Acne Marks'],
      image: beforeAfterImage,
    },
    {
      id: 3,
      name: 'Neelam',
      location: 'Punjab',
      profession: 'Yoga Instructor',
      testimonial: "Cureskin not only helped improve my melasma but also enhanced my facial health while educating me about sustainable skin care methods. Their products are great!",
      conditions: ['Melasma', 'Uneven Skin Texture', 'Wrinkles', 'Inflammatory Acne'],
      image: beforeAfterImage,
    },
    {
      id: 4,
      name: 'Rajat',
      location: 'Delhi',
      profession: 'Software Engineer',
      testimonial: "I was skeptical at first, but the personalized regimen and regular follow-ups made a huge difference. My acne has significantly reduced in just 2 months.",
      conditions: ['Severe Acne', 'Oily Skin', 'Blackheads', 'Hyperpigmentation'],
      image: beforeAfterImage,
    },
    {
      id: 5,
      name: 'Anita',
      location: 'Bangalore',
      profession: 'Marketing Manager',
      testimonial: "After struggling with hair fall for years, I finally found a solution that works. The Cureskin hair regimen combined with their diet plan has shown remarkable results.",
      conditions: ['Hair Fall', 'Dry Scalp', 'Dandruff', 'Thinning Hair'],
      image: beforeAfterImage,
    },
    {
      id: 6,
      name: 'Rohit',
      location: 'Mumbai',
      profession: 'Business Owner',
      testimonial: "I've tried many products for my rosacea but nothing worked until I discovered Cureskin. The customized approach and expert guidance have been life-changing.",
      conditions: ['Rosacea', 'Skin Sensitivity', 'Redness', 'Inflammation'],
      image: beforeAfterImage,
    },
  ];

  // Group testimonials into rows of 3
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    const group = testimonials.slice(i, i + 3);
    const groupId = `group-${i / 3}`;
    groupedTestimonials.push({ id: groupId, testimonials: group });
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cureskin-secondary py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Success Stories
            </h1>
            <p className="text-gray-700">
              Discover how Cureskin has helped thousands of people achieve healthier skin and hair
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <blockquote className="text-2xl font-light text-gray-700 italic mb-6">
                "After trying countless products without results, Cureskin's personalised approach finally gave me the skin I've always wanted. The regimen was easy to follow and the results were visible within weeks."
              </blockquote>
              <p className="text-lg font-semibold">Shreya M.</p>
              <p className="text-gray-600">Treated for: Persistent acne and hyperpigmentation</p>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <img
                  src={beforeAfterImage}
                  alt="Before and after treatment results"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 flex justify-between">
                  <span className="text-gray-600">Before</span>
                  <span className="text-gray-600">After</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Real Results from Real People
          </h2>

          <div className="space-y-12">
            {groupedTestimonials.map((group) => (
              <div key={group.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {group.testimonials.map(testimonial => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}'s before and after results`}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="mt-4 flex justify-between">
                        <span className="text-gray-600">Before</span>
                        <span className="text-gray-600">After</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}, <span className="italic font-normal text-gray-600">{testimonial.location} {testimonial.profession && `(${testimonial.profession})`}</span>
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Effectively reduced:</p>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.conditions.map((condition) => (
                          <span key={`${testimonial.id}-${condition}`} className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Watch Our Customer Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video cards would go here, using placeholder frames for now */}
            {[
              { id: 'video-1', title: 'Customer Story 1' },
              { id: 'video-2', title: 'Customer Story 2' },
              { id: 'video-3', title: 'Customer Story 3' }
            ].map((video) => (
              <div key={video.id} className="bg-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Video Testimonial</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm">Watch how Cureskin helped transform their skin and confidence</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Success Stories Section */}
      <section className="py-16 md:py-24 bg-cureskin-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Ready to be our next success story?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who have transformed their skin and hair health with Cureskin's personalized care.
          </p>
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
