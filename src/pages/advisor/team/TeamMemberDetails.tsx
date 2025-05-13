
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Building, 
  Shield, 
  Activity,
  Edit,
  Trash
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Mock data for a single team member
const mockTeamMember = {
  id: 3,
  firstName: 'James',
  lastName: 'Wilson',
  email: 'james.wilson@example.com',
  phone: '+1 (555) 123-4567',
  role: 'Client Relations',
  department: 'Client Success',
  startDate: '2022-05-15',
  status: 'Active',
  bio: 'James has over 10 years of experience in client relations and customer success. He specializes in building strong relationships with high-value clients and ensuring their investment goals are met.',
  address: '123 Main Street',
  city: 'New York',
  state: 'NY',
  country: 'United States',
  postalCode: '10001',
  permissions: {
    clients: ['view_clients', 'edit_clients'],
    listings: ['view_listings'],
    team: ['view_team'],
    analytics: ['view_analytics', 'export_reports']
  },
  recentActivity: [
    { date: '2023-09-15', action: 'Updated client profile', client: 'Robert Smith' },
    { date: '2023-09-10', action: 'Added new client', client: 'Sarah Johnson' },
    { date: '2023-09-05', action: 'Generated analytics report', client: null },
    { date: '2023-09-01', action: 'Conducted client meeting', client: 'Michael Brown' }
  ]
};

const TeamMemberDetails = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // In a real app, you would fetch the team member data based on the ID
  
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/advisor/team-members">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">{mockTeamMember.firstName} {mockTeamMember.lastName}</h1>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 ml-2">
              {mockTeamMember.status}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Edit Team Member</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Edit Permissions</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Deactivate Member</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <Tabs 
          defaultValue="overview" 
          className="w-full" 
          value={activeTab} 
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="permissions">Permissions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Basic details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground mt-1" />
                        <div>
                          <p className="font-medium">Email Address</p>
                          <p className="text-sm text-muted-foreground">{mockTeamMember.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground mt-1" />
                        <div>
                          <p className="font-medium">Phone Number</p>
                          <p className="text-sm text-muted-foreground">{mockTeamMember.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-sm text-muted-foreground">
                            {mockTeamMember.address}<br />
                            {mockTeamMember.city}, {mockTeamMember.state} {mockTeamMember.postalCode}<br />
                            {mockTeamMember.country}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Building className="h-5 w-5 text-muted-foreground mt-1" />
                        <div>
                          <p className="font-medium">Department</p>
                          <p className="text-sm text-muted-foreground">{mockTeamMember.department}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-muted-foreground mt-1" />
                        <div>
                          <p className="font-medium">Role</p>
                          <p className="text-sm text-muted-foreground">{mockTeamMember.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-muted-foreground mt-1" />
                        <div>
                          <p className="font-medium">Start Date</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(mockTeamMember.startDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <p className="font-medium mb-2">Biography</p>
                    <p className="text-sm text-muted-foreground">{mockTeamMember.bio}</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="bg-muted px-6 py-8 flex flex-col items-center">
                    <div className="h-24 w-24 rounded-full bg-nse-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {mockTeamMember.firstName.charAt(0)}{mockTeamMember.lastName.charAt(0)}
                    </div>
                    <h3 className="font-bold text-xl">{mockTeamMember.firstName} {mockTeamMember.lastName}</h3>
                    <p className="text-muted-foreground">{mockTeamMember.role}</p>
                  </div>
                  
                  <CardContent className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Member since</p>
                        <p className="text-sm font-medium">
                          {new Date(mockTeamMember.startDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                          {mockTeamMember.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Latest actions from this team member
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockTeamMember.recentActivity.slice(0, 3).map((activity, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Activity className="h-4 w-4 text-muted-foreground mt-1" />
                          <div>
                            <p className="text-sm">{activity.action}</p>
                            {activity.client && <p className="text-xs text-muted-foreground">Client: {activity.client}</p>}
                            <p className="text-xs text-muted-foreground">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                      
                      <Button variant="link" className="text-xs p-0 h-auto" onClick={() => setActiveTab('activity')}>
                        View all activity
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Activity History
                </CardTitle>
                <CardDescription>
                  Recent actions and activities performed by this team member
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {['September 2023', 'August 2023', 'July 2023'].map((month, monthIndex) => (
                    <div key={month} className="space-y-4">
                      <h3 className="text-sm font-medium text-muted-foreground">{month}</h3>
                      
                      {[...Array(monthIndex === 0 ? 4 : 3)].map((_, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 rounded-md border">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <Activity className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">
                              {index === 0 ? 'Updated client profile' : 
                               index === 1 ? 'Added new client' :
                               index === 2 ? 'Generated analytics report' : 'Conducted client meeting'}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {index % 2 === 0 ? 'Client: Robert Smith' : index === 1 ? 'Client: Sarah Johnson' : 'General task'}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {monthIndex === 0 ? `September ${15 - (index * 5)}, 2023` : 
                               monthIndex === 1 ? `August ${25 - (index * 5)}, 2023` : 
                               `July ${20 - (index * 5)}, 2023`} at {10 + index}:00 AM
                            </p>
                          </div>
                        </div>
                      ))}
                      
                      <Separator />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="permissions" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  System Permissions
                </CardTitle>
                <CardDescription>
                  Access rights and permissions for this team member
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Client Management Permissions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Client Management</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">View Clients</p>
                          <p className="text-xs text-muted-foreground">Can view client profiles and basic information</p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.permissions.clients.includes('view_clients')} />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">Edit Clients</p>
                          <p className="text-xs text-muted-foreground">Can edit client information and profiles</p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.permissions.clients.includes('edit_clients')} />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">Delete Clients</p>
                          <p className="text-xs text-muted-foreground">Can remove clients from the system</p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.permissions.clients.includes('delete_clients')} />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">Assign Advisor</p>
                          <p className="text-xs text-muted-foreground">Can assign clients to advisors</p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.permissions.clients.includes('assign_advisor')} />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Listings Management Permissions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Listings Management</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">View Listings</p>
                          <p className="text-xs text-muted-foreground">Can view all token listings</p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.permissions.listings.includes('view_listings')} />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">Create Listings</p>
                          <p className="text-xs text-muted-foreground">Can create new token listings</p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.permissions.listings.includes('create_listings')} />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">Edit Listings</p>
                          <p className="text-xs text-muted-foreground">Can edit token listings</p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.permissions.listings.includes('edit_listings')} />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">Submit for Approval</p>
                          <p className="text-xs text-muted-foreground">Can submit listings for approval</p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.permissions.listings.includes('submit_listings')} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-md mt-6">
                    <p className="text-sm text-muted-foreground">
                      Note: Changes to permissions may take up to 15 minutes to fully propagate through the system.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage account settings, notifications, and access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultValue={mockTeamMember.email} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={mockTeamMember.phone} />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Account Status</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Active Status</p>
                          <p className="text-sm text-muted-foreground">
                            When disabled, user cannot log into the system
                          </p>
                        </div>
                        <Switch defaultChecked={mockTeamMember.status === 'Active'} />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Force Password Reset</p>
                          <p className="text-sm text-muted-foreground">
                            User will be required to change their password on next login
                          </p>
                        </div>
                        <Switch />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">
                            Require two-factor authentication for this user
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Danger Zone</h3>
                    <Button variant="destructive">Deactivate Account</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TeamMemberDetails;
