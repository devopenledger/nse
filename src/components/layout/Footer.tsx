
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Neo Sustainable Exchange</h3>
            <img 
              src="https://raw.githubusercontent.com/devopenledger/openledger-assets/main/Logo-NSE.png" 
              alt="NSE Logo" 
              className="h-8" 
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Dashboards</h3>
            <ul className="space-y-2">
              <li><Link to="/investor" className="hover:text-nse-primary transition-colors">Investor Portal</Link></li>
              <li><Link to="/advisor" className="hover:text-nse-primary transition-colors">Advisor Portal</Link></li>
              <li><Link to="/admin" className="hover:text-nse-primary transition-colors">Admin Console</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal/privacy-policy" className="hover:text-nse-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms-of-service" className="hover:text-nse-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal/compliance" className="hover:text-nse-primary transition-colors">Compliance</Link></li>
              <li><Link to="/legal/cookie-policy" className="hover:text-nse-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="hover:text-nse-primary transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-nse-primary transition-colors">Register</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Neo Sustainable Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
