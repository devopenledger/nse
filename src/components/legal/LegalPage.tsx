
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LegalPageProps {
  title: string;
  content: string;
}

const LegalPage = ({ title, content }: LegalPageProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-base text-muted-foreground">{content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LegalPage;
