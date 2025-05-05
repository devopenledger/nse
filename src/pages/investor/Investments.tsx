
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockTokens = [
  {
    name: "Green Solar Inc.",
    symbol: "GSOL",
    description: "Sustainable solar energy infrastructure investment token",
    price: "$34.50",
    change: "+2.5%",
    marketCap: "$245M",
    esgRating: "AA",
    halalCompliant: true
  },
  {
    name: "Eco Water Tech",
    symbol: "EWTR",
    description: "Water purification and conservation technology token",
    price: "$22.75",
    change: "+1.8%",
    marketCap: "$180M",
    esgRating: "A",
    halalCompliant: true
  },
  {
    name: "Clean Energy Fund",
    symbol: "CLEF",
    description: "Diversified renewable energy infrastructure fund",
    price: "$45.20",
    change: "+3.2%",
    marketCap: "$320M",
    esgRating: "AAA",
    halalCompliant: true
  },
  {
    name: "Sustainable Agriculture",
    symbol: "SAGR",
    description: "Organic farming and sustainable agriculture token",
    price: "$28.90",
    change: "+1.2%",
    marketCap: "$210M",
    esgRating: "BBB",
    halalCompliant: true
  },
  {
    name: "Green Building REIT",
    symbol: "GBRE",
    description: "Sustainable commercial real estate investment trust",
    price: "$56.40",
    change: "+2.8%",
    marketCap: "$450M",
    esgRating: "AA",
    halalCompliant: true
  },
  {
    name: "Electric Transit",
    symbol: "ETRN",
    description: "Electric vehicle and sustainable transit infrastructure",
    price: "$41.75",
    change: "+4.2%",
    marketCap: "$280M",
    esgRating: "A",
    halalCompliant: true
  }
];

const Investments = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Investment Opportunities</h1>
            <p className="text-muted-foreground mt-1">
              Explore ESG-compliant and Halal-aligned investment opportunities
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">View Watchlist</Button>
            <Link to="/investor/secondary-market">
              <Button variant="secondary">Secondary Market</Button>
            </Link>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTokens.map((token) => (
            <Card key={token.symbol} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Link to={`/investor/company/${token.symbol}`}>
                      <CardTitle className="hover:text-nse-primary hover:underline transition-colors">
                        {token.name}
                      </CardTitle>
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <CardDescription>{token.symbol}</CardDescription>
                      <Badge variant="outline" className="ml-1">{token.esgRating}</Badge>
                      {token.halalCompliant && (
                        <Badge variant="success" className="text-xs">Halal</Badge>
                      )}
                    </div>
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
                  <Link to={`/investor/company/${token.symbol}`}>
                    <Button>View Details</Button>
                  </Link>
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
