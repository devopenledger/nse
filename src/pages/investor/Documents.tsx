
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Download, Upload, Eye, FileCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Documents = () => {
  const accountDocuments = [
    {
      id: 'DOC001',
      name: 'KYC Documentation',
      date: '2025-01-15',
      status: 'approved',
      type: 'PDF'
    },
    {
      id: 'DOC002',
      name: 'ID Verification',
      date: '2025-01-15',
      status: 'approved',
      type: 'PDF'
    },
    {
      id: 'DOC003',
      name: 'Proof of Address',
      date: '2025-01-20',
      status: 'pending',
      type: 'PDF'
    }
  ];

  const investmentDocuments = [
    {
      id: 'INV001',
      name: 'GreenEnergy Token Agreement',
      date: '2025-02-10',
      token: 'GreenEnergy',
      type: 'PDF'
    },
    {
      id: 'INV002',
      name: 'SustainTech Investment Terms',
      date: '2025-03-05',
      token: 'SustainTech',
      type: 'PDF'
    },
    {
      id: 'INV003',
      name: 'EcoFinance Offering Circular',
      date: '2025-04-12',
      token: 'EcoFinance',
      type: 'PDF'
    }
  ];

  const taxDocuments = [
    {
      id: 'TAX001',
      name: '2025 Q1 Tax Statement',
      date: '2025-04-15',
      type: 'PDF'
    },
    {
      id: 'TAX002',
      name: '2024 Annual Tax Document',
      date: '2025-01-30',
      type: 'PDF'
    }
  ];

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Documents
          </h1>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </div>

        <Tabs defaultValue="account">
          <TabsList className="mb-4">
            <TabsTrigger value="account" className="flex items-center gap-1">
              <FileCheck className="h-4 w-4" />
              Account Documents
            </TabsTrigger>
            <TabsTrigger value="investment" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Investment Documents
            </TabsTrigger>
            <TabsTrigger value="tax" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Tax Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Documents</CardTitle>
                <CardDescription>
                  Documentation related to your account verification and compliance requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accountDocuments.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-mono">{doc.id}</TableCell>
                        <TableCell>{doc.name}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>
                          <Badge variant={doc.status === 'approved' ? 'default' : 'secondary'}>
                            {doc.status === 'approved' ? 'Approved' : 'Pending'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment">
            <Card>
              <CardHeader>
                <CardTitle>Investment Documents</CardTitle>
                <CardDescription>
                  Legal agreements and documentation for your token investments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Token</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investmentDocuments.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-mono">{doc.id}</TableCell>
                        <TableCell>{doc.name}</TableCell>
                        <TableCell>{doc.token}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tax">
            <Card>
              <CardHeader>
                <CardTitle>Tax Documents</CardTitle>
                <CardDescription>
                  Tax statements and related financial documentation for your investments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {taxDocuments.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-mono">{doc.id}</TableCell>
                        <TableCell>{doc.name}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Documents;
