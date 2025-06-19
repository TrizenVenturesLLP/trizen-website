
import { Link } from "react-router-dom";
import { HandHeart, Calendar, Image, Users } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      name: "Contribute",
      path: "/contribute",
      icon: <HandHeart className="w-5 h-5" />
    },
    {
      name: "Events",
      path: "/events",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <Image className="w-5 h-5" />
    },
    {
      name: "About Us",
      path: "/about-us",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-trizen-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/trizen-logo.png" 
                alt="Trizen Logo" 
                className="h-10 mr-2 bg-white p-1 rounded"
              />
              <span className="text-xl font-bold">Trizen</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering individuals and organizations through innovation and education.
            </p>
          </div>

          {/* Section Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-trizen-purple">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-trizen-purple flex items-center">
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-trizen-purple">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: nukaraju@trizenventures.com</li>
              <li>Phone: +91 8639648822</li>
              <li>Address 1: Gajuwaka,Visakhapatnam, Andhrapradesh</li>
              <li>Address 2: Kukatpally, Hyderabad Telangana</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-trizen-purple">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
              />
              <button className="bg-trizen-purple hover:bg-trizen-purple/90 px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Trizen. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/trizenventures/" className="text-gray-400 hover:text-trizen-purple">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com/TrizenVenture" className="text-gray-400 hover:text-trizen-purple">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/trizenventuresllp/" className="text-gray-400 hover:text-trizen-purple">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
