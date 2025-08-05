import { QRCodeGenerator } from './qrCodeGenerator';

export interface CertificateInfo {
  id: string;
  recipientName: string;
  courseName: string;
  issueDate: string;
  issuerName: string;
  verificationUrl: string;
}

export class CertificateUtils {
  /**
   * Generate a random certificate ID
   */
  static generateCertificateId(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Validate and format certificate ID
   */
  static formatCertificateId(id: string): string {
    const formatted = id.toUpperCase().replace(/[^A-Z0-9]/g, '');
    return formatted.substring(0, 6);
  }

  /**
   * Get certificate verification URL
   */
  static getVerificationUrl(certificateId: string): string {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://yourdomain.com';
    return `${baseUrl}/verify/${certificateId}`;
  }

  /**
   * Test if a certificate exists
   */
  static async checkCertificateExists(certificateId: string): Promise<boolean> {
    try {
      const pngUrl = `/certificates/${certificateId}.png`;
      const pdfUrl = `/certificates/${certificateId}.pdf`;
      
      const pngResponse = await fetch(pngUrl, { method: 'HEAD' });
      const pdfResponse = await fetch(pdfUrl, { method: 'HEAD' });
      
      return pngResponse.ok || pdfResponse.ok;
    } catch (error) {
      console.error('Error checking certificate existence:', error);
      return false;
    }
  }

  /**
   * Get list of existing certificates
   */
  static async getExistingCertificates(): Promise<string[]> {
    // This would typically be an API call to get existing certificates
    // For now, we'll return the known certificates
    return ['BJAK1DV', 'R7M3QA', 'sample-cert-123456'];
  }

  /**
   * Create certificate info object
   */
  static createCertificateInfo(
    id: string,
    recipientName: string,
    courseName: string,
    issueDate?: string,
    issuerName?: string
  ): CertificateInfo {
    return {
      id: this.formatCertificateId(id),
      recipientName,
      courseName,
      issueDate: issueDate || new Date().toISOString().split('T')[0],
      issuerName: issuerName || 'Trizen',
      verificationUrl: this.getVerificationUrl(this.formatCertificateId(id))
    };
  }

  /**
   * Generate QR code data URL for certificate
   */
  static async generateCertificateQRCode(certificateId: string): Promise<string> {
    return await QRCodeGenerator.generateQRCodeDataURL(certificateId, {
      width: 200,
      height: 200,
      errorCorrectionLevel: 'H'
    });
  }

  /**
   * Test certificate generation workflow
   */
  static async testCertificateWorkflow(certificateId: string): Promise<{
    qrCodeWorks: boolean;
    verificationUrl: string;
    isValidId: boolean;
  }> {
    const isValidId = QRCodeGenerator.validateCertificateId(certificateId);
    const verificationUrl = this.getVerificationUrl(certificateId);
    
    let qrCodeWorks = false;
    if (isValidId) {
      try {
        await QRCodeGenerator.generateQRCodeDataURL(certificateId);
        qrCodeWorks = true;
      } catch (error) {
        console.error('QR code generation failed:', error);
      }
    }

    return {
      qrCodeWorks,
      verificationUrl,
      isValidId
    };
  }
}

// Predefined certificate IDs for easy access
export const PREDEFINED_CERTIFICATE_IDS = {
  NEW_CERTIFICATE_1: 'X9K2MN',
  NEW_CERTIFICATE_2: 'P7Q4RS',
  EXISTING_1: 'BJAK1DV',
  EXISTING_2: 'R7M3QA',
  SAMPLE: 'sample-cert-123456'
} as const; 