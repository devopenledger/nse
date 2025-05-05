
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  type: 'line' | 'bar' | 'pie';
  data: any[];
  colors?: string[];
  dataKey?: string;
  categories?: string[];
  heightClass?: string;
  height?: number; // Added height property
}

const defaultColors = ['#00D1A3', '#4EEAC7', '#00A380', '#3182CE', '#2B6CB0', '#1A202C'];

const ChartCard = ({ 
  title, 
  subtitle, 
  type, 
  data, 
  colors = defaultColors, 
  dataKey,
  categories,
  heightClass = "h-80",
  height // Accepting the height prop
}: ChartCardProps) => {
  
  // Use height to set a specific height if provided, otherwise use heightClass for responsive height
  const containerStyle = height ? { height: `${height}px` } : {};
  
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              {dataKey ? (
                <Line 
                  type="monotone" 
                  dataKey={dataKey} 
                  stroke={colors[0]} 
                  strokeWidth={2}
                  dot={{ fill: colors[0], r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ) : (
                categories?.map((category, index) => (
                  <Line
                    key={category}
                    type="monotone"
                    dataKey={category}
                    stroke={colors[index % colors.length]}
                    strokeWidth={2}
                    dot={{ fill: colors[index % colors.length], r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                ))
              )}
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name"
                tickLine={false} 
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              {dataKey ? (
                <Bar dataKey={dataKey} fill={colors[0]} radius={[4, 4, 0, 0]} />
              ) : (
                categories?.map((category, index) => (
                  <Bar
                    key={category}
                    dataKey={category}
                    fill={colors[index % colors.length]}
                    radius={[4, 4, 0, 0]}
                  />
                ))
              )}
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius="80%"
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return <div>Chart type not supported</div>;
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </CardHeader>
      <CardContent className={height ? "" : heightClass} style={containerStyle}>
        {renderChart()}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
