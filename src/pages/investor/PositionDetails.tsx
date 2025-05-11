
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChartCard from '@/components/dashboard/widgets/ChartCard';
import StatCard from '@/components/dashboard/widgets/StatCard';
import { ArrowLeft, TrendingUp, Calendar, DollarSign, BarChart3 } from 'lucide-react';

// Mock data for the positions
const positionsData = {
  "GRNSOL": {
    symbol: "GRNSOL",
    name: "Green Solar Inc.",
    quantity: 150,
    buyPrice: 31.20,
    currentPrice: 34.25,
    totalInvested: 4680.00,
    currentValue: 5137.50,
    profit: 457.50,
    percentGain: "+9.8%",
    purchaseDate: "2023-03-15",
    transactions: [
      { date: "2023-03-15", type: "Buy", quantity: 100, price: 31.20, total: 3120.00 },
      { date: "2023-04-22", type: "Buy", quantity: 50, price: 31.20, total: 1560.00 }
    ],
    priceHistory: [
      { name: 'Mar', value: 31.20 },
      { name: 'Apr', value: 32.40 },
      { name: 'May', value: 33.75 },
      { name: 'Jun', value: 34.25 }
    ]
  },
  "SCLNRG": {
    symbol: "SCLNRG",
    name: "Solar Clean Energy",
    quantity: 80,
    buyPrice: 72.50,
    currentPrice: 78.60,
    totalInvested: 5800.00,
    currentValue: 6288.00,
    profit: 488.00,
    percentGain: "+8.4%",
    purchaseDate: "2023-02-28",
    transactions: [
      { date: "2023-02-28", type: "Buy", quantity: 80, price: 72.50, total: 5800.00 }
    ],
    priceHistory: [
      { name: 'Mar', value: 73.25 },
      { name: 'Apr', value: 75.50 },
      { name: 'May', value: 77.40 },
      { name: 'Jun', value: 78.60 }
    ]
  },
  "ETHFIN": {
    symbol: "ETHFIN",
    name: "Ethical Finance Group",
    quantity: 45,
    buyPrice: 105.30,
    currentPrice: 112.75,
    totalInvested: 4738.50,
    currentValue: 5073.75,
    profit: 335.25,
    percentGain: "+7.1%",
    purchaseDate: "2023-01-15",
    transactions: [
      { date: "2023-01-15", type: "Buy", quantity: 30, price: 105.30, total: 3159.00 },
      { date: "2023-03-10", type: "Buy", quantity: 15, price: 105.30, total: 1579.50 }
    ],
    priceHistory: [
      { name: 'Jan', value: 105.30 },
      { name: 'Feb', value: 107.45 },
      { name: 'Mar', value: 108.70 },
      { name: 'Apr', value: 110.30 },
      { name: 'May', value: 111.50 },
      { name: 'Jun', value: 112.75 }
    ]
  }
};

const PositionDetails = () => {
  const { symbol } = useParams<{ symbol: string }>();
  
  // Get position data based on the symbol
  const position = symbol ? positionsData[symbol as keyof typeof positionsData] : null;
  
  if (!position) {
    return (
      <DashboardLayout type="investor">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <h2 className="text-2xl font-bold mb-4">Position Not Found</h2>
          <p className="text-muted-foreground mb-6">The position you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/investor/portfolio">Return to Portfolio</Link>
          </Button>
        </div>
      </DashboardLayout>
    );
  }
  
  const profitColor = position.profit >= 0 ? 'text-green-600' : 'text-red-600';
  
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/investor/portfolio">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">{position.name}</h1>
            <span className="text-lg font-semibold text-muted-foreground">{position.symbol}</span>
          </div>
          
          <div className="flex gap-2">
            <Button>Buy More</Button>
            <Button variant="outline" className="text-red-600 hover:text-red-700">Sell Position</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard 
            title="Quantity" 
            value={position.quantity.toString()} 
            description="Tokens held"
            icon={<BarChart3 className="h-5 w-5" />}
          />
          <StatCard 
            title="Current Value" 
            value={`$${position.currentValue.toFixed(2)}`} 
            description="Market value"
            icon={<DollarSign className="h-5 w-5" />}
          />
          <StatCard 
            title="Total Profit" 
            value={`$${position.profit.toFixed(2)}`} 
            description="Since purchase"
            change={{value: position.percentGain, isPositive: position.profit >= 0}}
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <StatCard 
            title="Purchase Date" 
            value={position.purchaseDate} 
            description="First investment"
            icon={<Calendar className="h-5 w-5" />}
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Price Performance</CardTitle>
            <CardDescription>Since your first purchase</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartCard
              title="Price History"
              type="line"
              data={position.priceHistory}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Position Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Average Buy Price</p>
                <p className="font-medium">${position.buyPrice.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Price</p>
                <p className="font-medium">${position.currentPrice.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Invested</p>
                <p className="font-medium">${position.totalInvested.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Gain/Loss</p>
                <p className={`font-medium ${profitColor}`}>
                  ${position.profit.toFixed(2)} ({position.percentGain})
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>All transactions for this position</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Type</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Quantity</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Price</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {position.transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.date}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className={transaction.type === 'Buy' ? 'text-green-600' : 'text-red-600'}>
                          {transaction.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right">{transaction.quantity}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right">${transaction.price.toFixed(2)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right">${transaction.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Export Transaction History</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PositionDetails;
