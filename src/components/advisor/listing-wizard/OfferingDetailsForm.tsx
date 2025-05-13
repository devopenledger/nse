
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface OfferingDetailsProps {
  data: {
    offeringSize: string;
    tokenPrice: string;
    minInvestment: string;
    maxInvestment: string;
    startDate: string;
    endDate: string;
  };
  onUpdate: (data: any) => void;
}

const OfferingDetailsForm = ({ data, onUpdate }: OfferingDetailsProps) => {
  const form = useForm({
    defaultValues: data
  });

  const handleSubmit = (values: any) => {
    onUpdate(values);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Offering Details</h2>
        <p className="text-muted-foreground mb-6">
          Specify the financial terms and timeline of your token offering.
        </p>
        
        <Form {...form}>
          <form onChange={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="offeringSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Offering Size ($)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 5,000,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tokenPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token Price ($)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" placeholder="e.g. 1.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="minInvestment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Investment ($)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 5,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="maxInvestment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Investment ($)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 500,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Offering Start Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Offering End Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
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

export default OfferingDetailsForm;
