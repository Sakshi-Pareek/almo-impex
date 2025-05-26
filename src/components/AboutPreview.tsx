import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Award, text: "SEDEX & CT-PAT Certified" },
  { icon: CheckCircle, text: "100% Quality Assurance" },
  { icon: Target, text: "In-house R&D Team" },
  { icon: Globe, text: "Global Reach" },
];

const AboutPreview = () => {
  return (
    <section className="relative lg:py-20 sm:py-16 py-12 max-w-7xl mx-auto">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#006C70]/10 rounded-full blur-3xl z-0"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-16 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full flex justify-center order-2 lg:order-1"
          >
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/SPeF6PBovh.jpg"
              alt="About ALMO IMPEX"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] lg:h-[550px]"
            />
          </motion.div>
          <div className="order-1 lg:order-2">
            <div className="flex flex-col items-start mb-4">
              <h2 className="uppercase tracking-widest text-[#006C70] font-bold text-xl mb-1">
              ALMO IMPEX PVT LIMITED
              </h2>
              <div className="h-1 w-16 bg-[#006C70] rounded-full mb-2"></div>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              ALMO IMPEX PVT LIMITED is a prominent manufacturer and exporter of
              fashion, sports, and leather accessories, including bags and
              trunks. With over a year of experience, we have established
              ourselves as a trusted partner for global brands in search of
              quality and innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md flex items-center hover:shadow-xl transition-shadow group"
                  >
                    <div className="bg-[#006C70]/10 p-3 rounded-full mr-3 group-hover:bg-[#006C70]/20 transition-colors">
                      <Icon className="h-6 w-6 text-[#006C70]" />
                    </div>
                    <p className="font-medium text-gray-800 text-base">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <Link
              to="/about"
              className="btn-primary group hover:scale-105 transition-transform duration-300"
            >
              Discover Our Journey
             
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
