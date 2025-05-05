
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, PieChart, LineChart, TrendingUp, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsCircleChart, Pie, Cell, Legend } from 'recharts';

const Analytics = () => {
  const performanceData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 }
  ];

  const clientAcquisitionData = [
    { name: 'Jan', new: 4, returning: 2 },
    { name: 'Feb', new: 3, returning: 4 },
    { name: 'Mar', new: 5, returning: 6 },
    { name: 'Apr', new: 7, returning: 4 },
    { name: 'May', new: 5, returning: 7 }
  ];

  const tokenDistributionData = [
    { name: 'GreenEnergy', value: 35 },
    { name: 'SustainTech', value: 25 },
    { name: 'EcoFinance', value: 20 },
    { name: 'CleanWater', value: 15 },
    { name: 'SolarPower', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Analytics
          </h1>
        </div>

        <Tabs defaultValue="performance">
          <TabsList className="mb-4">
            <TabsTrigger value="performance" className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              Client Acquisition
            </TabsTrigger>
            <TabsTrigger value="tokens" className="flex items-center gap-1">
              <PieChart className="h-4 w-4" />
              Token Distribution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-blue-500" />
                  Performance Over Time
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80 px-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="#1E40AF" fill="#93C5FD" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-500" />
                  Client Acquisition
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80 px-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={clientAcquisitionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="new" name="New Clients" fill="#10B981" />
                      <Bar dataKey="returning" name="Returning Clients" fill="#6366F1" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tokens">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-purple-500" />
                  Token Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsCircleChart>
                      <Pie
                        data={tokenDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {tokenDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                      <Tooltip />
                    </RechartsCircleChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
