
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Download, Info, CheckCircle, XCircle, AlertCircle, BarChart, Shield, Users } from 'lucide-react';

const ESGReportDetail = () => {
  const { type = 'environmental' } = useParams<{ type: string }>();
  
  // Get title and data based on type
  const getReportData = () => {
    switch (type) {
      case 'environmental':
        return {
          title: 'Environmental Impact',
          score: 72,
          change: '+5%',
          icon: <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-green-600" />
                </div>,
          description: "Your portfolio\'s environmental score measures the environmental impact and sustainability efforts of your investments.",
          positives: [
            'Carbon emissions 32% below benchmark',
            'Strong renewable energy investments',
            'Low water usage intensity',
            'Zero investments in fossil fuel extraction'
          ],
          areas: [
            'Packaging waste reduction',
            'Biodiversity impact reporting'
          ]
        };
      case 'social':
        return {
          title: 'Social Impact',
          score: 68,
          change: '+3%',
          icon: <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>,
          description: "Your portfolio\'s social score evaluates labor practices, community relations, and social contribution of your investments.",
          positives: [
            'Strong workplace safety records',
            'Fair labor practice commitments',
            'Community development initiatives',
            'Supply chain human rights standards'
          ],
          areas: [
            'Gender pay gap reporting',
            'Workforce diversity metrics'
          ]
        };
      case 'governance':
        return {
          title: 'Governance',
          score: 85,
          change: '+8%',
          icon: <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>,
          description: "Your portfolio\'s governance score assesses the quality of corporate governance, ethics, and transparency in your investments.",
          positives: [
            'Independent board structure',
            'Transparent financial reporting',
            'Strong anti-corruption policies',
            'Executive compensation aligned with performance'
          ],
          areas: [
            'Whistleblower protection policies',
            'Tax transparency'
          ]
        };
      default:
        return {
          title: 'Environmental Impact',
          score: 72,
          change: '+5%',
          icon: <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-green-600" />
                </div>,
          description: "Your portfolio\'s environmental score measures the environmental impact and sustainability efforts of your investments.",
          positives: [
            'Carbon emissions 32% below benchmark',
            'Strong renewable energy investments',
            'Low water usage intensity',
            'Zero investments in fossil fuel extraction'
          ],
          areas: [
            'Packaging waste reduction',
            'Biodiversity impact reporting'
          ]
        };
    }
  };
  
  const report = getReportData();
  
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" asChild>
            <Link to="/investor/esg-reports">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          
          <div className="flex items-center gap-3">
            {report.icon}
            <div>
              <h1 className="text-3xl font-bold">{report.title}</h1>
              <p className="text-muted-foreground">Detailed ESG performance analysis</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Performance Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative">
                  <svg className="h-36 w-36">
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="12"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      fill="none"
                      stroke={
                        report.score > 80 
                          ? "#22c55e" 
                          : report.score > 60 
                            ? "#eab308" 
                            : "#ef4444"
                      }
                      strokeWidth="12"
                      strokeDasharray={`${(report.score / 100) * 377} 377`}
                      strokeLinecap="round"
                      transform="rotate(-90 72 72)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-4xl font-bold">{report.score}</div>
                    <div className="text-sm text-muted-foreground">out of 100</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-green-500">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>{report.change} from previous period</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{report.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Performance by Metric</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Resource Efficiency</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Emissions Management</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Climate Risk</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Sustainable Products</span>
                        <span>72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Positive Factors</h3>
                      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                        {report.positives.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="rounded-full bg-green-100 p-1 mt-0.5">
                              <svg className="h-2 w-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 mt-4">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Areas for Improvement</h3>
                      <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                        {report.areas.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="rounded-full bg-amber-100 p-1 mt-0.5">
                              <svg className="h-2 w-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="companies">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="companies">Top Companies</TabsTrigger>
            <TabsTrigger value="trends">Historical Trends</TabsTrigger>
            <TabsTrigger value="benchmark">Benchmark Comparison</TabsTrigger>
          </TabsList>
          
          <TabsContent value="companies" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Companies by {report.title} Performance</CardTitle>
                <CardDescription>The top and bottom performers in your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Best Performers</h3>
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-muted px-4 py-3 grid grid-cols-8 text-sm font-medium">
                        <div className="col-span-3">Company</div>
                        <div className="col-span-1 text-center">Score</div>
                        <div className="col-span-4">Highlights</div>
                      </div>
                      
                      <div className="divide-y">
                        <div className="px-4 py-4 grid grid-cols-8">
                          <div className="col-span-3">
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
                          <div className="col-span-1 flex items-center justify-center">
                            <Badge variant="outline" className="bg-green-100 text-green-800">92</Badge>
                          </div>
                          <div className="col-span-4 text-sm">
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                              <li>100% renewable energy operations</li>
                              <li>Carbon negative business model</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="px-4 py-4 grid grid-cols-8">
                          <div className="col-span-3">
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
                          <div className="col-span-1 flex items-center justify-center">
                            <Badge variant="outline" className="bg-green-100 text-green-800">87</Badge>
                          </div>
                          <div className="col-span-4 text-sm">
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                              <li>Water conservation technology leader</li>
                              <li>Circular water system implementation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Improvement Opportunities</h3>
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-muted px-4 py-3 grid grid-cols-8 text-sm font-medium">
                        <div className="col-span-3">Company</div>
                        <div className="col-span-1 text-center">Score</div>
                        <div className="col-span-4">Improvement Areas</div>
                      </div>
                      
                      <div className="divide-y">
                        <div className="px-4 py-4 grid grid-cols-8">
                          <div className="col-span-3">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 bg-amber-100 rounded-md flex items-center justify-center">
                                <span className="text-xs font-medium text-amber-600">EAB</span>
                              </div>
                              <div>
                                <div className="font-medium">Ethical Agriculture Bond</div>
                                <div className="text-xs text-muted-foreground">Agriculture</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-1 flex items-center justify-center">
                            <Badge variant="outline" className="bg-amber-100 text-amber-800">58</Badge>
                          </div>
                          <div className="col-span-4 text-sm">
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                              <li>Water usage intensity needs improvement</li>
                              <li>Packaging sustainability reporting limited</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="px-4 py-4 grid grid-cols-8">
                          <div className="col-span-3">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 bg-red-100 rounded-md flex items-center justify-center">
                                <span className="text-xs font-medium text-red-600">MFP</span>
                              </div>
                              <div>
                                <div className="font-medium">Modern Food Production</div>
                                <div className="text-xs text-muted-foreground">Food Processing</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-1 flex items-center justify-center">
                            <Badge variant="outline" className="bg-red-100 text-red-800">52</Badge>
                          </div>
                          <div className="col-span-4 text-sm">
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                              <li>Supply chain emissions reporting incomplete</li>
                              <li>Biodiversity impact not adequately assessed</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Historical Performance</CardTitle>
                <CardDescription>Your portfolio's {report.title.toLowerCase()} score over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="h-[300px] bg-gray-100 rounded-md flex items-center justify-center mb-6">
                    <p className="text-muted-foreground">Historical Performance Chart</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Performance Milestones</h3>
                      <div className="relative pl-6 border-l space-y-6">
                        <div className="relative">
                          <div className="absolute -left-[25px] h-5 w-5 rounded-full bg-green-100 border-4 border-green-500"></div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">Score Increase: +12 points</h4>
                              <span className="text-sm text-muted-foreground">Jun 2023</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Portfolio rebalance toward renewable energy assets resulted in significant score improvement.
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-[25px] h-5 w-5 rounded-full bg-blue-100 border-4 border-blue-500"></div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">New Investment: Water Technology</h4>
                              <span className="text-sm text-muted-foreground">Apr 2023</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Addition of Sustainable Water Fund improved water management metrics.
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-[25px] h-5 w-5 rounded-full bg-amber-100 border-4 border-amber-500"></div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">Score Decrease: -3 points</h4>
                              <span className="text-sm text-muted-foreground">Feb 2023</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Temporary dip due to new supply chain disclosure requirements affecting several holdings.
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-[25px] h-5 w-5 rounded-full bg-green-100 border-4 border-green-500"></div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">Score Increase: +8 points</h4>
                              <span className="text-sm text-muted-foreground">Oct 2022</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Portfolio companies improved their climate disclosures and targets.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Recommendations</h3>
                      <div className="space-y-4">
                        <div className="border rounded-md p-4">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium">Consider Green Bonds</h4>
                              <p className="text-sm text-muted-foreground">
                                Adding green bonds to your portfolio could improve your environmental score while maintaining yield targets.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium">Reduce Exposure to Food Processing</h4>
                              <p className="text-sm text-muted-foreground">
                                Consider reducing allocation to companies with high water usage and limited sustainability reporting.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium">Increase Clean Technology Allocation</h4>
                              <p className="text-sm text-muted-foreground">
                                Consider increasing your allocation to clean technology companies to improve overall environmental impact.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="benchmark" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Benchmark Comparison</CardTitle>
                <CardDescription>How your portfolio compares to market benchmarks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="h-[300px] bg-gray-100 rounded-md flex items-center justify-center mb-6">
                    <p className="text-muted-foreground">Benchmark Comparison Chart</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-2 text-sm text-muted-foreground">Your Portfolio</h3>
                      <div className="text-3xl font-bold mb-2">{report.score}</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Score</span>
                          <span>{report.score}/100</span>
                        </div>
                        <Progress value={report.score} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-2 text-sm text-muted-foreground">Industry Average</h3>
                      <div className="text-3xl font-bold mb-2">62</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Score</span>
                          <span>62/100</span>
                        </div>
                        <Progress value={62} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-2 text-sm text-muted-foreground">ESG Leaders</h3>
                      <div className="text-3xl font-bold mb-2">83</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Score</span>
                          <span>83/100</span>
                        </div>
                        <Progress value={83} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md">
                    <div className="bg-muted px-4 py-3">
                      <h3 className="font-medium">Detailed Metric Comparison</h3>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Carbon Footprint</span>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-green-100 text-green-800">
                              -32% vs. benchmark
                            </Badge>
                          </div>
                        </div>
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs text-muted-foreground">Your Portfolio</div>
                            <div className="text-xs text-muted-foreground">Benchmark</div>
                          </div>
                          <div className="overflow-hidden h-2 mb-1 flex rounded bg-gray-200">
                            <div style={{ width: '68%' }} className="bg-green-500 rounded"></div>
                          </div>
                          <div className="overflow-hidden h-2 flex rounded bg-gray-200">
                            <div style={{ width: '100%' }} className="bg-gray-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Renewable Energy Usage</span>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-green-100 text-green-800">
                              +45% vs. benchmark
                            </Badge>
                          </div>
                        </div>
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs text-muted-foreground">Your Portfolio</div>
                            <div className="text-xs text-muted-foreground">Benchmark</div>
                          </div>
                          <div className="overflow-hidden h-2 mb-1 flex rounded bg-gray-200">
                            <div style={{ width: '82%' }} className="bg-green-500 rounded"></div>
                          </div>
                          <div className="overflow-hidden h-2 flex rounded bg-gray-200">
                            <div style={{ width: '37%' }} className="bg-gray-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Water Intensity</span>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-green-100 text-green-800">
                              -18% vs. benchmark
                            </Badge>
                          </div>
                        </div>
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs text-muted-foreground">Your Portfolio</div>
                            <div className="text-xs text-muted-foreground">Benchmark</div>
                          </div>
                          <div className="overflow-hidden h-2 mb-1 flex rounded bg-gray-200">
                            <div style={{ width: '62%' }} className="bg-green-500 rounded"></div>
                          </div>
                          <div className="overflow-hidden h-2 flex rounded bg-gray-200">
                            <div style={{ width: '80%' }} className="bg-gray-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Waste Management</span>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-amber-100 text-amber-800">
                              -5% vs. benchmark
                            </Badge>
                          </div>
                        </div>
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs text-muted-foreground">Your Portfolio</div>
                            <div className="text-xs text-muted-foreground">Benchmark</div>
                          </div>
                          <div className="overflow-hidden h-2 mb-1 flex rounded bg-gray-200">
                            <div style={{ width: '58%' }} className="bg-amber-500 rounded"></div>
                          </div>
                          <div className="overflow-hidden h-2 flex rounded bg-gray-200">
                            <div style={{ width: '63%' }} className="bg-gray-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download Detailed Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ESGReportDetail;
