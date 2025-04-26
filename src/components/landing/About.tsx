
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Sustainable Investments",
      description: "All investments are screened for ESG compliance and sustainability metrics.",
    },
    {
      title: "Shariah-Compliant Finance",
      description: "Our halal financial products adhere to Islamic finance principles.",
    },
    {
      title: "Transparent Tokenization",
      description: "Blockchain-based tokens for fractional ownership of sustainable assets.",
    },
    {
      title: "Regulatory Compliance",
      description: "Fully compliant with international financial regulations and standards.",
    },
  ];
  
  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-nse-secondary mb-4">
            About Neo Sustainable Exchange
          </h2>
          <p className="text-lg text-gray-600">
            NSE is the world's first exchange that combines sustainability principles with 
            halal finance, creating an inclusive marketplace for ethical investments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-nse-secondary mb-4">
              Our Vision for Sustainable Finance
            </h3>
            <p className="text-gray-600 mb-6">
              Neo Sustainable Exchange was founded on the belief that investments should 
              generate not only financial returns but also positive societal and environmental impact.
            </p>
            <p className="text-gray-600 mb-8">
              By integrating Islamic finance principles with sustainability goals, we've created 
              a platform where ethical investors can access opportunities aligned with their values, 
              without compromising on performance or compliance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nse-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-nse-secondary">{feature.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="aspect-video bg-gradient-to-r from-nse-primary to-nse-accent rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div>
                    <p className="text-3xl font-bold mb-1">45%</p>
                    <p className="text-sm opacity-80">Average Carbon Reduction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">18.4%</p>
                    <p className="text-sm opacity-80">Annual Return Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">$240M</p>
                    <p className="text-sm opacity-80">Impact Investment</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">35</p>
                    <p className="text-sm opacity-80">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
