import { ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectType } from '../types/ProjectType';

type ProjectCardProps = {
  project: ProjectType;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-between items-center">
              <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-primary/80">
                {project.status}
              </span>
              <div className="flex items-center text-white text-sm">
                <Calendar size={16} className="mr-1" />
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
        <div className="flex items-center mb-4 text-darkgray text-sm">
          <span className="font-medium">Location:</span>
          <span className="ml-2">{project.location}</span>
        </div>
        <p className="text-darkgray mb-4 line-clamp-3">{project.description}</p>
        <Link 
          to={`/projects`} 
          className="text-primary font-medium flex items-center hover:text-primary/80 transition-colors"
        >
          View Details
          <ExternalLink size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;