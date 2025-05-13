
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, UserPlus, Users } from 'lucide-react';

const TeamMemberSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <DashboardLayout type="advisor">
      <div className="max-w-md mx-auto my-12">
        <Card className="border-green-100">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-xl">Team Member Added Successfully!</CardTitle>
            <CardDescription>
              The team member has been added to your organization
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center pt-6">
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">
                  A welcome email has been sent to the team member with instructions to set up their account.
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">What's next?</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Assign the team member to specific projects or clients</li>
                  <li>• Schedule an onboarding meeting</li>
                  <li>• Help them familiarize with the system</li>
                </ul>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-3">
            <Button 
              onClick={() => navigate('/advisor/team-members')} 
              className="w-full gap-2"
            >
              <Users className="h-4 w-4" />
              View All Team Members
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/advisor/team-member/onboarding')} 
              className="w-full gap-2"
            >
              <UserPlus className="h-4 w-4" />
              Add Another Team Member
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TeamMemberSuccess;
