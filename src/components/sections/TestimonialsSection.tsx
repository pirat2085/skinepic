import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import beforeAfterImage1 from '../../assets/images/testimonial1.jpg';
import beforeAfterImage2 from '../../assets/images/testimonial2.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: 'Vibha',
    location: 'Amritsar',
    text: "Skinepic's monthly skin check-ups are fantastic. When I mentioned my pregnancy, the doctor promptly adjusted my skincare.",
    image: beforeAfterImage1,
    tags: ['Inflammatory Acne', 'Acne Marks', 'Oily Skin'],
  },
  {
    id: 2,
    name: 'Pratyusha',
    location: 'Orissa (Student)',
    text: "Comedones on my skin really affected my self-confidence. Skinepic treatment kit improved my skin drastically!",
    image: beforeAfterImage2,
    tags: ['Comedones', 'Darkspots', 'Acne Marks'],
  },
  {
    id: 3,
    name: 'Neelam',
    location: 'Punjab (Yoga Instructor)',
    text: 'Skinepic not only helped improve my melasma but also taught me sustainable skincare methods. Their products are amazing!',
    image: beforeAfterImage1,
    tags: ['Melasma', 'Wrinkles', 'Uneven Skin Texture'],
  },
  {
    id: 4,
    name: 'Neelam',
    location: 'Punjab (Yoga Instructor)',
    text: 'Skinepic not only helped improve my melasma but also taught me sustainable skincare methods. Their products are amazing!',
    image: beforeAfterImage1,
    tags: ['Melasma', 'Wrinkles', 'Uneven Skin Texture'],
  },
  // Добавляй ещё отзывы здесь
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Real skin results
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          initialSlide={1}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={t.id}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm h-full flex flex-col">
                <div className="mb-6">
                  <img
                    src={t.image}
                    alt="Before and after treatment results"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                {index === activeIndex && (
                  <>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800">{t.name}, <span className="italic font-normal text-gray-600">{t.location}</span></h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{t.text}</p>
                    <div className="mt-auto">
                      <p className="text-sm font-medium text-gray-700 mb-2">Effectively reduced:</p>
                      <div className="flex flex-wrap gap-2">
                        {t.tags.map((tag, i) => (
                          <span key={i} className="bg-cureskin-secondary px-3 py-1 rounded-full text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-8" />

        <div className="mt-12 text-center">
          <a
            href="https://skinepic.club/app"
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
