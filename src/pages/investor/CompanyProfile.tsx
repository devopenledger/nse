
import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart3, FileText, Building, Globe, CircleDollarSign, Briefcase, TrendingUp } from 'lucide-react';
import ChartCard from '@/components/dashboard/widgets/ChartCard';

// Mock data para perfil da empresa
const mockCompanyData = {
  'GSOL': {
    name: "Green Solar Inc.",
    symbol: "GSOL",
    description: "Green Solar Inc. é uma empresa líder em infraestrutura de energia solar sustentável, especializada no desenvolvimento, construção e operação de usinas solares em grande escala. Criada em 2010, a empresa tem sido pioneira em tecnologias fotovoltaicas avançadas e soluções de armazenamento de energia.",
    price: 34.50,
    change: 2.5,
    marketCap: "245M",
    volume: "1.2M",
    sector: "Energia Renovável",
    employees: 450,
    founded: "2010",
    headquarters: "Austin, TX",
    website: "www.greensolarcorp.com",
    ceo: "Maria Rodriguez",
    financials: {
      revenue: "$67.8M",
      netIncome: "$12.3M",
      ebitda: "$18.5M",
      eps: "$2.54",
      dividendYield: "1.8%"
    },
    projects: [
      { name: "SolarOne Park", location: "Nevada", capacity: "120MW", status: "Operacional" },
      { name: "EcoGrid Initiative", location: "Arizona", capacity: "85MW", status: "Em construção" },
      { name: "GreenEnergy Hub", location: "California", capacity: "200MW", status: "Planejado" }
    ],
    esgRating: "AA",
    halalCompliant: true,
    documents: [
      { title: "Relatório Anual 2024", type: "relatório" },
      { title: "Prospecto ESG", type: "prospecto" },
      { title: "Certificação Halal", type: "certificado" }
    ]
  },
  'EWTR': {
    name: "Eco Water Tech",
    symbol: "EWTR",
    description: "Eco Water Tech desenvolve tecnologias inovadoras de purificação e conservação de água. Seus sistemas são utilizados em indústrias, municípios e regiões com escassez de água em todo o mundo.",
    price: 22.75,
    change: 1.8,
    marketCap: "180M",
    volume: "850K",
    sector: "Tecnologia Ambiental",
    employees: 320,
    founded: "2012",
    headquarters: "Singapore",
    website: "www.ecowatertech.com",
    ceo: "Li Wei",
    financials: {
      revenue: "$43.2M",
      netIncome: "$9.1M",
      ebitda: "$14.2M",
      eps: "$1.87",
      dividendYield: "1.2%"
    },
    projects: [
      { name: "Pure Water Initiative", location: "Southeast Asia", capacity: "50M gal/day", status: "Operacional" },
      { name: "Desert Bloom Project", location: "Middle East", capacity: "30M gal/day", status: "Em construção" }
    ],
    esgRating: "A",
    halalCompliant: true,
    documents: [
      { title: "Relatório Anual 2024", type: "relatório" },
      { title: "Estudo de Impacto Ambiental", type: "estudo" }
    ]
  },
  'CLEF': {
    name: "Clean Energy Fund",
    symbol: "CLEF",
    description: "Clean Energy Fund é um fundo diversificado de infraestrutura de energia renovável que investe em projetos de energia eólica, solar e hídrica em mercados emergentes e desenvolvidos.",
    price: 45.20,
    change: 3.2,
    marketCap: "320M",
    volume: "1.5M",
    sector: "Fundos de Energia Limpa",
    employees: 85,
    founded: "2015",
    headquarters: "London, UK",
    website: "www.cleanenergyfund.com",
    ceo: "Ahmed Hassan",
    financials: {
      revenue: "$87.5M",
      netIncome: "$24.3M",
      ebitda: "$32.8M",
      eps: "$3.76",
      dividendYield: "2.4%"
    },
    projects: [
      { name: "WindPower Portugal", location: "Portugal", capacity: "250MW", status: "Operacional" },
      { name: "SolarAfrica Initiative", location: "Kenya", capacity: "120MW", status: "Operacional" },
      { name: "HydroGreen Brazil", location: "Brazil", capacity: "180MW", status: "Em construção" }
    ],
    esgRating: "AAA",
    halalCompliant: true,
    documents: [
      { title: "Relatório Anual 2024", type: "relatório" },
      { title: "Relatório de Impacto Social", type: "relatório" },
      { title: "Certificação Halal", type: "certificado" }
    ]
  }
};

