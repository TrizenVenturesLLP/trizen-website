import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CertificateGenerator from '@/components/CertificateGenerator';
import { QRCodeGenerator } from '@/lib/qrCodeGenerator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { QrCode, FileText, Image, CheckCircle, XCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CertificateManager = () => {
  const { id } = useParams<{ id: string }>();
  const [certificateId, setCertificateId] = useState(id || '');
  const [isValidId, setIsValidId] = useState(false);
  const [verificationUrl, setVerificationUrl] = useState('');

  const handleCertificateIdChange = (value: string) => {
    const upperValue = value.toUpperCase();
    setCertificateId(upperValue);
    
    const isValid = QRCodeGenerator.validateCertificateId(upperValue);
    setIsValidId(isValid);
    
    if (isValid) {
      try {
        const url = QRCodeGenerator.getVerificationUrl(upperValue);
        setVerificationUrl(url);
      } catch (error) {
        setVerificationUrl('');
      }
    } else {
      setVerificationUrl('');
    }
  };

  const handleGenerate = async (pngDataUrl: string, pdfBlob: Blob) => {
    // Here you could implement server-side saving of the certificates
    // For now, we'll just show a success message
    console.log('Certificate generated:', { pngDataUrl, pdfBlob });
    
    toast({
      title: "Certificate Generated Successfully",
      description: "Both PNG and PDF versions have been created with embedded QR codes."
    });
  };

  const testQRCode = async () => {
    if (!certificateId || !isValidId) return;
    
    try {
      const success = await QRCodeGenerator.testQRCodeGeneration(certificateId);
      if (success) {
        toast({
          title: "QR Code Test Successful",
          description: "QR code generation is working correctly."
        });
      } else {
        toast({
          variant: "destructive",
          title: "QR Code Test Failed",
          description: "There was an issue generating the QR code."
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "QR Code Test Failed",
        description: error.message
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Certificate Manager
              </h1>
              <p className="text-lg text-gray-600">
                Generate certificates with automated QR codes for verification
              </p>
            </div>

            {/* Certificate ID Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Certificate ID Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="certificateId">Certificate ID</Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      id="certificateId"
                      value={certificateId}
                      onChange={(e) => handleCertificateIdChange(e.target.value)}
                      placeholder="Enter 6-character ID (e.g., X9K2MN)"
                      maxLength={6}
                      className="flex-1"
                    />
                    <Button 
                      onClick={testQRCode}
                      disabled={!isValidId}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <QrCode className="h-4 w-4" />
                      Test QR
                    </Button>
                  </div>
                </div>

                {/* Validation Status */}
                <div className="flex items-center gap-2">
                  {isValidId ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-green-600 font-medium">Valid Certificate ID</span>
                    </>
                  ) : certificateId ? (
                    <>
                      <XCircle className="h-5 w-5 text-red-500" />
                      <span className="text-red-600 font-medium">Invalid Certificate ID</span>
                    </>
                  ) : (
                    <span className="text-gray-500">Enter a 6-character alphanumeric ID</span>
                  )}
                </div>

                {/* Verification URL */}
                {verificationUrl && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Verification URL:</strong> {verificationUrl}
                    </p>
                  </div>
                )}

                {/* ID Format Info */}
                <Alert>
                  <AlertDescription>
                    <strong>Certificate ID Format:</strong> 6 characters, uppercase letters and numbers only (e.g., X9K2MN, P7Q4RS)
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Certificate Generator */}
            {isValidId && certificateId && (
              <CertificateGenerator 
                certificateId={certificateId}
                onGenerate={handleGenerate}
              />
            )}

            {/* Instructions */}
            {!isValidId && (
              <Card>
                <CardHeader>
                  <CardTitle>How to Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <QrCode className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">1. Enter Certificate ID</h3>
                      <p className="text-sm text-gray-600">
                        Enter a unique 6-character ID for your certificate
                      </p>
                    </div>
                    
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">2. Fill Certificate Details</h3>
                      <p className="text-sm text-gray-600">
                        Add recipient name, course name, and other details
                      </p>
                    </div>
                    
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Image className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">3. Generate & Download</h3>
                      <p className="text-sm text-gray-600">
                        Generate PNG and PDF versions with embedded QR codes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <QrCode className="h-4 w-4 text-blue-600" />
                      Automated QR Code Generation
                    </h4>
                    <p className="text-sm text-gray-600">
                      QR codes are generated automatically and point to the verification URL. 
                      They use high error correction for reliability.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <FileText className="h-4 w-4 text-green-600" />
                      Multiple Formats
                    </h4>
                    <p className="text-sm text-gray-600">
                      Generate both PNG and PDF versions with embedded QR codes. 
                      High-resolution output for professional quality.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      Real-time Preview
                    </h4>
                    <p className="text-sm text-gray-600">
                      See exactly how your certificate will look before generating. 
                      QR codes are embedded directly in the design.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Image className="h-4 w-4 text-orange-600" />
                      Instant Download
                    </h4>
                    <p className="text-sm text-gray-600">
                      Download PNG and PDF files immediately after generation. 
                      No server-side processing required.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CertificateManager; 