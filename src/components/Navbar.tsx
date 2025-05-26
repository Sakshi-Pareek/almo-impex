import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navItems = ['Home', 'About', 'Manufacturing', 'Factory', 'Products', 'Contact'];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img 
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Fy2nUhX5b5.jpeg" 
            alt="Company Logo"  
            className='w-12 h-12 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105'
            whileHover={{ rotate: 5 }}
          />
          <span 
            className={`font-['Copperplate_Gothic_Bold'] font-bold text-2xl transition-colors duration-300 ${
              scrolled ? 'text-[#006B70]' : 'text-white'
            }`} 
            style={{ fontFamily: "'Copperplate Gothic Bold', sans-serif" }}
          >
            ALMO IMPEX
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                  scrolled
                    ? isActive
                      ? 'text-[#006B70] bg-[#ccf7fb]'
                      : 'text-[#036872] hover:bg-[#ccf7fb]/50'
                    : isActive
                    ? 'text-white bg-white/20'
                    : 'text-white hover:bg-white/10'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-[#036872]' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-[#036872]' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-[#036872]' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white/95 backdrop-blur-sm absolute w-full shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-lg text-[#036872] transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#ccf7fb] font-medium text-[#006B70]' 
                        : 'hover:bg-[#ccf7fb]/50'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;