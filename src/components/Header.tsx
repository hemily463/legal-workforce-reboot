import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Roles", href: "/roles" },
    { label: "Candidates", href: "/candidates" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Guarantee", href: "/guarantee" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LW</span>
            </div>
            <span className="font-bold text-xl text-foreground">
              Legal Workforce Inc.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.slice(0, 8).map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="cta" size="sm" className="hidden md:inline-flex">
            Schedule Consultation
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/40 shadow-lg">
          <nav className="container py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button variant="cta" size="sm" className="w-full">
                Schedule Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;