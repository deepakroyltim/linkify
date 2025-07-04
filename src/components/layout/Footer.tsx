import { Divider, Link } from "@heroui/react";
import { FaPaperclip, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="w-full bg-amber-50 dark:bg-gray-800 border-t border-divider py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h1 className="flex items-center text-2xl font-bold mb-4">
                <FaPaperclip className="text-primary me-2" />
                <span className="text-primary">Li</span>
                <span>nki</span>
                <span className="text-primary">fy</span>
              </h1>
              <p className="text-sm text-foreground/60 mb-4">
                Your all-in-one platform for creating, managing, and sharing branded links and QR codes.
              </p>
              <div className="flex space-x-3">
                <Link href="https://github.com/linkify" className="text-foreground/60 hover:text-primary transition-colors">
                  <FaGithub className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com/company/linkify" className="text-foreground/60 hover:text-primary transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/linkify" className="text-foreground/60 hover:text-primary transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </Link>
                <Link href="mailto:support@linkify.com" className="text-foreground/60 hover:text-primary transition-colors">
                  <FaEnvelope className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link as={RouterLink} to="/" className="text-foreground/60 hover:text-primary transition-colors">URL Shortener</Link></li>
                <li><Link as={RouterLink} to="/" className="text-foreground/60 hover:text-primary transition-colors">QR Generator</Link></li>
                <li><Link as={RouterLink} to="/dashboard" className="text-foreground/60 hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link as={RouterLink} to="/pricing" className="text-foreground/60 hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link as={RouterLink} to="/about" className="text-foreground/60 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link as={RouterLink} to="/guide" className="text-foreground/60 hover:text-primary transition-colors">Guide</Link></li>
                <li><Link as={RouterLink} to="/pricing" className="text-foreground/60 hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link as={RouterLink} to="/faq" className="text-foreground/60 hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link as={RouterLink} to="/contact" className="text-foreground/60 hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <Divider className="my-6" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-foreground/60">
              <span>© 2024 Linkify. All rights reserved.</span>
              <span>•</span>
              <span>Built with <FaHeart className="inline text-red-500 mx-1" /> using React & Node.js</span>
            </div>
            <div className="text-sm text-foreground/60">
              <span>Made with ❤️ to simplify your link sharing experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
