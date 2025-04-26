
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nse-primary/30 via-white to-nse-accent/20 opacity-80" />
      
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-nse-secondary mb-6">
            Future of <span className="text-nse-primary">Sustainable</span> Finance
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Neo Sustainable Exchange is pioneering the integration of ethical investing principles 
            with cutting-edge financial technology, creating a marketplace where profits align with purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/register">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#about">Learn More</a>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-nse-primary mb-1">$1.2B+</p>
              <p className="text-gray-600">Assets Under Management</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-nse-primary mb-1">25k+</p>
              <p className="text-gray-600">Global Investors</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-nse-primary mb-1">100%</p>
              <p className="text-gray-600">Halal & ESG Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
