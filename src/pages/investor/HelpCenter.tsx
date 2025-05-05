import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Search, MessageSquare, FileQuestion, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I complete the KYC process?",
      answer: "To complete the Know Your Customer (KYC) process, navigate to the KYC & Suitability section in your investor dashboard. Upload the required identification documents and fill out the questionnaire. The verification process typically takes 1-2 business days."
    },
    {
      question: "What investment options are available?",
      answer: "The Neo Sustainable Exchange offers a variety of ESG-compliant and halal-aligned tokenized securities. These include green energy projects, sustainable technology ventures, and ethical financial instruments. Browse the Investments section to see all available options."
    },
    {
      question: "How do I connect my bank account?",
      answer: "To connect your bank account, go to the Wallet & Settings page. Click on 'Add Bank Account' and follow the secure verification process. We support most major banks and financial institutions."
    },
    {
      question: "What are the minimum investment amounts?",
      answer: "Minimum investment amounts vary by token, but typically start at $100 for most offerings. Premium tokens may have higher minimums. Check the specific token details on the Investments page for exact requirements."
    },
    {
      question: "How do I withdraw my funds?",
      answer: "To withdraw funds, navigate to the Wallet & Settings page and select 'Withdraw'. Choose your linked bank account and enter the amount you wish to withdraw. Processing typically takes 2-3 business days."
    },
    {
      question: "What fees are associated with investments?",
      answer: "NSE charges a 1% transaction fee on all investments and a 0.5% annual management fee. There are no hidden charges or withdrawal fees. All fees are transparently displayed during the investment process."
    }
  ];

  const supportArticles = [
    {
      id: 1,
      title: "Getting Started with NSE",
      description: "A comprehensive guide for new investors",
      category: "Beginner"
    },
    {
      id: 2,
      title: "Understanding ESG Criteria",
      description: "Learn about our environmental, social, and governance standards",
      category: "Education"
    },
    {
      id: 3,
      title: "Portfolio Management Best Practices",
      description: "Optimize your investments with these proven strategies",
      category: "Advanced"
    },
    {
      id: 4,
      title: "Tax Implications of Tokenized Securities",
      description: "Important tax considerations for investors",
      category: "Finance"
    }
  ];

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            Help Center
          </h1>
        </div>

        <div className="w-full max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              className="pl-9 py-6 text-base"
            />
            <Button className="absolute right-1 top-1/2 h-8 -translate-y-1/2" size="sm">
              Search
            </Button>
          </div>
        </div>

        <Tabs defaultValue="faq">
          <TabsList className="mb-4">
            <TabsTrigger value="faq" className="flex items-center gap-1">
              <FileQuestion className="h-4 w-4" />
              Frequently Asked Questions
            </TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              Knowledge Base
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              Contact Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Find answers to the most common questions about the Neo Sustainable Exchange.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="articles">
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Base Articles</CardTitle>
                <CardDescription>
                  Learn more about investing on the Neo Sustainable Exchange with these guides.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {supportArticles.map(article => (
                    <Card key={article.id} className="hover:bg-secondary/10 cursor-pointer transition-colors">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{article.title}</CardTitle>
                          <Badge variant="outline" className="ml-2">{article.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{article.description}</p>
                        <Button variant="link" className="px-0 mt-2">Read more</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Need personalized help? Our support team is ready to assist you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">
                        Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Please describe your issue in detail..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Submit Ticket
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HelpCenter;
