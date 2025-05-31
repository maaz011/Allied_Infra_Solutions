import { Building, Users, Construction, Briefcase } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

type StatProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
};

const Stat = ({ icon, value, label, duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const currentCount = Math.floor(percentage * value);
            setCount(currentCount);
            
            if (percentage < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value, duration, hasAnimated]);

  return (
    <div className="text-center">
      <div className="bg-primary/10 p-4 inline-block rounded-full mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-2">
        <span ref={countRef}>{count}</span>
        {label === 'Years Experience' && <span>+</span>}
      </h3>
      <p className="text-darkgray">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section 
      className="relative py-20 md:py-24 bg-cover bg-center text-white"
      style={{ 
        backgroundImage: `url('/32.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Stat 
            icon={<Building size={32} />} 
            value={250} 
            label="Projects Completed" 
          />
          <Stat 
            icon={<Users size={32} />} 
            value={120} 
            label="Happy Clients" 
          />
          <Stat 
            icon={<Construction size={32} />} 
            value={75} 
            label="Ongoing Projects" 
          />
          <Stat 
            icon={<Briefcase size={32} />} 
            value={15} 
            label="Years Experience" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;