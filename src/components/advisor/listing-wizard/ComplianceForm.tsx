
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';

interface ComplianceProps {
  data: {
    hasShariah: boolean;
    hasESG: boolean;
    esgRating: string;
    shariahCertification: string;
    regulatoryFramework: string;
    jurisdictions: string[];
  };
  onUpdate: (data: any) => void;
}

const esgRatings = [
  { value: 'aaa', label: 'AAA (Leader)' },
  { value: 'aa', label: 'AA (Leader)' },
  { value: 'a', label: 'A (Average)' },
  { value: 'bbb', label: 'BBB (Average)' },
  { value: 'bb', label: 'BB (Laggard)' },
  { value: 'b', label: 'B (Laggard)' },
  { value: 'ccc', label: 'CCC (Laggard)' },
  { value: 'pending', label: 'Pending Assessment' },
];

const frameworks = [
  { value: 'fatf', label: 'FATF Recommendations' },
  { value: 'aml', label: 'AML Directives' },
  { value: 'mifid', label: 'MiFID II' },
  { value: 'dfsa', label: 'DFSA Regulations' },
  { value: 'adgm', label: 'ADGM Framework' },
  { value: 'sec', label: 'SEC Guidelines' },
];

const jurisdictions = [
  { value: 'uae', label: 'United Arab Emirates' },
  { value: 'saudi', label: 'Saudi Arabia' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'bahrain', label: 'Bahrain' },
  { value: 'kuwait', label: 'Kuwait' },
  { value: 'oman', label: 'Oman' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'us', label: 'United States' },
  { value: 'eu', label: 'European Union' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'malaysia', label: 'Malaysia' },
];

const ComplianceForm = ({ data, onUpdate }: ComplianceProps) => {
  const form = useForm({
    defaultValues: data
  });

  const handleSubmit = (values: any) => {
    onUpdate(values);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Compliance & Certifications</h2>
        <p className="text-muted-foreground mb-6">
          Provide details about the compliance certifications and regulatory frameworks applicable to your token.
        </p>
        
        <Form {...form}>
          <form onChange={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Certifications</h3>
                  
                  <FormField
                    control={form.control}
                    name="hasShariah"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Shariah Compliance</FormLabel>
                          <FormDescription>
                            This offering adheres to Islamic financial principles
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="hasESG"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>ESG Compliance</FormLabel>
                          <FormDescription>
                            This offering meets Environmental, Social, and Governance criteria
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="shariahCertification"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shariah Certification Authority</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Shariyah Review Bureau" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="esgRating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ESG Rating</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select ESG rating" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {esgRatings.map((rating) => (
                              <SelectItem key={rating.value} value={rating.value}>
                                {rating.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 pt-4">
                <FormField
                  control={form.control}
                  name="regulatoryFramework"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Regulatory Framework</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select regulatory framework" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {frameworks.map((framework) => (
                            <SelectItem key={framework.value} value={framework.value}>
                              {framework.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-2">
                  <FormLabel>Jurisdictions</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 border rounded-md">
                    {jurisdictions.map((jurisdiction) => (
                      <FormField
                        key={jurisdiction.value}
                        control={form.control}
                        name="jurisdictions"
                        render={({ field }) => (
                          <FormItem key={jurisdiction.value} className="flex flex-row items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(jurisdiction.value)}
                                onCheckedChange={(checked) => {
                                  const currentValues = [...(field.value || [])];
                                  if (checked) {
                                    field.onChange([...currentValues, jurisdiction.value]);
                                  } else {
                                    field.onChange(currentValues.filter((value) => value !== jurisdiction.value));
                                  }
                                }}
                              />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">{jurisdiction.label}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ComplianceForm;
