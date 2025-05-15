import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Users,
  PenTool as Tool,
  Package,
  TrendingUp,
  Truck,
} from "lucide-react";

const FactoryPage = () => {
  useEffect(() => {
    document.title = "Our Factory - ALMO IMPEX";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen-80 bg-factory-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="mb-4">Our State-of-the-Art Factory</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Where craftsmanship meets modern manufacturing technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Factory Overview */}
      <section className="lg:py-20 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-16 bg-[#056773] mb-3"></div>
              <h2 className="section-title">Factory Overview</h2>
              <p className="mb-6">
                Located in Gurgaon, ALMO IMPEX' manufacturing facility spans
                9,500 square feet, equipped with the latest machinery and
                technology. Our centrally located factory ensures efficient
                logistics and distribution, serving both domestic and
                international markets with ease.
              </p>
              <p className="sm:my-6 my-3">
                The facility is designed to optimize production flow while
                maintaining the highest quality standards. From raw material
                storage to finished product packaging, every step of the
                manufacturing process is carefully planned and executed.
              </p>
              <p>
                Our factory maintains strict compliance with international
                safety and quality standards, creating a safe and productive
                environment for our skilled workforce.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/SIPoWPEoM4.png"
                alt="ALMO IMPEX Factory Interior"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factory Gallery */}
      <section className="lg:py-20 py-16 bg-[#ccf7fb]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:mb-16 mb-10"
          >
            <div className="h-1 w-16 bg-[#056773] mx-auto mb-3"></div>
            <h2 className="section-title">Factory Gallery</h2>
            <p className="section-subtitle mx-auto">
              Take a visual tour of our manufacturing facility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/SIPoWPEoM4.png",
              "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/pcyDtxlUi0.jpg",
              "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/yp9C6ipKjT.png",
              "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/dtWdHj5Gx3.jpeg",
              "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/zyDlyDI8Os.png",
              "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/uo5bhLrn0T.png",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="group relative h-64 overflow-hidden cursor-pointer">
                  <img
                    src={image}
                    alt={`Factory Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Larger</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Features */}
      <section className="lg:py-20 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="h-1 w-16 bg-[#056773] mx-auto mb-3"></div>
            <h2 className="section-title">Factory Highlights</h2>
            <p className="section-subtitle mx-auto">
              Key features that make our manufacturing facility exceptional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "Modern Machinery",
                description:
                  "Our facility is equipped with the latest manufacturing technology to ensure precision and efficiency.",
              },
              {
                icon: Users,
                title: "Skilled Workforce",
                description:
                  "Our experienced craftsmen combine traditional skills with modern manufacturing techniques.",
              },
              {
                icon: Tool,
                title: "In-house R&D",
                description:
                  "Our research and development team constantly works on product innovation and improvement.",
              },
              {
                icon: Package,
                title: "Quality Control",
                description:
                  "Rigorous quality checks at every stage ensure that only the finest products leave our facility.",
              },
              {
                icon: TrendingUp,
                title: "Production Capacity",
                description:
                  "Our facility can produce over 100,000 units per month, meeting high-volume demands.",
              },
              {
                icon: Truck,
                title: "Logistics Advantage",
                description:
                  "Our central location ensures efficient distribution to both domestic and international markets.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#CCF7FB] rounded-full">
                      <Icon className="h-6 w-6 text-[#056773]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-[#056773]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="lg:py-20 py-16 bg-[#107579]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="h-1 w-16 bg-white mb-3"></div>
              <h2 className="text-white mb-6">Factory at a Glance</h2>
              <p className="text-gray-300 mb-8">
                Our manufacturing facility is designed to deliver excellence at
                every step, from raw material handling to finished product
                packaging.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Facility Size", value: "9,500 sq. ft." },
                  { label: "Machines", value: "100+" },
                  {
                    label: "Production Capacity",
                    value: "100,000 units/month",
                  },
                  { label: "Quality Defect Rate", value: "<2%" },
                ].map((stat, index) => (
                  <div key={index} className="bg-[#1f8589] rounded-lg p-4">
                    <p className="text-[#CCF7FB] font-semibold">{stat.label}</p>
                    <p className="text-white text-xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/uo5bhLrn0T.png"
                alt="Factory Production"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FactoryPage;
