import React, { useState, useRef, useEffect } from 'react';
import { QRCodeGenerator, CertificateData } from '@/lib/qrCodeGenerator';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Download, QrCode, FileText, Image } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CertificateGeneratorProps {
  certificateId: string;
  onGenerate?: (pngDataUrl: string, pdfBlob: Blob) => void;
}

const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({
  certificateId,
  onGenerate
}) => {
  const [certificateData, setCertificateData] = useState<CertificateData>({
    id: certificateId,
    recipientName: '',
    courseName: '',
    issueDate: new Date().toISOString().split('T')[0],
    issuerName: 'Trizen'
  });
  
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string>('');
  const certificateRef = useRef<HTMLDivElement>(null);

  // Generate QR code when component mounts or certificateId changes
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        setError('');
        const qrDataUrl = await QRCodeGenerator.generateQRCodeDataURL(certificateId, {
          width: 150,
          height: 150,
          errorCorrectionLevel: 'H'
        });
        setQrCodeDataUrl(qrDataUrl);
      } catch (err) {
        setError(`Failed to generate QR code: ${err.message}`);
        toast({
          variant: "destructive",
          title: "QR Code Generation Failed",
          description: err.message
        });
      }
    };

    if (QRCodeGenerator.validateCertificateId(certificateId)) {
      generateQRCode();
    } else {
      setError('Invalid certificate ID format');
    }
  }, [certificateId]);

  const handleInputChange = (field: keyof CertificateData, value: string) => {
    setCertificateData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePNG = async (): Promise<string> => {
    if (!certificateRef.current) {
      throw new Error('Certificate element not found');
    }

    const canvas = await html2canvas(certificateRef.current, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    return canvas.toDataURL('image/png', 1.0);
  };

  const generatePDF = async (): Promise<Blob> => {
    if (!certificateRef.current) {
      throw new Error('Certificate element not found');
    }

    const canvas = await html2canvas(certificateRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate dimensions to fit the certificate
    const imgWidth = pdfWidth - 20; // 10mm margin on each side
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 10, (pdfHeight - imgHeight) / 2, imgWidth, imgHeight);
    
    return pdf.output('blob');
  };

  const handleGenerateCertificate = async () => {
    if (!certificateData.recipientName || !certificateData.courseName) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields"
      });
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const pngDataUrl = await generatePNG();
      const pdfBlob = await generatePDF();

      if (onGenerate) {
        onGenerate(pngDataUrl, pdfBlob);
      }

      toast({
        title: "Certificate Generated",
        description: "Certificate has been generated successfully"
      });
    } catch (err) {
      setError(`Failed to generate certificate: ${err.message}`);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: err.message
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadPNG = async () => {
    try {
      const pngDataUrl = await generatePNG();
      const link = document.createElement('a');
      link.download = `${certificateId}.png`;
      link.href = pngDataUrl;
      link.click();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: err.message
      });
    }
  };

  const downloadPDF = async () => {
    try {
      const pdfBlob = await generatePDF();
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.download = `${certificateId}.pdf`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: err.message
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            Certificate Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="recipientName">Recipient Name *</Label>
              <Input
                id="recipientName"
                value={certificateData.recipientName}
                onChange={(e) => handleInputChange('recipientName', e.target.value)}
                placeholder="Enter recipient name"
              />
            </div>
            <div>
              <Label htmlFor="courseName">Course Name *</Label>
              <Input
                id="courseName"
                value={certificateData.courseName}
                onChange={(e) => handleInputChange('courseName', e.target.value)}
                placeholder="Enter course name"
              />
            </div>
            <div>
              <Label htmlFor="issueDate">Issue Date</Label>
              <Input
                id="issueDate"
                type="date"
                value={certificateData.issueDate}
                onChange={(e) => handleInputChange('issueDate', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="issuerName">Issuer Name</Label>
              <Input
                id="issuerName"
                value={certificateData.issuerName}
                onChange={(e) => handleInputChange('issuerName', e.target.value)}
                placeholder="Enter issuer name"
              />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex gap-2">
            <Button 
              onClick={handleGenerateCertificate}
              disabled={isGenerating || !certificateData.recipientName || !certificateData.courseName}
              className="flex items-center gap-2"
            >
              {isGenerating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <QrCode className="h-4 w-4" />
              )}
              Generate Certificate
            </Button>
            
            <Button 
              variant="outline" 
              onClick={downloadPNG}
              disabled={isGenerating}
              className="flex items-center gap-2"
            >
              <Image className="h-4 w-4" />
              Download PNG
            </Button>
            
            <Button 
              variant="outline" 
              onClick={downloadPDF}
              disabled={isGenerating}
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Certificate Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Certificate Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            ref={certificateRef}
            className="bg-white border-2 border-gray-200 rounded-lg p-8 w-full max-w-4xl mx-auto"
            style={{ aspectRatio: '1.414' }} // A4 landscape ratio
          >
            {/* Certificate Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Certificate of Completion</h1>
              <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Certificate Content */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{certificateData.recipientName || 'Recipient Name'}</h2>
              <p className="text-lg text-gray-600 mb-4">has successfully completed the course</p>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{certificateData.courseName || 'Course Name'}</h3>
            </div>

            {/* Certificate Details */}
            <div className="flex justify-between items-end mb-8">
              <div className="text-left">
                <p className="text-sm text-gray-600">Issue Date</p>
                <p className="font-semibold">{certificateData.issueDate}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Certificate ID</p>
                <p className="font-semibold">{certificateId}</p>
              </div>
            </div>

            {/* QR Code and Signature */}
            <div className="flex justify-between items-end">
              <div className="text-left">
                <p className="text-sm text-gray-600 mb-2">Issued by</p>
                <p className="font-semibold">{certificateData.issuerName}</p>
              </div>
              
              {qrCodeDataUrl && (
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">Scan to verify</p>
                  <img 
                    src={qrCodeDataUrl} 
                    alt="QR Code" 
                    className="w-20 h-20 mx-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateGenerator; 