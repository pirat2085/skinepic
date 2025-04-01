import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Main Links */}
          <div>
            <h2 className="font-bold mb-6">cureskin</h2>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-700 hover:text-cureskin-primary text-sm">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-700 hover:text-cureskin-primary text-sm">About us</Link></li>
              <li><Link to="/expertise" className="text-gray-700 hover:text-cureskin-primary text-sm">Our expertise</Link></li>
              <li><Link to="/testimonials" className="text-gray-700 hover:text-cureskin-primary text-sm">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-700 hover:text-cureskin-primary text-sm">Skin 101</Link></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/cureskinapp/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-cureskin-primary">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/cureskinapp/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-cureskin-primary">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.linkedin.com/company/cureskin/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-cureskin-primary">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://www.youtube.com/@cureskinapp" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-cureskin-primary">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Policies */}
          <div>
            <h2 className="font-bold mb-6">Information</h2>
            <ul className="space-y-4">
              <li><Link to="/faqs" className="text-gray-700 hover:text-cureskin-primary text-sm">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-cureskin-primary text-sm">Contact us</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-700 hover:text-cureskin-primary text-sm">Terms of Use</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-700 hover:text-cureskin-primary text-sm">Privacy Policy</Link></li>
              <li><Link to="/grievance-policy" className="text-gray-700 hover:text-cureskin-primary text-sm">Grievance Policy</Link></li>
              <li><Link to="/refunds-and-cancellations" className="text-gray-700 hover:text-cureskin-primary text-sm">Refunds & Cancellations Policy</Link></li>
            </ul>
          </div>

          {/* Column 3 - Treatments */}
          <div>
            <h2 className="font-bold mb-6">Treatments</h2>
            <ul className="space-y-4">
              <li><Link to="/dandruff" className="text-gray-700 hover:text-cureskin-primary text-sm">Dandruff Treatment</Link></li>
              <li><Link to="/dark-spots-on-face" className="text-gray-700 hover:text-cureskin-primary text-sm">Dark Spots Treatment</Link></li>
              <li><Link to="/fungal-skin-infection" className="text-gray-700 hover:text-cureskin-primary text-sm">Fungal Infection Treatment</Link></li>
              <li><Link to="/hair-fall" className="text-gray-700 hover:text-cureskin-primary text-sm">Skin Fall Treatment</Link></li>
              <li><Link to="/pimples" className="text-gray-700 hover:text-cureskin-primary text-sm">Pimple Treatment</Link></li>
              <li><Link to="/skin-problems" className="text-gray-700 hover:text-cureskin-primary text-sm">Other Skin Problems</Link></li>
              <li><Link to="/skin-doctor-near-me" className="text-gray-700 hover:text-cureskin-primary text-sm">Skin Doctor Near Me</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h2 className="font-bold mb-6">CONTACT US</h2>
            <p className="text-gray-700 text-sm mb-2">Call us at 8150096500 (Mon-Sat, 10 AM - 7 PM)</p>
            <p className="text-gray-700 text-sm mb-6">Email: hello@cureskin.com</p>

            <p className="text-gray-700 text-sm">
              CURE AND CARE WELLNESS PVT LTD<br />
              26/10, 6th cross, Ramanna Compound,<br />
              Mangammanapalya, Bommanahalli,<br />
              HSR Layout, Bengaluru, Karnataka 560068
            </p>
          </div>
        </div>

        {/* App Store Links */}
        <div className="mt-16 flex justify-center space-x-4">
          <a href="https://apps.apple.com/in/app/cureskin_v1/id1447467785" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/app-store.png" alt="Download on the App Store" className="h-10" />
          </a>
          <a href="https://app.curesk.in/KSjEbBWqQN" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/play-store.png" alt="Get it on Google Play" className="h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
}
