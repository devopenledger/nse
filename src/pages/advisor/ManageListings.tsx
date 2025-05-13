
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DataTable from '@/components/dashboard/widgets/DataTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const mockListings = [
  {
    id: "listing-001",
    tokenName: 'Green Energy Token',
    companyName: 'Eco Solutions Inc.',
    status: 'Approved',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: "listing-002",
    tokenName: 'Sustainable Water Fund',
    companyName: 'Blue Resource Management',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: "listing-003",
    tokenName: 'Ethical Agriculture Bond',
    companyName: 'Farm Future Ltd.',
    status: 'Approved',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: "listing-004",
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
    render: (value: any, record: any) => (
      <div className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/advisor/edit-listing/${record.id}`}>Edit</Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/advisor/listing/${record.id}`}>View</Link>
        </Button>
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
          <Button asChild>
            <Link to="/advisor/new-listing">+ Add New Listing</Link>
          </Button>
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
