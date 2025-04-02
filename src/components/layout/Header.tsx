import { useState, useEffect } from 'react';
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
  const [isMobileScrolled, setIsMobileScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsMobileScrolled(window.scrollY > 10);
      } else {
        setIsMobileScrolled(false);
      }
    };

    handleScroll(); // проверить при первой загрузке

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // чтобы ловить смену размеров экрана
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-screen-lg mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={skinepicLogo}
            alt="Skinepic Logo"
            className={`w-auto transition-all duration-300 ${
              isMobileScrolled ? 'h-[46px]' : 'h-[62px]'
            } md:h-[62px]`}
          />
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
