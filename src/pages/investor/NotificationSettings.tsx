
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotificationSettings = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link to="/investor/notifications">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Notification Settings</h1>
        </div>
        
        <Tabs defaultValue="preferences">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="preferences">Notification Preferences</TabsTrigger>
            <TabsTrigger value="delivery">Delivery Methods</TabsTrigger>
            <TabsTrigger value="schedule">Delivery Schedule</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preferences" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Notifications</CardTitle>
                <CardDescription>
                  Control which market updates you receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="price-alerts" className="flex-1 cursor-pointer">
                    <div>Price Alerts</div>
                    <div className="text-sm text-muted-foreground">
                      Notify when tokens in your watchlist move significantly
                    </div>
                  </Label>
                  <Switch id="price-alerts" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="market-news" className="flex-1 cursor-pointer">
                    <div>Market News</div>
                    <div className="text-sm text-muted-foreground">
                      Updates on significant news affecting your investments
                    </div>
                  </Label>
                  <Switch id="market-news" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="market-reports" className="flex-1 cursor-pointer">
                    <div>Market Reports</div>
                    <div className="text-sm text-muted-foreground">
                      Weekly and monthly summaries of market performance
                    </div>
                  </Label>
                  <Switch id="market-reports" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="new-offerings" className="flex-1 cursor-pointer">
                    <div>New Investment Offerings</div>
                    <div className="text-sm text-muted-foreground">
                      Alerts about new tokens available for investment
                    </div>
                  </Label>
                  <Switch id="new-offerings" defaultChecked />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Account Notifications</CardTitle>
                <CardDescription>
                  Manage notifications related to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="portfolio-updates" className="flex-1 cursor-pointer">
                    <div>Portfolio Updates</div>
                    <div className="text-sm text-muted-foreground">
                      Daily summary of portfolio performance
                    </div>
                  </Label>
                  <Switch id="portfolio-updates" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="trade-confirmations" className="flex-1 cursor-pointer">
                    <div>Trade Confirmations</div>
                    <div className="text-sm text-muted-foreground">
                      Notifications when your trades are executed
                    </div>
                  </Label>
                  <Switch id="trade-confirmations" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="account-security" className="flex-1 cursor-pointer">
                    <div>Security Alerts</div>
                    <div className="text-sm text-muted-foreground">
                      Notifications about logins and security changes
                    </div>
                  </Label>
                  <Switch id="account-security" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="advisor-messages" className="flex-1 cursor-pointer">
                    <div>Advisor Messages</div>
                    <div className="text-sm text-muted-foreground">
                      Updates when your advisor sends you a message
                    </div>
                  </Label>
                  <Switch id="advisor-messages" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="delivery" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Delivery Methods</CardTitle>
                <CardDescription>
                  Choose how you would like to receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Price Alerts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="price-email" className="flex-1 cursor-pointer">Email</Label>
                        <Switch id="price-email" defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="price-push" className="flex-1 cursor-pointer">Push Notifications</Label>
                        <Switch id="price-push" defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="price-sms" className="flex-1 cursor-pointer">SMS</Label>
                        <Switch id="price-sms" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Market News</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="news-email" className="flex-1 cursor-pointer">Email</Label>
                        <Switch id="news-email" defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="news-push" className="flex-1 cursor-pointer">Push Notifications</Label>
                        <Switch id="news-push" defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="news-sms" className="flex-1 cursor-pointer">SMS</Label>
                        <Switch id="news-sms" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Account Notifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="account-email" className="flex-1 cursor-pointer">Email</Label>
                        <Switch id="account-email" defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="account-push" className="flex-1 cursor-pointer">Push Notifications</Label>
                        <Switch id="account-push" defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="account-sms" className="flex-1 cursor-pointer">SMS</Label>
                        <Switch id="account-sms" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Frequency</CardTitle>
                <CardDescription>
                  Control how often you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Price Alerts</h3>
                  <RadioGroup defaultValue="realtime">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="realtime" id="price-realtime" />
                      <Label htmlFor="price-realtime">Real-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hourly" id="price-hourly" />
                      <Label htmlFor="price-hourly">Hourly digest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="price-daily" />
                      <Label htmlFor="price-daily">Daily digest</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Market News</h3>
                  <RadioGroup defaultValue="daily">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="realtime" id="news-realtime" />
                      <Label htmlFor="news-realtime">As published</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="news-daily" />
                      <Label htmlFor="news-daily">Daily digest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="news-weekly" />
                      <Label htmlFor="news-weekly">Weekly digest</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Portfolio Updates</h3>
                  <RadioGroup defaultValue="daily">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="realtime" id="portfolio-realtime" />
                      <Label htmlFor="portfolio-realtime">Real-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="portfolio-daily" />
                      <Label htmlFor="portfolio-daily">Daily summary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="portfolio-weekly" />
                      <Label htmlFor="portfolio-weekly">Weekly summary</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default NotificationSettings;
