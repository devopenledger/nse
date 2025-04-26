
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/a4e8a2e3-3a93-473d-98de-64d6a950fe4d.png" alt="NSE Logo" className="h-8" />
        </Link>
        
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 pt-10">
                <Link to="/" className="text-lg font-medium hover:text-nse-primary transition-colors">
                  Home
                </Link>
                <Link to="/login" className="text-lg font-medium hover:text-nse-primary transition-colors">
                  Login
                </Link>
                <Link to="/register" className="text-lg font-medium hover:text-nse-primary transition-colors">
                  Register
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-nse-primary transition-colors">
              Home
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
