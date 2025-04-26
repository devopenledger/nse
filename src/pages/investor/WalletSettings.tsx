
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wallet, CreditCard, Building } from 'lucide-react';

const WalletSettings = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Wallet & Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-nse-primary" />
                <CardTitle className="text-lg">Wallet Address</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-sm">0x1234...5678</p>
              <Button variant="outline" size="sm" className="mt-4">
                Copy Address
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-nse-primary" />
                <CardTitle className="text-lg">Linked Bank Account</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">**** **** **** 1234</p>
              <p className="text-sm text-muted-foreground">Bank of Example</p>
              <Button variant="outline" size="sm" className="mt-4">
                Change Bank
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-nse-primary" />
                <CardTitle className="text-lg">Payment Methods</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Visa ending in 4242</p>
              <p className="text-sm text-muted-foreground">Expires 12/25</p>
              <Button variant="outline" size="sm" className="mt-4">
                Manage Cards
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WalletSettings;
