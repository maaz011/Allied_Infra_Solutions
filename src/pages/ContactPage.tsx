import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Contact Us - InduBuild';
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="font-heading text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get in touch with our team. We're here to answer any questions you may have.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary p-6 text-white">
                  <h3 className="font-heading text-2xl font-semibold mb-2">Contact Information</h3>
                  <p>Reach out to us through the following channels</p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full text-primary mr-4 flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-secondary mb-1">Our Location</h4>
                        <p className="text-darkgray">
                          Villa No. C-2013, Ansal Sushant City<br />
                          GT Karnal Road, Near Parker Mall, Sonipat, <br />
                          Haryana, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full text-primary mr-4 flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-secondary mb-1">Phone Number</h4>
                        <p className="text-darkgray">+91-8178855194</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full text-primary mr-4 flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-secondary mb-1">Email Address</h4>
                        <p className="text-darkgray">alliedinfrasolutions09@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full text-primary mr-4 flex-shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-secondary mb-1">Working Hours</h4>
                        <p className="text-darkgray">
                          Monday - Friday: 9:00 AM - 6:00 PM <br />
                          Saturday: 9:00 AM - 1:00 PM <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe 
                src="" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-darkgray">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                  What types of industrial projects do you handle?
                </h3>
                <p className="text-darkgray">
                  We handle a wide range of industrial projects including manufacturing plants, warehouses, logistics centers, 
                  industrial estates, and specialized facilities. Our expertise spans across various industries such as steel, 
                  automotive, logistics, and more.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                  Do you offer leasing for existing properties?
                </h3>
                <p className="text-darkgray">
                  Yes, we offer leasing solutions for both our newly constructed properties and existing industrial spaces 
                  in our portfolio. We can provide flexible leasing terms tailored to your business requirements.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                  What is the typical timeline for completing an industrial construction project?
                </h3>
                <p className="text-darkgray">
                  The timeline varies depending on the project scope, complexity, and size. Small to medium projects typically 
                  take 6-12 months, while larger industrial facilities may take 12-24 months. We provide detailed timelines 
                  during the initial consultation phase.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                  Do you provide maintenance services for the properties you construct?
                </h3>
                <p className="text-darkgray">
                  Yes, we offer comprehensive maintenance services for all our constructed and leased properties. Our 
                  maintenance packages include regular inspections, repairs, and facility management to ensure your 
                  industrial property remains in optimal condition.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;