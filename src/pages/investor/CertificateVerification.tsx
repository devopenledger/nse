
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { FileText, Search, CheckCircle, XCircle, Shield, AlertCircle, ChevronRight, Users } from 'lucide-react';

const CertificateVerification = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<null | 'valid' | 'invalid'>(null);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock search result based on input
    if (searchInput.toLowerCase().includes('get') || searchInput.toLowerCase().includes('green')) {
      setSearchResults('valid');
    } else if (searchInput.trim() !== '') {
      setSearchResults('invalid');
    } else {
      setSearchResults(null);
    }
  };
  
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Certificate Verification</h1>
            <p className="text-muted-foreground">Verify ESG and Halal certificates for investments</p>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Verify Certificate</CardTitle>
            <CardDescription>Search for an asset by name, symbol, or certificate ID</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex items-center gap-2">
                <Input 
                  placeholder="Enter token symbol, name, or certificate ID..." 
                  value={searchInput} 
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button type="submit" className="gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
              
              {searchResults === 'valid' && (
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-medium">Green Energy Token (GET)</h3>
                      <p className="text-sm text-muted-foreground">Certificate ID: ESG-2023-04512-HALAL</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">ESG Certified</Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">Halal Compliant</Badge>
                      </div>
                      <p className="text-sm mt-3">This asset has valid ESG and Halal certifications issued by globally recognized authorities. Last verification: May 3, 2023.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {searchResults === 'invalid' && (
                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-md">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h3 className="font-medium">No Valid Certificate Found</h3>
                      <p className="text-sm text-muted-foreground">We couldn't find a verified certificate for "{searchInput}"</p>
                      <p className="text-sm mt-2">Please check the spelling or try a different asset. If you believe this is an error, contact support.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="esg">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="esg">ESG Certification</TabsTrigger>
            <TabsTrigger value="halal">Halal Certification</TabsTrigger>
          </TabsList>
          
          <TabsContent value="esg" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>ESG Certification Standards</CardTitle>
                    <CardDescription>Environmental, Social, and Governance certification criteria</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">What is ESG Certification?</h3>
                    <p className="text-muted-foreground">
                      ESG certification verifies that an investment meets established standards for environmental sustainability, 
                      social responsibility, and governance practices. Our certification partners conduct rigorous assessments to 
                      ensure compliance with international frameworks.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-md p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                            <path d="M21 3v5h-5" />
                          </svg>
                        </div>
                        <h4 className="font-medium">Environmental</h4>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Carbon footprint reduction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Resource conservation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Pollution prevention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Biodiversity protection</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <h4 className="font-medium">Social</h4>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Fair labor practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Community engagement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Diversity & inclusion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Human rights protection</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg className="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 15 2 2 4-4" />
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                        </div>
                        <h4 className="font-medium">Governance</h4>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Transparent reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Anti-corruption policies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Board independence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Ethical business practices</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Our Certification Partners</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border rounded-md p-4 flex items-center justify-center h-20">
                        <span className="text-muted-foreground">Global ESG Standard</span>
                      </div>
                      <div className="border rounded-md p-4 flex items-center justify-center h-20">
                        <span className="text-muted-foreground">Sustainability Board</span>
                      </div>
                      <div className="border rounded-md p-4 flex items-center justify-center h-20">
                        <span className="text-muted-foreground">Green Finance Council</span>
                      </div>
                      <div className="border rounded-md p-4 flex items-center justify-center h-20">
                        <span className="text-muted-foreground">Climate Action Group</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="gap-2 w-full">
                  Learn more about ESG certification
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="halal" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Halal Certification Standards</CardTitle>
                    <CardDescription>Shariah-compliant investment certification criteria</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">What is Halal Certification?</h3>
                    <p className="text-muted-foreground">
                      Halal certification ensures that investments comply with Islamic financial principles. This includes 
                      avoiding interest-based transactions (riba), excessive uncertainty (gharar), and businesses involved 
                      in prohibited activities. Our certification partners are recognized Shariah scholars and institutions.
                    </p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-3">Key Halal Finance Principles</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                          <AlertCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium">Avoidance of Riba (Interest)</h5>
                          <p className="text-sm text-muted-foreground">
                            Investments must avoid interest-based transactions. Profit is generated through 
                            asset-backed transactions and risk-sharing arrangements instead.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                          <AlertCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium">Prohibited Business Activities</h5>
                          <p className="text-sm text-muted-foreground">
                            Investments cannot be made in businesses involved in prohibited activities such as 
                            conventional financial services, alcohol, tobacco, gambling, adult entertainment, and pork-related products.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                          <AlertCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium">Financial Ratio Screening</h5>
                          <p className="text-sm text-muted-foreground">
                            Companies must maintain acceptable levels of debt, cash, and accounts receivable 
                            relative to their total assets to ensure compliance with Shariah principles.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                          <AlertCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium">Purification Process</h5>
                          <p className="text-sm text-muted-foreground">
                            If a small portion of income is derived from non-compliant sources, a purification 
                            process must be implemented to calculate and donate that portion to charity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Our Shariah Certification Partners</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border rounded-md p-4 flex items-center justify-center h-20">
                        <span className="text-muted-foreground">Global Islamic Finance</span>
                      </div>
                      <div className="border rounded-md p-4 flex items-center justify-center h-20">
                        <span className="text-muted-foreground">Shariah Review Board</span>
                      </div>
                      <div className="border rounded-md p-4 flex items-center justify-center h-20">
                        <span className="text-muted-foreground">Islamic Finance Council</span>
                      </div>
                      <div className="border rounded-md p-4 flex items-center justify-center h-20">
                        <span className="text-muted-foreground">Halal Investment Authority</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="gap-2 w-full">
                  Learn more about Halal certification
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CertificateVerification;
