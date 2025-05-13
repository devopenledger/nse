
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, FileText, Eye } from 'lucide-react';

const ListingSubmittedPage = () => {
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Listing Submitted</h1>
        
        <Card className="text-center p-8">
          <CardContent className="pt-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Submission Complete!</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Your listing has been submitted successfully and is now pending review by our compliance team. 
              You will be notified when the status changes.
            </p>
            
            <div className="space-y-6">
              <div className="p-4 rounded-md border bg-muted/30">
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-muted-foreground">Submission ID</p>
                    <p className="font-medium">SUB-{Math.random().toString().substring(2, 10)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Submission Date</p>
                    <p className="font-medium">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="font-medium">Pending Review</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Review Time</p>
                    <p className="font-medium">3-5 Business Days</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" className="gap-2">
                  <Link to="/advisor/manage-listings">
                    <Eye className="h-4 w-4" /> View All Listings
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/advisor">
                    <ArrowRight className="h-4 w-4" /> Return to Dashboard
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="gap-2">
                  <Link to="#">
                    <FileText className="h-4 w-4" /> Download Submission Receipt
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t text-sm text-muted-foreground">
              <p>Need help? Contact our support team at <a href="mailto:support@nse.com" className="text-blue-600 hover:underline">support@nse.com</a></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ListingSubmittedPage;
