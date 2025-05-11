
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface DataTableViewProps {
  row: any;
  type?: 'token' | 'position' | 'news';
}

const DataTableView = ({ row, type = 'token' }: DataTableViewProps) => {
  // Determine the link destination based on the type
  let linkPath = "";
  switch (type) {
    case 'token':
      linkPath = `/investor/token/${row.symbol || row.token}`;
      break;
    case 'position':
      linkPath = `/investor/position/${row.symbol || row.token}`;
      break;
    case 'news':
      linkPath = `/investor/news/${row.id}`;
      break;
    default:
      linkPath = "#";
  }
  
  return (
    <Button variant="ghost" size="sm" asChild>
      <Link to={linkPath}>View</Link>
    </Button>
  );
};

export default DataTableView;
