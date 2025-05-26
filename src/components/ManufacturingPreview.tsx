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
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
         <div className="flex flex-col mb-4 justify-center items-center">
            <h2 className="uppercase tracking-widest text-[#006C70] font-bold text-xl mb-1">
            Manufacturing Excellence
            </h2>
            <div className="h-1 w-16 bg-[#006C70] rounded-full mb-2"></div>
          </div>
          <p className="section-subtitle mx-auto">
          Our cutting-edge manufacturing facility is dedicated to delivering exceptional quality and unwavering consistency in every product we create.
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
              className="relative overflow-hidden rounded-xl lg:p-6 p-3 bg-white text-[#006C70] text-center border border-[#006C70] shadow-[0_0_4px_#006C70] cursor-pointer hover:shadow-[0_0_8px_#006C70] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center text-[#006C70]">
                <div className="p-4 rounded-full mb-4 bg-[#006C70]/20">
                  <feature.icon className="h-6 w-6 text-[#006C70]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#006C70]">{feature.title}</h3>
                {feature.value ? (
                  <div className="text-2xl font-bold mb-2 text-[#006C70]">
                    <AnimatedCounter
                      end={feature.value} 
                      prefix={feature.prefix || ""}
                      suffix={feature.suffix || ""}
                    />
                  </div>
                ) : (
                  <p className="text-lg font-semibold mb-2 text-[#006C70]">{feature.text}</p>
                )}
                {feature.label && (
                  <p className="text-[#006C70]/90">{feature.label}</p>
                )}
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
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