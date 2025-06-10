import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThirtyOne from "@/assets/31.jpg"

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 `}
        style={{
         backgroundImage: `url(${ThirtyOne})`,  // <-- ✔ fixed
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        {/* …rest of your code stays exactly the same … */}
      </div>
    </section>
  );
};

export default Hero;