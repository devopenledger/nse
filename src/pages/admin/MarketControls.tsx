
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const mockTransactions = [
  {
    id: 'TX001',
    token: 'Green Energy Token',
    description: 'Large volume trade detected',
    status: 'Under Review',
  },
  {
    id: 'TX002',
    token: 'Sustainable Water Fund',
    description: 'Unusual trading pattern',
    status: 'Investigating',
  },
  {
    id: 'TX003',
    token: 'Solar Infrastructure',
    description: 'Price manipulation attempt',
    status: 'Resolved',
  },
];

const MarketControls = () => {
  const [marketState, setMarketState] = useState('Active');
  const [circuitBreaker, setCircuitBreaker] = useState('Inactive');

  const toggleMarketState = () => {
    const newState = marketState === 'Active' ? 'Suspended' : 'Active';
    setMarketState(newState);
    toast.success(`Market ${newState.toLowerCase()}`);
  };

  const toggleCircuitBreaker = () => {
    const newState = circuitBreaker === 'Active' ? 'Inactive' : 'Active';
    setCircuitBreaker(newState);
    toast.success(`Circuit breaker ${newState.toLowerCase()}`);
  };

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Market Controls</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Market Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current State:</span>
                  <Badge variant={marketState === 'Active' ? 'success' : 'destructive'}>
                    {marketState}
                  </Badge>
                </div>
                <Button 
                  className="w-full"
                  variant={marketState === 'Active' ? 'destructive' : 'default'}
                  onClick={toggleMarketState}
                >
                  {marketState === 'Active' ? 'Suspend Market' : 'Activate Market'}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Circuit Breaker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current Status:</span>
                  <Badge variant={circuitBreaker === 'Active' ? 'destructive' : 'success'}>
                    {circuitBreaker}
                  </Badge>
                </div>
                <Button 
                  className="w-full"
                  variant={circuitBreaker === 'Active' ? 'default' : 'destructive'}
                  onClick={toggleCircuitBreaker}
                >
                  {circuitBreaker === 'Active' ? 'Deactivate Circuit Breaker' : 'Activate Circuit Breaker'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fraud Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Token</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-medium">{tx.id}</TableCell>
                    <TableCell>{tx.token}</TableCell>
                    <TableCell>{tx.description}</TableCell>
                    <TableCell>
                      <Badge variant={
                        tx.status === 'Resolved' ? 'success' :
                        tx.status === 'Investigating' ? 'destructive' : 'warning'
                      }>
                        {tx.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
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
