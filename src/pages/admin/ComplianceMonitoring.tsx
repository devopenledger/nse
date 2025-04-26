
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockAlerts = [
  {
    id: 1,
    type: 'Suspicious Activity',
    severity: 'High',
    timestamp: '2024-04-26 09:15',
    details: 'Unusual trading pattern detected',
  },
  {
    id: 2,
    type: 'KYC Verification',
    severity: 'Medium',
    timestamp: '2024-04-26 08:30',
    details: 'Pending document verification',
  },
  {
    id: 3,
    type: 'Trading Limit',
    severity: 'Low',
    timestamp: '2024-04-26 07:45',
    details: 'Approaching daily limit',
  },
];

const ComplianceMonitoring = () => {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Compliance Monitoring</h1>
          <Badge variant="outline" className="px-3 py-1">
            {mockAlerts.length} Active Alerts
          </Badge>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alert Type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Details</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAlerts.map((alert) => (
                <TableRow key={alert.id} className={
                  alert.severity === 'High' ? 'bg-red-50' :
                  alert.severity === 'Medium' ? 'bg-yellow-50' : 'bg-green-50'
                }>
                  <TableCell className="font-medium">{alert.type}</TableCell>
                  <TableCell>
                    <Badge variant={
                      alert.severity === 'High' ? 'destructive' :
                      alert.severity === 'Medium' ? 'secondary' : 'outline'
                    }>
                      {alert.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>{alert.timestamp}</TableCell>
                  <TableCell>{alert.details}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      View Details
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

export default ComplianceMonitoring;
