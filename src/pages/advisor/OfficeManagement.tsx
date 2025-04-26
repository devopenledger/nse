
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DataTable from '@/components/dashboard/widgets/DataTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockTeamMembers = [
  {
    id: 1,
    name: 'David Chen',
    role: 'Senior Advisor',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 2,
    name: 'Lisa Park',
    role: 'Investment Analyst',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Client Relations',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 4,
    name: 'Maria Garcia',
    role: 'Junior Advisor',
    status: 'On Leave',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
];

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
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
        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-600">Remove</Button>
      </div>
    )
  }
];

const OfficeManagement = () => {
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Office & Team Management</h1>
          <Button>Add Team Member</Button>
        </div>
        
        <DataTable
          title="Team Members"
          description="Manage your office team and staff"
          columns={columns}
          data={mockTeamMembers}
        />
      </div>
    </DashboardLayout>
  );
};

export default OfficeManagement;
