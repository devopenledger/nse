
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DataTable from '@/components/dashboard/widgets/DataTable';
import { BarChart3, Search, TrendingUp, TrendingDown, CircleDollarSign, ArrowUpDown } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Mock data para o mercado secundário
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

// Mock data para o livro de ordens
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
  }
};

const SecondaryMarket = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("GSOL");

  const filteredStocks = searchQuery 
    ? mockSecondaryMarket.filter(stock => 
        stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
        stock.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockSecondaryMarket;

  const orderBook = mockOrderBook[selectedSymbol] || mockOrderBook.GSOL;

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Mercado Secundário
          </h1>
          <div className="flex gap-3">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por ticker ou nome..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle>Ações Disponíveis</CardTitle>
            <CardDescription>
              Ativos sustentáveis e halal disponíveis para negociação no mercado secundário
            </CardDescription>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticker</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead className="text-right">Último Preço</TableHead>
                <TableHead className="text-right">Variação</TableHead>
                <TableHead className="text-right">Volume</TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
                <TableHead>ESG</TableHead>
                <TableHead>Halal</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStocks.map((stock) => (
                <TableRow key={stock.symbol} onClick={() => setSelectedSymbol(stock.symbol)} className="cursor-pointer hover:bg-secondary/20">
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
                    <Button size="sm" onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSymbol(stock.symbol);
                    }}>
                      <CircleDollarSign className="mr-1 h-4 w-4" />
                      Negociar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Livro de Ordens - {selectedSymbol}</CardTitle>
            <CardDescription>
              Visualize ou faça ofertas de compra e venda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="orderBook">
              <TabsList className="mb-4">
                <TabsTrigger value="orderBook">Livro de Ordens</TabsTrigger>
                <TabsTrigger value="placeOrder">Criar Ordem</TabsTrigger>
              </TabsList>
              
              <TabsContent value="orderBook">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5 text-green-600">
                      <TrendingUp className="h-5 w-5" />
                      Ofertas de Compra (Bids)
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Preço ($)</TableHead>
                          <TableHead className="text-right">Quantidade</TableHead>
                          <TableHead className="text-right">Total ($)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orderBook.bids.map((bid, index) => (
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
                      Ofertas de Venda (Asks)
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Preço ($)</TableHead>
                          <TableHead className="text-right">Quantidade</TableHead>
                          <TableHead className="text-right">Total ($)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orderBook.asks.map((ask, index) => (
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
                      Ordem de Compra (Call)
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label htmlFor="buy-price" className="text-sm font-medium">
                            Preço por Ação ($)
                          </label>
                          <Input 
                            id="buy-price" 
                            type="number"
                            placeholder="0.00" 
                            min="0.01" 
                            step="0.01" 
                            defaultValue={orderBook.bids[0].price.toFixed(2)}
                          />
                        </div>
                        <div>
                          <label htmlFor="buy-quantity" className="text-sm font-medium">
                            Quantidade
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
                            Valor Total ($)
                          </label>
                          <Input 
                            id="buy-total" 
                            type="number" 
                            placeholder="0.00" 
                            disabled 
                            value={(orderBook.bids[0].price * 100).toFixed(2)}
                          />
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Confirmar Compra
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5 text-red-600">
                      <TrendingDown className="h-5 w-5" />
                      Ordem de Venda (Put)
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label htmlFor="sell-price" className="text-sm font-medium">
                            Preço por Ação ($)
                          </label>
                          <Input 
                            id="sell-price" 
                            type="number"
                            placeholder="0.00" 
                            min="0.01" 
                            step="0.01" 
                            defaultValue={orderBook.asks[0].price.toFixed(2)}
                          />
                        </div>
                        <div>
                          <label htmlFor="sell-quantity" className="text-sm font-medium">
                            Quantidade
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
                            Valor Total ($)
                          </label>
                          <Input 
                            id="sell-total" 
                            type="number" 
                            placeholder="0.00" 
                            disabled 
                            value={(orderBook.asks[0].price * 100).toFixed(2)}
                          />
                        </div>
                      </div>
                      <Button variant="default" className="w-full bg-red-600 hover:bg-red-700 text-white">
                        Confirmar Venda
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SecondaryMarket;
