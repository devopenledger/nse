
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, BookmarkPlus, Share2, FileText } from 'lucide-react';

// Mock data for the news articles
const newsData = {
  "1": {
    id: 1,
    title: "Green Energy Revolution: How Sustainable Finance is Changing Markets",
    date: "2023-06-15",
    time: "09:30 AM",
    source: "Sustainable Investing Today",
    author: "Maria Chen",
    category: "Industry Trends",
    relatedSymbols: ["GRNSOL", "SCLNRG", "CLEF"],
    impact: "positive",
    content: `
      <p>The sustainable finance sector is experiencing unprecedented growth as investors increasingly prioritize environmental, social, and governance (ESG) factors in their investment decisions. This shift is fundamentally changing how markets operate and creating new opportunities for both investors and companies committed to sustainability.</p>
      
      <h3>Growing Investor Demand</h3>
      <p>Institutional investors and individual shareholders alike are driving this transformation, with many now actively seeking investments that align with their values while still delivering competitive returns. According to recent data from the Global Sustainable Investment Alliance, sustainable investing assets under management have surpassed $35 trillion globally, representing a 15% increase in just two years.</p>
      
      <h3>Impact on Companies</h3>
      <p>This trend is encouraging companies to improve their ESG practices and transparency. Firms with strong sustainability credentials are finding it easier to access capital, while those lagging behind face increasing scrutiny and potential funding challenges.</p>
      
      <h3>Regulatory Support</h3>
      <p>Governments and regulatory bodies worldwide are also supporting this shift through new reporting requirements and incentives. The EU's Sustainable Finance Disclosure Regulation (SFDR) and Taxonomy Regulation are setting new standards for transparency and classification of sustainable investments.</p>
      
      <h3>Market Performance</h3>
      <p>Contrary to historical concerns about sacrificing returns, sustainable investments have demonstrated resilience and strong performance. Several ESG-focused indices have outperformed their conventional counterparts in recent years, especially during market downturns.</p>
      
      <h3>Looking Ahead</h3>
      <p>As the sustainable finance ecosystem continues to mature, we can expect further innovation in green financial products, more sophisticated ESG metrics and analysis tools, and a continued flow of capital toward solutions addressing climate change and other global challenges.</p>
    `,
    relatedNews: [
      { id: 4, title: "Top 5 ESG Standards Every Investor Should Know", date: "2023-06-10" },
      { id: 7, title: "The Rise of Impact Investing in Emerging Markets", date: "2023-06-08" },
      { id: 12, title: "How Carbon Credits are Transforming Corporate Strategy", date: "2023-06-05" }
    ]
  },
  "2": {
    id: 2,
    title: "New Policy Framework for Islamic Finance and ESG Integration",
    date: "2023-06-14",
    time: "02:15 PM",
    source: "Halal Financial Review",
    author: "Ahmed Al-Farsi",
    category: "Policy & Regulation",
    relatedSymbols: ["ETHFIN", "HLFIN"],
    impact: "positive",
    content: `
      <p>A groundbreaking policy framework that integrates Islamic finance principles with Environmental, Social, and Governance (ESG) criteria has been launched by the International Islamic Financial Market (IIFM) in collaboration with the Responsible Finance Institute.</p>
      
      <h3>Harmonizing Standards</h3>
      <p>This new framework addresses the growing recognition of the natural alignment between Islamic finance principles and sustainable investing objectives. Both approaches emphasize ethical considerations, social responsibility, and long-term value creation.</p>
      
      <h3>Key Components</h3>
      <p>The framework outlines standards for Shariah-compliant ESG screening, impact measurement methodologies specifically designed for Islamic financial instruments, and disclosure guidelines that satisfy both Islamic and conventional sustainable finance requirements.</p>
      
      <h3>Market Opportunity</h3>
      <p>With the global Islamic finance industry managing assets exceeding $2.7 trillion and growing at approximately 11% annually, the integration with ESG principles opens significant new market opportunities. The framework is expected to accelerate the development of innovative financial products that meet both Shariah requirements and sustainability goals.</p>
      
      <h3>Industry Reception</h3>
      <p>Financial institutions across the Gulf Cooperation Council (GCC) and Southeast Asia have welcomed the framework, with several major banks already announcing plans to develop new investment products based on these guidelines.</p>
      
      <h3>Implementation Timeline</h3>
      <p>The framework will be implemented in phases over the next 18 months, with the first set of fully compliant products expected to reach markets by early 2024. Training programs and certification processes are being developed to support industry adoption.</p>
    `,
    relatedNews: [
      { id: 5, title: "Islamic Finance Summit Highlights Sustainable Development Goals", date: "2023-06-09" },
      { id: 8, title: "Green Sukuk Issuance Reaches Record Levels in 2023", date: "2023-06-07" },
      { id: 15, title: "Malaysian Central Bank Introduces New Shariah-ESG Guidelines", date: "2023-06-03" }
    ]
  },
  "3": {
    id: 3,
    title: "Solar Tech Innovation Could Reduce Production Costs by 35%",
    date: "2023-06-13",
    time: "11:45 AM",
    source: "Renewable Energy Monitor",
    author: "Daniel Park",
    category: "Technology",
    relatedSymbols: ["GRNSOL", "SCLNRG"],
    impact: "positive",
    content: `
      <p>A breakthrough in solar cell manufacturing technology announced this week could reduce production costs by up to 35% while improving energy conversion efficiency. The innovation, developed by a research team at the National Renewable Energy Laboratory, uses a novel approach to silicon wafer processing that significantly reduces material waste and energy consumption.</p>
      
      <h3>Technical Breakthrough</h3>
      <p>The new process, called Thin Silicon Direct Growth (TSDG), allows for the direct growth of thin silicon wafers on reusable substrates, eliminating the traditional sawing process that wastes up to 40% of silicon as dust. Additionally, the technique enables the production of wafers that are 50-70% thinner than current industry standards while maintaining structural integrity.</p>
      
      <h3>Efficiency Improvements</h3>
      <p>Beyond cost savings, initial testing shows that solar cells produced using TSDG technology demonstrate a conversion efficiency of 24.5%, compared to the industry average of 22%. This improvement is attributed to better crystal quality and reduced recombination losses in the thinner silicon layers.</p>
      
      <h3>Industry Impact</h3>
      <p>The technology has significant implications for the solar energy industry, potentially accelerating the already declining cost curve for photovoltaic systems. Industry analysts suggest that if successfully commercialized, this innovation could bring forward grid parity for solar energy in many markets by several years.</p>
      
      <h3>Commercialization Timeline</h3>
      <p>Several major solar manufacturers have already expressed interest in licensing the technology, which is expected to be ready for commercial integration within 18-24 months. A pilot production line using TSDG is scheduled to begin operation in Q4 2023.</p>
      
      <h3>Market Response</h3>
      <p>Shares of publicly traded solar companies, including Green Solar Inc. and Solar Clean Energy, have seen significant price movements following the announcement, reflecting the potential impact of this technology on the competitive landscape.</p>
    `,
    relatedNews: [
      { id: 6, title: "Next-Generation Battery Storage Systems Enter Commercial Testing", date: "2023-06-08" },
      { id: 9, title: "AI-Optimized Grid Management Reduces Renewable Curtailment", date: "2023-06-06" },
      { id: 11, title: "Bifacial Solar Panels Gain Market Share in Commercial Projects", date: "2023-06-04" }
    ]
  },
};

const NewsDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get news data based on the id
  const news = id ? newsData[id as keyof typeof newsData] : null;
  
  if (!news) {
    return (
      <DashboardLayout type="investor">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <h2 className="text-2xl font-bold mb-4">News Article Not Found</h2>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/investor/market-news">Return to News</Link>
          </Button>
        </div>
      </DashboardLayout>
    );
  }
  
  const impactColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-amber-600'
  }[news.impact as 'positive' | 'negative' | 'neutral'];
  
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link to="/investor/market-news">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Badge variant="outline">{news.category}</Badge>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{news.time}</span>
            </div>
            <div>
              <span>Source: {news.source}</span>
            </div>
            {news.author && (
              <div>
                <span>By: {news.author}</span>
              </div>
            )}
            {news.impact && (
              <div>
                <span className={`font-medium ${impactColor}`}>
                  Market Impact: {news.impact.charAt(0).toUpperCase() + news.impact.slice(1)}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: news.content }} />
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <BookmarkPlus className="h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <FileText className="h-4 w-4" />
              Print
            </Button>
          </CardFooter>
        </Card>
        
        {news.relatedSymbols && news.relatedSymbols.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Related Symbols</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {news.relatedSymbols.map((symbol) => (
                  <Badge key={symbol} variant="secondary" className="px-3 py-1 text-sm">
                    <Link to={`/investor/token/${symbol}`}>{symbol}</Link>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        {news.relatedNews && news.relatedNews.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Related Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.relatedNews.map((article) => (
                  <div key={article.id} className="flex items-center justify-between">
                    <Link to={`/investor/news/${article.id}`} className="hover:text-primary">
                      {article.title}
                    </Link>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default NewsDetails;
