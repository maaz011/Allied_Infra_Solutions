import { NavLink } from 'react-router-dom';
import { HardHat, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Logo" width={50} height={50} className="mr-2" style={{ marginRight: '2px' }} />
              <span className="font-heading font-bold text-xl">Allied Infra Solutions</span>
            </div>
            <p className="text-mediumgray mb-4">
              Your trusted partner in industrial construction, property leasing, rentals, 
              and site management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mediumgray hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-mediumgray hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-mediumgray hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-mediumgray hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-mediumgray hover:text-primary transition-colors duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-mediumgray hover:text-primary transition-colors duration-300">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-mediumgray hover:text-primary transition-colors duration-300">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-mediumgray hover:text-primary transition-colors duration-300">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-mediumgray">Industrial Construction</li>
              <li className="text-mediumgray">Property Leasing</li>
              <li className="text-mediumgray">Architectural and Designing Services</li>
              <li className="text-mediumgray">Industrial Real Estate Advisory</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <p className="text-mediumgray">
                  Office: Villa No. C-2013, Ansal Sushant City, GT Karnal Road, Near Parker Mall, Sonipat, Haryana
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                <p className="text-mediumgray">+91-8178855194 | 9667462284</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                <p className="text-mediumgray">alliedinfrasolutions09@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-darkgray my-8" />
        
        {/* Copyright */}
        <div className="text-center text-mediumgray">
          <p>&copy; {currentYear} InduBuild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;