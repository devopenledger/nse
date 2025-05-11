
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const EditListing = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Listing updated",
      description: "The listing has been successfully updated.",
    });
    
    // Navigate back to manage listings after save
    navigate('/advisor/manage-listings');
  };
  
  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/advisor/manage-listings">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Edit Listing</h1>
          </div>
          
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
        
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Listing Details</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Edit the basic information for this token listing</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="text-sm font-medium">Company Name</label>
                      <Input id="companyName" defaultValue="Green Energy Token" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="symbol" className="text-sm font-medium">Token Symbol</label>
                      <Input id="symbol" defaultValue="GET" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="offeringAmount" className="text-sm font-medium">Offering Amount ($)</label>
                      <Input id="offeringAmount" type="number" defaultValue="5000000" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="sharePrice" className="text-sm font-medium">Share Price ($)</label>
                      <Input id="sharePrice" type="number" step="0.01" defaultValue="34.50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="minInvestment" className="text-sm font-medium">Minimum Investment ($)</label>
                      <Input id="minInvestment" type="number" defaultValue="5000" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="sector" className="text-sm font-medium">Sector</label>
                      <Select defaultValue="renewable">
                        <SelectTrigger>
                          <SelectValue placeholder="Select sector" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="renewable">Renewable Energy</SelectItem>
                          <SelectItem value="agriculture">Sustainable Agriculture</SelectItem>
                          <SelectItem value="water">Water Management</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="about" className="text-sm font-medium">About</label>
                    <Textarea 
                      id="about" 
                      rows={5}
                      defaultValue="Green Energy Token is a cutting-edge renewable energy company focused on developing innovative solar solutions for commercial and residential applications."
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Investment Highlights</CardTitle>
                <CardDescription>Key selling points for investors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="highlight1" className="text-sm font-medium">Highlight 1</label>
                    <Input id="highlight1" defaultValue="35% more efficient than standard solar panels" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="highlight2" className="text-sm font-medium">Highlight 2</label>
                    <Input id="highlight2" defaultValue="Patent-pending installation system" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="highlight3" className="text-sm font-medium">Highlight 3</label>
                    <Input id="highlight3" defaultValue="25-year warranty on all products" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="highlight4" className="text-sm font-medium">Highlight 4</label>
                    <Input id="highlight4" defaultValue="Fully halal-compliant manufacturing process" />
                  </div>
                  <Button variant="outline">+ Add Highlight</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="documents" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Upload or manage required documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-dashed rounded-md text-center">
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop files here or click to browse</p>
                    <Button variant="outline" size="sm">Upload Document</Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-500">PDF</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Offering Circular</p>
                          <p className="text-xs text-muted-foreground">3.4 MB • Uploaded on 10/05/2023</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Replace</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-500">PDF</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Financial Statements</p>
                          <p className="text-xs text-muted-foreground">1.8 MB • Uploaded on 10/05/2023</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Replace</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Management Team</CardTitle>
                <CardDescription>Add or edit team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name1" className="text-sm font-medium">Name</label>
                        <Input id="name1" defaultValue="Ahmad Rahman" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="position1" className="text-sm font-medium">Position</label>
                        <Input id="position1" defaultValue="CEO" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="photo1" className="text-sm font-medium">Photo</label>
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name2" className="text-sm font-medium">Name</label>
                        <Input id="name2" defaultValue="Sarah Johnson" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="position2" className="text-sm font-medium">Position</label>
                        <Input id="position2" defaultValue="CTO" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="photo2" className="text-sm font-medium">Photo</label>
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline">+ Add Team Member</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Listing Settings</CardTitle>
                <CardDescription>Configure listing status and visibility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="status" className="text-sm font-medium">Status</label>
                    <Select defaultValue="draft">
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="pending">Pending Approval</SelectItem>
                        <SelectItem value="live">Live</SelectItem>
                        <SelectItem value="paused">Paused</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="endDate" className="text-sm font-medium">End Date</label>
                    <Input id="endDate" type="date" defaultValue="2023-12-31" />
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="destructive">Delete Listing</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default EditListing;
