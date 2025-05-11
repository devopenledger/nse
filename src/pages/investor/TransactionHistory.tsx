
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Download, ArrowDownUp, Search } from 'lucide-react';

type Transaction = {
  id: string;
  date: Date;
  type: 'buy' | 'sell' | 'dividend' | 'deposit' | 'withdrawal';
  symbol: string;
  amount: number;
  quantity?: number;
  status: 'completed' | 'pending' | 'failed';
};

const mockTransactions: Transaction[] = [
  {
    id: 'tx-001',
    date: new Date('2023-09-15'),
    type: 'buy',
    symbol: 'GSOL',
    amount: 1250.50,
    quantity: 35,
    status: 'completed'
  },
  {
    id: 'tx-002',
    date: new Date('2023-09-10'),
    type: 'sell',
    symbol: 'EWTR',
    amount: 850.25,
    quantity: 40,
    status: 'completed'
  },
  {
    id: 'tx-003',
    date: new Date('2023-09-05'),
    type: 'dividend',
    symbol: 'CLEF',
    amount: 125.00,
    status: 'completed'
  },
  {
    id: 'tx-004',
    date: new Date('2023-08-28'),
    type: 'deposit',
    symbol: '',
    amount: 5000.00,
    status: 'completed'
  },
  {
    id: 'tx-005',
    date: new Date('2023-08-20'),
    type: 'buy',
    symbol: 'SAGR',
    amount: 1875.30,
    quantity: 65,
    status: 'completed'
  },
  {
    id: 'tx-006',
    date: new Date('2023-08-15'),
    type: 'withdrawal',
    symbol: '',
    amount: 1000.00,
    status: 'completed'
  },
  {
    id: 'tx-007',
    date: new Date('2023-08-10'),
    type: 'buy',
    symbol: 'GSOL',
    amount: 2150.75,
    quantity: 60,
    status: 'completed'
  },
  {
    id: 'tx-008',
    date: new Date(),
    type: 'buy',
    symbol: 'EWTR',
    amount: 565.50,
    quantity: 25,
    status: 'pending'
  }
];

const TransactionHistory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [date, setDate] = useState<Date | undefined>(undefined);

  const filteredTransactions = mockTransactions.filter(tx => {
    // Apply search filter
    const matchesSearch = !searchQuery || 
      tx.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply type filter
    const matchesType = typeFilter === 'all' || tx.type === typeFilter;
    
    // Apply date filter
    const matchesDate = !date || 
      (tx.date.getDate() === date.getDate() && 
       tx.date.getMonth() === date.getMonth() && 
       tx.date.getFullYear() === date.getFullYear());
    
    return matchesSearch && matchesType && matchesDate;
  });

  const getTransactionTypeColor = (type: string) => {
    switch (type) {
      case 'buy': return 'bg-green-100 text-green-800';
      case 'sell': return 'bg-red-100 text-red-800';
      case 'dividend': return 'bg-blue-100 text-blue-800';
      case 'deposit': return 'bg-purple-100 text-purple-800';
      case 'withdrawal': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'completed': return 'outline';
      case 'pending': return 'secondary';
      case 'failed': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Transaction History</h1>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
            <CardDescription>
              View and filter your transaction history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by symbol or ID..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="buy">Buy</SelectItem>
                  <SelectItem value="sell">Sell</SelectItem>
                  <SelectItem value="dividend">Dividend</SelectItem>
                  <SelectItem value="deposit">Deposit</SelectItem>
                  <SelectItem value="withdrawal">Withdrawal</SelectItem>
                </SelectContent>
              </Select>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[240px] justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              {(searchQuery || typeFilter !== 'all' || date) && (
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchQuery('');
                    setTypeFilter('all');
                    setDate(undefined);
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell className="font-medium">
                          {format(tx.date, 'MMM dd, yyyy')}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTransactionTypeColor(tx.type)}`}>
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>{tx.id}</TableCell>
                        <TableCell>{tx.symbol || '-'}</TableCell>
                        <TableCell className="text-right">
                          {(tx.type === 'sell' || tx.type === 'dividend' || tx.type === 'deposit') ? '+' : '-'}
                          ${tx.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="text-right">
                          {tx.quantity || '-'}
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(tx.status)}>
                            {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        No transactions found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TransactionHistory;
