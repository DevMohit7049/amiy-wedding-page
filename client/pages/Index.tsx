import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice: string;
  discount?: string;
  images: {
    left: string;
    center: string;
    right: string;
  };
}

function ProductCard({
  title,
  subtitle,
  description,
  price,
  originalPrice,
  discount,
  images,
}: ProductCardProps) {
  return (
    <div className="px-3 md:px-4">
      <div className="relative">
        <div className="relative rounded-md overflow-hidden bg-gradient-to-br from-[#F1BDBD] to-[#FFFBEB] min-h-[260px] pt-[95px] px-5 pb-20">
          <div className="absolute top-0 left-0 right-0 h-[90px] bg-[#B88083] border-t border-[#F3E081]/30 px-5 pt-4">
            <h3 className="font-playfair italic text-[20px] md:text-[22px] leading-[130%] tracking-[0.44px] uppercase text-white mb-1 max-w-[240px]">
              {title}
            </h3>
          </div>

          <div className="relative z-10">
            <p className="font-sans font-medium text-[16px] md:text-[17px] leading-[130%] tracking-[0.34px] uppercase text-[#B88083] mb-2">
              {subtitle}
            </p>
            <p className="font-sans text-[13px] md:text-[14px] leading-[130%] tracking-[0.28px] capitalize text-[#4B4B4B] mb-6 max-w-[240px]">
              {description}
            </p>

            <div className="space-y-3">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-sans text-[20px] md:text-[23px] leading-[130%] text-[#4B4B4B] font-normal">
                  {price}
                </span>
                <span className="font-sans text-[20px] md:text-[23px] leading-[130%] text-[#939090] line-through font-normal">
                  {originalPrice}
                </span>
                {discount && (
                  <span className="font-sans text-[17px] md:text-[19px] leading-[130%] text-[#A76A6D] font-normal">
                    {discount}
                  </span>
                )}
              </div>

              <button className="inline-flex items-center justify-center h-[36px] px-5 bg-[#B88083] border border-[#B88083] text-white font-sans font-medium text-[14px] md:text-[16px] uppercase hover:bg-[#A76A6D] active:scale-95 transition-all">
                BUY IT NOW
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[280px] h-[320px] pointer-events-none -translate-y-8">
          <div className="relative w-full h-full">
            <img
              src={images.left}
              alt=""
              className="absolute right-[160px] top-0 w-[100px] h-auto object-contain z-10"
            />
            <img
              src={images.center}
              alt=""
              className="absolute right-[85px] top-[5px] w-[95px] h-auto object-contain z-20"
            />
            <img
              src={images.right}
              alt=""
              className="absolute right-[-10px] top-0 w-[140px] h-auto object-contain z-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const CustomPrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden"
      aria-label="Previous"
    >
      <ChevronLeft className="w-6 h-6 text-[#383F20]/30 stroke-[2.5]" />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden"
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6 text-[#383F20] stroke-[2.5]" />
    </button>
  );
};

export default function Index() {
  const sliderRef = useRef<Slider>(null);

  const products = [
    {
      title: "Pre-Wedding Glow Ritual",
      subtitle: "For the Bride",
      description: "Tranquil Tonic, Acne SOS, Gut Reset",
      price: "₹11,040",
      originalPrice: "₹ 12,000",
      discount: "8% off",
      images: {
        left: "https://api.builder.io/api/v1/image/assets/TEMP/0ebad63ee0c83270a7b3c5773235b070cc05fc37?width=290",
        center:
          "https://api.builder.io/api/v1/image/assets/TEMP/d181d80669e8ae1749d30f45aefba1145aae9b84?width=249",
        right:
          "https://api.builder.io/api/v1/image/assets/TEMP/d97e291ea7ecdd08a8cfabf940b0dd5fa13226fc?width=356",
      },
    },
    {
      title: "The Wingman Edit",
      subtitle: "For the Groomsmen",
      description: "Muscle Mercy, Tranquil Tonic, Gut Reset",
      price: "₹11,040",
      originalPrice: "₹ 12,000",
      discount: "8% off",
      images: {
        left: "https://api.builder.io/api/v1/image/assets/TEMP/6156e22e45fbeaca3e52456033c5ab33132229bd?width=290",
        center:
          "https://api.builder.io/api/v1/image/assets/TEMP/d181d80669e8ae1749d30f45aefba1145aae9b84?width=249",
        right:
          "https://api.builder.io/api/v1/image/assets/TEMP/d97e291ea7ecdd08a8cfabf940b0dd5fa13226fc?width=356",
      },
    },
    {
      title: "Bridesmaid's Brightening Kit",
      subtitle: "For the Bride's Besties",
      description: "Acne SOS, Gut Reset, Period Pacifier",
      price: "₹11,040",
      originalPrice: "₹ 12,000",
      discount: "8% off",
      images: {
        left: "https://api.builder.io/api/v1/image/assets/TEMP/0ebad63ee0c83270a7b3c5773235b070cc05fc37?width=290",
        center:
          "https://api.builder.io/api/v1/image/assets/TEMP/9a3e4db91570d4f71285ba034d117df0a0461abf?width=249",
        right:
          "https://api.builder.io/api/v1/image/assets/TEMP/a7db4bd75c355936c475bc7df971ad1f78b92591?width=356",
      },
    },
    {
      title: "Groom's Power Prep",
      subtitle: "For the Groom",
      description: "Muscle Mercy, Acne SOS, Tranquil Tonic",
      price: "₹11,280",
      originalPrice: "₹ 12,000",
      images: {
        left: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=290",
        center:
          "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=249",
        right:
          "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=356",
      },
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="relative w-full bg-gradient-to-br from-[#FFF5F5] to-[#FFFBF0] py-16 md:py-20 lg:py-24">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between mb-12 md:mb-16">
              <h1 className="font-playfair italic text-[42px] sm:text-[56px] md:text-[64px] lg:text-[74px] leading-[130%] tracking-[1.48px] uppercase">
                <span className="text-[#383F20]">New </span>
                <span className="text-[#B88083]">Launches</span>
              </h1>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="w-[24px] h-[24px] flex items-center justify-center bg-transparent hover:bg-[#383F20]/5 rounded-full transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-[#383F20]/40 stroke-[2.5]" />
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  className="w-[24px] h-[24px] flex items-center justify-center bg-transparent hover:bg-[#383F20]/5 rounded-full transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4 text-[#383F20] stroke-[2.5]" />
                </button>
              </div>
            </div>

            <div className="relative">
              <Slider ref={sliderRef} {...settings}>
                {products.map((product, index) => (
                  <div key={index}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </Slider>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                style={{
                  aspectRatio: "1.42",
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  marginTop: "20px",
                  minHeight: "20px",
                  minWidth: "20px",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
        </div>

        <section className="py-20 md:py-24 bg-[#FFFBEB]/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair italic text-[36px] md:text-[42px] lg:text-[48px] text-[#383F20] mb-6 leading-tight">
              Wedding Wellness Collection
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-[#4B4B4B] max-w-2xl mx-auto">
              Curated wellness bundles designed to help you and your loved ones
              look and feel your absolute best for the big day.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
