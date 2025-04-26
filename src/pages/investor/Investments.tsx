
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const mockTokens = [
  {
    name: "Green Solar Inc.",
    symbol: "GSOL",
    description: "Sustainable solar energy infrastructure investment token",
    price: "$34.50",
    change: "+2.5%",
    marketCap: "$245M"
  },
  {
    name: "Eco Water Tech",
    symbol: "EWTR",
    description: "Water purification and conservation technology token",
    price: "$22.75",
    change: "+1.8%",
    marketCap: "$180M"
  },
  {
    name: "Clean Energy Fund",
    symbol: "CLEF",
    description: "Diversified renewable energy infrastructure fund",
    price: "$45.20",
    change: "+3.2%",
    marketCap: "$320M"
  },
  {
    name: "Sustainable Agriculture",
    symbol: "SAGR",
    description: "Organic farming and sustainable agriculture token",
    price: "$28.90",
    change: "+1.2%",
    marketCap: "$210M"
  },
  {
    name: "Green Building REIT",
    symbol: "GBRE",
    description: "Sustainable commercial real estate investment trust",
    price: "$56.40",
    change: "+2.8%",
    marketCap: "$450M"
  },
  {
    name: "Electric Transit",
    symbol: "ETRN",
    description: "Electric vehicle and sustainable transit infrastructure",
    price: "$41.75",
    change: "+4.2%",
    marketCap: "$280M"
  }
];

const Investments = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Investment Opportunities</h1>
          <Button>View Watchlist</Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTokens.map((token) => (
            <Card key={token.symbol} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{token.name}</CardTitle>
                    <CardDescription>{token.symbol}</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{token.price}</p>
                    <p className="text-sm text-green-600">{token.change}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  {token.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-muted-foreground">
                    Market Cap: {token.marketCap}
                  </p>
                  <Button>Buy Token</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Investments;
