import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import Slider from 'react-slick';
import { useState } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div className={`w-2 h-2 rounded-full mt-4 transition-all duration-300 ${currentSlide === i ? 'bg-white scale-125' : 'bg-white/50'}`} />
    ),
  };

  const backgroundImages = [
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/EguOJeQL01.avif",
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/VawdhxgKzo.jpg",
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/opGmfaBzm8.jpg",
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/LIurGoniqV.webp",
  ];

  return (
    <section className="relative h-screen bg-[#056773] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent opacity-50 z-10"></div>
        <Slider {...sliderSettings} className="h-full">
          {backgroundImages.map((image, index) => (
            <div key={index} className="h-screen">
              <motion.img
                style={{ y }}
                src={image}
                alt={`ALMO IMPEX Factory ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1 
            className="text-white my-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedText 
              text="Creating Exceptional Quality in" 
              delay={0.3}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold"
            />
            <br />
            <span
              className="text-[#006B71] text-clip inline-block mt-2"
              style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.3)' }}
            >
              <AnimatedText 
                text="Fashion & Leather" 
                delay={0.8}
                className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold"
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
          >
            As a premier manufacturer and exporter of high-quality fashion, sports, and leather bags and accessories, we proudly deliver exceptional products to global brands. Since 2024, we have set the standard for excellence in the industry.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              to="/products" 
              className="btn-primary flex items-center group hover:scale-105 transition-transform duration-300"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="py-3 px-6 rounded-md border-2 border-white text-white hover:bg-white hover:text-[#036872] transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;