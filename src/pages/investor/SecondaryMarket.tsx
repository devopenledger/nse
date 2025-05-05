
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { BarChart3, Search, TrendingUp, TrendingDown, CircleDollarSign, ArrowUpDown } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Mock data for the secondary market
const mockSecondaryMarket = [
  {
    symbol: "GSOL",
    name: "Green Solar Inc.",
    lastPrice: 34.50,
    change: 2.5,
    volume: "1.2M",
    marketCap: "$245M",
    esgRating: "AA",
    halalCompliant: true
  },
  {
    symbol: "EWTR",
    name: "Eco Water Tech",
    lastPrice: 22.75,
    change: 1.8,
    volume: "850K",
    marketCap: "$180M",
    esgRating: "A",
    halalCompliant: true
  },
  {
    symbol: "CLEF",
    name: "Clean Energy Fund",
    lastPrice: 45.20,
    change: 3.2,
    volume: "1.5M",
    marketCap: "$320M",
    esgRating: "AAA",
    halalCompliant: true
  },
  {
    symbol: "SAGR",
    name: "Sustainable Agriculture",
    lastPrice: 28.90,
    change: -1.2,
    volume: "680K",
    marketCap: "$210M",
    esgRating: "BBB",
    halalCompliant: true
  },
  {
    symbol: "GBRE",
    name: "Green Building REIT",
    lastPrice: 56.40,
    change: 2.8,
    volume: "950K",
    marketCap: "$450M",
    esgRating: "AA",
    halalCompliant: true
  },
  {
    symbol: "ETRN",
    name: "Electric Transit",
    lastPrice: 41.75,
    change: -0.8,
    volume: "780K",
    marketCap: "$280M",
    esgRating: "A",
    halalCompliant: true
  }
];

// Mock data for order books
const mockOrderBook = {
  "GSOL": {
    bids: [
      { price: 34.48, quantity: 250, total: 8620.00 },
      { price: 34.45, quantity: 500, total: 17225.00 },
      { price: 34.40, quantity: 750, total: 25800.00 },
      { price: 34.35, quantity: 1000, total: 34350.00 },
      { price: 34.30, quantity: 1500, total: 51450.00 }
    ],
    asks: [
      { price: 34.52, quantity: 300, total: 10356.00 },
      { price: 34.55, quantity: 450, total: 15547.50 },
      { price: 34.60, quantity: 600, total: 20760.00 },
      { price: 34.65, quantity: 800, total: 27720.00 },
      { price: 34.70, quantity: 1200, total: 41640.00 }
    ]
  },
  "EWTR": {
    bids: [
      { price: 22.73, quantity: 300, total: 6819.00 },
      { price: 22.70, quantity: 600, total: 13620.00 },
      { price: 22.65, quantity: 900, total: 20385.00 },
      { price: 22.60, quantity: 1200, total: 27120.00 },
      { price: 22.55, quantity: 1500, total: 33825.00 }
    ],
    asks: [
      { price: 22.77, quantity: 250, total: 5692.50 },
      { price: 22.80, quantity: 500, total: 11400.00 },
      { price: 22.85, quantity: 750, total: 17137.50 },
      { price: 22.90, quantity: 1000, total: 22900.00 },
      { price: 22.95, quantity: 1200, total: 27540.00 }
    ]
  },
  "CLEF": {
    bids: [
      { price: 45.18, quantity: 200, total: 9036.00 },
      { price: 45.15, quantity: 400, total: 18060.00 },
      { price: 45.10, quantity: 600, total: 27060.00 },
      { price: 45.05, quantity: 800, total: 36040.00 },
      { price: 45.00, quantity: 1000, total: 45000.00 }
    ],
    asks: [
      { price: 45.22, quantity: 150, total: 6783.00 },
      { price: 45.25, quantity: 350, total: 15837.50 },
      { price: 45.30, quantity: 550, total: 24915.00 },
      { price: 45.35, quantity: 750, total: 34012.50 },
      { price: 45.40, quantity: 950, total: 43130.00 }
    ]
  },
  "SAGR": {
    bids: [
      { price: 28.88, quantity: 180, total: 5198.40 },
      { price: 28.85, quantity: 350, total: 10097.50 },
      { price: 28.80, quantity: 520, total: 14976.00 },
      { price: 28.75, quantity: 740, total: 21275.00 },
      { price: 28.70, quantity: 900, total: 25830.00 }
    ],
    asks: [
      { price: 28.92, quantity: 200, total: 5784.00 },
      { price: 28.95, quantity: 380, total: 11001.00 },
      { price: 29.00, quantity: 560, total: 16240.00 },
      { price: 29.05, quantity: 720, total: 20916.00 },
      { price: 29.10, quantity: 880, total: 25608.00 }
    ]
  },
  "GBRE": {
    bids: [
      { price: 56.38, quantity: 120, total: 6765.60 },
      { price: 56.35, quantity: 240, total: 13524.00 },
      { price: 56.30, quantity: 360, total: 20268.00 },
      { price: 56.25, quantity: 480, total: 27000.00 },
      { price: 56.20, quantity: 600, total: 33720.00 }
    ],
    asks: [
      { price: 56.42, quantity: 110, total: 6206.20 },
      { price: 56.45, quantity: 220, total: 12419.00 },
      { price: 56.50, quantity: 330, total: 18645.00 },
      { price: 56.55, quantity: 440, total: 24882.00 },
      { price: 56.60, quantity: 550, total: 31130.00 }
    ]
  },
  "ETRN": {
    bids: [
      { price: 41.73, quantity: 150, total: 6259.50 },
      { price: 41.70, quantity: 300, total: 12510.00 },
      { price: 41.65, quantity: 450, total: 18742.50 },
      { price: 41.60, quantity: 600, total: 24960.00 },
      { price: 41.55, quantity: 750, total: 31162.50 }
    ],
    asks: [
      { price: 41.77, quantity: 130, total: 5430.10 },
      { price: 41.80, quantity: 260, total: 10868.00 },
      { price: 41.85, quantity: 390, total: 16321.50 },
      { price: 41.90, quantity: 520, total: 21788.00 },
      { price: 41.95, quantity: 650, total: 27267.50 }
    ]
  }
};

