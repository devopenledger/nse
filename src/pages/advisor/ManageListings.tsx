
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DataTable from '@/components/dashboard/widgets/DataTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockListings = [
  {
    id: 1,
    tokenName: 'Green Energy Token',
    companyName: 'Eco Solutions Inc.',
    status: 'Approved',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 2,
    tokenName: 'Sustainable Water Fund',
    companyName: 'Blue Resource Management',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 3,
    tokenName: 'Ethical Agriculture Bond',
    companyName: 'Farm Future Ltd.',
    status: 'Approved',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 4,
    tokenName: 'Solar Infrastructure Token',
    companyName: 'SunPower Ventures',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
];

const columns = [
  { key: 'tokenName', title: 'Token Name' },
  { key: 'companyName', title: 'Company Name' },
  { 
    key: 'status', 
    title: 'Status',
    render: (value: string, record: any) => (
      <Badge variant="outline" className={record.statusColor}>{value}</Badge>
    )
  },
  {
    key: 'actions',
    title: 'Actions',
    render: () => (
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Edit</Button>
        <Button variant="outline" size="sm">Delete</Button>
      </div>
    )
  }
];

const ManageListings = () => {
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Manage Listings</h1>
        </div>
        
        <DataTable
          title="Token Listings"
          description="Manage your submitted token listings"
          columns={columns}
          data={mockListings}
        />
      </div>
    </DashboardLayout>
  );
};

export default ManageListings;
