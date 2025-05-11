
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChartCard from '@/components/dashboard/widgets/ChartCard';
import StatCard from '@/components/dashboard/widgets/StatCard';
import { BarChart3, TrendingUp, PieChart, Calendar } from 'lucide-react';

const InvestorAnalytics = () => {
  // Mock data for charts and stats
  const portfolioPerformanceData = [
    { name: 'Jan', value: 5.2 },
    { name: 'Feb', value: 7.8 },
    { name: 'Mar', value: 6.5 },
    { name: 'Apr', value: 8.2 },
    { name: 'May', value: 9.5 },
    { name: 'Jun', value: 8.7 },
    { name: 'Jul', value: 10.2 },
    { name: 'Aug', value: 9.8 },
    { name: 'Sep', value: 11.5 },
    { name: 'Oct', value: 12.3 },
    { name: 'Nov', value: 13.8 },
    { name: 'Dec', value: 15.2 },
  ];

  const assetAllocationData = [
    { name: 'ESG Stocks', value: 45 },
    { name: 'Green Bonds', value: 25 },
    { name: 'Sustainable REITs', value: 15 },
    { name: 'Clean Energy', value: 10 },
    { name: 'Cash', value: 5 },
  ];

  const sectorPerformanceData = [
    { name: 'Renewable Energy', value: 12.5 },
    { name: 'Sustainable Tech', value: 18.3 },
    { name: 'Green Building', value: 9.7 },
    { name: 'Clean Water', value: 14.2 },
    { name: 'Ethical Finance', value: 8.5 },
    { name: 'Eco Agriculture', value: 11.3 },
  ];

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Portfolio Analytics
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Total Return" 
            value="+15.2%" 
            description="Year-to-date" 
            trend="up"
            icon={TrendingUp} 
          />
          <StatCard 
            title="ESG Score" 
            value="A+" 
            description="Portfolio average" 
            icon={PieChart} 
          />
          <StatCard 
            title="Next Dividend" 
            value="$245.30" 
            description="Expected on Sep 15" 
            icon={Calendar} 
          />
        </div>

        <Tabs defaultValue="performance" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
            <TabsTrigger value="sectors">Sector Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>
                  Monthly performance over the past year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartCard
                  title="Portfolio Growth"
                  type="line"
                  data={portfolioPerformanceData}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="allocation">
            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>
                  Breakdown of your portfolio by asset type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartCard
                  title="Current Allocation"
                  type="pie"
                  data={assetAllocationData}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sectors">
            <Card>
              <CardHeader>
                <CardTitle>Sector Performance</CardTitle>
                <CardDescription>
                  Performance analysis by industry sector
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartCard
                  title="Sector Returns"
                  type="bar"
                  data={sectorPerformanceData}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default InvestorAnalytics;
