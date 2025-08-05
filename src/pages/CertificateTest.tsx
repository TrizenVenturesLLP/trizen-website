import React, { useState, useEffect } from 'react';
import { QRCodeGenerator } from '@/lib/qrCodeGenerator';
import { CertificateUtils, PREDEFINED_CERTIFICATE_IDS } from '@/lib/certificateUtils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QrCode, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CertificateTest = () => {
  const [testResults, setTestResults] = useState<{
    [key: string]: {
      qrCodeWorks: boolean;
      verificationUrl: string;
      isValidId: boolean;
    };
  }>({});
  const [isTesting, setIsTesting] = useState(false);

  const testCertificates = [
    PREDEFINED_CERTIFICATE_IDS.NEW_CERTIFICATE_1,
    PREDEFINED_CERTIFICATE_IDS.NEW_CERTIFICATE_2,
    PREDEFINED_CERTIFICATE_IDS.EXISTING_1,
    PREDEFINED_CERTIFICATE_IDS.EXISTING_2
  ];

  const runTests = async () => {
    setIsTesting(true);
    const results: typeof testResults = {};

    for (const certId of testCertificates) {
      try {
        const result = await CertificateUtils.testCertificateWorkflow(certId);
        results[certId] = result;
      } catch (error) {
        console.error(`Test failed for ${certId}:`, error);
        results[certId] = {
          qrCodeWorks: false,
          verificationUrl: CertificateUtils.getVerificationUrl(certId),
          isValidId: QRCodeGenerator.validateCertificateId(certId)
        };
      }
    }

    setTestResults(results);
    setIsTesting(false);

    const allPassed = Object.values(results).every(r => r.isValidId && r.qrCodeWorks);
    if (allPassed) {
      toast({
        title: "All Tests Passed",
        description: "QR code generation is working correctly for all certificates."
      });
    } else {
      toast({
        variant: "destructive",
        title: "Some Tests Failed",
        description: "Check the results below for details."
      });
    }
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Certificate System Test
            </h1>
            <p className="text-lg text-gray-600">
              Testing QR code generation and certificate verification
            </p>
          </div>

          {/* Test Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5" />
                Test Controls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={runTests}
                disabled={isTesting}
                className="flex items-center gap-2"
              >
                {isTesting ? 'Testing...' : 'Run All Tests'}
              </Button>
            </CardContent>
          </Card>

          {/* Test Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testCertificates.map((certId) => {
              const result = testResults[certId];
              if (!result) return null;

              return (
                <Card key={certId}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Certificate {certId}</span>
                      <div className="flex gap-2">
                        {result.isValidId ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        {result.qrCodeWorks ? (
                          <QrCode className="h-5 w-5 text-blue-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant={result.isValidId ? "default" : "destructive"}>
                        {result.isValidId ? "Valid ID" : "Invalid ID"}
                      </Badge>
                      <Badge variant={result.qrCodeWorks ? "default" : "destructive"}>
                        {result.qrCodeWorks ? "QR Works" : "QR Failed"}
                      </Badge>
                    </div>
                    
                    <div className="text-sm">
                      <p><strong>Verification URL:</strong></p>
                      <p className="text-blue-600 break-all">{result.verificationUrl}</p>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(result.verificationUrl, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Test Verification
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Test Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Total Certificates Tested:</strong> {testCertificates.length}</p>
                <p><strong>Valid IDs:</strong> {Object.values(testResults).filter(r => r?.isValidId).length}</p>
                <p><strong>Working QR Codes:</strong> {Object.values(testResults).filter(r => r?.qrCodeWorks).length}</p>
                <p><strong>All Tests Passed:</strong> {Object.values(testResults).every(r => r?.isValidId && r?.qrCodeWorks) ? 'Yes' : 'No'}</p>
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">To generate new certificates:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Visit <code className="bg-gray-100 px-1 rounded">/certificate-manager</code></li>
                  <li>Enter one of the new certificate IDs: <code className="bg-gray-100 px-1 rounded">X9K2MN</code> or <code className="bg-gray-100 px-1 rounded">P7Q4RS</code></li>
                  <li>Fill in the certificate details</li>
                  <li>Generate and download PNG/PDF versions</li>
                  <li>Place the files in <code className="bg-gray-100 px-1 rounded">public/certificates/</code></li>
                </ol>
              </div>
              
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> The QR codes are generated automatically and will never break. 
                  They point to the verification URLs and use high error correction for reliability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CertificateTest; 