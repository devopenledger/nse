
import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  Building,
  FileText, 
  Users, 
  Calendar,
  BarChart,
  CheckCircle, 
  Clock, 
  AlertCircle,
  Download,
  Edit,
  Trash2,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for listed companies
const mockListings = {
  "listing-001": {
    id: "listing-001",
    companyName: "Green Solar Inc.",
    symbol: "GSOL",
    status: "live",
    offeringAmount: 5000000,
    currentRaised: 3750000,
    minInvestment: 5000,
    sharePrice: 34.50,
    sharesAvailable: 144927,
    sharesRemaining: 36231,
    createdDate: "2023-08-15",
    endDate: "2023-10-15",
    investors: 125,
    sector: "Renewable Energy",
    about: "Green Solar Inc. is a cutting-edge solar energy company focused on developing innovative photovoltaic solutions for commercial and residential applications. Their flagship product, the SolarMax panel, offers industry-leading efficiency rates and durability.",
    highlights: [
      "35% more efficient than standard solar panels",
      "Patent-pending installation system",
      "25-year warranty on all products",
      "Fully halal-compliant manufacturing process"
    ],
    esgScore: "AAA",
    documents: [
      { name: "Offering Circular", type: "pdf", size: "3.4 MB" },
      { name: "Financial Statements", type: "pdf", size: "1.8 MB" },
      { name: "ESG Compliance Report", type: "pdf", size: "2.1 MB" },
      { name: "Halal Certification", type: "pdf", size: "0.9 MB" }
    ],
    team: [
      { name: "Ahmad Rahman", position: "CEO", image: "profile1.jpg" },
      { name: "Sarah Johnson", position: "CTO", image: "profile2.jpg" },
      { name: "Mohammed Al-Farsi", position: "CFO", image: "profile3.jpg" }
    ]
  },
  "listing-002": {
    id: "listing-002",
    companyName: "Eco Water Tech",
    symbol: "EWTR",
    status: "pending",
    offeringAmount: 3500000,
    currentRaised: 0,
    minInvestment: 2500,
    sharePrice: 22.75,
    sharesAvailable: 153846,
    sharesRemaining: 153846,
    createdDate: "2023-09-05",
    endDate: "2023-11-05",
    investors: 0,
    sector: "Water Technology",
    about: "Eco Water Tech develops sustainable water purification and conservation technologies for residential, commercial, and industrial applications. Their systems reduce water waste by up to 40% while improving quality and safety.",
    highlights: [
      "Patented filtration technology",
      "IoT-enabled monitoring system",
      "Zero chemical treatment process",
      "Shariah-compliant business model"
    ],
    esgScore: "AA",
    documents: [
      { name: "Offering Circular", type: "pdf", size: "2.8 MB" },
      { name: "Financial Statements", type: "pdf", size: "1.5 MB" },
      { name: "ESG Compliance Report", type: "pdf", size: "1.9 MB" },
      { name: "Halal Certification", type: "pdf", size: "0.8 MB" }
    ],
    team: [
      { name: "Fatima Zahra", position: "CEO", image: "profile4.jpg" },
      { name: "David Chen", position: "CTO", image: "profile5.jpg" },
      { name: "Aisha Mahmood", position: "COO", image: "profile6.jpg" }
    ]
  },
  "listing-003": {
    id: "listing-003",
    companyName: "Clean Energy Fund",
    symbol: "CLEF",
    status: "draft",
    offeringAmount: 10000000,
    currentRaised: 0,
    minInvestment: 10000,
    sharePrice: 45.20,
    sharesAvailable: 221238,
    sharesRemaining: 221238,
    createdDate: "2023-09-10",
    endDate: "2023-11-10",
    investors: 0,
    sector: "Clean Energy",
    about: "Clean Energy Fund is an investment vehicle dedicated to funding renewable energy projects across the Middle East, Africa, and Southeast Asia. The fund focuses on solar, wind, and hydroelectric power generation.",
    highlights: [
      "Diversified portfolio of renewable projects",
      "Targeting 12-15% annual returns",
      "Strong government partnerships",
      "Fully Shariah-compliant investment structure"
    ],
    esgScore: "AAA",
    documents: [
      { name: "Fund Prospectus", type: "pdf", size: "4.2 MB" },
      { name: "Financial Projections", type: "pdf", size: "2.1 MB" },
      { name: "ESG Impact Report", type: "pdf", size: "2.5 MB" },
      { name: "Shariah Compliance Certificate", type: "pdf", size: "1.1 MB" }
    ],
    team: [
      { name: "Hassan Al-Jabri", position: "Fund Manager", image: "profile7.jpg" },
      { name: "Jessica Williams", position: "Investment Director", image: "profile8.jpg" },
      { name: "Omar Hakeem", position: "ESG Officer", image: "profile9.jpg" }
    ]
  }
};

const ListingDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get listing details from the mock data
  const listing = id ? mockListings[id as keyof typeof mockListings] : null;
  
  // Handle the case when the listing is not found
  if (!listing) {
    return (
      <DashboardLayout type="advisor">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <h2 className="text-2xl font-bold mb-4">Listing Not Found</h2>
          <p className="text-muted-foreground mb-6">The listing you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/advisor/manage-listings">Return to Listings</Link>
          </Button>
        </div>
      </DashboardLayout>
    );
  }
  
  // Function to get appropriate badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live': return 'outline';
      case 'pending': return 'secondary';
      case 'draft': return 'default';
      default: return 'default';
    }
  };
  
  // Calculate progress percentage
  const progressPercentage = (listing.currentRaised / listing.offeringAmount) * 100;

  return (
    <DashboardLayout type="advisor">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/advisor/manage-listings">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">{listing.companyName}</h1>
            <Badge variant={getStatusBadge(listing.status)} className="capitalize">
              {listing.status}
            </Badge>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Listing
            </Button>
            {listing.status === 'draft' && (
              <Button variant="destructive" className="gap-2">
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Offering Summary</CardTitle>
              <CardDescription>Key details about this security offering</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Symbol</p>
                  <p className="text-2xl font-bold">{listing.symbol}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Share Price</p>
                  <p className="text-2xl font-bold">${listing.sharePrice.toFixed(2)}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Min. Investment</p>
                  <p className="text-2xl font-bold">${listing.minInvestment.toLocaleString()}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Offering Amount</p>
                  <p className="text-2xl font-bold">${listing.offeringAmount.toLocaleString()}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Raised</p>
                  <p className="text-2xl font-bold">${listing.currentRaised.toLocaleString()}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Investors</p>
                  <p className="text-2xl font-bold">{listing.investors}</p>
                </div>
                
                <div className="space-y-3 md:col-span-3">
                  <div className="flex justify-between text-sm">
                    <span>Funding Progress</span>
                    <span>{progressPercentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-3">
            <Tabs defaultValue="overview">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Listing Details</CardTitle>
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                    <TabsTrigger value="investors">Investors</TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>
              
              <TabsContent value="overview" className="space-y-6">
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        About {listing.companyName}
                      </h3>
                      <p>{listing.about}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Investment Highlights</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {listing.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Key Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Sector</p>
                          <p className="font-medium">{listing.sector}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">ESG Rating</p>
                          <p className="font-medium">{listing.esgScore}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Ending Date</p>
                          <p className="font-medium">{listing.endDate}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Management Team</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {listing.team.map((member, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                              {/* Placeholder for profile photo */}
                              <Users className="h-6 w-6 text-gray-500" />
                            </div>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.position}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
              
              <TabsContent value="documents">
                <CardContent>
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Offering Documents
                    </h3>
                    <div className="border rounded-lg divide-y">
                      {listing.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                              <FileText className="h-5 w-5 text-gray-500" />
                            </div>
                            <div>
                              <p className="font-medium">{doc.name}</p>
                              <p className="text-xs text-muted-foreground">{doc.size} • {doc.type.toUpperCase()}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Download className="h-4 w-4" /> Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
              
              <TabsContent value="investors">
                <CardContent>
                  {listing.investors > 0 ? (
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Investor Breakdown
                      </h3>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-muted">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Investor</th>
                              <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Shares</th>
                              <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Amount</th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                    <Users className="h-4 w-4 text-gray-500" />
                                  </div>
                                  <div className="text-sm font-medium">Khalid Al-Hassan</div>
                                </div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-right text-sm">580</td>
                              <td className="px-4 py-3 whitespace-nowrap text-right text-sm">$20,010.00</td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">Sep 12, 2023</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="flex items-center">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                  <span className="text-sm">Confirmed</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                    <Users className="h-4 w-4 text-gray-500" />
                                  </div>
                                  <div className="text-sm font-medium">Sarah Johnson</div>
                                </div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-right text-sm">290</td>
                              <td className="px-4 py-3 whitespace-nowrap text-right text-sm">$10,005.00</td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">Sep 10, 2023</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="flex items-center">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                  <span className="text-sm">Confirmed</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                    <Users className="h-4 w-4 text-gray-500" />
                                  </div>
                                  <div className="text-sm font-medium">Mohammed Al-Faisal</div>
                                </div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-right text-sm">145</td>
                              <td className="px-4 py-3 whitespace-nowrap text-right text-sm">$5,002.50</td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">Sep 8, 2023</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 text-amber-500 mr-1" />
                                  <span className="text-sm">Pending</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No Investors Yet</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        This offering hasn't received any investments yet or hasn't been approved.
                      </p>
                    </div>
                  )}
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ListingDetails;
