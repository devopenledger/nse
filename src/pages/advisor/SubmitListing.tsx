
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ListingForm from '@/components/advisor/ListingForm';

const SubmitListing = () => {
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Submit New Listing</h1>
        <ListingForm />
      </div>
    </DashboardLayout>
  );
};

export default SubmitListing;
