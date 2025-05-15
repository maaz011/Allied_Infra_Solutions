import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import ProjectCard from '../components/ProjectCard';
import StatsCounter from '../components/StatsCounter';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [featuredProjects, setFeaturedProjects] = useState(projects.slice(0, 3));

  // Update document title
  useEffect(() => {
    document.title = 'InduBuild - Industrial Construction & Property Services';
  }, []);

  return (
    <div>
      <Hero />
      
      <ServiceSection />
      
      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                Our Featured Projects
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="max-w-2xl text-darkgray">
                Explore our latest and most innovative industrial projects across India.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary font-medium mt-4 md:mt-0 hover:text-primary/80 transition-colors"
            >
              View All Projects
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <StatsCounter />
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Industrial Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Whether you're looking to build, lease, or rent industrial facilities, our team is ready to deliver solutions tailored to your needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-md transition duration-300 hover:bg-opacity-90"
            >
              GET CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;