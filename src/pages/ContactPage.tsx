import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us - ALMO IMPEX";
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
      <section className="relative py-32 bg-[#056773]">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="lg:py-20 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-16 bg-[#056773] mb-3"></div>
              <h2 className="section-title mb-4">Get In Touch</h2>
              <p className="mb-10 text-gray-600">
                Whether you're a brand looking for a manufacturing partner or
                have a question about our products, our team is ready to assist
                you. Fill out the form, and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content:
                      "Plot No. 590, Pace City-2, Sec-37, Gurugram, Haryana - 122001.",
                    link: "https://maps.app.goo.gl/itQRZhxN9JTCZYB46",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 – 88 00 170 827",
                    link: "tel:+918800170827",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "eshu@almoexports.com",
                    link: "mailto:eshu@almoexports.com",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Saturday: 9am - 6pm",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 p-2 bg-[#ccf7fb] rounded-full shrink-0">
                        <Icon className="h-6 w-6 text-[#056773]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            className="text-gray-600 hover:text-[#056773] transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* <div>
                <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-[#056773] text-white p-3 rounded-full group hover:bg-white hover:shadow-lg transition-colors"
                      aria-label={`Visit our ${social} page`}
                    >
                      <Send className="h-5 w-5 text-white group-hover:text-[#006C70] transition-colors" />
                    </a>
                  ))}
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
            <h2 className="section-title">Find Us</h2>
            <p className="section-subtitle mx-auto">
              Our factory and office are centrally located in Gurgaon, India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3779542713833!2d77.00434588091798!3d28.438020913299987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17f5eed739d9%3A0x83e4e9101f23b575!2sAlmo%20Exports%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747034077620!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ALMO IMPEX Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
