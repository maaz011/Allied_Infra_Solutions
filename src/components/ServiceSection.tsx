import { Building2, Warehouse, Hammer, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Service = ({ icon, title, description }: ServiceProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="bg-primary/10 p-4 inline-block rounded-full mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">{title}</h3>
      <p className="text-darkgray">{description}</p>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: <Building2 size={32} />,
      title: "Industrial Construction",
      description: "Turnkey solutions for manufacturing plants, warehouses, and industrial facilities with a focus on durability and efficiency."
    },
    {
      icon: <Warehouse size={32} />,
      title: "Property Leasing",
      description: "Flexible leasing options for industrial spaces, warehouses, and commercial properties tailored to your business needs."
    },
    {
      icon: <Truck size={32} />,
      title: "Architectural and Designing Services",
      description: "We deliver industrial architectural design solutions focused on efficiency, scalability, and compliance with modern standards."
    },
    {
      icon: <Hammer size={32} />,
      title: "Industrial Real Estate Advisory",
      description: "Expert consultancy and advisory for industrial real estate to help you make informed, strategic property decisions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-darkgray">
            Comprehensive industrial solutions to meet your construction, leasing, and operational needs.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Service {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;