
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, Info, CheckCircle, AlertCircle } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Dividend Payment",
      message: "A dividend payment of $0.15 per share has been issued for GreenEnergy token.",
      date: "2025-05-03",
      type: "info",
      read: false
    },
    {
      id: 2,
      title: "KYC Verification Complete",
      message: "Your KYC verification has been successfully completed.",
      date: "2025-05-01",
      type: "success",
      read: true
    },
    {
      id: 3,
      title: "New Token Available",
      message: "SustainTech token is now available for investment. Check your investment page.",
      date: "2025-04-29",
      type: "info",
      read: false
    },
    {
      id: 4,
      title: "Portfolio Alert",
      message: "Your EcoFinance token has increased by 12% in the last 24 hours.",
      date: "2025-04-28",
      type: "alert",
      read: false
    },
    {
      id: 5,
      title: "Document Signed",
      message: "The investment agreement for CleanWater token has been successfully signed.",
      date: "2025-04-25",
      type: "success",
      read: true
    }
  ];

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Bell className="h-6 w-6" />
            Notifications
          </h1>
          <Button variant="outline" size="sm">Mark All as Read</Button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={notification.read ? "opacity-70" : ""}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {notification.type === "info" && <Info className="h-5 w-5 text-blue-500" />}
                    {notification.type === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {notification.type === "alert" && <AlertCircle className="h-5 w-5 text-orange-500" />}
                    <CardTitle className="text-lg">{notification.title}</CardTitle>
                    {!notification.read && <Badge variant="default" className="ml-2">New</Badge>}
                  </div>
                  <span className="text-sm text-muted-foreground">{notification.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{notification.message}</p>
                <div className="flex justify-end mt-4">
                  {!notification.read && (
                    <Button variant="ghost" size="sm">Mark as Read</Button>
                  )}
                  <Button variant="outline" size="sm" className="ml-2">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
