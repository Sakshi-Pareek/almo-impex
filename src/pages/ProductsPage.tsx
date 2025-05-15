import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, X, ExternalLink } from "lucide-react";

const categories = [
  { name: "All", value: "all" },
  { name: "Toiletry", value: "toiletry" },
  { name: "Wallets", value: "wallets" },
  { name: "Belts", value: "belts" },
  { name: "Caps", value: "caps" },
  { name: "Gym Bag", value: "gym-bag" },
  { name: "School Backpack", value: "school-backpack" },
  { name: "Laptop Backpack", value: "laptop-backpack" },
  { name: "Casual Backpack", value: "casual-backpack" },
  { name: "Business Backpack", value: "business-backpack" },
  { name: "Duffle Bag", value: "duffle-bag" },
  { name: "Laptop Sleeve", value: "laptop-sleeve" },
  { name: "Executive Messenger", value: "executive-messenger" },
  { name: "Sling Bag", value: "sling-bag" },
  { name: "Kids Bags", value: "kids-bags" },
  { name: "Fashion & Kids Accessories", value: "fashion-kids-accessories" },
];

const products = [
  {
    id: 1,
    name: "Classic Laptop Backpack",
    category: "laptop-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ShglZfpYSM.png",
    description: "Premium laptop backpack with ergonomic design, multiple compartments, and padded laptop sleeve for maximum protection.",
  },
  {
    id: 2,
    name: "Modern Casual Backpack",
    category: "casual-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ZlZl6dUn5n.png",
    description: "Stylish casual backpack with water-resistant material, and anti-theft features.",
  },
  {
    id: 3,
    name: "Casual Day Backpack",
    category: "toiletry",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BSmX3igdJd.png",
    description: "Compact toiletry kit with waterproof compartments, hanging hook, and mirror for travel convenience.",
  },
  {
    id: 4,
    name: "Sports Gym Bag",
    category: "gym-bag",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/AiUWaJWfxe.png",
    description: "Spacious gym bag with ventilated shoe compartment, water bottle pockets, and durable construction.",
  },
  {
    id: 5,
    name: "Business Executive Backpack",
    category: "business-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/9QneqZJEkF.png",
    description: "Professional business backpack with dedicated laptop compartment, document organizer, and premium materials.",
  },
  {
    id: 6,
    name: "Durable School Bag",
    category: "school-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/XDtzf8EYdu.png",
    description: "Durable school backpack with multiple compartments, laptop sleeve, and ergonomic design for student comfort.",
  },
  {
    id: 7,
    name: "Travel Bag",
    category: "duffle-bag",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/tQaVQIN2OO.png",
    description: "Versatile duffle bag with expandable capacity, multiple pockets, and comfortable shoulder straps for travel.",
  },
  {
    id: 8,
    name: "Sporty Cap",
    category: "caps",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/EYQBsYGLAg.png",
    description: "Stylish cap with UV protection, adjustable fit, and breathable fabric for outdoor activities.",
  },
  {
    id: 9,
    name: "Trendy Sling Bag",
    category: "wallets",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Es4lhG4mfb.png",
    description: "Premium leather wallet with multiple card slots, coin pocket, and RFID blocking technology.",
  },
  {
    id: 10,
    name: "Classic Leather Wallet",
    category: "wallets",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/oTAFZGhCc2.png",
    description: "Classic leather wallet with multiple compartments, ID window, and durable construction.",
  },
  {
    id: 11,
    name: "Elegant Leather Belt",
    category: "belts",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/G18hiwxAKT.png",
    description: "Premium leather belt with classic buckle, durable construction, and perfect fit.",
  },
  {
    id: 12,
    name: "Stylish Leather Belt",
    category: "belts",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/2fWqv6rcdE.png",
    description: "Stylish leather belt with modern buckle design and premium quality leather.",
  },
  {
    id: 13,
    name: "Classic Leather Belt",
    category: "belts",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/AMwheL6WxD.png",
    description: "Classic leather belt with traditional buckle and genuine leather construction.",
  },
  {
    id: 14,
    name: "Elegant Leather belt",
    category: "belts",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kuiYQM3Q2k.png",
    description: "Elegant leather belt with sophisticated buckle and premium finish.",
  },
  {
    id: 15,
    name: "Compact Wallet",
    category: "wallets",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/pW81Gi1Oad.png",
    description: "Compact wallet with multiple card slots and sleek design for everyday use.",
  },
  {
    id: 16,
    name: "Stylish Wallet",
    category: "wallets",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/OZYx7DuOOG.png",
    description: "Stylish wallet with RFID protection and multiple compartments for organization.",
  },
  {
    id: 17,
    name: "Durable School Backpack",
    category: "school-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/4mbuC8iMMU.png",
    description: "Durable school backpack with ergonomic design, multiple compartments, and laptop protection.",
  },
  {
    id: 18,
    name: "Spacious School Backpack",
    category: "school-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/3q1E2U5Lho.png",
    description: "Spacious school backpack with water-resistant material and comfortable padded straps.",
  },
  {
    id: 19,
    name: "Stylish Casual Backpack",
    category: "casual-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/DhRJbZTuzN.png",
    description: "Stylish casual backpack with modern design and multiple functional pockets.",
  },
  {
    id: 20,
    name: "Durable Gym Bag",
    category: "gym-bag",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Si1cVgmpPO.png",
    description: "Durable gym bag with ventilated compartments and comfortable carrying straps.",
  },
  {
    id: 21,
    name: "Spacious Duffle Bag",
    category: "duffle-bag",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/UVUbVCbicH.png",
    description: "Spacious duffle bag with multiple compartments and durable construction.",
  },
  {
    id: 22,
    name: "Lightweight Casual Backpack",
    category: "casual-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/0Zl8Rrwf7F.png",
    description: "Lightweight casual backpack with water-resistant material and comfortable design.",
  },
  {
    id: 23,
    name: "Modern Casual Backpack",
    category: "casual-backpack",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/SiAs4kgAZO.png",
    description: "Modern casual backpack with multiple pockets and ergonomic design.",
  },
  {
    id: 24,
    name: "Kids Bag",
    category: "fashion-kids-accessories",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/N9jmQVom0S.png",
    description: "Colorful fashion accessories set with trendy designs for kids.",
  },
  {
    id: 25,
    name: "Colorful Kids Bag",
    category: "kids-bags",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BqvpEyFhnZ.png",
    description: "Fun and colorful kids bag with cartoon designs and comfortable straps.",
  },
  {
    id: 26,
    name: "Durable Kids Backpack",
    category: "kids-bags",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wKMx86oOoj.png",
    description: "Durable kids backpack with multiple compartments and fun designs.",
  },
  {
    id: 27,
    name: "Lightweight Kids Bag",
    category: "kids-bags",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/EPfjo7yOaY.png",
    description: "Lightweight kids bag with cartoon characters and comfortable design.",
  },
  {
    id: 28,
    name: "Trendy Fashion Bag",
    category: "fashion-kids-accessories",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/9b5U3wa5qu.png",
    description: "Trendy fashion accessories set with colorful designs for children.",
  },
  {
    id: 29,
    name: "Kids Fashion Bag",
    category: "fashion-kids-accessories",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/pUDGlevb6R.png",
    description: "Fun fashion accessories collection with playful designs for kids.",
  },
  {
    id: 30,
    name: "Spacious Kids Backpack",
    category: "kids-bags",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/zSDRpeQrAo.png",
    description: "Spacious kids backpack with multiple pockets and fun patterns.",
  },
  {
    id: 31,
    name: "Embroidered Tote Bag",
    category: "kids-bags",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/CUkKfj63qv.png",
    description: "Colorful kids bag with cartoon designs and comfortable carrying straps.",
  },
  {
    id: 32,
    name: "Durable Kids Backpack",
    category: "kids-bags",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/rPt5VbasQB.png",
    description: "Durable kids backpack with fun designs and multiple compartments.",
  },
  {
    id: 33,
    name: "Professional Messenger Bag",
    category: "executive-messenger",
    image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ShglZfpYSM.png",
    description: "Professional messenger bag with premium leather finish and multiple compartments.",
  }
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  useEffect(() => {
    document.title = "Products - ALMO IMPEX";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const openProductModal = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-[#056773]">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="mb-4">Our Premium Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our range of high-quality fashion, sports, and leather
              accessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="lg:py-20 py-16">
        <div className="container-custom">
          <div className="mb-12">
            <div className="flex flex-col gap-6">
              <div className="relative w-full max-w-3xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search products by name or description..."
                  className="w-full px-6 py-3 pl-12 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#056773] focus:border-transparent transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="flex overflow-x-auto gap-2 sm:flex-wrap sm:justify-center px-1 hide-scrollbar">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-nowrap scroll-smooth
                      ${
                        activeCategory === category.value
                          ? "bg-[#056773] text-white shadow-md"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                      }`}
                    onClick={() => setActiveCategory(category.value)}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => openProductModal(product)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-white font-medium">
                              {product.name}
                            </p>
                            <span className="text-[#D6F6F9] text-sm capitalize">
                              {product.category}
                            </span>
                          </div>
                          <ExternalLink className="text-white h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-[#056773] hover:underline"
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-scroll"
          >
            <div className="relative h-[40vh] bg-gray-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeProductModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-[#056773] capitalize mb-4">
                {selectedProduct.category}
              </p>
              <p className="text-gray-600 mb-6">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Material</p>
                  <p className="font-medium">Premium Quality</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Dimensions</p>
                  <p className="font-medium">Standard Size</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Available Colors</p>
                  <p className="font-medium">Multiple Options</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">MOQ</p>
                  <p className="font-medium">Contact for Details</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={closeProductModal}
                  className="mr-4 py-2 px-4 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <a href="tel:+918800170827" className="btn-primary">
                  Inquire Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProductsPage;
