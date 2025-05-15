import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Shield, Users } from 'lucide-react';

const AboutPage = () => {
  // Update document title
  useEffect(() => {
    document.title = 'About Us - InduBuild';
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
              About Us
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
              Get to know the team behind India's leading industrial construction and property services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Industrial Construction" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 bg-primary text-white py-4 px-8 rounded-tr-lg">
                <span className="font-heading font-bold text-xl">15+ Years</span>
                <p className="text-sm">Of Excellence</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                We are a leading name in industrial construction and property services.
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-darkgray mb-6">
                With years of experience in developing, leasing, and managing industrial infrastructure, we bring innovation and reliability to every project. Whether you're looking to construct a new facility, lease industrial property, or rent equipment, our dedicated team is here to deliver.
              </p>
              <p className="text-darkgray mb-8">
                Our mission is to empower industrial growth through sustainable and efficient solutions tailored to client needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md text-primary mr-4">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-2">Quality Assurance</h4>
                    <p className="text-sm text-darkgray">Rigorous quality standards for all projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md text-primary mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-2">Expert Team</h4>
                    <p className="text-sm text-darkgray">Highly skilled professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-darkgray">
              The principles that guide our approach to every project and client relationship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 inline-block rounded-full mb-6 text-primary">
                <Shield size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-secondary">Integrity</h3>
              <p className="text-darkgray">
                We maintain the highest ethical standards in all our business dealings.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 inline-block rounded-full mb-6 text-primary">
                <Award size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-secondary">Excellence</h3>
              <p className="text-darkgray">
                We strive for excellence in every aspect of our projects and services.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 inline-block rounded-full mb-6 text-primary">
                <Target size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-secondary">Innovation</h3>
              <p className="text-darkgray">
                We embrace new technologies and methods to improve efficiency and sustainability.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 inline-block rounded-full mb-6 text-primary">
                <Users size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-secondary">Collaboration</h3>
              <p className="text-darkgray">
                We believe in building strong partnerships with our clients and stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Industrial Project?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to discuss how we can help bring your vision to life.
            </motion.p>
            <motion.a 
              href="/contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;