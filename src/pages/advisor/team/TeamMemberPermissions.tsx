
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Shield, Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const TeamMemberPermissions = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/advisor/team-member/success');
  };
  
  const permissionCategories = [
    {
      name: 'Client Management',
      permissions: [
        { id: 'view_clients', label: 'View Clients', description: 'Can view client profiles and basic information' },
        { id: 'edit_clients', label: 'Edit Clients', description: 'Can edit client information and profiles' },
        { id: 'delete_clients', label: 'Delete Clients', description: 'Can remove clients from the system' },
        { id: 'assign_advisor', label: 'Assign Advisor', description: 'Can assign clients to advisors' },
      ]
    },
    {
      name: 'Listings Management',
      permissions: [
        { id: 'view_listings', label: 'View Listings', description: 'Can view all token listings' },
        { id: 'create_listings', label: 'Create Listings', description: 'Can create new token listings' },
        { id: 'edit_listings', label: 'Edit Listings', description: 'Can edit token listings' },
        { id: 'submit_listings', label: 'Submit for Approval', description: 'Can submit listings for approval' },
      ]
    },
    {
      name: 'Team Management',
      permissions: [
        { id: 'view_team', label: 'View Team Members', description: 'Can view team members' },
        { id: 'add_team', label: 'Add Team Members', description: 'Can add new team members' },
        { id: 'edit_team', label: 'Edit Team Members', description: 'Can edit team member details' },
        { id: 'delete_team', label: 'Remove Team Members', description: 'Can remove team members' },
      ]
    },
    {
      name: 'Analytics & Reporting',
      permissions: [
        { id: 'view_analytics', label: 'View Analytics', description: 'Can view analytics dashboards' },
        { id: 'export_reports', label: 'Export Reports', description: 'Can export and download reports' },
        { id: 'share_reports', label: 'Share Reports', description: 'Can share reports with clients' },
      ]
    }
  ];
  
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/advisor/team-member/onboarding">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Set Permissions</h1>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Team Member Permissions
            </CardTitle>
            <CardDescription>
              Configure what this team member can access and modify within the system
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between gap-6 pb-6 border-b">
                <div>
                  <h3 className="font-medium text-lg">Access Level</h3>
                  <p className="text-sm text-muted-foreground">
                    Select the appropriate access level for this team member
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Checkbox id="level-admin" />
                    <div>
                      <Label htmlFor="level-admin" className="font-medium">Administrator</Label>
                      <p className="text-sm text-muted-foreground">
                        Full access to all system features and settings
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Checkbox id="level-manager" defaultChecked />
                    <div>
                      <Label htmlFor="level-manager" className="font-medium">Manager</Label>
                      <p className="text-sm text-muted-foreground">
                        Can manage team members and most system features
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Checkbox id="level-member" />
                    <div>
                      <Label htmlFor="level-member" className="font-medium">Team Member</Label>
                      <p className="text-sm text-muted-foreground">
                        Limited access based on specific assigned permissions
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Checkbox id="level-readonly" />
                    <div>
                      <Label htmlFor="level-readonly" className="font-medium">Read-Only</Label>
                      <p className="text-sm text-muted-foreground">
                        Can only view information, cannot make changes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Detailed Permissions</h3>
                <div className="space-y-6">
                  {permissionCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-base">{category.name}</h4>
                        <Button type="button" variant="outline" size="sm" className="text-xs">
                          Select All
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2">
                        {category.permissions.map((permission) => (
                          <div key={permission.id} className="flex items-center justify-between p-3 rounded-md border">
                            <div className="space-y-1">
                              <Label htmlFor={permission.id} className="font-medium">
                                {permission.label}
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                {permission.description}
                              </p>
                            </div>
                            <Switch id={permission.id} defaultChecked={permission.id.startsWith('view')} />
                          </div>
                        ))}
                      </div>
                      
                      <Separator />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4 pt-2">
                <h3 className="font-medium text-lg">Login Access</h3>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-md bg-muted">
                  <div>
                    <p className="font-medium">Send welcome email with login instructions</p>
                    <p className="text-sm text-muted-foreground">
                      The team member will receive an email with instructions to set up their password
                    </p>
                  </div>
                  <Switch id="send_welcome" defaultChecked />
                </div>
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/advisor/team-member/onboarding')}
            >
              Back
            </Button>
            <Button onClick={handleSubmit} className="gap-2">
              <Check className="h-4 w-4" />
              Complete Setup
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TeamMemberPermissions;
