import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import {
  Briefcase,
  Users,
  Award,
  Globe,
  Lightbulb,
  BarChart,
  PieChart,
} from "lucide-react";
import { useRef } from "react";

const stats = [
  {
    value: 1000000,
    label: "Bags Shipped",
    suffix: "+",
    icon: Briefcase,
    description: "Delivering excellence worldwide",
  },
  {
    value: 50,
    label: "Global Brands",
    suffix: "+",
    icon: Globe,
    description: "Trusted by leading fashion houses",
  },
  {
    value: 4,
    label: "Countries",
    icon: Globe,
    description: "Expanding our global footprint",
  },
  {
    value: 90,
    label: "Client Retention",
    suffix: "%+",
    icon: Users,
    description: "Building lasting partnerships",
  },
  {
    value: 100,
    label: "Innovation",
    suffix: "%",
    icon: Lightbulb,
    description: "Pushing creative boundaries",
  },
  {
    value: 100,
    label: "Quality Commitment",
    suffix: "%",
    icon: Award,
    description: "Uncompromising excellence",
  },
  {
    value: 100,
    label: "Trend Forecasting",
    suffix: "%",
    icon: BarChart,
    description: "Staying ahead of fashion",
  },
  {
    value: 100,
    label: "In-house R&D",
    suffix: "%",
    icon: PieChart,
    description: "Continuous innovation",
  },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      ref={sectionRef}
      className="lg:py-20 sm:py-16 py-12 bg-[#d6f6f9]"
    >
      <div className="container-custom relative">
        <motion.div style={{ opacity, scale }} className="text-center mb-16">
          <div className="flex flex-col mb-4 justify-center items-center">
            <h2 className="uppercase tracking-widest text-[#006C70] font-bold text-xl mb-1">
            Excellence in Numbers
            </h2>
            <div className="h-1 w-16 bg-[#006C70] rounded-full mb-2"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are dedicated to exceptional quality in fashion accessories. Our
            meticulously crafted products enhance your style while ensuring
            durability and attention to detail.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              viewport={{ once: true }}
              className="p-6 bg-black/20 rounded-lg shadow-md flex flex-col justify-center items-center min-h-[120px]"
            >
              <div className="text-4xl font-extrabold mb-2">
                <AnimatedCounter 
                  end={stat.value}
                  suffix={stat.suffix || ""}
                />
              </div>
              <div className="text-lg font-medium text-white text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
