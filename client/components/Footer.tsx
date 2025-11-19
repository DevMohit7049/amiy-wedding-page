import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#383F20] text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-playfair italic text-2xl">
              <span className="text-white">Amity</span>
              <span className="text-[#B88083]">Wellness</span>
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Curated wellness bundles for your special day.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/collections"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  All Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/bride"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  For the Bride
                </Link>
              </li>
              <li>
                <Link
                  to="/groom"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  For the Groom
                </Link>
              </li>
              <li>
                <Link
                  to="/wedding-party"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  Wedding Party
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-4">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/ingredients"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  Ingredients
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium text-sm uppercase tracking-wide mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="font-sans text-sm text-white/70 hover:text-[#B88083] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="font-sans text-sm text-white/50 text-center">
            © {new Date().getFullYear()} AmityWellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