const SecondaryMarket = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [isOrderBookOpen, setIsOrderBookOpen] = useState(false);

  const filteredStocks = searchQuery 
    ? mockSecondaryMarket.filter(stock => 
        stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
        stock.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockSecondaryMarket;

  const orderBook = selectedSymbol ? mockOrderBook[selectedSymbol] || {} : null;

  const handleNegotiateClick = (symbol: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSymbol(symbol);
    setIsOrderBookOpen(true);
  };

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Secondary Market
          </h1>
          <div className="flex gap-3">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by ticker or name..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle>Available Securities</CardTitle>
            <CardDescription>
              Sustainable and halal-compliant assets available for trading on the secondary market
            </CardDescription>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticker</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Last Price</TableHead>
                <TableHead className="text-right">Change</TableHead>
                <TableHead className="text-right">Volume</TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
                <TableHead>ESG</TableHead>
                <TableHead>Halal</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStocks.map((stock) => (
                <TableRow key={stock.symbol} className="cursor-pointer hover:bg-secondary/20">
                  <TableCell className="font-medium">
                    <Link to={`/investor/company/${stock.symbol}`} className="text-nse-primary hover:underline">
                      {stock.symbol}
                    </Link>
                  </TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell className="text-right font-medium">${stock.lastPrice.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <span className={`flex items-center justify-end ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.change >= 0 ? <TrendingUp className="mr-1 h-4 w-4" /> : <TrendingDown className="mr-1 h-4 w-4" />}
                      {stock.change > 0 ? '+' : ''}{stock.change}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{stock.volume}</TableCell>
                  <TableCell className="text-right">{stock.marketCap}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{stock.esgRating}</Badge>
                  </TableCell>
                  <TableCell>
                    {stock.halalCompliant && (
                      <Badge variant="success" className="font-semibold">Halal</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      size="sm" 
                      onClick={(e) => handleNegotiateClick(stock.symbol, e)}
                    >
                      <CircleDollarSign className="mr-1 h-4 w-4" />
                      Negotiate
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Order Book Dialog */}
        <Dialog open={isOrderBookOpen} onOpenChange={setIsOrderBookOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Order Book - {selectedSymbol}</DialogTitle>
              <DialogDescription>
                View or place buy and sell orders for {selectedSymbol}
              </DialogDescription>
            </DialogHeader>
            
            {orderBook && (
              <Tabs defaultValue="orderBook" className="mt-4">
                <TabsList className="mb-4">
                  <TabsTrigger value="orderBook">Order Book</TabsTrigger>
                  <TabsTrigger value="placeOrder">Place Order</TabsTrigger>
                </TabsList>
                
                <TabsContent value="orderBook">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5 text-green-600">
                        <TrendingUp className="h-5 w-5" />
                        Buy Orders (Bids)
                      </h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Price ($)</TableHead>
                            <TableHead className="text-right">Quantity</TableHead>
                            <TableHead className="text-right">Total ($)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orderBook.bids && orderBook.bids.map((bid, index) => (
                            <TableRow key={index} className="bg-green-50/50 dark:bg-green-950/20">
                              <TableCell className="font-medium">${bid.price.toFixed(2)}</TableCell>
                              <TableCell className="text-right">{bid.quantity}</TableCell>
                              <TableCell className="text-right">${bid.total.toFixed(2)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5 text-red-600">
                        <TrendingDown className="h-5 w-5" />
                        Sell Orders (Asks)
                      </h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Price ($)</TableHead>
                            <TableHead className="text-right">Quantity</TableHead>
                            <TableHead className="text-right">Total ($)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orderBook.asks && orderBook.asks.map((ask, index) => (
                            <TableRow key={index} className="bg-red-50/50 dark:bg-red-950/20">
                              <TableCell className="font-medium">${ask.price.toFixed(2)}</TableCell>
                              <TableCell className="text-right">{ask.quantity}</TableCell>
                              <TableCell className="text-right">${ask.total.toFixed(2)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="placeOrder">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5 text-green-600">
                        <TrendingUp className="h-5 w-5" />
                        Buy Order (Call)
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label htmlFor="buy-price" className="text-sm font-medium">
                              Price per Share ($)
                            </label>
                            <Input 
                              id="buy-price" 
                              type="number"
                              placeholder="0.00" 
                              min="0.01" 
                              step="0.01" 
                              defaultValue={orderBook.bids ? orderBook.bids[0].price.toFixed(2) : "0.00"}
                            />
                          </div>
                          <div>
                            <label htmlFor="buy-quantity" className="text-sm font-medium">
                              Quantity
                            </label>
                            <Input 
                              id="buy-quantity" 
                              type="number" 
                              placeholder="0" 
                              min="1" 
                              defaultValue="100"
                            />
                          </div>
                          <div>
                            <label htmlFor="buy-total" className="text-sm font-medium">
                              Total Amount ($)
                            </label>
                            <Input 
                              id="buy-total" 
                              type="number" 
                              placeholder="0.00" 
                              disabled 
                              value={orderBook.bids ? (orderBook.bids[0].price * 100).toFixed(2) : "0.00"}
                            />
                          </div>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          Confirm Buy Order
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5 text-red-600">
                        <TrendingDown className="h-5 w-5" />
                        Sell Order (Put)
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label htmlFor="sell-price" className="text-sm font-medium">
                              Price per Share ($)
                            </label>
                            <Input 
                              id="sell-price" 
                              type="number"
                              placeholder="0.00" 
                              min="0.01" 
                              step="0.01" 
                              defaultValue={orderBook.asks ? orderBook.asks[0].price.toFixed(2) : "0.00"}
                            />
                          </div>
                          <div>
                            <label htmlFor="sell-quantity" className="text-sm font-medium">
                              Quantity
                            </label>
                            <Input 
                              id="sell-quantity" 
                              type="number" 
                              placeholder="0" 
                              min="1"
                              defaultValue="100"
                            />
                          </div>
                          <div>
                            <label htmlFor="sell-total" className="text-sm font-medium">
                              Total Amount ($)
                            </label>
                            <Input 
                              id="sell-total" 
                              type="number" 
                              placeholder="0.00" 
                              disabled 
                              value={orderBook.asks ? (orderBook.asks[0].price * 100).toFixed(2) : "0.00"}
                            />
                          </div>
                        </div>
                        <Button variant="default" className="w-full bg-red-600 hover:bg-red-700 text-white">
                          Confirm Sell Order
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default SecondaryMarket;
