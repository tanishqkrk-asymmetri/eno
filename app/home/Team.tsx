"use client";

import React, { useState } from "react";
import { Linkedin, Instagram, Twitter, ArrowUpRight } from "lucide-react";
// @ts-ignore - Type definitions issue with package exports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const founders = [
  {
    name: "Gaelic Jara ",
    title: "CTO",
    subtitle: "(aka leading the hardware pillar)",
    description: "read about his personal insights from the hardware journey",
    linkedin: "https://www.linkedin.com/in/gaelicjara/",
    substack:
      "https://substack.com/@gaelicjara?utm_campaign=profile&utm_medium=profile-page",
    socialPlatform: "substack",
    mainImage: "/team/C.jpg",
  },
  {
    name: "Ina Jovicic",
    title: "CEO",
    subtitle: "(aka leading the commercial pillar)",
    description: "wanna see the behind the scenes of building a start-up",
    linkedin: "https://www.linkedin.com/in/ina-jovicic/",
    substack:
      "https://www.instagram.com/ina_founder?igsh=bmozaTM0bmd6NDVh&utm_source=qr",
    socialPlatform: "instagram",
    mainImage: "/team/B.jpg",
  },
  {
    name: "Alex Chalakov",
    title: "CSO",
    subtitle: "(aka leading the AI/software pillar)",
    description:
      "curious to know his thoughts on latest on AI and emerging tech",
    linkedin: "https://www.linkedin.com/in/aleksandarchalakov/",
    substack: "https://x.com/alex_chalakov",
    socialPlatform: "x",
    mainImage: "/team/A.jpg",
  },
];

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "instagram":
      return (
        <div className="underline rounded-full   text-center flex justify-center items-center gap-2 text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
          wanna see the behind the scenes of building a start-up
        </div>
      );
    // return <Instagram className="w-5 h-5" />;
    case "x":
      return (
        <div className="underline rounded-full   text-center flex justify-center items-center gap-2 text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
          curious to know his thoughts on latest on AI and emerging tech
        </div>
      );
    // return <img src="/x.svg" alt="" />;
    default:
      return (
        <div className="underline rounded-full   text-center flex justify-center items-center gap-2 text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
          read about his personal insights from the hardware journey
        </div>
      );
    // return <img className="w-4" src="/substack.svg" alt="" />;
  }
};

export default function FoundersCarousel({ founder }: { founder: number }) {
  const [currentIndex, setCurrentIndex] = useState(founder);
  console.log(founder);
  const splideOptions = {
    type: "loop" as const,
    focus: "center" as const,
    perPage: 1.5,
    perMove: 0.1,
    gap: "0rem",
    pagination: false,
    arrows: false,
    start: founder,
    autoWidth: false,
    updateOnMove: true,
    drag: true,
    snap: true,
    // flickPower: 300,
    classes: {
      arrows: "splide__arrows",
      arrow: "splide__arrow",
      prev: "splide__arrow--prev",
      next: "splide__arrow--next",
      pagination: "splide__pagination",
      page: "splide__pagination__page",
    },
  };

  const currentFounder = founders[currentIndex % founders.length];

  return (
    <div className="min-h-svh bg-black text-white flex flex-col items-center justify-start  py-16 sm:py-12 overflow-hidden relative">
      <style>{`
        .splide__arrow {
  background: rgba(55, 65, 81, 0.9);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  opacity: 1;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.splide__arrow:hover {
  background: rgba(75, 85, 99, 1);
  transform: scale(1.1);
}

.splide__arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.splide__arrow svg {
  fill: white;
  width: 1.25rem;
  height: 1.25rem;
}

.splide__pagination {
  bottom: -2.5rem;
  position: absolute;
}

.splide_pagination_page {
  background: rgba(75, 85, 99, 0.6);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  margin: 0 0.25rem;
}

.splide_pagination_page.is-active {
  background: rgb(220, 38, 38);
  width: 2rem;
  transform: scale(1);
}

.splide__slide {
  opacity: 0.5;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(1) !important
}

.splide__slide.is-active {
  opacity: 1;
  z-index: 10;
  filter: grayscale(0) !important
}

@media (max-width: 768px) {
  .splide__arrow {
    width: 2rem;
    height: 2rem;
  }
  
  .splide__arrow svg {
    width: 1rem;
    height: 1rem;
  }
  
  .splide__pagination {
    bottom: -2rem;
  }
}
      `}</style>

      {/* Splide Carousel */}
      <div className="w-full max-w-5xl mb-8 sm:mb-12 md:mb-16 px-2">
        <Splide
          options={splideOptions}
          onMoved={(_splide: any, newIndex: number) => {
            setCurrentIndex(newIndex);
          }}
        >
          {founders.map((founder, index) => (
            <SplideSlide key={index}>
              <div className="flex justify-center px-2 ">
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px]  h-[373px] sm:h-[427px] md:h-[480px] rounded-[13em]">
                  <img
                    src={founder.mainImage}
                    alt={founder.name}
                    className="absolute inset-0 w-full h-full object-cover object-top z-9999999999 rounded-4xl"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Founder Details */}
      <div className="text-center max-w-2xl px-4 sm:px-6 space-y-4 sm:space-y-5 md:space-y-6 ">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 leading-tight gradient-text">
            {currentFounder.name}
          </h1>
          <div className="gap-2 items-center justify-center flex flex-col">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
              {currentFounder.title}
            </p>
            <a
              href={currentFounder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group flex gap-3 items-center underline"
            >
              <div className="flex">
                <Linkedin className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                {/* <ArrowUpRight size={16} className="-mr-3"></ArrowUpRight> */}
              </div>
            </a>
            {/* <p className="text-base sm:text-lg md:text-xl text-gray-400">
              {currentFounder.subtitle}
            </p> */}
          </div>
        </div>

        {/* <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed px-4">
          {currentFounder.description}
        </p> */}

        <div className="flex flex-col items-center justify-center gap-6 pt-2">
          <a
            href={currentFounder.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group"
          >
            {getSocialIcon(currentFounder.socialPlatform)}
            <div className="flex justify-center items-center mt-6">
              <ArrowUpRight className="w-5 h-5 text-center" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
