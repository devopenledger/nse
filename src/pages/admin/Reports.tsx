
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { download as Download } from 'lucide-react';

const mockReports = [
  {
    id: 1,
    type: 'Custody Report',
    generatedDate: '2024-04-26',
    size: '2.4 MB',
    status: 'Ready',
  },
  {
    id: 2,
    type: 'Clearing Report',
    generatedDate: '2024-04-25',
    size: '1.8 MB',
    status: 'Ready',
  },
  {
    id: 3,
    type: 'Compliance Report',
    generatedDate: '2024-04-24',
    size: '3.1 MB',
    status: 'Ready',
  },
  {
    id: 4,
    type: 'Trading Activity Report',
    generatedDate: '2024-04-23',
    size: '4.2 MB',
    status: 'Ready',
  },
];

const Reports = () => {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Regulatory Reports</h1>
          <Button>Generate New Report</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Type</TableHead>
                <TableHead>Generated Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.type}</TableCell>
                  <TableCell>{report.generatedDate}</TableCell>
                  <TableCell>{report.size}</TableCell>
                  <TableCell>{report.status}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
