
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Column {
  key: string;
  title: string;
  render?: (value: any, record: any) => React.ReactNode;
}

interface DataTableProps {
  title: string;
  description?: string;
  columns: Column[];
  data: any[];
  emptyMessage?: string;
}

const DataTable = ({ 
  title, 
  description, 
  columns, 
  data, 
  emptyMessage = "No data available"
}: DataTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.title}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-6">
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              data.map((record, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {column.render 
                        ? column.render(record[column.key], record) 
                        : record[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DataTable;
