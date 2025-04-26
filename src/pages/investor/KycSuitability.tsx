
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import FormWrapper from '@/components/forms/FormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const KycSuitability = () => {
  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">KYC & Suitability</h1>
        
        <div className="grid gap-6">
          <FormWrapper 
            title="Know Your Customer (KYC)" 
            description="Please complete your identity verification"
          >
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Full Name</Label>
                  <Input id="firstName" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <Label>ID Document Upload</Label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="text-sm text-gray-500">Upload your ID document</p>
                      <p className="text-xs text-gray-500">(PNG, JPG up to 10MB)</p>
                    </div>
                    <Input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </FormWrapper>

          <FormWrapper 
            title="Suitability Assessment" 
            description="Help us understand your investment profile"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Investment Experience</Label>
                <Select>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="risk">Risk Appetite</Label>
                <Select>
                  <SelectTrigger id="risk">
                    <SelectValue placeholder="Select your risk tolerance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="aggressive">Aggressive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goals">Investment Goals</Label>
                <Select>
                  <SelectTrigger id="goals">
                    <SelectValue placeholder="Select your investment goals" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="growth">Capital Growth</SelectItem>
                    <SelectItem value="income">Regular Income</SelectItem>
                    <SelectItem value="preservation">Capital Preservation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FormWrapper>
          
          <div className="flex justify-end">
            <Button size="lg">Submit KYC & Suitability Assessment</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KycSuitability;
