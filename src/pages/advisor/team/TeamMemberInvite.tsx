
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Mail, Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  emails: z.string().min(1, { message: "Email address is required" }),
  role: z.string().min(1, { message: "Role is required" }),
  department: z.string().min(1, { message: "Department is required" }),
  message: z.string().optional(),
  expiresInDays: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const TeamMemberInvite = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emails: "",
      role: "",
      department: "",
      message: "",
      expiresInDays: "7",
    },
  });
  
  const onSubmit = (data: FormValues) => {
    console.log("Invitation submitted:", data);
    
    // Show success toast
    toast({
      title: "Invitations sent successfully",
      description: "Team members will receive an email shortly.",
    });
    
    // Navigate back to team members page
    navigate('/advisor/team-members');
  };
  
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
            <h1 className="text-3xl font-bold">Invite Team Members</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Send Invitations
              </CardTitle>
              <CardDescription>
                Invite new team members to join your organization
              </CardDescription>
            </CardHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="emails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Addresses</FormLabel>
                        <FormDescription>
                          Enter email addresses separated by commas or line breaks
                        </FormDescription>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., john@example.com, sarah@example.com"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="advisor">Advisor</SelectItem>
                              <SelectItem value="analyst">Analyst</SelectItem>
                              <SelectItem value="compliance_officer">Compliance Officer</SelectItem>
                              <SelectItem value="client_relations">Client Relations</SelectItem>
                              <SelectItem value="marketing">Marketing Specialist</SelectItem>
                              <SelectItem value="administrator">Administrator</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <Select 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="investment">Investment</SelectItem>
                              <SelectItem value="compliance">Compliance</SelectItem>
                              <SelectItem value="marketing">Marketing</SelectItem>
                              <SelectItem value="client_success">Client Success</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                              <SelectItem value="it">IT</SelectItem>
                              <SelectItem value="legal">Legal</SelectItem>
                              <SelectItem value="research">Research</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="expiresInDays"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Invitation Expiry</FormLabel>
                        <Select 
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select expiry period" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="3">3 days</SelectItem>
                            <SelectItem value="7">7 days</SelectItem>
                            <SelectItem value="14">14 days</SelectItem>
                            <SelectItem value="30">30 days</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Separator />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Personal Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Add a personal message to the invitation email"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/advisor/team-members')}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="gap-2">
                    <Send className="h-4 w-4" />
                    Send Invitations
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Invitation Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="onboard" defaultChecked />
                  <Label htmlFor="onboard">Include onboarding guide</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="welcome" defaultChecked />
                  <Label htmlFor="welcome">Send welcome message</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="notification" defaultChecked />
                  <Label htmlFor="notification">Notify me when accepted</Label>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Permission Templates</CardTitle>
                <CardDescription>
                  Apply a predefined set of permissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="standard" />
                  <Label htmlFor="standard">Standard User</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="restricted" />
                  <Label htmlFor="restricted">Restricted Access</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="admin" defaultChecked />
                  <Label htmlFor="admin">Administrator</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="readonly" />
                  <Label htmlFor="readonly">Read Only</Label>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Team members will receive an email with instructions to create their account. 
                  You can manage all pending invitations from the Team Members page.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamMemberInvite;
