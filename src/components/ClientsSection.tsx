import { motion } from "framer-motion";
import { useState } from "react";

const clients = [
  { name: "ZARA", category: "international" },
  { name: "Bata", category: "domestic" },
  { name: "LI & FUNG", category: "international" },
  { name: "lotto", category: "international" },
  { name: "Raymond", category: "domestic" },
  { name: "VIP", category: "domestic" },
  { name: "Skybags", category: "domestic" },
  { name: "ARROW", category: "international" },
  { name: "ColorPlus", category: "domestic" },
  { name: "umbro", category: "international" },
  { name: "parx", category: "domestic" },
  { name: "PARK AVENUE", category: "domestic" },
  { name: "BIOWORLD", category: "" },
  { name: "Champion", category: "international" },
  { name: "NO FEAR", category: "" },
  { name: "Hush Puppies", category: "international" },
  { name: "U.S. POLO ASSN.", category: "international" },
  { name: "ROYAL ENFIELD", category: "domestic" },
  { name: "INDIAN PREMIER LEAGUE", category: "domestic" },
  { name: "NORTH STAR", category: "" },
  { name: "QUIKSILVER", category: "international" },
  { name: "ARISTOCRAT", category: "domestic" },
  { name: "El Corte Inglés", category: "international" },
  { name: "CONVERSE", category: "international" },
  { name: "SWISS MILITARY", category: "international" },
  { name: "TOMMY HILFIGER", category: "international" },
  { name: "UNITED COLORS OF BENETTON", category: "international" },
  { name: "FLYING MACHINE", category: "domestic" },
  { name: "Ed Hardy", category: "international" },
  { name: "SATYA PAUL", category: "domestic" },
  { name: "spencer's", category: "domestic" },
];

const ClientsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 8;
  const displayedClients = showAll
    ? clients
    : clients.slice(0, initialDisplayCount);

  return (
    <section className="lg:py-20 py-16 bg-[#F9FAFB]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="h-1 w-16 bg-[#056773] mx-auto mb-3"></div>
          <h2 className="section-title text-[#056773]">Our Global Clients</h2>
          <p className="section-subtitle mx-auto">
            Trusted by leading brands around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayedClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-white/30 hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <h3 className="sm:text-xl text-lg font-bold text-[#036872]">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 capitalize">
                  {client.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && clients.length > initialDisplayCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-[#056773] text-white rounded-lg hover:bg-[#04505a] transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsSection;
