
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                <p className="text-sm text-gray-500 mt-2">
                  Sign in to access your NSE account
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
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="#" className="text-xs text-nse-primary hover:underline">
                        Forgot Password?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      Remember me for 30 days
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full">Sign In</Button>
                </form>
                
                <div className="mt-6 text-center text-sm">
                  <span className="text-gray-500">Don't have an account?</span>{' '}
                  <Link to="/register" className="text-nse-primary hover:underline font-medium">
                    Create account
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

export default Login;
