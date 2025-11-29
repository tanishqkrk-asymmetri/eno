"use client";

import React, { useState } from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";
// @ts-ignore - Type definitions issue with package exports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const founders = [
  {
    name: "Gaelic Jara",
    title: "CTO",
    subtitle: "(aka leading the hardware pillar)",
    description: "read about his personal insights from the hardware journey",
    linkedin: "#",
    substack: "#",
    socialPlatform: "substack",
    mainImage: "/team/C.jpg",
  },
  {
    name: "Ina Jovicic",
    title: "CEO",
    subtitle: "(aka leading the commercial pillar)",
    description: "wanna see the behind the scenes of building a start-up",
    linkedin: "#",
    substack: "#",
    socialPlatform: "instagram",
    mainImage: "/team/A.jpg",
  },
  {
    name: "Alex Chalakov",
    title: "CSO",
    subtitle: "(aka leading the AI/software pillar)",
    description:
      "curious to know his thoughts on latest on AI and emerging tech",
    linkedin: "#",
    substack: "#",
    socialPlatform: "x",
    mainImage: "/team/B.jpg",
  },
];

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "instagram":
      return <Instagram className="w-5 h-5" />;
    case "x":
      return <Twitter className="w-5 h-5" />;
    default:
      return <span className="text-sm font-medium">substack</span>;
  }
};

export default function FoundersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const splideOptions = {
    type: "loop" as const,
    focus: "center" as const,
    perPage: 2,
    perMove: 0.5,
    gap: "0rem",
    pagination: false,
    arrows: false,
    start: 1,
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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center  py-8 sm:py-12 overflow-hidden relative">
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
        .splide__pagination__page {
          background: rgba(75, 85, 99, 0.6);
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 0.25rem;
          transition: all 0.3s ease;
          margin: 0 0.25rem;
        }
        .splide__pagination__page.is-active {
          background: rgb(220, 38, 38);
          width: 2rem;
          transform: scale(1);
        }
        .splide__slide {
          opacity: 0.5;
          transform: scale(0.9);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .splide__slide.is-active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }
        .splide__track {
          padding: 1.5rem 0 3rem 0;
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
      <div className="text-center max-w-2xl px-4 sm:px-6 space-y-4 sm:space-y-5 md:space-y-6">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 leading-tight">
            {currentFounder.name}
          </h1>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
              {currentFounder.title}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              {currentFounder.subtitle}
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed px-4">
          {currentFounder.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
          <a
            href={currentFounder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group"
          >
            <Linkedin className="w-5 h-5 group-hover:text-red-500 transition-colors" />
            <span className="text-sm sm:text-base">linkedin</span>
          </a>

          <a
            href={currentFounder.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group"
          >
            {getSocialIcon(currentFounder.socialPlatform)}
            <span className="text-sm sm:text-base capitalize">
              {currentFounder.socialPlatform}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
