
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/widgets/StatCard';
import ChartCard from '@/components/dashboard/widgets/ChartCard';
import DataTable from '@/components/dashboard/widgets/DataTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle 
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock data
const pendingListingsData = [
  {
    id: 1,
    name: 'Sustainable Water Fund',
    advisor: 'Sarah Miller',
    submitted: '2023-04-15',
    type: 'Fund',
    status: 'Pending'
  },
  {
    id: 2,
    name: 'Green Energy Token',
    advisor: 'David Clark',
    submitted: '2023-04-10',
    type: 'Token',
    status: 'Pending'
  },
  {
    id: 3,
    name: 'Ethical Agriculture Bond',
    advisor: 'Jennifer Lee',
    submitted: '2023-04-05',
    type: 'Bond',
    status: 'Under Review'
  },
  {
    id: 4,
    name: 'Renewable Infrastructure',
    advisor: 'Robert Johnson',
    submitted: '2023-03-28',
    type: 'REIT',
    status: 'Under Review'
  },
  {
    id: 5,
    name: 'Clean Tech Venture Fund',
    advisor: 'Michael Wong',
    submitted: '2023-03-20',
    type: 'Fund',
    status: 'Pending'
  },
];

const listingsColumns = [
  { key: 'name', title: 'Asset Name' },
  { key: 'advisor', title: 'Submitted By' },
  { key: 'submitted', title: 'Date' },
  { key: 'type', title: 'Type' },
  { 
    key: 'status', 
    title: 'Status',
    render: (value: string) => (
      <Badge variant="outline" className={
        value === 'Pending' 
          ? 'bg-yellow-100 text-yellow-800 border-none' 
          : 'bg-blue-100 text-blue-800 border-none'
      }>
        {value}
      </Badge>
    )
  },
  {
    key: 'actions',
    title: '',
    render: () => (
      <div className="flex space-x-2">
        <Button variant="ghost" size="sm" className="bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700">
          <CheckCircle className="h-4 w-4 mr-1" />
          Approve
        </Button>
        <Button variant="ghost" size="sm" className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700">
          <XCircle className="h-4 w-4 mr-1" />
          Reject
        </Button>
      </div>
    )
  }
];

const alertsData = [
  {
    id: 1,
    type: 'KYC',
    description: 'Missing verification documents for 4 new users',
    priority: 'High',
    priorityColor: 'bg-red-100 text-red-800'
  },
  {
    id: 2,
    type: 'Listing',
    description: 'Green Energy Token needs additional sustainability documentation',
    priority: 'Medium',
    priorityColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 3,
    type: 'Market',
    description: 'Unusual trading volume detected for Ethical Agriculture Bond',
    priority: 'High',
    priorityColor: 'bg-red-100 text-red-800'
  },
  {
    id: 4,
    type: 'Compliance',
    description: 'Quarterly compliance report due in 3 days',
    priority: 'Medium',
    priorityColor: 'bg-yellow-100 text-yellow-800'
  },
];

const alertsColumns = [
  { key: 'type', title: 'Alert Type' },
  { key: 'description', title: 'Description' },
  { 
    key: 'priority', 
    title: 'Priority',
    render: (value: string, record: any) => (
      <Badge variant="outline" className={record.priorityColor + " border-none"}>
        {value}
      </Badge>
    )
  },
  {
    key: 'actions',
    title: '',
    render: () => (
      <Button variant="ghost" size="sm">Review</Button>
    )
  }
];

const systemStatusData = [
  { name: 'Trading Engine', value: 60 },
  { name: 'KYC System', value: 85 },
  { name: 'Settlement', value: 75 },
  { name: 'Custody', value: 90 }
];

const marketActivity = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 132 },
  { name: 'Mar', value: 145 },
  { name: 'Apr', value: 160 },
  { name: 'May', value: 175 },
  { name: 'Jun', value: 168 },
  { name: 'Jul', value: 182 },
  { name: 'Aug', value: 195 },
  { name: 'Sep', value: 210 },
  { name: 'Oct', value: 222 },
  { name: 'Nov', value: 235 },
  { name: 'Dec', value: 248 },
];

const AdminDashboard = () => {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-8">
        {/* Welcome header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor and manage the Neo Sustainable Exchange platform
            </p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline">System Report</Button>
            <Button>Market Controls</Button>
          </div>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Pending Approvals"
            value="12"
            change={{value: "3", isPositive: false}}
            period="since yesterday"
            icon={<Clock className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Active Users"
            value="2,456"
            change={{value: "5.2%", isPositive: true}}
            period="this month"
            icon={<Users className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Compliance Rate"
            value="98.5%"
            change={{value: "0.5%", isPositive: true}}
            period="this quarter"
            icon={<ShieldCheck className="h-5 w-5 text-nse-primary" />}
          />
          <StatCard
            title="Alert Notifications"
            value="7"
            change={{value: "2", isPositive: false}}
            period="since yesterday"
            icon={<AlertTriangle className="h-5 w-5 text-nse-primary" />}
          />
        </div>
        
        {/* Pending listings table */}
        <DataTable
          title="Listings Awaiting Approval"
          description="Review and approve submitted assets"
          columns={listingsColumns}
          data={pendingListingsData}
        />
        
        {/* Alerts and charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Alerts</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table 
                columns={alertsColumns}
                data={alertsData}
                emptyMessage="No alerts found"
              />
            </CardContent>
          </Card>
          
          <ChartCard
            title="Market Activity"
            subtitle="Monthly trading volume (in thousands)"
            type="line"
            data={marketActivity}
            dataKey="value"
            heightClass="h-72"
          />
        </div>
        
        {/* System status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemStatusData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 relative">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-nse-primary"
                        strokeWidth="8"
                        strokeDasharray={`${item.value * 2.64} 999`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                      />
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <span className="text-xl font-semibold">{item.value}%</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-center">{item.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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

export default AdminDashboard;
