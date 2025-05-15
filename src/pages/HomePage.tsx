import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import AboutPreview from '../components/AboutPreview';
import ManufacturingPreview from '../components/ManufacturingPreview';
import ProductsPreview from '../components/ProductsPreview';
import ClientsSection from '../components/ClientsSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'ALMO IMPEX - Premium Fashion & Leather Accessories';
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <StatsSection />
      <AboutPreview />
      <ManufacturingPreview />
      <ProductsPreview />
      <ClientsSection />
    </motion.div>
  );
};

export default HomePage;