
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import FormWrapper from '@/components/forms/FormWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Phone, Mail, Calendar } from 'lucide-react';

const MyAdvisor = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">My Advisor</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="Financial Advisor" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold">Sarah Anderson</h2>
                  <p className="text-sm text-muted-foreground">Senior Financial Advisor</p>
                  <p className="text-sm text-muted-foreground">ESG Investment Specialist</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-nse-primary" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-nse-primary" />
                      <span className="text-sm">sarah.a@nse.com</span>
                    </div>
                  </div>
                  
                  <Button className="mt-4 w-full" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <FormWrapper title="Contact Advisor" description="Send a message to your advisor">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter message subject" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here" 
                  className="min-h-[150px]" 
                />
              </div>
              
              <Button className="w-full">Send Message</Button>
            </div>
          </FormWrapper>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyAdvisor;
