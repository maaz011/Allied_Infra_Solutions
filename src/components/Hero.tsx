import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Building the Future. <br />
            <span className="text-primary">Leasing the Present.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized in industrial construction, property leasing, rentals, and site management. 
            Bringing innovation and reliability to every project.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center"
            >
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/projects" 
              className="bg-transparent border-2 border-white hover:border-primary hover:text-primary text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;