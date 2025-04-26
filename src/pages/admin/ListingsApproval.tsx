
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for listings
const mockListings = [
  {
    id: 1,
    tokenName: 'Sustainable Water Fund',
    company: 'EcoWater Solutions',
    submissionDate: '2024-04-20',
    status: 'Pending',
  },
  {
    id: 2,
    tokenName: 'Green Energy Token',
    company: 'Renewable Power Co.',
    submissionDate: '2024-04-19',
    status: 'Pending',
  },
  {
    id: 3,
    tokenName: 'Solar Infrastructure',
    company: 'SunTech Ventures',
    submissionDate: '2024-04-18',
    status: 'Pending',
  },
];

const ListingsApproval = () => {
  const [listings, setListings] = useState(mockListings);

  const handleApprove = (id: number) => {
    setListings(listings.map(listing =>
      listing.id === id ? { ...listing, status: 'Approved' } : listing
    ));
    toast.success('Listing approved successfully');
  };

  const handleReject = (id: number) => {
    setListings(listings.map(listing =>
      listing.id === id ? { ...listing, status: 'Rejected' } : listing
    ));
    toast.error('Listing rejected');
  };

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Listings Approval</h1>
          <Badge variant="outline" className="px-3 py-1">
            {listings.filter(l => l.status === 'Pending').length} Pending
          </Badge>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Token Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Submission Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listings.map((listing) => (
                <TableRow key={listing.id}>
                  <TableCell className="font-medium">{listing.tokenName}</TableCell>
                  <TableCell>{listing.company}</TableCell>
                  <TableCell>{listing.submissionDate}</TableCell>
                  <TableCell>
                    <Badge variant={
                      listing.status === 'Approved' ? 'success' :
                      listing.status === 'Rejected' ? 'destructive' : 'outline'
                    }>
                      {listing.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleApprove(listing.id)}
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        disabled={listing.status !== 'Pending'}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleReject(listing.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        disabled={listing.status !== 'Pending'}
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
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

export default ListingsApproval;
