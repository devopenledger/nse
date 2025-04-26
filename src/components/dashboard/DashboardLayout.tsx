
import React from 'react';
import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
  type: 'investor' | 'advisor' | 'admin';
}

const DashboardLayout = ({ children, type }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar type={type} />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-semibold whitespace-nowrap">
              {type.charAt(0).toUpperCase() + type.slice(1)} Portal
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>
                  {type === 'investor' ? 'IN' : type === 'advisor' ? 'AD' : 'AM'}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-sm leading-tight">
                <div className="font-medium">
                  {type === 'investor' ? 'John Doe' : type === 'advisor' ? 'Sarah Miller' : 'Admin User'}
                </div>
                <Link to="/login" className="text-xs text-muted-foreground hover:text-nse-primary">
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
