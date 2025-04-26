
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ChartCard from '@/components/dashboard/widgets/ChartCard';
import DataTable from '@/components/dashboard/widgets/DataTable';
import StatCard from '@/components/dashboard/widgets/StatCard';
import { TrendingUp, PieChart, BarChart3 } from 'lucide-react';

// Mock data for charts
const portfolioData = [
  { name: 'Jan', value: 125000 },
  { name: 'Feb', value: 128000 },
  { name: 'Mar', value: 135000 },
  { name: 'Apr', value: 132000 },
  { name: 'May', value: 138000 },
  { name: 'Jun', value: 145000 }
];

const profitData = [
  { name: 'Jan', value: 2500 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 7000 },
  { name: 'Apr', value: -3000 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 7000 }
];

const assetAllocation = [
  { name: 'Green Energy', value: 40 },
  { name: 'Clean Water', value: 25 },
  { name: 'Sustainable Agri', value: 20 },
  { name: 'Green Building', value: 15 }
];

const tokenPositions = [
  {
    id: 1,
    token: 'GSOL',
    name: 'Green Solar Inc.',
    quantity: '150',
    value: '$5,175.00',
    avgPrice: '$34.50',
    change: '+2.5%'
  },
  {
    id: 2,
    token: 'EWTR',
    name: 'Eco Water Tech',
    quantity: '200',
    value: '$4,550.00',
    avgPrice: '$22.75',
    change: '+1.8%'
  },
  {
    id: 3,
    token: 'CLEF',
    name: 'Clean Energy Fund',
    quantity: '100',
    value: '$4,520.00',
    avgPrice: '$45.20',
    change: '+3.2%'
  }
];

const Portfolio = () => {
  const positionsColumns = [
    { key: 'token', title: 'Token' },
    { key: 'name', title: 'Name' },
    { key: 'quantity', title: 'Quantity' },
    { key: 'value', title: 'Value' },
    { key: 'avgPrice', title: 'Avg Price' },
    {
      key: 'change',
      title: 'Change',
      render: (value: string) => (
        <span className={value.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
          {value}
        </span>
      )
    }
  ];

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <Button>Export Report</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            title="Total Portfolio Value"
            value="$145,000.00"
            icon={<TrendingUp className="h-4 w-4" />}
            change={{
              value: "12.4%",
              isPositive: true
            }}
          />
          <StatCard
            title="Total Profit/Loss"
            value="$22,500.00"
            icon={<BarChart3 className="h-4 w-4" />}
            change={{
              value: "8.2%",
              isPositive: true
            }}
          />
          <StatCard
            title="Asset Types"
            value="4"
            icon={<PieChart className="h-4 w-4" />}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Portfolio Value"
            subtitle="6-month trend"
            type="line"
            data={portfolioData}
            dataKey="value"
          />
          <ChartCard
            title="Monthly Profit/Loss"
            subtitle="Last 6 months"
            type="bar"
            data={profitData}
            dataKey="value"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DataTable
              title="Token Positions"
              description="Your current holdings"
              columns={positionsColumns}
              data={tokenPositions}
            />
          </div>
          <ChartCard
            title="Asset Allocation"
            type="pie"
            data={assetAllocation}
            dataKey="value"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;
