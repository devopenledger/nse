
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Clock, BarChart, LineChart, PieChart, ChevronRight } from 'lucide-react';

const MarketTrends = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Market Trends</h1>
            <p className="text-muted-foreground">Sustainable and Islamic investment market insights</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Select defaultValue="week">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Last 24 Hours</SelectItem>
                <SelectItem value="week">Last 7 Days</SelectItem>
                <SelectItem value="month">Last 30 Days</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Clock className="h-4 w-4" />
              Live View
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-muted-foreground" />
                  <span>ESG Index</span>
                </div>
                <Badge className="bg-green-100 text-green-800">+2.4%</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-3">9,842.56</div>
              <div className="h-[120px] bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">ESG Index Chart</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-muted-foreground">Open</div>
                  <div className="font-medium">9,612.23</div>
                </div>
                <div>
                  <div className="text-muted-foreground">High</div>
                  <div className="font-medium">9,879.10</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Low</div>
                  <div className="font-medium">9,542.87</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Vol</div>
                  <div className="font-medium">1.2M</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-muted-foreground" />
                  <span>Islamic Market Index</span>
                </div>
                <Badge className="bg-green-100 text-green-800">+1.7%</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-3">7,541.29</div>
              <div className="h-[120px] bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Islamic Index Chart</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-muted-foreground">Open</div>
                  <div className="font-medium">7,415.62</div>
                </div>
                <div>
                  <div className="text-muted-foreground">High</div>
                  <div className="font-medium">7,598.33</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Low</div>
                  <div className="font-medium">7,389.45</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Vol</div>
                  <div className="font-medium">842K</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-muted-foreground" />
                  <span>Clean Energy Index</span>
                </div>
                <Badge className="bg-red-100 text-red-800">-0.8%</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-3">5,218.76</div>
              <div className="h-[120px] bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Clean Energy Index Chart</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-muted-foreground">Open</div>
                  <div className="font-medium">5,260.31</div>
                </div>
                <div>
                  <div className="text-muted-foreground">High</div>
                  <div className="font-medium">5,312.75</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Low</div>
                  <div className="font-medium">5,187.22</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Vol</div>
                  <div className="font-medium">768K</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="sectors">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sectors">Sector Performance</TabsTrigger>
            <TabsTrigger value="assets">Top Assets</TabsTrigger>
            <TabsTrigger value="insights">Market Insights</TabsTrigger>
            <TabsTrigger value="forecast">Forecast</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sectors" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Sustainable Sector Performance</CardTitle>
                <CardDescription>Performance of ESG and Halal-compliant market sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-end gap-2">
                    <Select defaultValue="week">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Day</SelectItem>
                        <SelectItem value="week">Week</SelectItem>
                        <SelectItem value="month">Month</SelectItem>
                        <SelectItem value="year">Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="border rounded-md overflow-hidden">
                    <div className="grid grid-cols-12 bg-muted px-4 py-3">
                      <div className="col-span-4 font-medium text-sm">Sector</div>
                      <div className="col-span-2 font-medium text-sm text-right">Price</div>
                      <div className="col-span-2 font-medium text-sm text-right">Change</div>
                      <div className="col-span-2 font-medium text-sm text-right">Volume</div>
                      <div className="col-span-2 font-medium text-sm text-right">ESG Score</div>
                    </div>
                    
                    <div className="divide-y">
                      <div className="grid grid-cols-12 px-4 py-3 hover:bg-muted/30">
                        <div className="col-span-4">Renewable Energy</div>
                        <div className="col-span-2 text-right">$78.42</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +3.5%
                        </div>
                        <div className="col-span-2 text-right">2.3M</div>
                        <div className="col-span-2 text-right">92/100</div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 hover:bg-muted/30">
                        <div className="col-span-4">Sustainable Agriculture</div>
                        <div className="col-span-2 text-right">$45.19</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +2.1%
                        </div>
                        <div className="col-span-2 text-right">1.8M</div>
                        <div className="col-span-2 text-right">87/100</div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 hover:bg-muted/30">
                        <div className="col-span-4">Clean Water Technology</div>
                        <div className="col-span-2 text-right">$62.75</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +1.8%
                        </div>
                        <div className="col-span-2 text-right">1.2M</div>
                        <div className="col-span-2 text-right">90/100</div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 hover:bg-muted/30">
                        <div className="col-span-4">Ethical Healthcare</div>
                        <div className="col-span-2 text-right">$93.28</div>
                        <div className="col-span-2 text-right text-red-500 flex items-center justify-end gap-1">
                          <TrendingDown className="h-4 w-4" />
                          -0.7%
                        </div>
                        <div className="col-span-2 text-right">2.5M</div>
                        <div className="col-span-2 text-right">85/100</div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 hover:bg-muted/30">
                        <div className="col-span-4">Green Construction</div>
                        <div className="col-span-2 text-right">$38.64</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +0.9%
                        </div>
                        <div className="col-span-2 text-right">980K</div>
                        <div className="col-span-2 text-right">83/100</div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 hover:bg-muted/30">
                        <div className="col-span-4">Halal Consumer Goods</div>
                        <div className="col-span-2 text-right">$54.91</div>
                        <div className="col-span-2 text-right text-red-500 flex items-center justify-end gap-1">
                          <TrendingDown className="h-4 w-4" />
                          -1.2%
                        </div>
                        <div className="col-span-2 text-right">1.5M</div>
                        <div className="col-span-2 text-right">88/100</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Sector Allocation</h3>
                      <div className="h-[300px] bg-gray-100 rounded-md flex items-center justify-center">
                        <PieChart className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Sector Performance Comparison</h3>
                      <div className="h-[300px] bg-gray-100 rounded-md flex items-center justify-center">
                        <BarChart className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="assets" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Assets</CardTitle>
                <CardDescription>Leading ESG and Halal-compliant securities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-x-2">
                      <Button variant="outline" size="sm" className="text-xs">Top Gainers</Button>
                      <Button variant="ghost" size="sm" className="text-xs">Top Losers</Button>
                      <Button variant="ghost" size="sm" className="text-xs">Most Active</Button>
                      <Button variant="ghost" size="sm" className="text-xs">New Listings</Button>
                    </div>
                    
                    <Select defaultValue="day">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="border rounded-md overflow-hidden">
                    <div className="grid grid-cols-12 bg-muted px-4 py-3">
                      <div className="col-span-4 font-medium text-sm">Asset</div>
                      <div className="col-span-2 font-medium text-sm text-right">Price</div>
                      <div className="col-span-2 font-medium text-sm text-right">Change</div>
                      <div className="col-span-2 font-medium text-sm text-right">Market Cap</div>
                      <div className="col-span-2 font-medium text-sm text-right"></div>
                    </div>
                    
                    <div className="divide-y">
                      <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-muted/30">
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
                        <div className="col-span-2 text-right">$34.50</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +8.2%
                        </div>
                        <div className="col-span-2 text-right">$172.5M</div>
                        <div className="col-span-2 text-right">
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-muted/30">
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
                        <div className="col-span-2 text-right">$22.75</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +6.5%
                        </div>
                        <div className="col-span-2 text-right">$98.2M</div>
                        <div className="col-span-2 text-right">
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-muted/30">
                        <div className="col-span-4">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-purple-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-medium text-purple-600">HESG</span>
                            </div>
                            <div>
                              <div className="font-medium">Halal ESG Fund</div>
                              <div className="text-xs text-muted-foreground">Diversified</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-right">$78.30</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +5.8%
                        </div>
                        <div className="col-span-2 text-right">$215.7M</div>
                        <div className="col-span-2 text-right">
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-muted/30">
                        <div className="col-span-4">
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
                        <div className="col-span-2 text-right">$45.20</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +4.7%
                        </div>
                        <div className="col-span-2 text-right">$124.3M</div>
                        <div className="col-span-2 text-right">
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-muted/30">
                        <div className="col-span-4">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-red-100 rounded-md flex items-center justify-center">
                              <span className="text-xs font-medium text-red-600">SIT</span>
                            </div>
                            <div>
                              <div className="font-medium">Solar Infrastructure Token</div>
                              <div className="text-xs text-muted-foreground">Infrastructure</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-right">$57.80</div>
                        <div className="col-span-2 text-right text-green-500 flex items-center justify-end gap-1">
                          <TrendingUp className="h-4 w-4" />
                          +3.9%
                        </div>
                        <div className="col-span-2 text-right">$186.5M</div>
                        <div className="col-span-2 text-right">
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="insights" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Market Insights</CardTitle>
                <CardDescription>Analysis and commentary on sustainable and Islamic markets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-1 lg:col-span-2">
                      <div className="space-y-6">
                        <div className="border rounded-md p-6">
                          <h3 className="text-lg font-medium mb-2">ESG Investment Trend Analysis</h3>
                          <p className="text-muted-foreground mb-4">
                            The ESG investment landscape continues to show robust growth, with particular strength 
                            in renewable energy and sustainable water management sectors. Investor sentiment remains 
                            positive despite market volatility, with increasing institutional adoption.
                          </p>
                          <div className="h-[200px] bg-gray-100 rounded-md flex items-center justify-center mb-4">
                            <LineChart className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            ESG funds have seen $28.2 billion in inflows over the past quarter, representing a 24% 
                            increase year-over-year. Regulatory developments continue to favor ESG adoption globally.
                          </p>
                          <Button variant="link" className="p-0 mt-2 gap-2">
                            Read full analysis <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="border rounded-md p-6">
                          <h3 className="text-lg font-medium mb-2">Islamic Finance Market Outlook</h3>
                          <p className="text-muted-foreground mb-4">
                            The Islamic finance market is showing resilience with steady growth in Sukuk issuance 
                            and increased adoption of sustainable Islamic investment products. The convergence of 
                            ESG and Shariah principles continues to create new market opportunities.
                          </p>
                          <div className="h-[200px] bg-gray-100 rounded-md flex items-center justify-center mb-4">
                            <BarChart className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Global Islamic finance assets are projected to reach $4.94 trillion by 2025, with 
                            key growth drivers including digitalization and increasing integration with ESG frameworks.
                          </p>
                          <Button variant="link" className="p-0 mt-2 gap-2">
                            Read full analysis <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Latest Insights</h3>
                      <div className="space-y-4">
                        <div className="border rounded-md p-4">
                          <div className="text-sm text-muted-foreground mb-1">Market Commentary</div>
                          <h4 className="font-medium mb-2">The Rise of Green Hydrogen Investments</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Green hydrogen is emerging as a key investment theme in sustainable markets, with 
                            significant growth potential over the next decade.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Published 2 days ago</span>
                            <Button variant="ghost" size="sm" className="h-8 px-2">Read</Button>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="text-sm text-muted-foreground mb-1">Policy Update</div>
                          <h4 className="font-medium mb-2">New ESG Disclosure Requirements</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Regulatory changes are introducing stricter ESG disclosure requirements for 
                            listed companies, impacting reporting standards.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Published 4 days ago</span>
                            <Button variant="ghost" size="sm" className="h-8 px-2">Read</Button>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="text-sm text-muted-foreground mb-1">Market Analysis</div>
                          <h4 className="font-medium mb-2">Impact of Climate Finance Commitments</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Recent global climate finance pledges are creating new opportunities in 
                            sustainable fixed income markets.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Published 1 week ago</span>
                            <Button variant="ghost" size="sm" className="h-8 px-2">Read</Button>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="text-sm text-muted-foreground mb-1">Islamic Finance</div>
                          <h4 className="font-medium mb-2">Growth of Green Sukuk Market</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Green Sukuk issuances are gaining momentum as Islamic investors seek 
                            sustainable investment opportunities.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Published 1 week ago</span>
                            <Button variant="ghost" size="sm" className="h-8 px-2">Read</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forecast" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Market Forecast</CardTitle>
                <CardDescription>Projections and predictions for sustainable and Islamic markets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-end gap-2">
                    <Select defaultValue="quarter">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Forecast period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="month">Next Month</SelectItem>
                        <SelectItem value="quarter">Next Quarter</SelectItem>
                        <SelectItem value="year">Next Year</SelectItem>
                        <SelectItem value="5year">Next 5 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="h-[300px] bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    <span className="text-muted-foreground">Market Forecast Chart</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">ESG Market Outlook</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Growth Forecast</span>
                            <span className="text-green-500">+12.5%</span>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm">Key Growth Drivers:</div>
                            <ul className="text-sm space-y-1">
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                                  <svg className="h-2 w-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Policy support for green transition</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                                  <svg className="h-2 w-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Increased institutional adoption</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                                  <svg className="h-2 w-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Consumer demand for sustainability</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Islamic Finance Outlook</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Growth Forecast</span>
                            <span className="text-green-500">+10.2%</span>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm">Key Growth Drivers:</div>
                            <ul className="text-sm space-y-1">
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                                  <svg className="h-2 w-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Digital Islamic banking solutions</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                                  <svg className="h-2 w-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sukuk market expansion</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                                  <svg className="h-2 w-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">ESG-Shariah convergence</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Sector Recommendations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="text-sm">Top Pick Sectors:</div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Renewable Energy</span>
                                <Badge className="bg-green-100 text-green-800">Strong Buy</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Clean Water Tech</span>
                                <Badge className="bg-green-100 text-green-800">Buy</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Sustainable Agriculture</span>
                                <Badge className="bg-yellow-100 text-yellow-800">Neutral</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Green Construction</span>
                                <Badge className="bg-green-100 text-green-800">Buy</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-3">Risk Assessment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Policy Uncertainty</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-amber-600 text-xs font-medium">M</span>
                          </div>
                          <span className="text-sm">Medium Risk</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Evolving regulatory frameworks may create short-term market volatility.</p>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Greenwashing</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                            <span className="text-red-600 text-xs font-medium">H</span>
                          </div>
                          <span className="text-sm">High Risk</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Increased scrutiny on ESG claims may lead to reputational damage for certain assets.</p>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Inflation Impact</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-amber-600 text-xs font-medium">M</span>
                          </div>
                          <span className="text-sm">Medium Risk</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Rising costs may squeeze margins for sustainable technology developers.</p>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Technology Disruption</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 text-xs font-medium">L</span>
                          </div>
                          <span className="text-sm">Low Risk</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Established sustainable technologies have reaching maturity with stable adoption patterns.</p>
                      </div>
                    </div>
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

export default MarketTrends;
