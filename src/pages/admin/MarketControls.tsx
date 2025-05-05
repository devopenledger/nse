
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertTriangle, ShieldAlert, AlertOctagon } from 'lucide-react';

const MarketControls = () => {
  const [marketState, setMarketState] = useState<'active' | 'suspended'>('active');
  const [circuitBreaker, setCircuitBreaker] = useState(false);
  
  const toggleMarketState = () => {
    setMarketState(marketState === 'active' ? 'suspended' : 'active');
  };
  
  const toggleCircuitBreaker = () => {
    setCircuitBreaker(!circuitBreaker);
  };
  
  const mockTransactions = [
    {
      id: 'TX78901',
      token: 'GreenEnergy',
      description: 'Unusual volume spike detected',
      status: 'investigating'
    },
    {
      id: 'TX78902',
      token: 'SustainTech',
      description: 'Multiple rapid trades from single account',
      status: 'resolved'
    },
    {
      id: 'TX78903',
      token: 'EcoFinance',
      description: 'Potential wash trading pattern',
      status: 'flagged'
    },
    {
      id: 'TX78904',
      token: 'CleanWater',
      description: 'Price manipulation attempt',
      status: 'investigating'
    }
  ];
  
  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Market Controls</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Market Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-medium">Current State</h3>
                  <div className="flex items-center mt-2">
                    <Badge variant={marketState === 'active' ? 'default' : 'destructive'}>
                      {marketState === 'active' ? 'ACTIVE' : 'SUSPENDED'}
                    </Badge>
                  </div>
                </div>
                <Button onClick={toggleMarketState} variant={marketState === 'active' ? 'destructive' : 'default'}>
                  {marketState === 'active' ? 'Suspend Market' : 'Activate Market'}
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Circuit Breaker</h3>
                  <div className="flex items-center mt-2">
                    <Badge variant={circuitBreaker ? 'destructive' : 'outline'}>
                      {circuitBreaker ? 'ACTIVATED' : 'INACTIVE'}
                    </Badge>
                  </div>
                </div>
                <Switch checked={circuitBreaker} onCheckedChange={toggleCircuitBreaker} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-red-500" />
                Market Protections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Volatility Controls</h3>
                    <p className="text-sm text-muted-foreground">Limit price movements</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Trading Halts</h3>
                    <p className="text-sm text-muted-foreground">Emergency stop capability</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Anti-Spoofing</h3>
                    <p className="text-sm text-muted-foreground">Prevent false orders</p>
                  </div>
                  <Switch checked={true} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertOctagon className="h-5 w-5 text-red-500" />
              Fraud Detection Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Token</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-mono">{tx.id}</TableCell>
                    <TableCell>{tx.token}</TableCell>
                    <TableCell>{tx.description}</TableCell>
                    <TableCell>
                      <Badge variant={
                        tx.status === 'investigating' ? 'secondary' : 
                        tx.status === 'resolved' ? 'outline' : 
                        'destructive'
                      }>
                        {tx.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Review</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MarketControls;
