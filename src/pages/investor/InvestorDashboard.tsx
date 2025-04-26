
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/widgets/StatCard';
import ChartCard from '@/components/dashboard/widgets/ChartCard';
import DataTable from '@/components/dashboard/widgets/DataTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart3, Briefcase, TrendingUp, ArrowUpRight, Calendar } from 'lucide-react';

// Mock data for charts
const portfolioData = [
  { name: 'Jan', value: 124000 },
  { name: 'Feb', value: 118000 },
  { name: 'Mar', value: 130000 },
  { name: 'Apr', value: 135000 },
  { name: 'May', value: 139000 },
  { name: 'Jun', value: 136000 },
  { name: 'Jul', value: 148000 },
  { name: 'Aug', value: 153000 },
  { name: 'Sep', value: 162000 },
  { name: 'Oct', value: 175000 },
  { name: 'Nov', value: 192000 },
  { name: 'Dec', value: 203000 },
];

const profitData = [
  { name: 'Jan', value: 2200 },
  { name: 'Feb', value: 2100 },
  { name: 'Mar', value: 3200 },
  { name: 'Apr', value: 4800 },
  { name: 'May', value: 3200 },
  { name: 'Jun', value: 1500 },
  { name: 'Jul', value: 3600 },
  { name: 'Aug', value: 5100 },
  { name: 'Sep', value: 6200 },
  { name: 'Oct', value: 7100 },
  { name: 'Nov', value: 6500 },
  { name: 'Dec', value: 8200 },
];

const assetAllocation = [
  { name: 'Stocks', value: 55 },
  { name: 'Bonds', value: 20 },
  { name: 'Real Estate', value: 15 },
  { name: 'Mutual Funds', value: 10 },
];

const watchlistData = [
  {
    id: 1,
    symbol: 'GRNSOL',
    name: 'Green Solar Inc.',
    price: '$34.25',
    change: '+2.5%',
    status: 'positive'
  },
  {
    id: 2,
    symbol: 'SCLNRG',
    name: 'Solar Clean Energy',
    price: '$78.60',
    change: '+1.2%',
    status: 'positive'
  },
  {
    id: 3,
    symbol: 'WTRPWR',
    name: 'Water Power Tech',
    price: '$45.30',
    change: '-0.8%',
    status: 'negative'
  },
  {
    id: 4,
    symbol: 'ETHFIN',
    name: 'Ethical Finance Group',
    price: '$112.75',
    change: '+3.4%',
    status: 'positive'
  },
  {
    id: 5,
    symbol: 'AGRKGC',
    name: 'Agritech Knowledge',
    price: '$28.90',
    change: '-1.5%',
    status: 'negative'
  },
];

const watchlistColumns = [
  { key: 'symbol', title: 'Symbol' },
  { key: 'name', title: 'Name' },
  { key: 'price', title: 'Price' },
  { 
    key: 'change', 
    title: 'Change',
    render: (value: string, record: any) => (
      <span className={record.status === 'positive' ? 'text-green-600' : 'text-red-600'}>
        {value}
      </span>
    )
  },
  {
    key: 'actions',
    title: '',
    render: () => (
      <Button variant="ghost" size="sm">View</Button>
    )
  }
];

const positionsData = [
  {
    id: 1,
    symbol: 'GRNSOL',
    name: 'Green Solar Inc.',
    quantity: '150',
    buyPrice: '$31.20',
    currentValue: '$5,137.50',
    gain: '+9.8%'
  },
  {
    id: 2,
    symbol: 'SCLNRG',
    name: 'Solar Clean Energy',
    quantity: '80',
    buyPrice: '$72.50',
    currentValue: '$6,288.00',
    gain: '+8.4%'
  },
  {
    id: 3,
    symbol: 'ETHFIN',
    name: 'Ethical Finance Group',
    quantity: '45',
    buyPrice: '$105.30',
    currentValue: '$5,073.75',
    gain: '+7.1%'
  }
];

const positionsColumns = [
  { key: 'symbol', title: 'Symbol' },
  { key: 'name', title: 'Name' },
  { key: 'quantity', title: 'Quantity' },
  { key: 'buyPrice', title: 'Buy Price' },
  { key: 'currentValue', title: 'Current Value' },
  { 
    key: 'gain', 
    title: 'Gain/Loss',
    render: (value: string) => (
      <span className={value.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
        {value}
      </span>
    )
  }
];

const InvestorDashboard = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-8">
        {/* Welcome header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your portfolio today.
            </p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline">Export Report</Button>
            <Button>Add Funds</Button>
          </div>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Portfolio Value"
            value="$203,450.00"
            change={{value: "12.4%", isPositive: true}}
            period="last month"
            icon={<Briefcase className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Total Profit"
            value="$24,583.00"
            change={{value: "8.2%", isPositive: true}}
            period="last month"
            icon={<TrendingUp className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Monthly ROI"
            value="5.7%"
            change={{value: "1.2%", isPositive: true}}
            period="last month"
            icon={<ArrowUpRight className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Active Assets"
            value="12"
            icon={<BarChart3 className="h-5 w-5 text-nse-primary" />}
          />
        </div>
        
        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Portfolio Value"
            subtitle="Overall performance for the last 12 months"
            type="line"
            data={portfolioData}
            dataKey="value"
          />
          <ChartCard
            title="Profit Evolution"
            subtitle="Monthly profit for the last 12 months"
            type="bar"
            data={profitData}
            dataKey="value"
          />
        </div>
        
        {/* Asset allocation and watchlist */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ChartCard
            title="Assets Composition"
            subtitle="Current allocation percentage"
            type="pie"
            data={assetAllocation}
            heightClass="h-64"
          />
          
          <div className="lg:col-span-2">
            <DataTable
              title="Watchlist"
              description="Tokens you're monitoring"
              columns={watchlistColumns}
              data={watchlistData}
            />
          </div>
        </div>
        
        {/* Portfolio positions */}
        <DataTable
          title="My Token Positions"
          description="Your current investment holdings"
          columns={positionsColumns}
          data={positionsData}
        />
        
        {/* Advisor contact */}
        <Card>
          <CardHeader>
            <CardTitle>My Financial Advisor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage alt="Advisor" />
                <AvatarFallback className="bg-nse-primary text-white">SM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-medium text-lg">Sarah Miller</h3>
                <p className="text-muted-foreground">Sustainable Investment Specialist</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  Schedule Call
                </Button>
                <Button size="sm">Message</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InvestorDashboard;
