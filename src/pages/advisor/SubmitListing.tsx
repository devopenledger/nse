
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ListingForm from '@/components/advisor/ListingForm';
import { ArrowRight, FileText, List, Check } from 'lucide-react';

const SubmitListing = () => {
  const navigate = useNavigate();

  const handleStartNewListing = () => {
    navigate('/advisor/new-listing');
  };

  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Submit New Listing</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Listing Onboarding Process</CardTitle>
              <CardDescription>
                Follow our step-by-step wizard to submit your new token listing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="max-w-md">
                    <h3 className="text-lg font-medium mb-2">Complete Listing Creation Wizard</h3>
                    <p className="text-muted-foreground mb-4">
                      Our streamlined process guides you through each step of the listing submission, 
                      ensuring all required information is collected accurately.
                    </p>
                    <Button onClick={handleStartNewListing} className="gap-2">
                      Start New Listing <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="hidden md:block bg-muted/30 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wizard Steps</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">1</div>
                        <span>Company Information</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">2</div>
                        <span>Token Details</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">3</div>
                        <span>Offering Details</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">4</div>
                        <span>Compliance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">5</div>
                        <span>Documents</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">6</div>
                        <span>Review & Submit</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                  <div className="p-4 bg-muted/30 rounded-md">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <h4 className="font-medium">Documentation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Prepare company docs, financials, legal opinions, and compliance certifications.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-md">
                    <div className="flex items-center gap-2 mb-2">
                      <List className="h-5 w-5 text-muted-foreground" />
                      <h4 className="font-medium">Requirements</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ESG compliance, Shariah certification, and legal verification are required.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="h-5 w-5 text-muted-foreground" />
                      <h4 className="font-medium">Approval Process</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Listings undergo compliance review before appearing on the Neo Exchange.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Listing Resources</CardTitle>
              <CardDescription>
                Helpful documents and guidelines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Listing Guidelines</span>
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>ESG Compliance Checklist</span>
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Shariah Standards</span>
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Document Templates</span>
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Fee Schedule</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SubmitListing;
