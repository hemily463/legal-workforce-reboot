import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-legal-navy text-white">
      <div className="container max-w-screen-xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-legal-navy font-bold text-sm">LW</span>
              </div>
              <span className="font-bold text-xl">Legal Workforce</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Connecting U.S. law firms with exceptional remote legal professionals. 
              Reduce costs while maintaining quality and expertise.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-neutral-300 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/roles" className="text-neutral-300 hover:text-accent transition-colors">Legal Assistants</Link></li>
              <li><Link to="/roles" className="text-neutral-300 hover:text-accent transition-colors">Paralegals</Link></li>
              <li><Link to="/roles" className="text-neutral-300 hover:text-accent transition-colors">Case Managers</Link></li>
              <li><Link to="/roles" className="text-neutral-300 hover:text-accent transition-colors">Intake Specialists</Link></li>
              <li><Link to="/roles" className="text-neutral-300 hover:text-accent transition-colors">Legal Researchers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-neutral-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-neutral-300 hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link to="/guarantee" className="text-neutral-300 hover:text-accent transition-colors">Our Guarantee</Link></li>
              <li><Link to="/testimonials" className="text-neutral-300 hover:text-accent transition-colors">Client Success Stories</Link></li>
              <li><Link to="/faq" className="text-neutral-300 hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-neutral-300">1-800-LEGAL-STAFF</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-neutral-300">hello@legalworkforceinc.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-neutral-300">
                  Serving law firms across<br />
                  the United States
                </span>
              </div>
            </div>
            <button className="bg-accent text-legal-navy px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm">
              Schedule Free Consultation
            </button>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <p>&copy; 2024 Legal Workforce Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;