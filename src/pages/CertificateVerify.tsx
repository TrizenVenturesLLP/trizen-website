
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Loader2, Download, FileText, Image } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { resolveCertificate } from '@/lib/certificateStorage';

const CertificateVerify = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [certificatePngUrl, setCertificatePngUrl] = useState<string | null>(null);
  const [certificatePdfUrl, setCertificatePdfUrl] = useState<string | null>(null);
  const [certificateExists, setCertificateExists] = useState(false);
  const [displayId, setDisplayId] = useState<string | null>(null);

  useEffect(() => {
    let revoked: string[] = [];

    const fetchCertificate = async () => {
      setLoading(true);
      setError(null);
      setCertificatePngUrl(null);
      setCertificatePdfUrl(null);
      setCertificateExists(false);
      setDisplayId(null);

      try {
        const result = await resolveCertificate(id);
        revoked = result.objectUrls;
        setDisplayId(result.basename);

        if (result.error && !result.certificateExists) {
          setError(result.error);
          setLoading(false);
          return;
        }

        if (result.certificateExists) {
          setCertificatePngUrl(result.certificatePngUrl);
          setCertificatePdfUrl(result.certificatePdfUrl);
          setCertificateExists(true);
          toast({
            title: "Certificate verified",
            description: "The certificate has been successfully loaded"
          });
        } else {
          setError(result.error || 'Certificate not found');
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        setError('Failed to load certificate: ' + message);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to verify certificate. Please try again later."
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();

    return () => {
      revoked.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Certificate Verification</h1>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-4xl mx-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
                <p className="text-gray-600">Loading certificate...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <Alert variant="destructive" className="mb-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
                <p className="mt-4">
                  Please check the certificate ID and try again. If you continue to experience issues,
                  contact our support team.
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Certificate Found</h2>
                  <p className="text-gray-600">Certificate ID: {displayId ?? id}</p>
                </div>
                
                {/* Certificate Display Section */}
                <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                  {certificateExists && (
                    <>
                      {certificatePngUrl ? (
                        <div className="relative">
                          <img 
                            src={certificatePngUrl} 
                            alt="Certificate" 
                            className="w-full h-auto max-h-[70vh] object-contain"
                          />
                        </div>
                      ) : certificatePdfUrl ? (
                        <div className="h-[70vh] flex flex-col items-center justify-center bg-gray-100 p-8">
                          <FileText className="h-20 w-20 text-red-500 mb-4" />
                          <p className="text-center text-gray-600 mb-4">
                            This certificate is available as a PDF document.
                            <br />Use the download button below to view it.
                          </p>
                        </div>
                      ) : (
                        <div className="h-[70vh] flex items-center justify-center bg-gray-100">
                          <p>Certificate format not supported for preview.</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                {/* Download Options */}
                {certificateExists && (
                  <div className="flex justify-center mt-4">
                    {certificatePdfUrl && (
                      <Button 
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.open(certificatePdfUrl || '', '_blank')}
                      >
                        <Download className="h-4 w-4" />
                        <span>Download PDF Certificate</span>
                      </Button>
                    )}
                    
                    {certificatePngUrl && !certificatePdfUrl && (
                      <Button 
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.open(certificatePngUrl || '', '_blank')}
                      >
                        <Image className="h-4 w-4" />
                        <span>Download PNG Certificate</span>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CertificateVerify;
