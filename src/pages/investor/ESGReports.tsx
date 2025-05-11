
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { FileText, Download, ChevronRight, BarChart, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ESGReports = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">ESG Reports</h1>
            <p className="text-muted-foreground">Environmental, Social, and Governance performance of your investments</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Select defaultValue="portfolio">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select scope" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="portfolio">My Portfolio</SelectItem>
                <SelectItem value="individual">Individual Assets</SelectItem>
                <SelectItem value="market">Market Benchmarks</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <BarChart className="h-4 w-4 text-green-600" />
                </div>
                <span>Environmental Impact</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">72/100</div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">+5% from previous period</span>
              </div>
              <Progress value={72} className="h-2 mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Your portfolio's environmental score is above average. Your investments contribute to reduced carbon emissions.</p>
              <Button variant="link" asChild className="p-0">
                <Link to="/investor/esg-reports/environmental" className="flex items-center gap-1">View details <ChevronRight className="h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <span>Social Impact</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">68/100</div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">+3% from previous period</span>
              </div>
              <Progress value={68} className="h-2 mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Your portfolio supports fair labor practices and community development initiatives.</p>
              <Button variant="link" asChild className="p-0">
                <Link to="/investor/esg-reports/social" className="flex items-center gap-1">View details <ChevronRight className="h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-purple-600" />
                </div>
                <span>Governance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">85/100</div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">+8% from previous period</span>
              </div>
              <Progress value={85} className="h-2 mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Strong governance scores reflect ethical business practices and transparent reporting.</p>
              <Button variant="link" asChild className="p-0">
                <Link to="/investor/esg-reports/governance" className="flex items-center gap-1">View details <ChevronRight className="h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assets">By Asset</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
            <TabsTrigger value="reports">Detailed Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio ESG Summary</CardTitle>
                <CardDescription>Overall ESG performance of your investment portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-[300px] bg-gray-100 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">ESG Performance Chart</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 border rounded-md">
                      <div className="text-sm text-muted-foreground mb-1">Overall ESG Score</div>
                      <div className="text-2xl font-bold">75/100</div>
                      <div className="text-xs text-green-500">Top 25% in your sector</div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="text-sm text-muted-foreground mb-1">Carbon Footprint</div>
                      <div className="text-2xl font-bold">-32%</div>
                      <div className="text-xs text-green-500">Below market average</div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="text-sm text-muted-foreground mb-1">Diversity Score</div>
                      <div className="text-2xl font-bold">82/100</div>
                      <div className="text-xs text-green-500">Industry leading</div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="text-sm text-muted-foreground mb-1">Ethical Rating</div>
                      <div className="text-2xl font-bold">A-</div>
                      <div className="text-xs text-green-500">Exceeds standards</div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium mb-3">Key Sustainability Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-green-100 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Your portfolio companies reduced water usage by an average of 17% in the last year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-green-100 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">78% of your investments meet or exceed halal finance requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-green-100 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Your investments supported the creation of over 500 sustainable jobs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="assets" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>ESG Performance by Asset</CardTitle>
                <CardDescription>Individual ESG scores for each investment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-muted px-4 py-3 grid grid-cols-12 text-sm font-medium">
                      <div className="col-span-4">Asset</div>
                      <div className="col-span-2 text-center">Environmental</div>
                      <div className="col-span-2 text-center">Social</div>
                      <div className="col-span-2 text-center">Governance</div>
                      <div className="col-span-2 text-center">Overall</div>
                    </div>
                    
                    <div className="divide-y">
                      <div className="px-4 py-3 grid grid-cols-12 items-center">
                        <div className="col-span-4">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-green-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-medium text-green-600">GET</span>
                            </div>
                            <div>
                              <div className="font-medium">Green Energy Token</div>
                              <div className="text-xs text-muted-foreground">Renewable Energy</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">92</div>
                          <Progress value={92} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">78</div>
                          <Progress value={78} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">84</div>
                          <Progress value={84} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">85</div>
                          <Progress value={85} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                      </div>
                      
                      <div className="px-4 py-3 grid grid-cols-12 items-center">
                        <div className="col-span-4">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-blue-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-medium text-blue-600">SWF</span>
                            </div>
                            <div>
                              <div className="font-medium">Sustainable Water Fund</div>
                              <div className="text-xs text-muted-foreground">Water Management</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">87</div>
                          <Progress value={87} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">74</div>
                          <Progress value={74} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">92</div>
                          <Progress value={92} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">84</div>
                          <Progress value={84} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                      </div>
                      
                      <div className="px-4 py-3 grid grid-cols-12 items-center">
                        <div className="col-span-4">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-amber-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-medium text-amber-600">EAB</span>
                            </div>
                            <div>
                              <div className="font-medium">Ethical Agriculture Bond</div>
                              <div className="text-xs text-muted-foreground">Sustainable Agriculture</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">76</div>
                          <Progress value={76} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">82</div>
                          <Progress value={82} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">79</div>
                          <Progress value={79} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="font-medium">79</div>
                          <Progress value={79} className="h-1 w-16 mx-auto mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="historical" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Historical ESG Performance</CardTitle>
                <CardDescription>Track your portfolio's ESG performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 justify-end">
                    <Select defaultValue="12m">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3m">3 months</SelectItem>
                        <SelectItem value="6m">6 months</SelectItem>
                        <SelectItem value="12m">1 year</SelectItem>
                        <SelectItem value="24m">2 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="h-[400px] bg-gray-100 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Historical ESG Performance Chart</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Environmental Trend</p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="font-medium">+15% year-over-year</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Social Trend</p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="font-medium">+8% year-over-year</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Governance Trend</p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="font-medium">+5% year-over-year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Detailed ESG Reports</CardTitle>
                <CardDescription>Download comprehensive ESG analysis reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg divide-y">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">Q2 2023 ESG Portfolio Assessment</p>
                          <p className="text-xs text-muted-foreground">Generated on July 15, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" /> Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">Annual Sustainability Impact Report</p>
                          <p className="text-xs text-muted-foreground">Generated on January 10, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" /> Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">Islamic Finance Compliance Report</p>
                          <p className="text-xs text-muted-foreground">Generated on March 22, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" /> Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">Carbon Footprint Analysis</p>
                          <p className="text-xs text-muted-foreground">Generated on May 5, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" /> Download
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button variant="outline">Request Custom Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ESGReports;
