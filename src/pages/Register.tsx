
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const Register = () => {
  const [role, setRole] = useState('investor');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
                <p className="text-sm text-gray-500 mt-2">
                  Join Neo Sustainable Exchange today
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input 
                        id="first-name" 
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input 
                        id="last-name" 
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Create a strong password"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      placeholder="Confirm your password"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Account Type</Label>
                    <RadioGroup defaultValue="investor" onValueChange={setRole}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2 border rounded-md p-3">
                          <RadioGroupItem value="investor" id="investor" />
                          <Label htmlFor="investor" className="font-normal">Investor</Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md p-3">
                          <RadioGroupItem value="advisor" id="advisor" />
                          <Label htmlFor="advisor" className="font-normal">Advisor</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {role === 'investor' && (
                    <div className="space-y-2">
                      <Label htmlFor="investment-goal">Primary Investment Goal</Label>
                      <Select>
                        <SelectTrigger id="investment-goal">
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="growth">Long-term Growth</SelectItem>
                          <SelectItem value="income">Regular Income</SelectItem>
                          <SelectItem value="preservation">Capital Preservation</SelectItem>
                          <SelectItem value="impact">Impact Investing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  {role === 'advisor' && (
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input 
                        id="organization" 
                        placeholder="Your company or organization"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      I agree to the <Link to="#" className="text-nse-primary hover:underline">Terms of Service</Link> and <Link to="#" className="text-nse-primary hover:underline">Privacy Policy</Link>
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
                
                <div className="mt-6 text-center text-sm">
                  <span className="text-gray-500">Already have an account?</span>{' '}
                  <Link to="/login" className="text-nse-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-8">
              <Link to="/" className="text-sm text-gray-500 hover:text-nse-primary">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
