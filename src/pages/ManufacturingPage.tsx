import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import { Factory, CheckCircle, Award, Shield, PenTool as Tool, Users, Zap, LayoutGrid } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: "State-of-the-art Machinery",
    value: 100,
    label: "Machines",
    description: "Latest manufacturing equipment to ensure precision and quality",
  },
  {
    icon: LayoutGrid,
    title: "Expansive Facility",
    value: 9500,
    label: "sq. ft. Facility",
    description: "Spacious manufacturing facility for efficient production",
  },
  {
    icon: Zap,
    title: "Centrally Located",
    description: "Strategically located factory for efficient logistics and distribution",
  },
  {
    icon: CheckCircle,
    title: "Quality Excellence",
    value: 2,
    label: "% Quality Defects",
    description: "Rigorous quality control measures to ensure premium products",
  },
  {
    icon: Shield,
    title: "Global Compliance",
    description: "Adherence to international safety and quality standards",
  },
  {
    icon: Tool,
    title: "In-house R&D",
    description: "Dedicated team for product innovation and development",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Experienced craftsmen with expertise in leather and textile work",
  },
  {
    icon: Award,
    title: "COVID-Safe Facility",
    description: "Comprehensive safety protocols to ensure workforce health",
  },
];

const process = [
  {
    title: "Design & Prototyping",
    description: "Our design team creates product concepts and prototypes based on client requirements and market trends",
  },
  {
    title: "Material Sourcing",
    description: "We source the highest quality materials from trusted suppliers to ensure product durability and aesthetics",
  },
  {
    title: "Cutting & Preparation",
    description: "Precision cutting and preparation of materials according to design specifications",
  },
  {
    title: "Assembly & Stitching",
    description: "Skilled craftsmen assemble and stitch the products with meticulous attention to detail",
  },
  {
    title: "Quality Control",
    description: "Rigorous quality checks at every stage of production to ensure flawless products",
  },
  {
    title: "Finishing & Packaging",
    description: "Final touches and premium packaging to deliver a complete product experience",
  },
];

const ManufacturingPage = () => {
  useEffect(() => {
    document.title = 'Manufacturing - ALMO IMPEX';
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
      <section className="relative py-32 bg-factory-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-[#056773]/70"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="mb-4">Manufacturing Excellence</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our state-of-the-art manufacturing facility ensures premium quality and consistent output.
            </p>
          </motion.div>
        </div>
      </section>

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
            <h2 className="section-title">Our Manufacturing Capabilities</h2>
            <p className="section-subtitle mx-auto">
              ALMO IMPEX combines craftsmanship with modern technology to deliver exceptional products.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#ccf7fb] rounded-full">
                    <feature.icon className="h-6 w-6 text-[#056773]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                {feature.value ? (
                  <div className="text-center mb-2">
                    <AnimatedCounter
                      end={feature.value}
                     
                    />
                    <p className="text-gray-600">{feature.label}</p>
                  </div>
                ) : null}
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:py-20 py-16 bg-[#056773] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:mb-16 mb-10"
          >
            <div className="h-1 w-16 bg-white mx-auto mb-3"></div>
            <h2 className="text-white mb-4">Our Manufacturing Process</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A systematic approach to ensure quality at every stage.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30 hidden md:block"></div>
            <div className="relative">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`md:flex items-center lg:mb-12 mb-10 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    <div className={`md:w-1/2 lg:p-6 ${
                      index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                    }`}>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {`${index + 1}. ${step.title}`}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center z-10">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                        <span className="text-[#036872] font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <h2 className="section-title">Quality & Compliance</h2>
            <p className="section-subtitle mx-auto">
              We adhere to the highest standards of quality and ethical manufacturing practices.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Our rigorous quality control process ensures that every product leaving our facility meets the highest standards of craftsmanship and durability.",
                icon: CheckCircle,
              },
              {
                title: "International Certifications",
                description: "We hold SEDEX and CT-PAT certifications, demonstrating our commitment to ethical trade practices and supply chain security.",
                icon: Award,
              },
              {
                title: "Sustainable Practices",
                description: "We are committed to minimizing our environmental impact through responsible material sourcing and waste reduction strategies.",
                icon: Shield,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md lg:p-8 md:p-3 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#ccf7fb] rounded-full">
                      <Icon className="h-8 w-8 text-[#056773]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ManufacturingPage;