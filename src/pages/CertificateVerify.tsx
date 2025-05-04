
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const CertificateVerify = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [certificateExists, setCertificateExists] = useState(false);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        // In a real implementation, this would be a call to your backend API
        // For now, we'll simulate a certificate lookup
        
        // Simulating API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // The actual file path
        const url = `/certificates/${id}.pdf`;
        
        // Check if certificate exists by trying to fetch it
        const response = await fetch(url, { method: 'HEAD' });
        
        if (response.ok) {
          setCertificateUrl(url);
          setCertificateExists(true);
          toast({
            title: "Certificate verified",
            description: "The certificate has been successfully loaded"
          });
        } else {
          setError('Invalid certificate ID');
          console.error('Certificate not found:', url);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load certificate');
        setLoading(false);
        console.error('Error fetching certificate:', err);
      }
    };

    if (id) {
      fetchCertificate();
    }
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
                  <p className="text-gray-600">Certificate ID: {id}</p>
                </div>
                
                {/* PDF Viewer */}
                <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden h-[70vh]">
                  {certificateExists && (
                    <object
                      data={certificateUrl || ''}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                      className="w-full h-full"
                    >
                      <div className="p-4 text-center">
                        <p>Your browser does not support embedded PDFs.</p>
                        <a 
                          href={certificateUrl || '#'} 
                          className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download Certificate
                        </a>
                      </div>
                    </object>
                  )}
                </div>
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
