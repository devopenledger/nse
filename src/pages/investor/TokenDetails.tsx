
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BarChart3, FileText, Users, TrendingUp, Calendar } from 'lucide-react';
import ChartCard from '@/components/dashboard/widgets/ChartCard';
import StatCard from '@/components/dashboard/widgets/StatCard';

// Mock data for the token details
const tokenData = {
  "GRNSOL": {
    symbol: "GRNSOL",
    name: "Green Solar Inc.",
    price: 34.25,
    change: "+2.5%",
    marketCap: "$342.5M",
    volume: "$4.2M",
    high24h: "$35.10",
    low24h: "$33.40",
    esgRating: "AAA",
    halalCertified: true,
    about: "Green Solar Inc. is a leading provider of solar energy solutions, focused on sustainable and renewable energy technologies for residential and commercial applications.",
    priceHistory: [
      { name: 'Jan', value: 28.5 },
      { name: 'Feb', value: 29.8 },
      { name: 'Mar', value: 27.3 },
      { name: 'Apr', value: 30.4 },
      { name: 'May', value: 32.7 },
      { name: 'Jun', value: 34.2 }
    ],
    news: [
      { id: 1, title: "Green Solar Announces New Technology Breakthrough", date: "2023-06-12" },
      { id: 2, title: "Q2 Earnings Exceed Analyst Expectations", date: "2023-05-28" },
      { id: 3, title: "New Manufacturing Facility Opens in Arizona", date: "2023-05-15" }
    ]
  },
  "SCLNRG": {
    symbol: "SCLNRG",
    name: "Solar Clean Energy",
    price: 78.60,
    change: "+1.2%",
    marketCap: "$825.3M",
    volume: "$7.8M",
    high24h: "$79.45",
    low24h: "$77.20",
    esgRating: "AA",
    halalCertified: true,
    about: "Solar Clean Energy specializes in developing advanced clean energy technologies and providing sustainable power solutions for industrial and commercial clients worldwide.",
    priceHistory: [
      { name: 'Jan', value: 65.2 },
      { name: 'Feb', value: 68.5 },
      { name: 'Mar', value: 72.1 },
      { name: 'Apr', value: 75.8 },
      { name: 'May', value: 77.4 },
      { name: 'Jun', value: 78.6 }
    ],
    news: [
      { id: 1, title: "Solar Clean Energy Partners with Major Utility Provider", date: "2023-06-10" },
      { id: 2, title: "New Contract Awarded for Municipal Solar Project", date: "2023-05-22" },
      { id: 3, title: "Executive Leadership Team Expansion Announced", date: "2023-05-05" }
    ]
  },
  "WTRPWR": {
    symbol: "WTRPWR",
    name: "Water Power Tech",
    price: 45.30,
    change: "-0.8%",
    marketCap: "$295.4M",
    volume: "$3.1M",
    high24h: "$46.25",
    low24h: "$44.85",
    esgRating: "A+",
    halalCertified: true,
    about: "Water Power Tech develops innovative hydro-electric power solutions focusing on small-scale, environmentally friendly systems for communities and businesses.",
    priceHistory: [
      { name: 'Jan', value: 48.3 },
      { name: 'Feb', value: 47.2 },
      { name: 'Mar', value: 49.5 },
      { name: 'Apr', value: 46.8 },
      { name: 'May', value: 45.7 },
      { name: 'Jun', value: 45.3 }
    ],
    news: [
      { id: 1, title: "Water Power Tech Introduces New Micro-Hydro System", date: "2023-06-08" },
      { id: 2, title: "Company Secures Funding for International Expansion", date: "2023-05-25" },
      { id: 3, title: "Research Partnership with Leading University Announced", date: "2023-05-12" }
    ]
  }
};

const TokenDetails = () => {
  const { symbol } = useParams<{ symbol: string }>();
  
  // Get token data based on the symbol
  const token = symbol ? tokenData[symbol as keyof typeof tokenData] : null;
  
  if (!token) {
    return (
      <DashboardLayout type="investor">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <h2 className="text-2xl font-bold mb-4">Token Not Found</h2>
          <p className="text-muted-foreground mb-6">The token you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/investor">Return to Dashboard</Link>
          </Button>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/investor">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">{token.name}</h1>
            <Badge variant={token.change.startsWith('+') ? 'outline' : 'secondary'}>
              {token.symbol}
            </Badge>
          </div>
          
          <div className="flex gap-2">
            <Button>Buy Tokens</Button>
            <Button variant="outline">Add to Watchlist</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Current Price"
            value={`$${token.price}`}
            description="Live market price"
            change={{value: token.change, isPositive: token.change.startsWith('+')}}
          />
          <StatCard
            title="Market Cap"
            value={token.marketCap}
            description="Total market value"
            icon={<BarChart3 className="h-5 w-5" />}
          />
          <StatCard
            title="24h Volume"
            value={token.volume}
            description="Trading volume"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <StatCard
            title="ESG Rating"
            value={token.esgRating}
            description={token.halalCertified ? "Halal Certified" : "Rating only"}
            icon={<FileText className="h-5 w-5" />}
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Price History</CardTitle>
            <CardDescription>6-month price trend</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartCard
              title="Price History"
              type="line"
              data={token.priceHistory}
            />
          </CardContent>
        </Card>
        
        <Tabs defaultValue="about">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About {token.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{token.about}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                  <div>
                    <p className="text-sm text-muted-foreground">24h High</p>
                    <p className="font-medium">{token.high24h}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">24h Low</p>
                    <p className="font-medium">{token.low24h}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ESG Rating</p>
                    <p className="font-medium">{token.esgRating}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Halal Certified</p>
                    <p className="font-medium">{token.halalCertified ? "Yes" : "No"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="news" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Latest News</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {token.news.map((item) => (
                    <div key={item.id} className="border-b pb-4 last:border-0">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analysis" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed market analysis will be available soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TokenDetails;
