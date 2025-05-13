import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/widgets/StatCard';
import ChartCard from '@/components/dashboard/widgets/ChartCard';
import DataTable from '@/components/dashboard/widgets/DataTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileCheck, FilePlus, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const listingsData = [
  {
    id: 1,
    name: 'Sustainable Water Fund',
    type: 'Fund',
    submitted: '2023-04-15',
    status: 'Pending Review',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 2,
    name: 'Green Energy Token',
    type: 'Token',
    submitted: '2023-04-10',
    status: 'Approved',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 3,
    name: 'Ethical Agriculture Bond',
    type: 'Bond',
    submitted: '2023-04-05',
    status: 'Live',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 4,
    name: 'Renewable Infrastructure',
    type: 'REIT',
    submitted: '2023-03-28',
    status: 'Needs Revision',
    statusColor: 'bg-red-100 text-red-800'
  },
  {
    id: 5,
    name: 'Clean Tech Venture Fund',
    type: 'Fund',
    submitted: '2023-03-20',
    status: 'Approved',
    statusColor: 'bg-green-100 text-green-800'
  },
];

const listingsColumns = [
  { key: 'name', title: 'Asset Name' },
  { key: 'type', title: 'Asset Type' },
  { key: 'submitted', title: 'Submission Date' },
  { 
    key: 'status', 
    title: 'Status',
    render: (value: string, record: any) => (
      <Badge variant="outline" className={record.statusColor + " border-none"}>
        {value}
      </Badge>
    )
  },
  {
    key: 'actions',
    title: '',
    render: (value: string, record: any) => (
      <Button variant="ghost" size="sm">View Details</Button>
    )
  }
];

const clientsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    aum: '$320,450',
    assets: '5',
    lastActivity: '2 days ago'
  },
  {
    id: 2,
    name: 'Robert Smith',
    aum: '$178,900',
    assets: '3',
    lastActivity: '1 week ago'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    aum: '$542,600',
    assets: '7',
    lastActivity: 'Today'
  },
  {
    id: 4,
    name: 'Michael Brown',
    aum: '$215,300',
    assets: '4',
    lastActivity: 'Today'
  },
];

const clientsColumns = [
  { key: 'name', title: 'Client Name' },
  { key: 'aum', title: 'Assets Under Management' },
  { key: 'assets', title: 'Number of Assets' },
  { key: 'lastActivity', title: 'Last Activity' },
  {
    key: 'actions',
    title: '',
    render: () => (
      <Button variant="ghost" size="sm">View Portfolio</Button>
    )
  }
];

const teamActivityData = [
  {
    id: 1,
    name: 'Jennifer Lee',
    action: 'Submitted a new listing',
    asset: 'Sustainable Agriculture Fund',
    time: '2 hours ago'
  },
  {
    id: 2,
    name: 'David Clark',
    action: 'Updated client portfolio',
    asset: 'Emma Wilson',
    time: '5 hours ago'
  },
  {
    id: 3,
    name: 'Sarah Miller',
    action: 'Added a new client',
    asset: 'Global Eco Solutions Inc.',
    time: '1 day ago'
  },
];

const teamColumns = [
  { key: 'name', title: 'Team Member' },
  { key: 'action', title: 'Action' },
  { key: 'asset', title: 'Related Asset/Client' },
  { key: 'time', title: 'Time' }
];

const monthlyPerformance = [
  { name: 'Jan', value: 38 },
  { name: 'Feb', value: 42 },
  { name: 'Mar', value: 47 },
  { name: 'Apr', value: 45 },
  { name: 'May', value: 52 },
  { name: 'Jun', value: 58 },
  { name: 'Jul', value: 66 },
  { name: 'Aug', value: 74 },
  { name: 'Sep', value: 78 },
  { name: 'Oct', value: 85 },
  { name: 'Nov', value: 82 },
  { name: 'Dec', value: 91 },
];

const AdvisorDashboard = () => {
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-8">
        {/* Welcome header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Advisor Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your listings and clients from one place
            </p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline">Activity Report</Button>
            <Button asChild>
              <Link to="/advisor/new-listing">Submit New Listing</Link>
            </Button>
          </div>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Clients"
            value="24"
            change={{value: "4", isPositive: true}}
            period="this month"
            icon={<Users className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Assets Under Management"
            value="$4.8M"
            change={{value: "12.5%", isPositive: true}}
            period="this quarter"
            icon={<Briefcase className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Approved Listings"
            value="18"
            change={{value: "3", isPositive: true}}
            period="this month"
            icon={<FileCheck className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Pending Listings"
            value="7"
            icon={<FilePlus className="h-5 w-5 text-nse-primary" />}
          />
        </div>
        
        {/* New listings status */}
        <DataTable
          title="New Listings Status"
          description="Track the status of your submitted assets"
          columns={listingsColumns}
          data={listingsData}
        />
        
        {/* Charts and clients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Advisory Performance"
            subtitle="Client portfolio growth (in %)"
            type="line"
            data={monthlyPerformance}
            dataKey="value"
          />
          
          <Card>
            <CardHeader>
              <CardTitle>Top Clients</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table 
                columns={clientsColumns}
                data={clientsData}
                emptyMessage="No clients found"
              />
            </CardContent>
          </Card>
        </div>
        
        {/* Team activity */}
        <DataTable
          title="Team Activity"
          description="Recent actions from your team members"
          columns={teamColumns}
          data={teamActivityData}
        />
      </div>
    </DashboardLayout>
  );
};

// Simple table component for inside cards
const Table = ({ columns, data, emptyMessage }: { 
  columns: any[], 
  data: any[], 
  emptyMessage: string 
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b">
          <tr>
            {columns.map((column, idx) => (
              <th key={idx} className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-6">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b last:border-0">
                {columns.map((column, colIdx) => (
                  <td key={colIdx} className="px-4 py-3 text-sm">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdvisorDashboard;
