
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, Building, FileText, Settings as SettingsIcon, Shield, User } from 'lucide-react';

const AdvisorSettings = () => {
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <SettingsIcon className="h-6 w-6" />
            Settings
          </h1>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Advisor Profile</TabsTrigger>
            <TabsTrigger value="company">Company Details</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    Update your advisor profile and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-8 w-8 text-gray-500" />
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Upload New Photo
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Sarah" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Miller" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="sarah.miller@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+1 (555) 987-6543" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <Textarea 
                          id="bio" 
                          className="min-h-[120px]"
                          defaultValue="Investment advisor with over 10 years of experience in sustainable and ESG-compliant securities. Specializing in renewable energy and clean technology sectors."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Professional Credentials</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-md p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Certified Financial Planner (CFP)</p>
                              <p className="text-sm text-muted-foreground">Issued: Jan 2018 • Expires: Jan 2024</p>
                            </div>
                            <Button variant="outline" size="sm">Update</Button>
                          </div>
                        </div>
                        <div className="border rounded-md p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">ESG Investment Specialist</p>
                              <p className="text-sm text-muted-foreground">Issued: Mar 2020 • Expires: Mar 2025</p>
                            </div>
                            <Button variant="outline" size="sm">Update</Button>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-2">
                        + Add Credential
                      </Button>
                    </div>

                    <Button>Save Profile</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Calendar Settings</CardTitle>
                  <CardDescription>Configure your availability and meeting preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Working Hours</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startTime" className="text-sm text-muted-foreground">Start Time</Label>
                        <Input id="startTime" type="time" defaultValue="09:00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endTime" className="text-sm text-muted-foreground">End Time</Label>
                        <Input id="endTime" type="time" defaultValue="17:00" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Meeting Duration</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60" selected>1 hour</option>
                      <option value="90">1.5 hours</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="buffer-time">Buffer Time Between Meetings</Label>
                    <Switch id="buffer-time" defaultChecked={true} />
                  </div>
                  
                  <Button>Save Calendar Settings</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Company Information
                </CardTitle>
                <CardDescription>
                  Update your firm's details and business information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" defaultValue="Miller Sustainable Advisors" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registrationNumber">Registration Number</Label>
                      <Input id="registrationNumber" defaultValue="MSA-12345678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" defaultValue="https://milleradvisors.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="foundedYear">Founded Year</Label>
                      <Input id="foundedYear" type="number" defaultValue="2015" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyDescription">Company Description</Label>
                    <Textarea 
                      id="companyDescription" 
                      className="min-h-[150px]"
                      defaultValue="Miller Sustainable Advisors specializes in connecting ESG-focused and Shariah-compliant businesses with ethical investors. We have a proven track record of facilitating successful fundraising rounds for companies making a positive environmental and social impact."
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <Label>Company Address</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="street" className="text-sm text-muted-foreground">Street</Label>
                        <Input id="street" defaultValue="123 Sustainability Ave" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm text-muted-foreground">City</Label>
                        <Input id="city" defaultValue="Green City" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-sm text-muted-foreground">State/Province</Label>
                        <Input id="state" defaultValue="California" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode" className="text-sm text-muted-foreground">Zip/Postal Code</Label>
                        <Input id="zipCode" defaultValue="90210" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-sm text-muted-foreground">Country</Label>
                        <select id="country" className="w-full p-2 border rounded-md">
                          <option value="us" selected>United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          <option value="ae">United Arab Emirates</option>
                          <option value="sa">Saudi Arabia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <Button>Save Company Information</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Manage your account security and access controls
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password</h3>
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base" htmlFor="2fa">Enable Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="2fa" defaultChecked={true} />
                  </div>
                  <Button variant="outline">Reconfigure 2FA</Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Sessions</h3>
                  <div className="border rounded-lg divide-y">
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-muted-foreground">
                          MacOS • Chrome • New York, USA
                        </p>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium">Mobile App</p>
                        <p className="text-sm text-muted-foreground">
                          iOS • NSE Mobile App • Last active: 3 hours ago
                        </p>
                      </div>
                      <Button variant="outline" size="sm">Revoke</Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Sign Out All Other Sessions</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Compliance Documents
                </CardTitle>
                <CardDescription>
                  Manage your regulatory documents and compliance certifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border rounded-lg divide-y">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">Advisory Firm Registration</p>
                          <p className="text-xs text-muted-foreground">
                            Expires: Dec 31, 2023 • Last Updated: Jan 15, 2023
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">ESG Certification</p>
                          <p className="text-xs text-muted-foreground">
                            Expires: Mar 15, 2024 • Last Updated: Mar 15, 2023
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">Shariah Compliance Certificate</p>
                          <p className="text-xs text-muted-foreground">
                            Expires: Sep 30, 2023 • Last Updated: Oct 1, 2022
                          </p>
                        </div>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm" className="border-amber-500 text-amber-500">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          Renew
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">Upload New Document</Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Annual Compliance Review</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Next Review Due</p>
                        <p className="text-sm">February 15, 2024</p>
                      </div>
                      <Button>Schedule Review</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Compliance Officer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="compliance-name">Name</Label>
                      <Input id="compliance-name" defaultValue="Jennifer Wilson" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="compliance-email">Email</Label>
                      <Input id="compliance-email" defaultValue="jennifer.wilson@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="compliance-phone">Phone</Label>
                      <Input id="compliance-phone" defaultValue="+1 (555) 234-5678" />
                    </div>
                  </div>
                  <Button>Update Compliance Officer</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

// Helper component for the Badge in the Security tab
const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
      {children}
    </span>
  );
};

export default AdvisorSettings;
