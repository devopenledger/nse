
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Investor Pages
import InvestorDashboard from "./pages/investor/InvestorDashboard";
import Investments from "./pages/investor/Investments";
import Portfolio from "./pages/investor/Portfolio";
import KycSuitability from "./pages/investor/KycSuitability";
import WalletSettings from "./pages/investor/WalletSettings";
import MyAdvisor from "./pages/investor/MyAdvisor";
import Notifications from "./pages/investor/Notifications";
import Documents from "./pages/investor/Documents";
import HelpCenter from "./pages/investor/HelpCenter";
import CompanyProfile from "./pages/investor/CompanyProfile";
import SecondaryMarket from "./pages/investor/SecondaryMarket";

// Advisor Pages
import AdvisorDashboard from "./pages/advisor/AdvisorDashboard";
import SubmitListing from "./pages/advisor/SubmitListing";
import ManageListings from "./pages/advisor/ManageListings";
import ClientManagement from "./pages/advisor/ClientManagement";
import OfficeManagement from "./pages/advisor/OfficeManagement";
import Analytics from "./pages/advisor/Analytics";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ListingsApproval from "./pages/admin/ListingsApproval";
import UserManagement from "./pages/admin/UserManagement";
import ComplianceMonitoring from "./pages/admin/ComplianceMonitoring";
import Reports from "./pages/admin/Reports";
import MarketControls from "./pages/admin/MarketControls";
import SystemSettings from "./pages/admin/SystemSettings";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import Compliance from "./pages/legal/Compliance";
import CookiePolicy from "./pages/legal/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Investor Routes */}
          <Route path="/investor" element={<InvestorDashboard />} />
          <Route path="/investor/investments" element={<Investments />} />
          <Route path="/investor/portfolio" element={<Portfolio />} />
          <Route path="/investor/kyc-suitability" element={<KycSuitability />} />
          <Route path="/investor/wallet-settings" element={<WalletSettings />} />
          <Route path="/investor/my-advisor" element={<MyAdvisor />} />
          <Route path="/investor/notifications" element={<Notifications />} />
          <Route path="/investor/documents" element={<Documents />} />
          <Route path="/investor/help-center" element={<HelpCenter />} />
          <Route path="/investor/company/:symbol" element={<CompanyProfile />} />
          <Route path="/investor/secondary-market" element={<SecondaryMarket />} />
          
          {/* Advisor Routes */}
          <Route path="/advisor" element={<AdvisorDashboard />} />
          <Route path="/advisor/submit-listing" element={<SubmitListing />} />
          <Route path="/advisor/manage-listings" element={<ManageListings />} />
          <Route path="/advisor/client-management" element={<ClientManagement />} />
          <Route path="/advisor/office-management" element={<OfficeManagement />} />
          <Route path="/advisor/analytics" element={<Analytics />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/listings-approval" element={<ListingsApproval />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="/admin/compliance" element={<ComplianceMonitoring />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/market-controls" element={<MarketControls />} />
          <Route path="/admin/system-settings" element={<SystemSettings />} />
          
          {/* Legal Routes */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/compliance" element={<Compliance />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          
          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
