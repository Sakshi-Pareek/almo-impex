import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="lg:py-20 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4621921/pexels-photo-4621921.jpeg"
                alt="About ALMO IMPEX"
                className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover"
              />
              <div className="absolute lg:block hidden -bottom-6 -right-6 bg-[#006c70] text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm uppercase">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-1 w-16 bg-[#006C70] mb-3"></div>
            <h2 className="section-title">About ALMO IMPEX</h2>
            <p className="mb-6 text-gray-600">
              ALMO IMPEX PVT LIMITED is a leading manufacturer and exporter of fashion, sports, and leather accessories, 
              including bags and trunks. With over 10 years of experience, we've established ourselves as a trusted 
              partner for global brands seeking quality and innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, text: "SEDEX & CT-PAT Certified" },
                { icon: CheckCircle, text: "100% Quality Assurance" },
                { icon: Target, text: "In-house R&D Team" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start">
                    <Icon className="h-5 w-5 text-[#006C70] mt-1 mr-3" />
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
            
            <Link to="/about" className="btn-primary flex items-center w-fit">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;