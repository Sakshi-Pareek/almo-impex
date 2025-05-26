import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#107579] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Fy2nUhX5b5.jpeg"
                alt="Company Logo"
                className="w-10 h-10 rounded-md"
              />
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Copperplate Gothic Bold', sans-serif" }}>
                ALMO IMPEX
              </span>
            </Link>
            <p className="text-white my-4">
              A leading manufacturer and exporter of fashion, sports, and
              leather accessories.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:-translate-y-2 tramsition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:-translate-y-2 tramsition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:-translate-y-2 tramsition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:-translate-y-2 tramsition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "About",
                "Products",
                "Manufacturing",
                "Factory",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
  to={`/${item.toLowerCase().replace(" ", "-")}`}
  className="text-white relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
>
  {item}
</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              {[
                "Backpacks",
                "Duffles",
                "Wallets",
                "Belts",
                "Caps",
                "Fashion Accessories",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-white relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-white shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/itQRZhxN9JTCZYB46" target="_blank" className="text-white">
                Plot No. 590, Pace City-2, Sec-37, Gurugram, Haryana - 122001.
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-white" />
                <a
                  href="tel:+918800170827"
                  className="text-white"
                >
                  +91 – 88 00 170 827
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-white" />
                <a
                  href="mailto:eshu@almoexports.com"
                  className="text-white"
                >
                  eshu@almoexports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white sm:mt-12 mt-8 sm:pt-8 pt-4 text-center text-white">
          <p>
            © {new Date().getFullYear()} ALMO IMPEX PVT LIMITED. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
