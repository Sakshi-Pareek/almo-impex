import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { Briefcase, Users, Award, Globe, Lightbulb, BarChart, PieChart } from 'lucide-react';

const stats = [
  { 
    value: 1000000, 
    label: "Bags Shipped", 
    suffix: "+", 
    icon: Briefcase 
  },
  { 
    value: 50, 
    label: "Global Brands", 
    suffix: "+", 
    icon: Globe 
  },
  { 
    value: 4, 
    label: "Countries", 
    icon: Globe 
  },
  { 
    value: 90, 
    label: "Client Retention", 
    suffix: "%+", 
    icon: Users 
  },
  { 
    value: 100, 
    label: "Innovation", 
    suffix: "%", 
    icon: Lightbulb 
  },
  { 
    value: 100, 
    label: "Quality Commitment", 
    suffix: "%", 
    icon: Award 
  },
  { 
    value: 100, 
    label: "Trend Forecasting", 
    suffix: "%", 
    icon: BarChart 
  },
  { 
    value: 100, 
    label: "In-house R&D", 
    suffix: "%", 
    icon: PieChart 
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Excellence in Numbers</h2>
          <p className="section-subtitle mx-auto">A testament to our dedication to quality and excellence in the fashion accessory industry.</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#ccf7fb] rounded-full">
                    <Icon className="h-6 w-6 text-[#036872]" />
                  </div>
                </div>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix || ""}
                />
                <p className="text-gray-600 text-center font-medium mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;