
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface FormWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const FormWrapper = ({ title, description, children }: FormWrapperProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default FormWrapper;
