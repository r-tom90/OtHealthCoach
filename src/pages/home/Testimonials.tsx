import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { testimonials } from "../../constants";

interface Props {
  testimonial?: {
    quoteP1?: string;
    quoteP2?: string;
    name?: string;
    role?: string;
  };
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="border p-3 text-black border-black w-[264px] xs:w-[290px] h-[370px] text-base flex flex-col justify-between mx-3 xs:mx-7 xm:mx-14 md:mx-0 font-light">
      <div className="flex flex-col mx-1 mt-1">
        <p className="">{testimonial?.quoteP1}</p>
        <p className="mt-4">{testimonial?.quoteP2}</p>
      </div>
      {/* <div className="border-t-2 border-black my-4 mx-2" /> */}
      <div className="border-t-2 border-black">
        <p className="mt-2 text-right text-sm">- {testimonial?.name}</p>
        <p className="text-right text-sm">{testimonial?.role}</p>
      </div>
    </div>
  );
};

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      });
      startTimer();
    }

    return () => {
      stopTimer();
    };
  }, [emblaApi]);

  const handleDotClick = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setCurrentIndex(index);
      stopTimer();
      startTimer();
    }
  };

  const renderDots = () => {
    if (!emblaApi) {
      return null;
    }

    const dotElements = Array.from(
      Array(emblaApi.scrollSnapList().length).keys()
    );

    return (
      <div className="flex justify-center mt-4">
        {dotElements.map((index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div className="flex-initial flex-shrink-0 w-full" key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      {renderDots()}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#eed0dd] h-screen sm:h-full text-white flex flex-col py-20 px-4 sm:px-8"
    >
      <h2 className="font-bold text-3xl text-[#644f44] mb-10">Happy Clients</h2>
      <div className="sm:hidden">
        <EmblaCarousel />
      </div>
      <div className="hidden sm:block">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 justify-center items-center justify-items-center px-8 xl:px-0">
          <TestimonialCard testimonial={testimonials[0]} />
          <TestimonialCard testimonial={testimonials[1]} />
          <TestimonialCard testimonial={testimonials[2]} />
          <TestimonialCard testimonial={testimonials[3]} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
