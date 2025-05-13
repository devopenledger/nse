
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

interface TokenDetailsProps {
  data: {
    name: string;
    symbol: string;
    totalSupply: string;
    tokenType: string;
    blockchain: string;
    description: string;
  };
  onUpdate: (data: any) => void;
}

const tokenTypes = [
  { value: 'equity', label: 'Equity Token' },
  { value: 'debt', label: 'Debt Token' },
  { value: 'real_estate', label: 'Real Estate Token' },
  { value: 'commodity', label: 'Commodity Token' },
  { value: 'utility', label: 'Utility Token' },
  { value: 'hybrid', label: 'Hybrid Token' },
];

const blockchains = [
  { value: 'ethereum', label: 'Ethereum' },
  { value: 'binance', label: 'BNB Chain' },
  { value: 'polygon', label: 'Polygon' },
  { value: 'solana', label: 'Solana' },
  { value: 'avalanche', label: 'Avalanche' },
  { value: 'xdc', label: 'XDC Network' },
];

const TokenDetailsForm = ({ data, onUpdate }: TokenDetailsProps) => {
  const form = useForm({
    defaultValues: data
  });

  const handleSubmit = (values: any) => {
    onUpdate(values);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Token Details</h2>
        <p className="text-muted-foreground mb-6">
          Define the specifications and characteristics of your token.
        </p>
        
        <Form {...form}>
          <form onChange={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Green Energy Token" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="symbol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token Symbol</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. GET" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="totalSupply"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Supply</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 1,000,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tokenType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select token type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tokenTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="blockchain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blockchain</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blockchain" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {blockchains.map((blockchain) => (
                          <SelectItem key={blockchain.value} value={blockchain.value}>
                            {blockchain.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel>Token Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe the purpose and utility of your token..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TokenDetailsForm;
