
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Users, UserPlus, ArrowLeft } from 'lucide-react';

const mockTeamMembers = [
  {
    id: 1,
    name: 'David Chen',
    email: 'david.chen@example.com',
    role: 'Senior Advisor',
    department: 'Investment',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 2,
    name: 'Lisa Park',
    email: 'lisa.park@example.com',
    role: 'Investment Analyst',
    department: 'Research',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 3,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    role: 'Client Relations',
    department: 'Client Success',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 4,
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    role: 'Junior Advisor',
    department: 'Investment',
    status: 'On Leave',
    statusColor: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 5,
    name: 'Ahmed Al-Farsi',
    email: 'ahmed.alfarsi@example.com',
    role: 'Compliance Officer',
    department: 'Legal',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 6,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'Marketing Director',
    department: 'Marketing',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 7,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    role: 'Technical Specialist',
    department: 'IT',
    status: 'Inactive',
    statusColor: 'bg-red-100 text-red-800'
  },
];

const TeamMemberList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredMembers = mockTeamMembers.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/advisor/office-management">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Team Members</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/advisor/team-member/invite">
              <Button variant="outline" className="gap-2">
                <UserPlus className="h-4 w-4" />
                Invite Member
              </Button>
            </Link>
            <Link to="/advisor/team-member/onboarding">
              <Button className="gap-2">
                <UserPlus className="h-4 w-4" />
                Add New Member
              </Button>
            </Link>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  All Team Members
                </CardTitle>
                <CardDescription>
                  Manage and view all team members in your organization
                </CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search team members..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                      No team members found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.department}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={member.statusColor}>
                          {member.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link to={`/advisor/team-member/${member.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {filteredMembers.length} of {mockTeamMembers.length} team members
            </div>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TeamMemberList;
