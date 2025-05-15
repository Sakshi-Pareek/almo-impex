import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, CheckCircle } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const milestones = [
  {
    year: 2015,
    title: 'Company Founded',
    description: 'ALMO IMPEX was established in Gurgaon, India',
  },
  {
    year: 2017,
    title: 'International Expansion',
    description: 'Started exporting to European markets',
  },
  {
    year: 2019,
    title: 'SEDEX Certification',
    description: 'Achieved SEDEX certification for ethical trade practices',
  },
  {
    year: 2020,
    title: 'Manufacturing Expansion',
    description: 'Expanded manufacturing facility to 9500 sq. ft.',
  },
  {
    year: 2021,
    title: 'CT-PAT Certification',
    description: 'Received CT-PAT certification for supply chain security',
  },
  {
    year: 2023,
    title: 'Digital Transformation',
    description: 'Launched new digital presence and expanded product range',
  },
];

const certifications = [
  {
    name: 'SEDEX',
    description: 'Ethical Trade Audit certification ensuring ethical business practices',
    icon: Award,
  },
  {
    name: 'CT-PAT',
    description: 'Customs-Trade Partnership Against Terrorism for supply chain security',
    icon: CheckCircle,
  },
];

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - ALMO IMPEX';
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
      <section className="relative py-32 bg-about-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-[#056773]/70"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="mb-4">About ALMO IMPEX</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A leading manufacturer and exporter of premium fashion, sports, and leather accessories.
            </p>
          </motion.div>
        </div>
      </section>

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
              <h2 className="section-title">Our Story</h2>
              <p>
                Founded in 2015, ALMO IMPEX PVT LIMITED has grown from a small manufacturing unit to a globally 
                recognized exporter of fashion, sports, and leather accessories. With our headquarters in Gurgaon, 
                India, we've established ourselves as a trusted partner for brands seeking quality and innovation.
              </p>
              <p className="sm:my-6 my-4">
                Our journey has been marked by a relentless pursuit of excellence, from investing in the latest 
                manufacturing technology to maintaining the highest quality standards. We take pride in our 
                skilled workforce, many of whom have been with us for over a decade, contributing to our consistent 
                quality and craftsmanship.
              </p>
              <p>
                Today, ALMO IMPEX supplies to over 50 global brands across 4 countries, with an impressive 
                client retention rate of over 90%. Our commitment to quality, innovation, and ethical business 
                practices continues to drive our growth and success in the international market.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/JGDG8Z3Gmt.webp"
                alt="ALMO IMPEX Factory"
                className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover"
              />
              <div className="absolute lg:block hidden -bottom-6 -left-6 bg-[#006C70] text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm uppercase">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="lg:py-20 py-16 bg-[#ccf7fb]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="h-1 w-16 bg-[#006C70] mx-auto mb-3"></div>
            <h2 className="section-title">Our Values & Certifications</h2>
            <p className="section-subtitle mx-auto">
              We are committed to the highest standards of quality, ethics, and sustainability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md sm:p-8 p-4"
            >
              <BookOpen className="h-12 w-12 text-[#006C70] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
              
              <div className="space-y-4">
                {[
                  "Quality Excellence - We never compromise on quality",
                  "Customer Focus - We exceed customer expectations",
                  "Innovation - We constantly evolve and improve",
                  "Sustainability - We respect our environment",
                  "Integrity - We conduct business ethically",
                ].map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#006C70] mt-0.5 mr-3 shrink-0" />
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md sm:p-8 p-4"
            >
              <Award className="h-12 w-12 text-[#006C70] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 p-2 bg-[#ccf7fb] rounded-full shrink-0">
                        <Icon className="h-6 w-6 text-[#006C70]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">{cert.name}</h4>
                        <p className="text-gray-600">{cert.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
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
            className="text-center mb-10"
          >
            <div className="h-1 w-16 bg-white mx-auto mb-3"></div>
            <h2 className="text-white mb-4">Key Achievements</h2>
            <p className="text-white max-w-3xl mx-auto">
              Our journey has been marked by significant milestones and achievements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 1000000, label: "Bags Shipped", suffix: "+" },
              { value: 50, label: "Global Brands", suffix: "+" },
              { value: 4, label: "Countries Exported" },
              { value: 90, label: "Client Retention", suffix: "%+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-white/50 hover:shadow-lg transition-shadow"
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix || ""}
                />
                <p className="text-black mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:py-20 pt-16 pb-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="h-1 w-16 bg-[#006C70] mx-auto mb-3"></div>
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle mx-auto">
              The key milestones that have shaped our growth and success over the years.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            <div className="relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center sm:mb-16 mb-10 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2  ${index % 2 === 0 ? 'text-right sm:pr-8 pr-3' : 'text-left flex justify-end flex-col sm:pl-8 pl-3 pr-0'}`}>
                    <div className="sm:mb-2 mb-0">
                      <span className="text-[#006C70] font-bold text-lg">{milestone.year}</span>
                    </div>
                    <h3 className="sm:text-xl text-lg font-semibold mb-2 max-sm:leading-[130%]">{milestone.title}</h3>
                    <p className="text-gray-600 max-sm:text-sm">{milestone.description}</p>
                  </div>
                  
                  <div className="z-10 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#006C70] shadow-md">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'order-2 pl-8' : 'pr-8'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;