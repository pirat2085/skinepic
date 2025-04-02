import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import skinepicLogo from '../../assets/images/skinepic_logo_1.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Our Expertise', href: '/expertise' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-lg mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={skinepicLogo} alt="Skinepic Logo" className="h-[62px] w-auto" />

        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 hover:text-cureskin-primary transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Download App button */}
        <a
          href="https://skinepic.club/app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-cureskin-primary text-white px-6 py-3 rounded-full hover:bg-cureskin-dark transition-colors"
        >
          <span>Download App</span>
          <FiArrowRight className="ml-2" />
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-cureskin-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://skinepic.club/app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-cureskin-primary text-white px-6 py-3 rounded-full hover:bg-cureskin-dark transition-colors"
            >
              <span>Download App</span>
              <FiArrowRight className="ml-2" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
