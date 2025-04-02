import docImage from '../../assets/images/doc1.png';

export default function SkinHealthSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-6 md:p-10 rounded-lg shadow-sm">
          {/* Картинка — слева на десктопе, снизу на мобилке */}
          <div className="order-2 md:order-1">
            <img
              src={docImage}
              alt="Doctor representation"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Текст — справа на десктопе, сверху на мобилке */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Shifting focus from 'skincare' to 'skin health'
            </h2>
            <p className="text-gray-700 mb-6">
              At Skinepic, we studied skin in detail and realized healthy skin is a reflection of several factors
              like health, mental well-being, nutrition, and environmental factors. Hence, applying a few random products
              to give your skin the care it deserves is not enough.
            </p>
            <p className="text-gray-700">
              Healthy skin needs an expertise-backed and carefully personalized routine. One that is created by
              experienced dermatologists and focuses on individual skin needs, concerns, and lifestyle. An offering that
              is available exclusively within the Skinepic app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
