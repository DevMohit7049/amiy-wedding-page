import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#FFF5F5] to-[#FFFBF0] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="font-playfair italic text-[48px] md:text-[64px] text-[#383F20] mb-6">
            {title}
          </h1>
          <p className="font-sans text-[18px] text-[#4B4B4B] mb-8">
            {description ||
              "This page is coming soon. Continue prompting to add content to this section."}
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center h-[44px] px-8 bg-[#B88083] text-white font-sans font-medium text-[16px] uppercase hover:bg-[#A76A6D] active:scale-95 transition-all"
          >
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
