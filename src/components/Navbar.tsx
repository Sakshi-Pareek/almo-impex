import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.style.setProperty('--hamburger-color', scrolled ? '#036872' : 'white');
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Fy2nUhX5b5.jpeg" alt="Company Logo"  className='w-10 h-10 rounded-md'/>
          <span className={`font-['Copperplate_Gothic_Bold'] font-bold text-2xl ${scrolled ? 'text-[#006B70]' : 'text-white'}`} style={{ fontFamily: "'Copperplate Gothic Bold', sans-serif" }}>
            ALMO IMPEX
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Manufacturing', 'Factory', 'Products', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-gold transition-colors ${
                  scrolled
                    ? isActive
                      ? 'text-gold'
                      : 'text-[#036872]'
                    : isActive
                    ? 'text-gold'
                    : 'text-white'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <label className="hamburger md:hidden">
          <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className={`md:hidden bg-white absolute w-full shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {['Home', 'About', 'Manufacturing', 'Factory', 'Products', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `py-2 px-4 text-[#036872] ${isActive ? 'bg-[#ccf7fb] font-medium text-gold' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;