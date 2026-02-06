import { Phone, Mail, Instagram, Facebook, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "OUR HOMES", path: "/homes" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const isContactPage = location.pathname === "/contact";
  const textColor = isScrolled || isContactPage ? "text-foreground" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isContactPage ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-gradient-to-b from-black/50 to-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Contact Icons */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:0398151124" className={`${textColor} hover:text-accent transition-colors`}>
            <Phone size={20} strokeWidth={1.5} />
          </a>
          <a href="mailto:contact@azrea.com.au" className={`${textColor} hover:text-accent transition-colors`}>
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <div className={`logo-text ${textColor} text-xl md:text-2xl font-bold tracking-widest`}>
            PrimeNest Realty
          </div>
          <span className={`text-[8px] tracking-[0.4em] mt-1 uppercase transition-colors ${isScrolled ? "text-foreground/60" : "text-white/80"}`}>Real Estate Agency</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${textColor} ${location.pathname === link.path ? "font-semibold" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className={`md:hidden ${textColor}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button className="absolute top-6 right-6 text-foreground" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-xl tracking-[0.2em] font-serif hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <div className="flex gap-6 mt-8">
          <a href="#" className="text-foreground/60 hover:text-foreground">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-foreground">
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Side Bar Socials (Visible on Desktop) */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
        <div className="h-12 w-px bg-foreground/20 self-center mb-2"></div>
        <a href="#" className="social-icon">
          <Instagram size={18} />
        </a>
        <a href="#" className="social-icon">
          <Facebook size={18} />
        </a>
        <div className="h-12 w-px bg-foreground/20 self-center mt-2"></div>
      </div>
    </nav>
  );
};

export default Navbar;
