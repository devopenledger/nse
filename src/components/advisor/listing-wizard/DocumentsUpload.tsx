
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, X, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  status: 'uploading' | 'completed' | 'error';
}

interface DocumentsUploadProps {
  documents: Document[];
  onUpdate: (documents: Document[]) => void;
}

const requiredDocuments = [
  { 
    name: 'Whitepaper / Offering Memorandum',
    description: 'Detailed document explaining the project, technology, and investment terms'
  },
  { 
    name: 'Business Registration Documents',
    description: 'Certificate of incorporation, business license, etc.'
  },
  { 
    name: 'Financial Statements',
    description: 'Audited financial statements or projections'
  },
  { 
    name: 'Regulatory Compliance Documentation',
    description: 'Legal opinions, compliance certifications, etc.'
  },
  { 
    name: 'Team & Management Profiles',
    description: 'CVs, background information, and experience'
  },
  { 
    name: 'ESG & Shariah Certification',
    description: 'Certificates confirming compliance with ESG principles and Shariah standards'
  },
];

const DocumentsUpload = ({ documents, onUpdate }: DocumentsUploadProps) => {
  const { toast } = useToast();
  const [uploadingFile, setUploadingFile] = useState<string | null>(null);

  // Simulate file upload
  const handleFileUpload = (documentName: string) => {
    setUploadingFile(documentName);
    
    // Create document object
    const newDocument = {
      id: `doc-${Date.now()}`,
      name: documentName,
      type: 'application/pdf',
      size: Math.floor(Math.random() * 10000000) + 1000000, // Random size between 1-10MB
      status: 'uploading' as const
    };
    
    const updatedDocuments = [...documents, newDocument];
    onUpdate(updatedDocuments);
    
    // Simulate upload completion after 2 seconds
    setTimeout(() => {
      const completedDocument = { ...newDocument, status: 'completed' as const };
      const finalDocuments = documents
        .filter(doc => doc.id !== newDocument.id)
        .concat(completedDocument);
      
      onUpdate(finalDocuments);
      setUploadingFile(null);
      
      toast({
        title: "Document uploaded",
        description: `${documentName} has been uploaded successfully.`,
      });
    }, 2000);
  };
  
  const handleRemoveDocument = (id: string) => {
    const updatedDocuments = documents.filter(doc => doc.id !== id);
    onUpdate(updatedDocuments);
    
    toast({
      title: "Document removed",
      description: "The document has been removed.",
    });
  };
  
  // Helper function to check if a document is uploaded
  const isDocumentUploaded = (name: string) => {
    return documents.some(doc => doc.name === name && doc.status === 'completed');
  };
  
  // Helper function to format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
        <p className="text-muted-foreground mb-6">
          Upload all required documents for your token listing application.
        </p>
        
        <div className="space-y-4">
          {requiredDocuments.map((doc, index) => (
            <div key={index} className="flex items-start justify-between p-4 border rounded-md">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">{doc.name}</h3>
                  {isDocumentUploaded(doc.name) && (
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      <Check className="h-3 w-3 mr-1" /> Uploaded
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </div>
              
              <div>
                {isDocumentUploaded(doc.name) ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1"
                    onClick={() => handleRemoveDocument(
                      documents.find(d => d.name === doc.name)?.id || ''
                    )}
                  >
                    <X className="h-4 w-4" /> Remove
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1"
                    onClick={() => handleFileUpload(doc.name)}
                    disabled={uploadingFile === doc.name}
                  >
                    <Upload className="h-4 w-4" /> 
                    {uploadingFile === doc.name ? 'Uploading...' : 'Upload'}
                  </Button>
                )}
              </div>
            </div>
          ))}
          
          <div className="mt-6">
            <h3 className="font-medium mb-2">Uploaded Documents</h3>
            {documents.length === 0 ? (
              <p className="text-sm text-muted-foreground">No documents uploaded yet.</p>
            ) : (
              <div className="space-y-2">
                {documents.map(doc => (
                  <div key={doc.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-sm">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(doc.size)} • {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleRemoveDocument(doc.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-6 p-4 border border-dashed rounded-md text-center">
            <p className="text-sm text-muted-foreground mb-2">Upload additional supporting documents</p>
            <Button variant="outline" size="sm" className="gap-1">
              <Upload className="h-4 w-4" /> Browse Files
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsUpload;
