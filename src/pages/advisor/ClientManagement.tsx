
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DataTable from '@/components/dashboard/widgets/DataTable';
import { Button } from '@/components/ui/button';

const mockClients = [
  {
    id: 1,
    name: 'John Smith',
    portfolioValue: '$542,800',
    tokensHeld: 5,
    contact: 'john.smith@email.com'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    portfolioValue: '$328,500',
    tokensHeld: 3,
    contact: 'sarah.j@email.com'
  },
  {
    id: 3,
    name: 'Michael Brown',
    portfolioValue: '$892,200',
    tokensHeld: 7,
    contact: 'michael.b@email.com'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    portfolioValue: '$215,600',
    tokensHeld: 2,
    contact: 'emma.w@email.com'
  },
];

const columns = [
  { key: 'name', title: 'Client Name' },
  { key: 'portfolioValue', title: 'Portfolio Value' },
  { key: 'tokensHeld', title: 'Tokens Held' },
  { key: 'contact', title: 'Contact' },
  {
    key: 'actions',
    title: 'Actions',
    render: () => (
      <Button variant="outline" size="sm">View Details</Button>
    )
  }
];

const ClientManagement = () => {
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Client Management</h1>
          <Button>Add New Client</Button>
        </div>
        
        <DataTable
          title="Client Portfolios"
          description="Manage your client relationships and portfolios"
          columns={columns}
          data={mockClients}
        />
      </div>
    </DashboardLayout>
  );
};

export default ClientManagement;
