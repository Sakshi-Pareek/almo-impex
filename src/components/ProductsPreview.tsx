import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const productCategories = [
  { name: 'All', value: 'all' },
  { name: 'Backpacks', value: 'backpacks' },
  { name: 'Duffles', value: 'duffles' },
  { name: 'Executive Messenger', value: 'executivemessenger' },
  { name: 'Wallets', value: 'wallets' },
  { name: 'Belts', value: 'belts' },
  { name: 'Caps', value: 'caps' },
];

const products = [
  {
    id: 1,
    name: 'Premium Backpack Pro',
    image: 'https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/RJtopjVKmT.png',
    category: 'backpacks',
  },
  {
    id: 2,
    name: 'Travel Duffle Bag',
    image: 'https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/rkWKkLkL7R.png',
    category: 'duffles',
  },
  {
    id: 3,
    name: 'Executive Messenger Bag',
    image: 'https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/zhkU02MBcf.png',
    category: 'executivemessenger',
  },
  {
    id: 4,
    name: 'Classic Leather Wallet',
    image: 'https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/YiZLCUURvU.png',
    category: 'wallets',
  },
  {
    id: 5,
    name: 'Elegant Leather Belt',
    image: 'https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/vnNGkOv8dm.jpg',
    category: 'belts',
  },
  {
    id: 6,
    name: 'Adventure Backpack',
    image: 'https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/XqK7P8nJsR.png',
    category: 'backpacks',
  },
];

const ProductsPreview = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="lg:py-20 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="h-1 w-16 bg-[#056773] mx-auto mb-3"></div>
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle mx-auto">
            Discover our range of high-quality fashion, sports, and leather accessories.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {productCategories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`sm:px-6 px-4   py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category.value 
                  ? 'bg-[#056773] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">{product.name}</p>
                    <button className="mt-2 text-[#CCF7FB] flex items-center text-sm">
                      View Details
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary inline-flex items-center">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;