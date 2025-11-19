import { ShoppingBag, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#F3E081]/20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <span className="font-playfair italic text-2xl md:text-3xl">
              <span className="text-[#383F20]">Amity</span>
              <span className="text-[#B88083]">Wellness</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="font-sans text-[15px] uppercase tracking-wide text-[#383F20] hover:text-[#B88083] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/collections"
              className="font-sans text-[15px] uppercase tracking-wide text-[#383F20] hover:text-[#B88083] transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="font-sans text-[15px] uppercase tracking-wide text-[#383F20] hover:text-[#B88083] transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-sans text-[15px] uppercase tracking-wide text-[#383F20] hover:text-[#B88083] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-[#B88083]/10 rounded-full transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#383F20]" />
            </button>

            <button
              className="md:hidden p-2 hover:bg-[#B88083]/10 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 text-[#383F20]" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#F3E081]/20">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="font-sans text-[15px] uppercase tracking-wide text-[#383F20] hover:text-[#B88083] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/collections"
                className="font-sans text-[15px] uppercase tracking-wide text-[#383F20] hover:text-[#B88083] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="font-sans text-[15px] uppercase tracking-wide text-[#383F20] hover:text-[#B88083] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-sans text-[15px] uppercase tracking-wide text-[#383F20] hover:text-[#B88083] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
