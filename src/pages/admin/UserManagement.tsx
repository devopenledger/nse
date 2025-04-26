
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for users
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Investor',
    status: 'Active',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Sarah Miller',
    role: 'Advisor',
    status: 'Active',
    email: 'sarah.m@example.com',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Admin',
    status: 'Active',
    email: 'michael.b@example.com',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Investor',
    status: 'Suspended',
    email: 'emma.w@example.com',
  },
];

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);

  const handleToggleStatus = (id: number) => {
    setUsers(users.map(user =>
      user.id === id ? {
        ...user,
        status: user.status === 'Active' ? 'Suspended' : 'Active'
      } : user
    ));
    toast.success('User status updated successfully');
  };

  const handleEdit = (id: number) => {
    toast.info('Edit functionality will be implemented in the next phase');
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
    toast.success('User deleted successfully');
  };

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">User Management</h1>
          <Button>Add New User</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{user.role}</Badge>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === 'Active' ? 'default' : 'destructive'}
                      className="cursor-pointer"
                      onClick={() => handleToggleStatus(user.id)}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(user.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;
