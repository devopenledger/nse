
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check, AlertCircle, FileText } from 'lucide-react';

interface ReviewData {
  companyInfo: {
    name: string;
    description: string;
    website: string;
    industry: string;
    foundedYear: string;
    headquarters: string;
  };
  tokenDetails: {
    name: string;
    symbol: string;
    totalSupply: string;
    tokenType: string;
    blockchain: string;
    description: string;
  };
  offeringDetails: {
    offeringSize: string;
    tokenPrice: string;
    minInvestment: string;
    maxInvestment: string;
    startDate: string;
    endDate: string;
  };
  compliance: {
    hasShariah: boolean;
    hasESG: boolean;
    esgRating: string;
    shariahCertification: string;
    regulatoryFramework: string;
    jurisdictions: string[];
  };
  documents: any[];
}

interface ReviewSubmitProps {
  data: ReviewData;
  onSubmit: () => void;
}

const ReviewSubmit = ({ data, onSubmit }: ReviewSubmitProps) => {
  const { companyInfo, tokenDetails, offeringDetails, compliance, documents } = data;

  // Convert jurisdiction codes to readable names
  const getJurisdictionName = (code: string) => {
    const mapping: Record<string, string> = {
      uae: 'United Arab Emirates',
      saudi: 'Saudi Arabia',
      qatar: 'Qatar',
      bahrain: 'Bahrain',
      kuwait: 'Kuwait',
      oman: 'Oman',
      uk: 'United Kingdom',
      us: 'United States',
      eu: 'European Union',
      singapore: 'Singapore',
      malaysia: 'Malaysia',
    };
    return mapping[code] || code;
  };

  // Format date strings
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not specified';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
        <p className="text-muted-foreground mb-6">
          Please review all information before final submission. After submission, your listing will be reviewed by our team.
        </p>
        
        <div className="space-y-6">
          {/* Company Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-md">
              <div>
                <p className="text-sm text-muted-foreground">Company Name</p>
                <p className="font-medium">{companyInfo.name || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <p className="font-medium">{companyInfo.website || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Industry</p>
                <p className="font-medium">{companyInfo.industry || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Founded Year</p>
                <p className="font-medium">{companyInfo.foundedYear || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Headquarters</p>
                <p className="font-medium">{companyInfo.headquarters || 'Not specified'}</p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="font-medium">{companyInfo.description || 'Not specified'}</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Token Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Token Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-md">
              <div>
                <p className="text-sm text-muted-foreground">Token Name</p>
                <p className="font-medium">{tokenDetails.name || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Token Symbol</p>
                <p className="font-medium">{tokenDetails.symbol || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Supply</p>
                <p className="font-medium">{tokenDetails.totalSupply || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Token Type</p>
                <p className="font-medium">{tokenDetails.tokenType || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Blockchain</p>
                <p className="font-medium">{tokenDetails.blockchain || 'Not specified'}</p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="font-medium">{tokenDetails.description || 'Not specified'}</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Offering Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Offering Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-md">
              <div>
                <p className="text-sm text-muted-foreground">Offering Size</p>
                <p className="font-medium">${offeringDetails.offeringSize || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Token Price</p>
                <p className="font-medium">${offeringDetails.tokenPrice || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Minimum Investment</p>
                <p className="font-medium">${offeringDetails.minInvestment || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Maximum Investment</p>
                <p className="font-medium">${offeringDetails.maxInvestment || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-medium">{formatDate(offeringDetails.startDate)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="font-medium">{formatDate(offeringDetails.endDate)}</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Compliance */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Compliance & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-md">
              <div>
                <p className="text-sm text-muted-foreground">Shariah Compliance</p>
                <div className="flex items-center gap-2 mt-1">
                  {compliance.hasShariah ? (
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      <Check className="h-3 w-3 mr-1" /> Compliant
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      <AlertCircle className="h-3 w-3 mr-1" /> Not Specified
                    </Badge>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ESG Compliance</p>
                <div className="flex items-center gap-2 mt-1">
                  {compliance.hasESG ? (
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      <Check className="h-3 w-3 mr-1" /> Compliant
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      <AlertCircle className="h-3 w-3 mr-1" /> Not Specified
                    </Badge>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ESG Rating</p>
                <p className="font-medium">{compliance.esgRating || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Shariah Certification</p>
                <p className="font-medium">{compliance.shariahCertification || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Regulatory Framework</p>
                <p className="font-medium">{compliance.regulatoryFramework || 'Not specified'}</p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <p className="text-sm text-muted-foreground">Jurisdictions</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {compliance.jurisdictions && compliance.jurisdictions.length > 0 ? (
                    compliance.jurisdictions.map(j => (
                      <Badge key={j} variant="outline">{getJurisdictionName(j)}</Badge>
                    ))
                  ) : (
                    <p className="text-sm">No jurisdictions selected</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Documents */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Documents</h3>
            <div className="p-4 bg-muted/30 rounded-md">
              {documents && documents.length > 0 ? (
                <ul className="space-y-2">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{doc.name}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center p-4">
                  <p className="text-amber-600">No documents uploaded</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Documents are required for final submission
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="p-4 rounded-md bg-blue-50 border border-blue-100 mt-8">
            <p className="text-sm text-blue-700">
              By submitting this listing, you confirm that all information provided is accurate and complete.
              The listing will be reviewed by our compliance team before being approved for the platform.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewSubmit;
