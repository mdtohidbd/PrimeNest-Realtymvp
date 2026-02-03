import { Instagram, Facebook, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 mb-12">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex flex-col">
              <div className="logo-text text-white text-3xl">
                A <span className="mx-2">—</span><span className="mx-2">—</span><span className="mx-2">—</span> Z
              </div>
              <span className="text-[10px] tracking-[0.4em] text-white/40 mt-1 uppercase">Real Estate Agency</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <Link to="/about" className="footer-link text-white/60 hover:text-white uppercase tracking-widest text-xs">About</Link>
            <Link to="/homes" className="footer-link text-white/60 hover:text-white uppercase tracking-widest text-xs">Our Homes</Link>
            <Link to="/report" className="footer-link text-white/60 hover:text-white uppercase tracking-widest text-xs">Property Report</Link>
            <Link to="/contact" className="footer-link text-white/60 hover:text-white uppercase tracking-widest text-xs">Contact</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Suite 2, Level 1, 205-207 Riversdale Road, Hawthorn, VIC 3122
              <br />
              <a href="mailto:contact@azrea.com.au" className="hover:text-white transition-colors">contact@azrea.com.au</a>
              <br />
              03 9815 1124
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-6 mb-6 md:mb-0">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <div className="flex gap-8 text-[10px] tracking-widest text-white/40 uppercase mt-auto">
              <a href="#" className="hover:text-white">Due Diligence</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left text-[10px] tracking-widest text-white/20 uppercase">
          &copy; Copyright {new Date().getFullYear()} @ A—Z Real Estate Agency
        </div>
      </div>
    </footer>
  );
};

export default Footer;
