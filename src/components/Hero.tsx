import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section className="relative h-screen-90 bg-[#056773] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent opacity-50"></div>
        <img
          src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/JGDG8Z3Gmt.webp"
          alt="ALMO IMPEX Factory"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-white mb-3"
          ></motion.div>
          
          <h1 className="text-white mb-6">
            <AnimatedText text="Crafting Excellence in" delay={0.3} />
            <br />
            <span
  className="text-[#006B71] text-clip"
  style={{ textShadow: '1px 1px 2px white' }}
>
  <AnimatedText text="Fashion & Leather" delay={0.8} />
</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-200 text-lg mb-8 max-w-xl"
          >
            A leading manufacturer and exporter of premium fashion, sports, and leather bags and accessories. Bringing global brands the finest quality bags since 2015.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/products" className="btn-primary flex items-center">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="py-3 px-6 rounded-md border-2 border-white text-white hover:bg-white hover:text-[#036872] transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;