const CompanyProfile = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const company = symbol && mockCompanyData[symbol] ? mockCompanyData[symbol] : mockCompanyData.GSOL;

  return (
    <DashboardLayout type="investor">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <Badge variant={company.halalCompliant ? "success" : "default"} className="ml-2">
                {company.halalCompliant ? "Halal" : "Padrão"}
              </Badge>
              <Badge variant="outline" className="ml-2">
                ESG: {company.esgRating}
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">{company.symbol}</p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline">Adicionar à Watchlist</Button>
            <Button>Investir</Button>
          </div>
        </div>

        {/* Price information card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Visão Geral do Mercado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Preço Atual</p>
                <p className="text-2xl font-bold">${company.price.toFixed(2)}</p>
                <p className={`text-sm ${company.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {company.change > 0 ? '+' : ''}{company.change}%
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Market Cap</p>
                <p className="text-2xl font-bold">${company.marketCap}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Volume (24h)</p>
                <p className="text-2xl font-bold">{company.volume}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Setor</p>
                <p className="text-xl font-semibold">{company.sector}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart */}
        <ChartCard 
          title="Histórico de Preços" 
          type="line"
          height={300}
          data={[
            { name: 'Jan', value: company.price * 0.85 },
            { name: 'Fev', value: company.price * 0.88 },
            { name: 'Mar', value: company.price * 0.92 },
            { name: 'Abr', value: company.price * 0.90 },
            { name: 'Mai', value: company.price * 0.95 },
            { name: 'Jun', value: company.price * 0.98 },
            { name: 'Jul', value: company.price * 1.01 },
            { name: 'Ago', value: company.price * 1.05 },
            { name: 'Set', value: company.price * 1.02 },
            { name: 'Out', value: company.price },
          ]}
        />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <Building className="h-4 w-4" />
              Empresa
            </TabsTrigger>
            <TabsTrigger value="financials" className="flex items-center gap-1">
              <CircleDollarSign className="h-4 w-4" />
              Financeiro
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              Projetos
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Documentos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Sobre a Empresa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {company.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Informações da Empresa</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-sm text-muted-foreground">CEO:</p>
                      <p className="text-sm">{company.ceo}</p>
                      
                      <p className="text-sm text-muted-foreground">Funcionários:</p>
                      <p className="text-sm">{company.employees}</p>
                      
                      <p className="text-sm text-muted-foreground">Fundada em:</p>
                      <p className="text-sm">{company.founded}</p>
                      
                      <p className="text-sm text-muted-foreground">Sede:</p>
                      <p className="text-sm">{company.headquarters}</p>
                      
                      <p className="text-sm text-muted-foreground">Website:</p>
                      <p className="text-sm">
                        <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-nse-primary hover:underline flex items-center gap-1">
                          {company.website} <Globe className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Sustentabilidade e Compliance</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-sm text-muted-foreground">Rating ESG:</p>
                      <p className="text-sm">
                        <Badge variant="outline" className="font-semibold">
                          {company.esgRating}
                        </Badge>
                      </p>
                      
                      <p className="text-sm text-muted-foreground">Halal Compliant:</p>
                      <p className="text-sm">
                        {company.halalCompliant ? 
                          <Badge variant="success" className="font-semibold">Sim</Badge> : 
                          <Badge variant="destructive" className="font-semibold">Não</Badge>
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financials">
            <Card>
              <CardHeader>
                <CardTitle>Análise Financeira</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Receita</p>
                    <p className="text-xl font-bold">{company.financials.revenue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lucro Líquido</p>
                    <p className="text-xl font-bold">{company.financials.netIncome}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">EBITDA</p>
                    <p className="text-xl font-bold">{company.financials.ebitda}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LPA</p>
                    <p className="text-xl font-bold">{company.financials.eps}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dividend Yield</p>
                    <p className="text-xl font-bold">{company.financials.dividendYield}</p>
                  </div>
                </div>
                
                <ChartCard 
                  title="Crescimento da Receita" 
                  type="bar"
                  height={300}
                  data={[
                    { name: 'Q1', value: 15.4 },
                    { name: 'Q2', value: 16.8 },
                    { name: 'Q3', value: 17.2 },
                    { name: 'Q4', value: 18.4 }
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projetos</CardTitle>
                <CardDescription>Visão geral de todos os projetos atuais e planejados</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Projeto</TableHead>
                      <TableHead>Localização</TableHead>
                      <TableHead>Capacidade</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {company.projects.map((project, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>{project.location}</TableCell>
                        <TableCell>{project.capacity}</TableCell>
                        <TableCell>
                          <Badge variant={project.status === "Operacional" ? "success" : 
                                         project.status === "Em construção" ? "warning" : "outline"}>
                            {project.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Documentos</CardTitle>
                <CardDescription>Documentos oficiais e relatórios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {company.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{doc.title}</p>
                          <p className="text-sm text-muted-foreground capitalize">{doc.type}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CompanyProfile;
