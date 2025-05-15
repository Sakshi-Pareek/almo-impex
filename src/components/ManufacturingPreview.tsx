import { motion } from 'framer-motion';
import { ArrowRight, Factory, XCircle, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';

const features = [
  {
    icon: Factory,
    title: "State-of-the-art Machinery",
    value: 140,
    label: "Machines",
    suffix: "+",
  },
  {
    icon: MapPin,
    title: "Expansive Facility",
    value: 9500,
    label: "sq. ft. Facility",
  },
  {
    icon: XCircle,
    title: "Quality Excellence",
    value: 2,
    label: "% Quality Defects",
    prefix: "<",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    text: "COVID-Safe & Global Standards Compliant",
  },
];

const ManufacturingPreview = () => {
  return (
    <section className="lg:py-20 py-16 bg-[#d6f6f9]">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="h-1 w-16 bg-[#006C70] mx-auto mb-3"></div>
          <h2 className="section-title">Manufacturing Excellence</h2>
          <p className="section-subtitle mx-auto">
            Our state-of-the-art manufacturing facility ensures premium quality and consistent output.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#CCF7FB] rounded-full">
                  <feature.icon className="h-6 w-6 text-[#056773]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              {feature.value ? (
                <AnimatedCounter
                  end={feature.value}
                  prefix={feature.prefix || ""}
                  suffix={feature.suffix || ""}
                />
              ) : (
                <p className="text-gray-600">{feature.text}</p>
              )}
              {feature.label && <p className="text-gray-600">{feature.label}</p>}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/manufacturing" className="btn-primary inline-flex items-center">
            Explore Our Manufacturing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingPreview;