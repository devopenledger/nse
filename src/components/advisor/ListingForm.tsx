
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FormWrapper from '../forms/FormWrapper';

interface ListingFormValues {
  companyName: string;
  tokenName: string;
  tokenDescription: string;
  tokenCategory: string;
  offeringSize: string;
}

const ListingForm = () => {
  const form = useForm<ListingFormValues>({
    defaultValues: {
      companyName: '',
      tokenName: '',
      tokenDescription: '',
      tokenCategory: '',
      offeringSize: '',
    },
  });

  const onSubmit = (data: ListingFormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormWrapper title="Submit New Token Listing" description="Fill in the details for your new token listing">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tokenName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter token name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tokenDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter token description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tokenCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="equity">Equity Token</SelectItem>
                    <SelectItem value="debt">Debt Token</SelectItem>
                    <SelectItem value="realestate">Real Estate Token</SelectItem>
                    <SelectItem value="commodity">Commodity Token</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="offeringSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Offering Size</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter offering size" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4 pt-4">
            <Button type="submit">Submit Listing</Button>
            <Button type="button" variant="outline">Upload Documents</Button>
          </div>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default ListingForm;
