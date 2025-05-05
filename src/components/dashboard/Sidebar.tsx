
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Home,
  User,
  Briefcase,
  Settings,
  FileText,
  Users,
  Shield,
  AlertTriangle,
  FilePlus,
  List,
  Building,
  CheckSquare,
  Wallet,
  FileCheck,
  Bell,
  HelpCircle,
  BookOpen
} from 'lucide-react';

interface SidebarProps {
  type: 'investor' | 'advisor' | 'admin';
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const InvestorNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/investor', icon: Home },
  { label: 'Investments', href: '/investor/investments', icon: BarChart3 },
  { label: 'My Portfolio', href: '/investor/portfolio', icon: Briefcase },
  { label: 'KYC & Suitability', href: '/investor/kyc-suitability', icon: CheckSquare },
  { label: 'Wallet & Settings', href: '/investor/wallet-settings', icon: Wallet },
  { label: 'My Advisor', href: '/investor/my-advisor', icon: User },
  { label: 'Notifications', href: '/investor/notifications', icon: Bell },
  { label: 'Documents', href: '/investor/documents', icon: FileText },
  { label: 'Help Center', href: '/investor/help-center', icon: HelpCircle },
];

const AdvisorNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/advisor', icon: Home },
  { label: 'Submit New Listing', href: '/advisor/submit-listing', icon: FilePlus },
  { label: 'Manage Listings', href: '/advisor/manage-listings', icon: List },
  { label: 'Client Management', href: '/advisor/client-management', icon: Users },
  { label: 'Office & Team', href: '/advisor/office-management', icon: Building },
  { label: 'Analytics', href: '/advisor/analytics', icon: BarChart3 },
];

const AdminNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: Home },
  { label: 'Listings Approval', href: '/admin/listings-approval', icon: FileCheck },
  { label: 'User Management', href: '/admin/user-management', icon: Users },
  { label: 'Compliance', href: '/admin/compliance', icon: Shield },
  { label: 'Reports', href: '/admin/reports', icon: FileText },
  { label: 'Market Controls', href: '/admin/market-controls', icon: AlertTriangle },
  { label: 'System Settings', href: '/admin/system-settings', icon: Settings },
];

const Sidebar = ({ type }: SidebarProps) => {
  const location = useLocation();
  
  let navItems: NavItem[];
  let title: string;
  
  switch (type) {
    case 'investor':
      navItems = InvestorNavItems;
      title = 'Investor Portal';
      break;
    case 'advisor':
      navItems = AdvisorNavItems;
      title = 'Advisor Portal';
      break;
    case 'admin':
      navItems = AdminNavItems;
      title = 'Admin Console';
      break;
    default:
      navItems = InvestorNavItems;
      title = 'Portal';
  }
  
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-sidebar border-r w-64 py-6">
      <div className="px-4 mb-6">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://raw.githubusercontent.com/devopenledger/openledger-assets/main/Logo-NSE.png" 
            alt="NSE Logo" 
            className="h-8" 
          />
          <span className="font-semibold text-lg">{title}</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto px-3">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  isActive 
                    ? "bg-nse-primary text-white" 
                    : "hover:bg-muted hover:text-nse-primary"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t">
        <Link 
          to="/" 
          className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
        >
          <Home className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
