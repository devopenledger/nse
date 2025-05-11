
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Settings as SettingsIcon, Shield, Bell, Key, User, Languages, Mail } from 'lucide-react';

const Settings = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <SettingsIcon className="h-6 w-6" />
            Account Settings
          </h1>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input id="dateOfBirth" defaultValue="1985-06-15" type="date" />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Communication Preferences
                  </CardTitle>
                  <CardDescription>
                    Manage how we contact you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="marketing-emails">Marketing emails</Label>
                    <Switch id="marketing-emails" defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="product-updates">Product updates</Label>
                    <Switch id="product-updates" defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="security-alerts">Security alerts</Label>
                    <Switch id="security-alerts" defaultChecked={true} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Password
                  </CardTitle>
                  <CardDescription>
                    Change your password
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button>Change Password</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Two-Factor Authentication
                  </CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div>
                      <h4 className="font-medium">Two-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="2fa-enabled" defaultChecked={true} />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between space-x-2">
                    <div>
                      <h4 className="font-medium">Authentication App</h4>
                      <p className="text-sm text-muted-foreground">
                        Use an authentication app to generate verification codes
                      </p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between space-x-2">
                    <div>
                      <h4 className="font-medium">Recovery Codes</h4>
                      <p className="text-sm text-muted-foreground">
                        Generate new recovery codes for your account
                      </p>
                    </div>
                    <Button variant="outline">View Codes</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Choose what notifications you receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Investment Notifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="price-alerts">Price Alerts</Label>
                        <Switch id="price-alerts" defaultChecked={true} />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="trade-confirmations">Trade Confirmations</Label>
                        <Switch id="trade-confirmations" defaultChecked={true} />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="dividend-announcements">Dividend Announcements</Label>
                        <Switch id="dividend-announcements" defaultChecked={true} />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="portfolio-updates">Portfolio Updates</Label>
                        <Switch id="portfolio-updates" defaultChecked={false} />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-3">Market Notifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="market-news">Market News</Label>
                        <Switch id="market-news" defaultChecked={true} />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="regulatory-updates">Regulatory Updates</Label>
                        <Switch id="regulatory-updates" defaultChecked={false} />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="esg-alerts">ESG Alerts</Label>
                        <Switch id="esg-alerts" defaultChecked={true} />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="halal-compliance">Halal Compliance Updates</Label>
                        <Switch id="halal-compliance" defaultChecked={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Settings */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Interface Preferences
                </CardTitle>
                <CardDescription>
                  Customize your interface and display options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select id="language" className="w-full p-2 border rounded-md">
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="ar">العربية</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select id="timezone" className="w-full p-2 border rounded-md">
                      <option value="utc">UTC</option>
                      <option value="est">Eastern Time (ET)</option>
                      <option value="cet">Central European Time (CET)</option>
                      <option value="gst">Gulf Standard Time (GST)</option>
                    </select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Display Options</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <Switch id="dark-mode" defaultChecked={false} />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="compact-view">Compact View</Label>
                      <Switch id="compact-view" defaultChecked={false} />
                    </div>
                  </div>
                </div>
                
                <Button className="mt-4">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
