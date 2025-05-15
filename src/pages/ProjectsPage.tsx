import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectType } from '../types/ProjectType';

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'construction', label: 'Construction' },
    { id: 'leasing', label: 'Leasing' },
    { id: 'completed', label: 'Completed' },
    { id: 'ongoing', label: 'Ongoing' },
  ];

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProjects(projects);
      return;
    }
    
    let filtered;
    switch (category) {
      case 'construction':
        filtered = projects.filter(project => 
          project.title.includes('Manufacturing') || 
          project.title.includes('Construction') || 
          project.title.includes('Fabrication')
        );
        break;
      case 'leasing':
        filtered = projects.filter(project => 
          project.title.includes('Leasing') || 
          project.title.includes('Rental') || 
          project.title.includes('LogiPark')
        );
        break;
      case 'completed':
        filtered = projects.filter(project => 
          project.status.includes('completed') || 
          project.status === 'Operational'
        );
        break;
      case 'ongoing':
        filtered = projects.filter(project => 
          project.status.includes('Ongoing') || 
          project.status.includes('construction') || 
          project.status.includes('progress')
        );
        break;
      default:
        filtered = projects;
    }
    
    setFilteredProjects(filtered);
  };

  // Update document title
  useEffect(() => {
    document.title = 'Our Projects - InduBuild';
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
              Our Projects
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
              Explore our diverse portfolio of industrial construction and property projects across India.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => filterProjects(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white'
                    : 'bg-lightgray text-darkgray hover:bg-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{project.location}</p>
                  <p className="text-darkgray mb-6">{project.description}</p>
                  
                  {project.completionPercentage !== undefined && (
                    <div className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-darkgray">Completion</span>
                        <span className="text-sm font-medium text-secondary">{project.completionPercentage}%</span>
                      </div>
                      <div className="w-full bg-lightgray rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${project.completionPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-darkgray">No projects found matching the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-darkgray max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you bring your industrial project to life. 
              Contact us today to discuss your requirements.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;