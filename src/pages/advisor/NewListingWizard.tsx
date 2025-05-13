
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Save, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import CompanyInfoForm from '@/components/advisor/listing-wizard/CompanyInfoForm';
import TokenDetailsForm from '@/components/advisor/listing-wizard/TokenDetailsForm';
import OfferingDetailsForm from '@/components/advisor/listing-wizard/OfferingDetailsForm';
import ComplianceForm from '@/components/advisor/listing-wizard/ComplianceForm';
import DocumentsUpload from '@/components/advisor/listing-wizard/DocumentsUpload';
import ReviewSubmit from '@/components/advisor/listing-wizard/ReviewSubmit';

const steps = [
  'company-info',
  'token-details',
  'offering-details',
  'compliance',
  'documents',
  'review'
];

const NewListingWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [listingData, setListingData] = useState({
    companyInfo: {
      name: '',
      description: '',
      website: '',
      industry: '',
      foundedYear: '',
      headquarters: '',
    },
    tokenDetails: {
      name: '',
      symbol: '',
      totalSupply: '',
      tokenType: '',
      blockchain: '',
      description: '',
    },
    offeringDetails: {
      offeringSize: '',
      tokenPrice: '',
      minInvestment: '',
      maxInvestment: '',
      startDate: '',
      endDate: '',
    },
    compliance: {
      hasShariah: false,
      hasESG: false,
      esgRating: '',
      shariahCertification: '',
      regulatoryFramework: '',
      jurisdictions: [],
    },
    documents: [],
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleUpdateData = (section: string, data: any) => {
    setListingData({
      ...listingData,
      [section]: {
        ...listingData[section as keyof typeof listingData],
        ...data
      }
    });
  };

  const handleSubmit = () => {
    // Here we would normally submit the data to an API
    toast({
      title: "Listing submitted successfully",
      description: "Your listing has been submitted for review.",
    });
    navigate('/advisor/manage-listings');
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft saved",
      description: "Your listing draft has been saved.",
    });
  };

  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Create New Listing</h1>
          <Button variant="outline" onClick={handleSaveDraft}>Save as Draft</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Listing Onboarding Wizard</CardTitle>
            <CardDescription>
              Complete all steps to submit your new token listing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={steps[currentStep]} className="w-full">
              <TabsList className="grid grid-cols-6 mb-8">
                <TabsTrigger value="company-info" disabled={currentStep !== 0}>
                  Company Info
                </TabsTrigger>
                <TabsTrigger value="token-details" disabled={currentStep !== 1}>
                  Token Details
                </TabsTrigger>
                <TabsTrigger value="offering-details" disabled={currentStep !== 2}>
                  Offering Details
                </TabsTrigger>
                <TabsTrigger value="compliance" disabled={currentStep !== 3}>
                  Compliance
                </TabsTrigger>
                <TabsTrigger value="documents" disabled={currentStep !== 4}>
                  Documents
                </TabsTrigger>
                <TabsTrigger value="review" disabled={currentStep !== 5}>
                  Review
                </TabsTrigger>
              </TabsList>

              <div className="mt-4">
                <TabsContent value="company-info">
                  <CompanyInfoForm 
                    data={listingData.companyInfo} 
                    onUpdate={(data) => handleUpdateData('companyInfo', data)} 
                  />
                </TabsContent>
                
                <TabsContent value="token-details">
                  <TokenDetailsForm 
                    data={listingData.tokenDetails} 
                    onUpdate={(data) => handleUpdateData('tokenDetails', data)} 
                  />
                </TabsContent>
                
                <TabsContent value="offering-details">
                  <OfferingDetailsForm 
                    data={listingData.offeringDetails} 
                    onUpdate={(data) => handleUpdateData('offeringDetails', data)} 
                  />
                </TabsContent>
                
                <TabsContent value="compliance">
                  <ComplianceForm 
                    data={listingData.compliance} 
                    onUpdate={(data) => handleUpdateData('compliance', data)} 
                  />
                </TabsContent>
                
                <TabsContent value="documents">
                  <DocumentsUpload 
                    documents={listingData.documents}
                    onUpdate={(data) => handleUpdateData('documents', data)} 
                  />
                </TabsContent>
                
                <TabsContent value="review">
                  <ReviewSubmit data={listingData} onSubmit={handleSubmit} />
                </TabsContent>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                
                {currentStep < steps.length - 1 ? (
                  <Button onClick={handleNext} className="gap-2">
                    Next <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="gap-2">
                    Submit <Check className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NewListingWizard;
