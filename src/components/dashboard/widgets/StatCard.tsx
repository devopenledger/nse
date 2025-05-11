
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  description?: string;  // Added description prop
  change?: {
    value: string;
    isPositive: boolean;
  };
  period?: string;
  icon?: React.ReactNode;
  className?: string;
  trend?: 'up' | 'down' | 'neutral';  // Added trend prop
}

const StatCard = ({ title, value, description, change, period, icon, className, trend }: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
            
            {change && (
              <div className="flex items-center mt-1">
                <span className={cn(
                  "text-xs font-medium",
                  change.isPositive ? "text-green-600" : "text-red-600"
                )}>
                  {change.isPositive ? "+" : ""}{change.value}
                </span>
                {period && (
                  <span className="text-xs text-muted-foreground ml-1">
                    from {period}
                  </span>
                )}
              </div>
            )}
          </div>
          
          {icon && (
            <div className="p-2 rounded-full bg-primary/10">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
