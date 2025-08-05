import QRCode from 'qrcode';

export interface QRCodeOptions {
  width?: number;
  height?: number;
  color?: {
    dark?: string;
    light?: string;
  };
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  margin?: number;
}

export interface CertificateData {
  id: string;
  recipientName: string;
  courseName: string;
  issueDate: string;
  issuerName: string;
}

export class QRCodeGenerator {
  private static baseUrl = window.location.origin;

  /**
   * Generate QR code as data URL
   */
  static async generateQRCodeDataURL(
    certificateId: string, 
    options: QRCodeOptions = {}
  ): Promise<string> {
    try {
      const verificationUrl = `${this.baseUrl}/verify/${certificateId}`;
      
      const defaultOptions = {
        width: 200,
        height: 200,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'H' as const, // High error correction for better reliability
        margin: 2
      };

      const qrOptions = { ...defaultOptions, ...options };
      
      const dataUrl = await QRCode.toDataURL(verificationUrl, qrOptions);
      return dataUrl;
    } catch (error) {
      console.error('Error generating QR code:', error);
      throw new Error(`Failed to generate QR code: ${error.message}`);
    }
  }

  /**
   * Generate QR code as SVG string
   */
  static async generateQRCodeSVG(
    certificateId: string, 
    options: QRCodeOptions = {}
  ): Promise<string> {
    try {
      const verificationUrl = `${this.baseUrl}/verify/${certificateId}`;
      
      const defaultOptions = {
        width: 200,
        height: 200,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'H' as const,
        margin: 2
      };

      const qrOptions = { ...defaultOptions, ...options };
      
      const svg = await QRCode.toString(verificationUrl, {
        type: 'svg',
        ...qrOptions
      });
      
      return svg;
    } catch (error) {
      console.error('Error generating QR code SVG:', error);
      throw new Error(`Failed to generate QR code SVG: ${error.message}`);
    }
  }

  /**
   * Generate QR code as canvas element
   */
  static async generateQRCodeCanvas(
    certificateId: string, 
    options: QRCodeOptions = {}
  ): Promise<HTMLCanvasElement> {
    try {
      const verificationUrl = `${this.baseUrl}/verify/${certificateId}`;
      
      const defaultOptions = {
        width: 200,
        height: 200,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'H' as const,
        margin: 2
      };

      const qrOptions = { ...defaultOptions, ...options };
      
      const canvas = await QRCode.toCanvas(verificationUrl, qrOptions);
      return canvas;
    } catch (error) {
      console.error('Error generating QR code canvas:', error);
      throw new Error(`Failed to generate QR code canvas: ${error.message}`);
    }
  }

  /**
   * Validate certificate ID format
   */
  static validateCertificateId(id: string): boolean {
    // Certificate IDs should be 6 characters long with alphanumeric characters
    const idPattern = /^[A-Z0-9]{6}$/;
    return idPattern.test(id);
  }

  /**
   * Generate verification URL for a certificate
   */
  static getVerificationUrl(certificateId: string): string {
    if (!this.validateCertificateId(certificateId)) {
      throw new Error('Invalid certificate ID format');
    }
    return `${this.baseUrl}/verify/${certificateId}`;
  }

  /**
   * Test QR code generation
   */
  static async testQRCodeGeneration(certificateId: string): Promise<boolean> {
    try {
      await this.generateQRCodeDataURL(certificateId);
      return true;
    } catch (error) {
      console.error('QR code generation test failed:', error);
      return false;
    }
  }
} 