
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Settings, Shield, Bell, Database, Clock } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SystemSettings = () => {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Settings className="h-6 w-6" />
            System Settings
          </h1>
          <Button>Save Changes</Button>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="mb-4">
            <TabsTrigger value="general" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-1">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-1">
              <Database className="h-4 w-4" />
              Database
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="system-name">System Name</Label>
                  <Input id="system-name" defaultValue="Neo Sustainable Exchange" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input id="admin-email" type="email" defaultValue="admin@nse.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="UTC">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="EST">Eastern Time (EST)</SelectItem>
                      <SelectItem value="CST">Central Time (CST)</SelectItem>
                      <SelectItem value="PST">Pacific Time (PST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <div className="text-sm text-muted-foreground">
                      Disable all user access during maintenance
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <div className="text-sm text-muted-foreground">
                      Require 2FA for all admin users
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Password Strength</Label>
                    <span className="text-sm font-medium">Strong</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={25} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" defaultValue="30" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>IP Restriction</Label>
                    <div className="text-sm text-muted-foreground">
                      Limit admin access to specific IP ranges
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Alerts</Label>
                    <div className="text-sm text-muted-foreground">
                      Send critical system alerts via email
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <div className="text-sm text-muted-foreground">
                      Send urgent alerts via SMS
                    </div>
                  </div>
                  <Switch />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="alert-threshold">Alert Threshold</Label>
                  <Select defaultValue="high">
                    <SelectTrigger id="alert-threshold">
                      <SelectValue placeholder="Select threshold" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (All Alerts)</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High (Critical Only)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="database">
            <Card>
              <CardHeader>
                <CardTitle>Database Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="backup-frequency">Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger id="backup-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automatic Optimization</Label>
                    <div className="text-sm text-muted-foreground">
                      Periodically optimize database performance
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="retention-period">Data Retention Period (days)</Label>
                  <Input id="retention-period" type="number" defaultValue="90" />
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="mr-2">
                    <Clock className="mr-2 h-4 w-4" />
                    Run Manual Backup
                  </Button>
                  <Button variant="outline">
                    <Database className="mr-2 h-4 w-4" />
                    Optimize Now
                  </Button>
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
