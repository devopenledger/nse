
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Shield, BellRing, Database, Users, Activity } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SystemSettings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your system settings have been successfully updated.",
    });
  };

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">System Settings</h1>
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
        
        <Tabs defaultValue="general">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="api">API & Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure basic platform information and appearance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Platform Name</label>
                      <Input defaultValue="Neo Sustainable Exchange" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Contact Email</label>
                      <Input defaultValue="support@neosustainable.com" type="email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Platform Description</label>
                    <Textarea 
                      rows={4}
                      defaultValue="A tokenized securities platform focused on ESG-compliant and halal-aligned assets."
                    />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium">Maintenance Mode</h3>
                      <p className="text-sm text-muted-foreground">Temporarily disable access to the platform</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium">Allow New Registrations</h3>
                      <p className="text-sm text-muted-foreground">Allow users to create new accounts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Regional Settings</CardTitle>
                <CardDescription>Configure localization preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Default Language</label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ar">Arabic</SelectItem>
                          <SelectItem value="ms">Malay</SelectItem>
                          <SelectItem value="id">Indonesian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Default Timezone</label>
                      <Select defaultValue="utc">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                          <SelectItem value="asia_dubai">Asia/Dubai (GMT+4)</SelectItem>
                          <SelectItem value="asia_kl">Asia/Kuala_Lumpur (GMT+8)</SelectItem>
                          <SelectItem value="asia_jakarta">Asia/Jakarta (GMT+7)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date Format</label>
                    <Select defaultValue="dmy">
                      <SelectTrigger>
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Configure platform security measures</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium">Password Rotation</h3>
                      <p className="text-sm text-muted-foreground">Require password changes every 90 days</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Session Timeout (minutes)</label>
                    <Input type="number" defaultValue="30" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Maximum Login Attempts</label>
                    <Input type="number" defaultValue="5" />
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="gap-2">
                      <Activity className="h-4 w-4" />
                      View Security Audit Logs
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BellRing className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Configure system notifications</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm">New User Registration</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm">New Listing Submission</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm">Compliance Alerts</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm">System Updates</span>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Default Notification Email</label>
                    <Input defaultValue="admin@neosustainable.com" type="email" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle>API Configuration</CardTitle>
                    <CardDescription>Configure API settings and integrations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">API Key</label>
                    <div className="flex items-center gap-2">
                      <Input defaultValue="sk_live_***********************" type="password" />
                      <Button variant="outline" size="sm">Regenerate</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Last regenerated on 12 May 2023</p>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium">Enable API Access</h3>
                      <p className="text-sm text-muted-foreground">Allow external systems to connect via API</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Connected Services</h3>
                    <div className="border rounded-md">
                      <div className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 bg-blue-100 rounded-md flex items-center justify-center">
                            <Users className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">KYC Provider</p>
                            <p className="text-xs text-muted-foreground">Last synced: 3 hours ago</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 bg-green-100 rounded-md flex items-center justify-center">
                            <Activity className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Market Data Provider</p>
                            <p className="text-xs text-muted-foreground">Last synced: 10 minutes ago</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 bg-purple-100 rounded-md flex items-center justify-center">
                            <Shield className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Compliance Service</p>
                            <p className="text-xs text-muted-foreground">Last synced: 1 day ago</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline">+ Connect New Service</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SystemSettings;
