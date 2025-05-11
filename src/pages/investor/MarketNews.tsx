
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, Clock, ExternalLink, RefreshCw, Star } from 'lucide-react';

// Mock news data
const newsItems = [
  {
    id: 1,
    title: 'Green Solar Inc. Secures $50M for Expansion into Middle East',
    summary: 'Green Solar Inc. (GSOL) announced today that it has secured $50 million in funding to expand its operations into the Middle East region, with a focus on Saudi Arabia and UAE.',
    source: 'Sustainable Finance Today',
    date: '2023-09-20',
    time: '10:30 AM',
    category: 'company',
    relatedSymbol: 'GSOL',
    impact: 'positive' as const,
    isBookmarked: true
  },
  {
    id: 2,
    title: 'ESG Regulations Tighten in European Markets',
    summary: 'The European Union has passed new regulations that will require stricter ESG compliance reporting from all publicly traded companies starting January 2024.',
    source: 'Global Regulatory News',
    date: '2023-09-19',
    time: '3:15 PM',
    category: 'regulatory',
    impact: 'neutral' as const,
    isBookmarked: false
  },
  {
    id: 3,
    title: 'Clean Energy Fund Reports Record Q3 Dividends',
    summary: 'Clean Energy Fund (CLEF) has announced record-breaking Q3 dividends of $0.45 per share, representing a 15% increase from the previous quarter.',
    source: 'Investment Daily',
    date: '2023-09-18',
    time: '9:45 AM',
    category: 'company',
    relatedSymbol: 'CLEF',
    impact: 'positive' as const,
    isBookmarked: true
  },
  {
    id: 4,
    title: 'Eco Water Tech Reports Supply Chain Disruptions',
    summary: 'Eco Water Tech (EWTR) has issued a statement addressing recent supply chain disruptions that may affect product deliveries in Q4 2023.',
    source: 'Industry Insights',
    date: '2023-09-17',
    time: '11:20 AM',
    category: 'company',
    relatedSymbol: 'EWTR',
    impact: 'negative' as const,
    isBookmarked: false
  },
  {
    id: 5,
    title: 'New Research Shows Increasing Investor Interest in Halal ESG Products',
    summary: 'A new market research report indicates a 35% year-over-year increase in investor demand for financial products that meet both ESG and Halal compliance standards.',
    source: 'Islamic Finance Monitor',
    date: '2023-09-16',
    time: '2:00 PM',
    category: 'market',
    impact: 'positive' as const,
    isBookmarked: false
  },
  {
    id: 6,
    title: 'Sustainable Agriculture Announces New Board Member',
    summary: 'Sustainable Agriculture (SAGR) has appointed Dr. Amina Hammad, a renowned agricultural sustainability expert, to its board of directors effective October 1, 2023.',
    source: 'Corporate Governance Weekly',
    date: '2023-09-15',
    time: '10:00 AM',
    category: 'company',
    relatedSymbol: 'SAGR',
    impact: 'neutral' as const,
    isBookmarked: false
  }
];

const MarketNews = () => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'negative': return 'bg-red-100 text-red-800';
      case 'neutral': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Market News
          </h1>
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" /> Refresh
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 w-full justify-start">
            <TabsTrigger value="all">All News</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="market">Market Trends</TabsTrigger>
            <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarked</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-6">
              {newsItems.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="companies">
            <div className="space-y-6">
              {newsItems
                .filter(item => item.category === 'company')
                .map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="market">
            <div className="space-y-6">
              {newsItems
                .filter(item => item.category === 'market')
                .map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="regulatory">
            <div className="space-y-6">
              {newsItems
                .filter(item => item.category === 'regulatory')
                .map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="bookmarks">
            <div className="space-y-6">
              {newsItems
                .filter(item => item.isBookmarked)
                .map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  source: string;
  date: string;
  time: string;
  category: string;
  relatedSymbol?: string;
  impact: 'positive' | 'negative' | 'neutral';
  isBookmarked: boolean;
}

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard = ({ item }: NewsCardProps) => {
  const getImpactBadge = (impact: 'positive' | 'negative' | 'neutral') => {
    switch (impact) {
      case 'positive': return 'outline';
      case 'negative': return 'destructive';
      case 'neutral': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">{item.source}</span>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {item.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {item.time}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {item.relatedSymbol && (
              <Badge variant="secondary">
                {item.relatedSymbol}
              </Badge>
            )}
            <Badge variant={getImpactBadge(item.impact)}>
              {item.impact.charAt(0).toUpperCase() + item.impact.slice(1)} Impact
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{item.summary}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" className="gap-2">
          <Star className="h-4 w-4" fill={item.isBookmarked ? "currentColor" : "none"} />
          {item.isBookmarked ? "Bookmarked" : "Bookmark"}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          Read Full Article <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MarketNews;
