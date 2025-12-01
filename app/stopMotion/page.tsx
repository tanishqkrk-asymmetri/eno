"use client";

import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import FoundersCarousel from "./Team";
import Image from "next/image";
import ENOughLanding from "./Launch";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  X,
} from "lucide-react";

// Founder data
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

export default function StopMotion() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [backToHome, setBackToHome] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const [announce, setAnnounce] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const videoRefFrameA = useRef<HTMLVideoElement>(null);

  // console.log(videoRefFrameA.current?.currentTime);

  const [showButtons, setShowButtons] = useState(false);
  const [founder, setFounder] = useState<null | number>(null);
  const [productPageOn, setProductPageOn] = useState(false);
  const [played, setPlayed] = useState(false);
  // const [played, setPlayed] = useState(false);

  const [currentImage, setCurrentImage] = useState("000");
  const [currentProductImage, setCurrentProductImage] = useState("000");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    (async function () {
      const x = await fetch(`/miniframe/frame487.webp`);
      if (x.status === 200) {
        setLoading(false);
        console.log(x);
      }
    })();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Animations 1 & 2 complete in first 25% of total scroll
  const leftXOutput = useMemo(
    () => (isMobile ? ["0%", "-2000%"] : ["0%", "-200%"]),
    [isMobile]
  );
  const rightXOutput = useMemo(
    () => (isMobile ? ["0%", "20000%"] : ["0%", "200%"]),
    [isMobile]
  );
  const leftX = useTransform(scrollYProgress, [0.75, 1], leftXOutput);
  const rightX = useTransform(scrollYProgress, [0.75, 1], rightXOutput);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);

  const frameCount = 488; // 0-487 = 488 frames
  const { images, isLoaded, loadProgress } = useImageSequence(
    frameCount,
    "/miniframe/frame{frame}.webp" // Adjust extension if needed (.png, .webp, etc.)
  );
  const {
    images: images2,
    isLoaded: isLoaded2,
    loadProgress: loadProgress2,
  } = useImageSequence2(
    frameCount,
    "/miniframe2/frame{frame}.webp" // Adjust extension if needed (.png, .webp, etc.)
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameScrollEnd = 0.8;
    const frameProgress = Math.min(1, latest / frameScrollEnd);

    // videoRefFrameA.current.currentTime = latest * 10 * 14;

    const frameIndex = Math.min(
      Math.floor(latest * frameCount),
      frameCount - 1
    );
    setCurrentFrame(frameIndex);

    // if (!isLoaded || !canvasRef.current || images.length === 0) return;

    // const canvas = canvasRef.current;
    // const ctx = canvas.getContext("2d");
    // if (!ctx) return;

    // // Calculate which frame to show
    // const frameIndex = Math.min(
    //   Math.floor(latest * frameCount),
    //   frameCount - 1
    // );

    // const img = images[frameIndex];
    // if (img && img.complete) {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // }

    const update = Math.floor(frameProgress * 487).toLocaleString("en-US", {
      minimumIntegerDigits: 3,
      useGrouping: false,
    });

    const productScrollStart = 0.01;
    const productProgress = Math.max(
      0,
      (latest - productScrollStart) / (1 - productScrollStart)
    );
    const updateProduct = Math.floor(productProgress * 590).toLocaleString(
      "en-US",
      {
        minimumIntegerDigits: 3,
        useGrouping: false,
      }
    );

    const videoContainer = document.querySelector(".video-container");
    if (videoContainer) {
      if (parseInt(currentImage) > 417) {
        // console.log("PLAYINGGG");
        if (videoRef.current) {
          // videoRef.current.play();
        }
      } else {
        // console.log("PLAYINGGG");
        // videoRef.current.pause();
      }
    }

    setCurrentImage(update);
    if (productPageOn) {
      setCurrentProductImage(updateProduct);
    }
  });

  useEffect(() => {
    if (window) {
      // Always scroll to top on mount, regardless of isLoaded
      window.scrollTo(0, 0);
      if (isLoaded) {
        window.scrollTo(0, 0);
      }
    }
  }, [isLoaded]);

  // Reset videos and states on mount/refresh to start from beginning
  useEffect(() => {
    // Reset states to initial values
    setCurrentImage("000");
    setCurrentProductImage("000");
    setPlayed(false);
    setShowButtons(false);

    const resetVideos = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
        videoRef.current.load();
      }
      if (videoRef2.current) {
        videoRef2.current.currentTime = 0;
        videoRef2.current.pause();
        videoRef2.current.load();
      }
      if (videoRef3.current) {
        videoRef3.current.currentTime = 0;
        videoRef3.current.pause();
        videoRef3.current.load();
      }
    };

    resetVideos();

    // Also reset when user returns to tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resetVideos();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Draw first frame when loaded
  useEffect(() => {
    if (isLoaded && canvasRef.current && images[0]) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.drawImage(
          images[0],
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      }
    }
  }, [isLoaded, images]);
  const girl1 = useTransform(
    scrollYProgress,
    [0.96, 0.97],
    isMobile ? ["300%", "0%"] : ["100%", "0%"]
  );
  const girl2 = useTransform(
    scrollYProgress,
    [0.97, 0.98],
    isMobile ? ["300%", "0%"] : ["100%", "0%"]
  );
  const girl3 = useTransform(
    scrollYProgress,
    [0.98, 1],
    isMobile ? ["300%", "0%"] : ["100%", "0%"]
  );
  const girl1opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const girl2opacity = useTransform(scrollYProgress, [0.93, 1], [0, 1]);
  const girl3opacity = useTransform(scrollYProgress, [0.89, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 10]);
  // const opacityLogo = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  useEffect(() => {
    if (currentImage > "457" && !played && videoRef.current) {
      videoRef.current.play();
      // @ts-expect-error later
      videoRef2.current.play();
      // @ts-expect-error later
      videoRef3.current.play();
      setTimeout(() => {
        setPlayed(true);
      }, 35000);
    }
  }, [currentImage]);

  useEffect(() => {
    if (!isLoaded) return;
    if (productPageOn) return; // Don't run if product page is open
    let isAutoScrolling = true;
    let isPaused = false;
    let startTime: number | null = null;
    let pausedTime: number = 0;
    let pauseStartTime: number | null = null;
    let animationFrameId: number;
    let userHasScrolled = false;
    let isScrollingProgrammatically = false;

    const autoScroll = (timestamp: number) => {
      if (!isAutoScrolling || userHasScrolled) return;

      // If paused, don't update scroll but keep the animation frame going
      if (isPaused) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime - pausedTime;
      const progress = Math.min(elapsed / 10000, 1);
      // const progress = Math.min(elapsed / 5000, 1);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const easeProgress =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      isScrollingProgrammatically = true;
      window.scrollTo({ top: easeProgress * maxScroll, behavior: "auto" });

      // Reset flag after a short delay
      setTimeout(() => {
        isScrollingProgrammatically = false;
      }, 10);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    // Detect user scroll and stop auto-scroll permanently
    const handleUserScroll = () => {
      // Ignore if we're scrolling programmatically
      if (isScrollingProgrammatically) return;

      if (isAutoScrolling) {
        userHasScrolled = true;
        isAutoScrolling = false;
        isPaused = false;
        cancelAnimationFrame(animationFrameId);
        console.log("User took control");
      }
    };

    // Handle click to pause/play
    const handleClick = (e: MouseEvent) => {
      // Ignore if we're scrolling programmatically or if clicking on interactive elements
      if (isScrollingProgrammatically) return;

      const target = e.target as HTMLElement;
      // Don't toggle if clicking on buttons, links, or interactive elements
      if (
        target.closest('button, a, input, select, textarea, [role="button"]')
      ) {
        return;
      }

      if (isAutoScrolling && !userHasScrolled) {
        isPaused = !isPaused;
        console.log(isPaused ? "Paused" : "Playing");

        if (isPaused) {
          // Record when we paused
          pauseStartTime = performance.now();
        } else {
          // Resume - add the paused duration to total pausedTime
          if (pauseStartTime !== null) {
            pausedTime += performance.now() - pauseStartTime;
            pauseStartTime = null;
          }
        }
      }
    };

    // Listen for user scroll events
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("touchstart", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    window.addEventListener("keydown", (e) => {
      // Detect arrow keys, space, page up/down
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "Space",
          "PageUp",
          "PageDown",
          "Home",
          "End",
        ].includes(e.code)
      ) {
        handleUserScroll();
      }
    });

    // Start auto-scroll after a short delay
    const startDelay = setTimeout(() => {
      animationFrameId = requestAnimationFrame(autoScroll);
    }, 500);

    // Cleanup
    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchstart", handleUserScroll);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, [isLoaded, backToHome, productPageOn]);

  useEffect(() => {
    if (!isLoaded) return;

    let isAutoScrolling = true;
    let startTime: number | null = null;
    let animationFrameId: number;
    let userHasScrolled = false;
    let isScrollingProgrammatically = false;

    const autoScroll = (timestamp: number) => {
      if (!isAutoScrolling || userHasScrolled) return;

      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / 20000, 1);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const easeProgress =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      isScrollingProgrammatically = true;
      window.scrollTo({ top: easeProgress * maxScroll, behavior: "auto" });

      // Reset flag after a short delay
      setTimeout(() => {
        isScrollingProgrammatically = false;
      }, 10);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    // Detect user scroll and stop auto-scroll permanently
    const handleUserScroll = () => {
      // Ignore if we're scrolling programmatically
      if (isScrollingProgrammatically) return;

      if (isAutoScrolling) {
        userHasScrolled = true;
        isAutoScrolling = false;
        cancelAnimationFrame(animationFrameId);
        console.log("User took control");
      }
    };

    // Listen for user scroll events
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchstart", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    window.addEventListener("keydown", (e) => {
      // Detect arrow keys, space, page up/down
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "Space",
          "PageUp",
          "PageDown",
          "Home",
          "End",
        ].includes(e.code)
      ) {
        handleUserScroll();
      }
    });

    // Start auto-scroll after a short delay
    const startDelay = setTimeout(() => {
      animationFrameId = requestAnimationFrame(autoScroll);
    }, 500);

    // Cleanup
    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchstart", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, [productPageOn]);

  useEffect(() => {
    if (loadProgress === 100) {
      document.body.style.overflow = "scroll";
      // setTimeout(() => {
      //   // window.scrollTo({
      //   //   top: document.body.getBoundingClientRect().bottom,
      //   //   left: 0,
      //   //   behavior: "smooth",
      //   // });
      //   document.querySelector("#bottom-new")?.scrollIntoView({
      //     behavior: "smooth",
      //   });
      // }, 0);
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [loadProgress]);

  return (
    <div
      ref={containerRef}
      className="bg-black relative"
      style={{
        minHeight: productPageOn ? "1000vh" : "400vh",
      }}
    >
      <div id="top"></div>

      <motion.div
        style={{
          opacity,
        }}
        className="fixed  z-999999999 flex justify-center  items-center w-full h-screen flex-col pointer-events-none"
      >
        <div className="flex flex-col justify-center items-center gap-9">
          <img src="/logo-new.svg" className="neon w-52" alt="" />
          {loadProgress < 100 && (
            <div className="overflow-hidden w-56 rounded-xl bg-zinc-800">
              <motion.div
                className="h-1 rounded-xl w-56 loadig"
                style={{
                  width: `${loadProgress}%`,
                }}
                transition={{
                  type: "keyframes",
                }}
              ></motion.div>
            </div>
          )}
        </div>
        {loadProgress === 100 && (
          <div id="sd-container" className="absolute bottom-6 max-md:bottom-32">
            <div className="arrow"></div>
            <div className="arrow"></div>
          </div>
        )}
      </motion.div>

      {/* <link
        className="fixed top-0 h-screen object-cover w-screen"
        as="image"
        href={`/mainframe/frame${currentImage}.png`}
        rel="preload"
      /> */}

      {/* <video
        ref={videoRefFrameA}
        className="fixed top-0 h-screen object-cover w-screen"
        src="/frame1.mp4"
      ></video> */}

      {/* <canvas
        ref={canvasRef}
        className="fixed top-0 h-screen object-cover w-screen"
      /> */}

      {/* <img
        src={images[currentFrame]?.src}
        className="fixed top-0 h-screen object-cover w-screen"
        alt="Scroll frame"
      /> */}

      {images && isLoaded && (
        <img
          className={`fixed top-0 h-screen object-cover   duration-200   md:w-screen  /${
            currentImage > "420" && "max-md:translate-x-10 max-md:w-[150vw]"
          }
          `}
          src={`/miniframe/frame${currentImage}.webp`}
          alt=""
        />
      )}

      {/* <AnimatePresence>
        {parseInt(currentImage) < 418 && !loading && (
          <>
            {new Array(487).fill("").map((x, i) => {
              if (i === parseInt(currentImage))
                return (
                  <motion.div>
                    <Image
                      width={800}
                      height={800}
                      preload
                      className="fixed top-0 h-screen object-cover w-screen"
                      src={`/mainframe/frame${currentImage}.png`}
                      alt=""
                    />
                  </motion.div>
                );
            })}
          </>
        )}
      </AnimatePresence> */}
      {/* <AnimatePresence>
        {parseInt(currentImage) > 417 && (
          <motion.img
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 1,
            }}
            animate={{
              opacity: 1,
            }}
            style={{
              scale,
              // opacity: opacityLogo,
            }}
            className="fixed top-0 h-screen object-cover w-screen  z-999999999 pointer-events-none"
            src={`/logo-small.svg`}
            alt=""
          />
        )}
      </AnimatePresence> */}

      <AnimatePresence>
        <motion.div className="min-h-screen max-h-screen overflow-hidden fixed left-1/2 -translate-x-1/2 w-full video-container z-99999999 flex justify-between pointer-events-none">
          {/* <motion.div
            style={{
              x: leftX,
            }}
            className="bg-black w-[42%] max-md:w-[20%] h-screen "
          ></motion.div> */}
          {/* <motion.div
            style={{
              x: rightX,
            }}
            className="bg-black w-[43%] max-md:w-[20%] h-screen"
          ></motion.div> */}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {played && parseInt(currentImage) >= 457 && (
          // Show red circle after animation 2 completes
          <>
            <motion.div
              onClick={() => {
                if (!productPageOn) {
                  setProductPageOn(true);
                  setTimeout(() => {
                    document.querySelector("#top")?.scrollIntoView();
                  }, 1500);
                }
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500/20 rounded-full w-10 aspect-square fixed    top-[50%] left-[52%] flex justify-center items-center cursor-pointer duration-200 z-999999 max-md:left-[46%] max-md:top-[50%]"
            >
              {/* Subtle Ripple animations - increased opacity and slower */}
              <motion.div
                className="absolute inset-0 border-red-400/40 border rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 2.5, opacity: [0, 0.25, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-red-400/40 border rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 2.5, opacity: [0, 0.25, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.8,
                }}
              />
              <motion.div
                className="absolute inset-0 border-red-400/40 border rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 2.5, opacity: [0, 0.25, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.6,
                }}
              />

              <motion.div className="bg-red-800 border-2 border-red-500 rounded-full w-6 aspect-square flex justify-center items-center relative">
                <div
                  style={{
                    // background: productPageOn ? "black" : "#FF0000",
                    // scale: productPageOn ? 150 : 1,
                    transition: "all 1s ease-in-out",
                  }}
                  onClick={(e) => {
                    if (productPageOn) {
                      e.stopPropagation();
                      setProductPageOn(false);
                    }
                  }}
                  className="rounded-full w-4 aspect-square"
                ></div>
              </motion.div>
            </motion.div>
            <motion.div
              onClick={() => {
                setFounder(0);
              }}
              className="border-white rounded-full border p-0.5 group-hover:p-1.5 aspect-square fixed top-[43%] left-[32%] max-md:top-[48%] max-md:left-[20%] z-9999  flex justify-center items-center cursor-pointer hover:scale-110 transition-transform group"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Pulsing Ripple animations */}
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.0,
                }}
              />

              <div className="border-white rounded-full border p-0.5 group-hover:p-1.5  aspect-square z-9999  flex justify-center items-center duration-200 cursor-pointer">
                <div className="bg-white rounded-full w-1  aspect-square group-hover:scale-110"></div>
              </div>
            </motion.div>

            <motion.div
              onClick={() => {
                setFounder(1);
              }}
              className="border-white rounded-full border p-0.5 group-hover:p-1.5 aspect-square fixed top-[65%] left-[45%] z-9999  flex justify-center items-center cursor-pointer hover:scale-110 transition-transform group max-md:top-[70%] max-md:left-[40%]"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              {/* Pulsing Ripple animations */}
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.0,
                }}
              />

              <div className="border-white rounded-full border p-0.5 group-hover:p-1.5  aspect-square z-9999  flex justify-center items-center duration-200 cursor-pointer">
                <div className="bg-white rounded-full w-1  aspect-square group-hover:scale-110"></div>
              </div>
            </motion.div>
            <motion.div
              onClick={() => {
                setFounder(2);
              }}
              className="border-white rounded-full border p-0.5 group-hover:p-1.5 aspect-square fixed top-[45%] right-[30%] z-9999  flex justify-center items-center cursor-pointer hover:scale-110 transition-transform group max-md:top-[50%] max-md:right-[15%]"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              {/* Pulsing Ripple animations */}
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border-2 rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.0,
                }}
              />

              <div className="border-white rounded-full border p-0.5 group-hover:p-1.5  aspect-square z-9999  flex justify-center items-center duration-200 cursor-pointer">
                <div className="bg-white rounded-full w-1  aspect-square group-hover:scale-110"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {productPageOn && (
          <motion.div
            className="bg-black h-screen w-screen z-99999999999999 fixed top-0 left-0"
            initial={{
              y: "100%",
              scale: 1.2,
            }}
            animate={{
              y: "0%",
              scale: 1,
            }}
            exit={{
              y: "100%",
              scale: 1.2,
            }}
            transition={{
              // type: "spring",
              duration: 0.7,
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              // opacity: 0,
              opacity: parseInt(currentImage) > 457 ? 1 : 0,
              // opacity: parseInt(currentImage) > 417 ? 1 : 0,
            }}
            className={`min-h-screen max-h-screen overflow-hidden fixed left-1/2 -translate-x-1/2 w-full video-container ${
              parseInt(currentImage) <= 457 ? "pointer-events-none" : ""
            }`}
            style={{
              visibility: parseInt(currentImage) > 457 ? "visible" : "hidden",
            }}
          >
            <div className="absolute top-0 px-16 p-10 z-999999999 text-white text-xl max-md:px-3 ">
              <img src="/logo-new.png" className="w-16" alt="" />
            </div>
            <div className="absolute top-0 right-0 px-16 p-10 z-9 text-white max-md:px-3 z-99999999">
              {!played && (
                <button
                  onClick={() => {
                    setPlayed(true);
                    setShowButtons(true);
                    document.querySelector("#bottom")?.scrollIntoView();
                    // document.querySelector("video").playbackRate = 16.0;
                    // @ts-expect-error later
                    videoRef.current.currentTime =
                      // @ts-expect-error later

                      videoRef.current.duration - 2;
                    // @ts-expect-error later

                    videoRef2.current.currentTime =
                      // @ts-expect-error later

                      videoRef2.current.duration - 2;
                    // @ts-expect-error later
                    videoRef3.current.currentTime =
                      // @ts-expect-error later

                      videoRef3.current.duration - 2;
                  }}
                  className="p-3 rounded-full  cursor-pointer py-2  hover:bg-black/30 backdrop-blur-xl flex lowercase"
                >
                  Skip video{" "}
                  <div className="flex">
                    <ChevronRight className="-mr-5"></ChevronRight>
                    <ChevronRight className=""></ChevronRight>
                  </div>
                </button>
              )}
            </div>

            {played && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="bg-linear-to-b from-transparent to-black h-96 max-md:h-auto min-h-[200px] w-full absolute z-999999999999999 bottom-0 flex flex-col max-md:flex-col md:flex-row justify-between items-end max-md:items-end p-8 max-md:p-6 max-md:pb-8 md:p-16 gap-6 max-md:gap-0 "
              >
                <div className="space-y-4 max-md:space-y-3 w-full max-md:w-full md:w-auto">
                  <div className="text-white text-2xl max-md:text-xl md:text-4xl font-light max-md:text-center ">
                    your mini AI bodyguard
                  </div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    onClick={() => setShowWaitlist(true)}
                    className="relative pre-order-container w-48 max-md:w-full md:w-48 block  cursor-pointer "
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: "10%",
                      }}
                      exit={{
                        opacity: 0,
                        y: "10%",
                      }}
                      animate={{
                        opacity: 1,
                        y: "0%",
                      }}
                      transition={{
                        delay: 0.5,
                      }}
                      className="relative pre-order-container w-48 block max-md:w-full "
                    >
                      <div className="pre-order-hover"></div>
                      <div className="pre-order-outside p-4  w-full h-full"></div>
                      <div className="border-2 border-red-600 pre-order-inside p-4  w-full h-full text-center text-white lowercase">
                        Join Waitlist
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="w-full max-md:w-full md:w-auto max-md:hidden group relative">
                  <button
                    onClick={() => {
                      setAnnounce(true);
                    }}
                    className="border border-white/50 flex justify-center items-center gap-2 text-white p-3 rounded-full  duration-200 cursor-pointer hover:bg-red-800 hover:text-white hover:border-red-900 text-sm ready "
                  >
                    <div className="absolute w-full h-full bg-black/80 rounded-full group-hover:opacity-0 duration-300 pointer-events-none"></div>
                    <p className="z-9">
                      eNO is ready to announce the next step
                    </p>{" "}
                    <ArrowUpRight className="z-9"></ArrowUpRight>
                  </button>
                </div>
              </motion.div>
            )}

            <AnimatePresence>
              {!played ? (
                <>
                  <motion.video
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    onTimeUpdate={(e) => {
                      if (e.timeStamp > 40000 && videoRef.current) {
                        setShowButtons(true);
                        setPlayed(true);
                      }
                    }}
                    muted
                    playsInline
                    ref={videoRef}
                    src="https://res.cloudinary.com/dyi7gdcpj/video/upload/v1764407817/hero2_iik12b.mp4"
                    preload="auto"
                    className="w-full h-screen object-contain md:object-cover md:scale-150   video  z-9999 relative max-md:hidden"
                  ></motion.video>
                  <motion.video
                    playsInline
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    onTimeUpdate={(e) => {
                      if (e.timeStamp > 40000 && videoRef.current) {
                        setShowButtons(true);
                        setPlayed(true);
                      }
                    }}
                    muted
                    ref={videoRef3}
                    src="https://res.cloudinary.com/dyi7gdcpj/video/upload/v1764419674/heroMobile_hmusmk.mp4"
                    preload="auto"
                    className="w-full h-screen object-contain md:object-cover md:scale-150   video  z-9999 relative hidden max-md:block"
                  ></motion.video>
                </>
              ) : (
                <>
                  <motion.img
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    src={"/endframe.webp"}
                    className="h-screen object-cover max-md:hidden "
                  ></motion.img>
                  <motion.img
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    src={"/endframe-mobile.webp"}
                    className="h-screen object-contain z-9999999999 scale-140 hidden max-md:block"
                  ></motion.img>
                </>
              )}
            </AnimatePresence>
            <video
              muted
              ref={videoRef2}
              src=""
              playsInline
              className="w-full h-screen object-cover md:object-cover scale-150   video  blur-lg fixed top-0 z-0 hidden max-md:block "
            ></video>
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        {founder !== null && founders[founder] && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3 },
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="fixed inset-0 z-999999999999999 bg-black/60 backdrop-blur-md"
          >
            {/* Back to home button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setFounder(null)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3  rounded-full text-white/80 max-md:text-center  hover:text-white transition-all duration-300 text-sm sm:text-base z-50 flex"
            >
              <ChevronLeft></ChevronLeft> Back to home
            </motion.button>

            <div className="h-screen w-full flex items-center justify-center px-2 sm:px-6 lg:px-16 py-4 sm:py-8 max-md:hidden">
              <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 max-w-7xl w-full">
                <motion.div
                  initial={{ opacity: 0, x: -100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative shrink-0 order-1 md:order-1"
                >
                  <div className="relative w-[55vw] h-[72vw] sm:w-[45vw] sm:h-[60vw] md:w-[32vw] md:h-[42vw] lg:w-[28vw] lg:h-[40vw] max-w-[450px] max-h-[650px] rounded-[28vw] sm:rounded-[22vw] md:rounded-[180px] lg:rounded-[200px] overflow-hidden mx-auto md:mx-0">
                    <div className="absolute inset-0 flex items-start justify-center">
                      <AnimatePresence>
                        {founder === 0 && (
                          <motion.img
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            className="w-full h-full object-cover object-top absolute"
                            src={founders[0].mainImage}
                            alt=""
                          />
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {founder === 1 && (
                          <motion.img
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            className="w-full h-full object-cover object-top absolute"
                            src={founders[1].mainImage}
                            alt=""
                          />
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {founder === 2 && (
                          <motion.img
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            className="w-full h-full object-cover object-top absolute"
                            src={founders[2].mainImage}
                            alt=""
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 flex flex-col justify-center overflow-hidden w-full order-2 md:order-2">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-row gap-3 sm:gap-4 md:gap-4 lg:gap-6  justify-start"
                  >
                    {founders
                      .map((f, idx) => ({ founder: f, index: idx }))
                      .filter((item) => item.index !== founder)
                      .slice(0, 2)
                      .map((item) => (
                        <motion.div
                          key={item.index}
                          onClick={() => {
                            setTimeout(() => {
                              setFounder(item.index);
                            }, 0);
                          }}
                          // onMouseEnter={() => setFounder(item.index)}
                          // onClick={() => setFounder(item.index)}
                          // whileHover={{ scale: 1.05 }}
                          // whileTap={{ scale: 0.95 }}
                          className="w-[18rem] h-112 lg:rounded-[100px] overflow-hidden  grayscale  cursor-pointer transition-all duration-300 group"
                        >
                          <img
                            src={item.founder.mainImage}
                            className="w-full object-cover h-full"
                            alt=""
                          />
                          <div className="group-hover:opacity-100 opacity-0 w-full h-full flex items-center justify-center gradient-text text-xs sm:text-sm md:text-base lg:text-lg">
                            {item.founder.name}
                          </div>
                        </motion.div>
                      ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="space-y-2 sm:space-y-1 md:space-y-1 lg:space-y-2 text-center md:text-left px-4 md:px-0 -translate-y-9"
                  >
                    <h1 className="text-xl sm:text-3xl max-md:text-centermd:text-5xl lg:text-7xl font-bold text-red-500 leading-none gradient-text ">
                      {founders[founder].name}
                    </h1>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white font-light ">
                        {founders[founder].title}{" "}
                        {/* <span className="text-white/60 block sm:inline text-xs sm:text-sm md:text-base lg:text-xl ">
                          {founders[founder].subtitle}
                        </span> */}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-2 sm:space-y-3 lg:space-y-4 pt-2 sm:pt-3 lg:pt-4 flex flex-col items-center md:items-start">
                      <motion.a
                        href={founders[founder].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-red-500 transition-colors group"
                        whileHover={{ x: 10 }}
                      >
                        <span>linkedin</span>
                        <svg
                          className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>

                      <div className="space-y-1 text-center md:text-left">
                        <p className="text-white/60 text-xs sm:text-sm md:text-sm">
                          {founders[founder].description}
                        </p>
                        <motion.a
                          href={founders[founder].substack}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-red-500 transition-colors group justify-center md:justify-start"
                          whileHover={{ x: 10 }}
                        >
                          <span>{founders[founder].socialPlatform}</span>
                          <svg
                            className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div id="bottom"></div>
              </div>
            </div>
            <div className="md:hidden z-9999999999 text-white grid grid-rows-2 h-full">
              <FoundersCarousel founder={founder}></FoundersCarousel>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {productPageOn && parseInt(currentProductImage) >= 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className=" bg-black w-full z-9999999999 relative text-white "
          >
            {productPageOn && (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  setBackToHome(true);
                  setTimeout(() => {
                    setProductPageOn(false);
                  }, 0);
                }}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3  rounded-full text-white/80 max-md:text-center  hover:text-white transition-all duration-300 text-sm sm:text-base z-9999999999999 cursor-pointer flex lowercase"
              >
                <ChevronLeft></ChevronLeft> Back to home
              </motion.button>
            )}
            {productPageOn && (
              <div className="w-screen h-screen bg-black fixed top-0 left-0"></div>
            )}

            <AnimatePresence>
              {currentProductImage > "130" && currentImage < "230" && (
                <motion.button
                  onClick={() => {
                    for (let i = 1; i < 100; i++) {
                      setCurrentProductImage((org) => {
                        return org + i;
                      });
                    }
                  }}
                  initial={{
                    opacity: 0,
                    y: "10%",
                  }}
                  exit={{
                    opacity: 0,
                    y: "10%",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                  }}
                  transition={{
                    delay: 0.1,
                  }}
                  className="fixed bottom-6 right-6 text-white broder-white border rounded-full z-9999999999999 hehe p-3 hover:scale-105 duration-300 cursor-pointer flex items-center hidden"
                >
                  Next <ChevronRight></ChevronRight>
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {currentProductImage > "130" && currentImage < "230" && (
                <motion.div className="fixed text-white top-1/3 space-y-6 left-16 z-9999999999 max-w-sm max-md:bottom-16 max-md:top-auto max-md:left-3 max-md:h-fit">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.1,
                    }}
                    className="text-3xl max-md:text-center"
                  >
                    the eNO badge{" "}
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="text-white/80 max-md:text-center"
                  >
                    the world’s first mini AI bodyguard that uses real-time AI
                    intelligence to autonomously detect and respond to
                    real-world threats without relying on human reaction during
                    danger
                  </motion.div>
                  <motion.a
                    href="https://buy.stripe.com/bJe5kE87f0f36XX4WUbo404"
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="relative pre-order-container w-48 block max-md:w-full hidden"
                  >
                    <div className="pre-order-hover"></div>
                    <div className="pre-order-outside p-4  w-full h-full"></div>
                    <div className="border-2 border-red-600 pre-order-inside p-4  w-full h-full text-center">
                      Learn more
                    </div>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {currentProductImage > "230" && currentImage < "400" && (
                <motion.div className="fixed text-white top-1/3 space-y-6 left-16 z-9999999999 max-w-sm max-md:bottom-16 max-md:top-auto max-md:left-3 max-md:h-fit">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.1,
                    }}
                    className="text-3xl max-md:text-center"
                  >
                    secure attachment, instant safety
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="text-white/80 max-md:text-center"
                  >
                    the eNO badge uses a versatile mechanism to attach at chest
                    level. It is meant to be worn only when you need it
                    most…walking alone at night, commuting, or travelling solo.
                    Not all day. Just when protection matters.
                  </motion.div>
                  <motion.a
                    href="https://buy.stripe.com/bJe5kE87f0f36XX4WUbo404"
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="relative pre-order-container w-48 max-md:w-full hidden"
                  >
                    <div className="pre-order-hover"></div>
                    <div className="pre-order-outside p-4  w-full h-full"></div>
                    <div className="border-2 border-red-600 pre-order-inside p-4  w-full h-full text-center">
                      Learn more
                    </div>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {currentProductImage > "410" && currentProductImage < "510" && (
                <motion.div className="fixed text-white top-1/3 space-y-6 left-16 z-9999999999 max-w-sm max-md:bottom-16 max-md:top-auto max-md:left-3 max-md:h-fit">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.1,
                    }}
                    className="text-3xl max-md:text-center"
                  >
                    instant threat response & evidence capture
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="text-white/80 max-md:text-center"
                  >
                    eNO assesses the situation immediately and deploys the right
                    protective response, from de-escalation messages to
                    immediate connection to authorities. It captures real-time
                    evidence, addressing the biggest gap in personal safety
                    today.
                  </motion.div>
                  <motion.a
                    href="https://buy.stripe.com/bJe5kE87f0f36XX4WUbo404"
                    initial={{
                      opacity: 0,
                      y: "10%",
                    }}
                    exit={{
                      opacity: 0,
                      y: "10%",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="relative pre-order-container w-48 hidden max-md:w-full"
                  >
                    <div className="pre-order-hover"></div>
                    <div className="pre-order-outside p-4  w-full h-full"></div>
                    <div className="border-2 border-red-600 pre-order-inside p-4  w-full h-full text-center">
                      Learn more
                    </div>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence></AnimatePresence>

            <AnimatePresence>
              {parseInt(currentProductImage) < 20 && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="text-white z-9999999 flex justify-center items-center w-full h-screen fixed text-5xl font-bold bg-black/60  max-md:text-xl "
                >
                  <div className="gradient-text">
                    introducing your AI safety companion
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {images2 && isLoaded2 && (
              <img
                fetchPriority="high"
                className={`fixed top-0 h-screen object-cover duration-150 w-screen bg-black   
                  ${
                    currentProductImage > "230" &&
                    currentImage < "400" &&
                    "md:translate-x-64"
                  }
                  ${
                    currentProductImage > "100" &&
                    currentProductImage < "510" &&
                    "max-md:scale-75 max-md:-translate-y-36"
                  }`}
                src={`/miniframe2/frame${currentProductImage}.webp`}
                alt=""
              />
            )}
            <div className="relative unguangua z-9999999999999999 h-screen">
              {loadProgress2 === 100 && (
                <div
                  style={{
                    opacity: parseInt(currentProductImage) > 10 ? 0 : 1,
                  }}
                  id="sd-container"
                  className="fixed bottom-6 left-1/2 -translate-x-1/2 max-md:bottom-32"
                >
                  <div className="arrow"></div>
                  <div className="arrow"></div>
                </div>
              )}
            </div>
            <AnimatePresence>
              {currentProductImage > "580" && (
                <div className="flex fixed bottom-0 left-0 w-screen h-screen justify-center max-md:flex-col">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                    }}
                    className="h-screen w-full bg-black/70 absolute top-0 left-0 flex justify-center items-center flex-col z-99999999999999"
                  >
                    <p className="gradient-text font-semibold text-5xl">
                      built for real-life moments
                    </p>
                    <p className="text-white">
                      eNO is more than just a product, it’s here to redefine the
                      culture of safety{" "}
                    </p>
                    <a
                      href="https://www.instagram.com/enough.badge?igsh=dnJnNzQxOXFyaTFv&utm_source=qr"
                      className="cursor-pointer"
                    >
                      <Instagram className="my-6"></Instagram>
                    </a>
                  </motion.div>
                  <motion.img
                    className="max-md:h-1/3 object-cover"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                    }}
                    src="/pp1.webp"
                    alt=""
                  />
                  <motion.img
                    className="max-md:h-1/3 object-cover"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                    }}
                    src="/pp2.webp"
                    alt=""
                  />
                  <motion.img
                    className="max-md:h-1/3 object-cover"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                    }}
                    src="/pp3.webp"
                    alt=""
                  />
                </div>
              )}
            </AnimatePresence>
            {/* {currentProductImage > "590" && <div className=""></div>} */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announcement Popup */}
      <AnimatePresence>
        {announce && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999999999999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-hidden"
            onClick={() => setAnnounce(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-red-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setAnnounce(false)}
                className="sticky top-4 float-right mr-4 mt-4 px-4 py-2 border border-white/30 rounded-full text-white/80 hover:text-white hover:border-red-500/50 transition-all duration-300 text-sm backdrop-blur-sm bg-black/30 z-50 "
              >
                <X></X>
              </button>

              {/* Article content */}

              <article className="px-8 py-12 md:px-16 md:py-16 text-black space-y-6 clear-both bg-white ">
                <h1 className="text-3xl md:text-5xl font-bold">
                  eNOugh Raises £2.7M to Build a Mini AI Bodyguard Helping
                  People Get Home Safely
                </h1>

                <p className="text-sm">
                  <strong>By:</strong> Will Hall
                </p>

                <p className="text-sm">
                  <strong>Contact:</strong> press@enoughsafety.com
                </p>

                {/* <hr className="my-6" /> */}

                <div className="flex gap-16 max-md:flex-col">
                  <div>
                    <img
                      src="/teamimage.png"
                      className="w-400 object-cover"
                      alt=""
                    />
                  </div>
                  <div className="space-y-6">
                    <p>
                      London-based startup <strong>eNOugh</strong> has raised{" "}
                      <strong>£2.7M</strong> to build the <em>eNO badge</em>, a
                      mini AI bodyguard designed to empower people to get home
                      safely.
                    </p>

                    <p>
                      eNOugh is a London-based company building the eNO badge,
                      an AI safety companion addressing the lack of safety in
                      the cities people call home.
                    </p>

                    <p>
                      Four years ago, <strong>Ina Jovicic</strong> was attacked
                      walking home from dinner in what should have been a safe,
                      well-lit area of central London. Today, Ina and
                      co-founders <strong>Gaelic</strong> and{" "}
                      <strong>Alex</strong> announce they have raised £2.7M in
                      funding, led by <strong>A*Ventures</strong>, with
                      participation from <strong>Comma Capital</strong>,{" "}
                      <strong>Karman Ventures</strong>,{" "}
                      <strong>Intuition VC</strong>, and others, to build the
                      first-of-its-kind AI wearable threat detection device.
                      Several prominent angel investors also joined the round.
                    </p>
                  </div>
                </div>
                {/* <hr className="my-6" /> */}

                <h2 className="text-2xl font-bold">
                  Quote from Kevin, General Partner at A*Ventures
                </h2>

                <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                  "I've always believed that safety and security are critically
                  important. With the rise of multimodal AI, smart wearables,
                  and advances in detection technology, there's a unique
                  opportunity to create a safer world for everyone. What eNOugh
                  is building is hugely important."
                </blockquote>

                <p>
                  A* is a venture capital firm co-founded by{" "}
                  <strong>Kevin Hartz</strong>. Kevin has seeded companies such
                  as Airbnb and Pinterest and founded two companies that reached
                  the public markets (Xoom and Eventbrite). A*'s broader
                  investment record includes PayPal, Uber, Decagon, Ramp, and
                  security-focused startups such as Flock Safety and Sauron.
                </p>

                {/* <hr className="my-6" /> */}

                <h2 className="text-2xl font-bold">
                  Quotes from eNOugh Co-Founders
                </h2>

                <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                  "This round is fundamental in eNOugh's journey as it will
                  allow us to launch the product and watch it make a difference
                  in people's daily life. The stories we hear every day remind
                  us why a product like this must exist, we want to give people
                  the freedom to live without limitations."
                </blockquote>
                <p>
                  — <strong>Ina, co-founder/CEO</strong>
                </p>

                <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                  "I've always believed that some problems can't be solved
                  through software alone. Feeling unsafe is one of them. You
                  need something physical, visible, and reliable, and that's
                  what the eNO badge gives you. Thanks to our backers, we're now
                  bringing it to life."
                </blockquote>
                <p>
                  — <strong>Gaelic, co-founder/CTO</strong>
                </p>

                <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                  "What we are doing with our AI is taking it out of the lab and
                  bringing it into everyday life. With the eNO badge, grounded
                  in real-world, multimodal signals, we support people in the
                  moments that actually feel human - like when someone feels
                  unsafe walking home at night."
                </blockquote>
                <p>
                  — <strong>Alex, co-founder/CSO</strong>
                </p>

                {/* <hr className="my-6" /> */}

                <h2 className="text-2xl font-bold">Why eNOugh Exists</h2>

                <p className="font-bold">London, 12th October 2021</p>

                <p>
                  Four men circled and attacked Ina as they tried to take her
                  things. Her instinct was to fight back, but four against one
                  isn't a fair fight. She was dragged into the street before
                  they stole everything and left her with injured knees.
                </p>

                <p>When police arrived, they told her:</p>

                <ul className="list-disc pl-6">
                  <li>"You're lucky you weren't stabbed."</li>
                  <li>"You should never fight back."</li>
                </ul>

                <p>
                  That second line sparked action, not fear. Ina channelled the
                  experience into researching real solutions to a problem that
                  remains unsolved.
                </p>

                <p>
                  She partnered with two innovative minds,{" "}
                  <strong>Gaelic</strong> and <strong>Alex</strong>, and
                  together they started eNOugh.
                </p>

                {/* <hr className="my-6" /> */}

                <h2 className="text-2xl font-bold">
                  What Does It Mean to "Get Home Safe"?
                </h2>

                <p>
                  For many — especially women — it's not just a simple message.
                  It can feel like <em>mission planning</em>:
                </p>

                <ul className="list-disc pl-6">
                  <li>route strategy</li>
                  <li>risk assessment</li>
                  <li>keys-between-knuckles</li>
                  <li>fake phone calls</li>
                  <li>the "I'm two minutes away" lie</li>
                </ul>

                <p>
                  This isn't just a London problem. It's a{" "}
                  <strong>
                    Paris, New York, Mexico City… everywhere problem.
                  </strong>{" "}
                  That's millions of people whose lives are shaped by the state
                  of the cities they live in.
                </p>

                {/* <hr className="my-6" /> */}

                <h2 className="text-2xl font-bold">The UK Safety Reality</h2>

                <p>
                  <a
                    href="https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/datasets/perceptionsofpersonalsafetyandexperiencesofharassmentgreatbritain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    In the UK
                  </a>
                  :
                </p>

                <ul className="list-disc pl-6">
                  <li>
                    <strong>1 in 2 women</strong> and{" "}
                    <strong>1 in 5 men</strong> feel unsafe walking alone after
                    dark in a busy public place
                  </li>
                  <li>
                    <strong>68%</strong> of women aged 18–24 feel unsafe walking
                    home at night
                  </li>
                  <li>
                    <strong>62%</strong> of people have stopped doing things
                    (walking alone, taking certain routes, visiting certain
                    places) because they don't feel safe
                  </li>
                  <li>
                    <strong>2 out of 3 women</strong> aged 16–34 experienced
                    harassment in the last year
                  </li>
                  <li>
                    <strong>44%</strong> experienced catcalls or unwanted
                    comments
                  </li>
                  <li>
                    <strong>29%</strong> felt they were being followed
                  </li>
                </ul>

                <p>And existing "solutions" aren't good enough:</p>

                <ul className="list-disc pl-6">
                  <li>Pepper spray (illegal in the UK)</li>
                  <li>
                    Keychain "self-defence" tools expecting people to fight back
                  </li>
                  <li>
                    Panic buttons requiring presence of mind during an attack
                  </li>
                  <li>Tracking apps requiring you to unlock your phone</li>
                  <li>"Ask Angela" — widely known, including by attackers</li>
                </ul>

                <p>
                  <strong>eNOugh was created to be the solution.</strong>
                </p>

                {/* <hr className="my-6" /> */}

                <h1 className="text-3xl font-bold">Changing the Game</h1>

                <p>The eNO badge has two core functions:</p>

                <h2 className="text-2xl font-bold">1. Threat Detection</h2>

                <p>
                  Using advanced AI and hardware integration, the device detects
                  when its user is under threat — and takes action.
                </p>

                <p>When it detects a threat, it:</p>

                <ul className="list-disc pl-6">
                  <li>records evidence (camera + mic)</li>
                  <li>
                    alerts an emergency operator who can contact police or your
                    emergency contacts
                  </li>
                  <li>streams live footage</li>
                  <li>shares real-time location data</li>
                </ul>

                <p>
                  <strong>Fun fact:</strong>{" "}
                  <a
                    href="https://policyexchange.org.uk/publication/your-money-or-your-life/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Less than 1% of thefts in London get solved.
                  </a>
                </p>

                <p>Evidence changes that equation.</p>

                {/* <hr className="my-6" /> */}

                <h2 className="text-2xl font-bold">2. Threat Deterrence</h2>

                <p>Traditional safety tools are hidden and reactive.</p>

                <p>The eNO badge is the opposite:</p>

                <ul className="list-disc pl-6">
                  <li>
                    <strong>bright</strong>
                  </li>
                  <li>
                    <strong>visible</strong>
                  </li>
                  <li>
                    <strong>unmissable</strong>
                  </li>
                </ul>

                <p>To a passerby it's a badge.</p>

                <p>To an attacker it's:</p>

                <ul className="list-disc pl-6">
                  <li>a camera recording</li>
                  <li>streaming live</li>
                  <li>connected to authorities</li>
                  <li>creating consequences</li>
                </ul>

                <p className="font-bold">
                  Deterrence through visibility.
                  <br />
                  Protection through presence.
                </p>

                {/* <hr className="my-6" /> */}

                <h1 className="text-3xl font-bold">
                  The Network Effects of Collective Safety
                </h1>

                <p>
                  The more people wearing an eNO badge, the stronger the network
                  becomes.
                </p>

                <p>
                  Each badge is a{" "}
                  <strong>node in a distributed AI network</strong>, collecting
                  real-world threat data to train better algorithms.
                </p>

                <p>
                  Your Tuesday walk home — even if nothing happens — helps
                  protect someone else on Wednesday.
                </p>

                <p>
                  This is a <strong>collective fight</strong>, marking the start
                  of safer cities worldwide.
                </p>

                <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                  "Walking home shouldn't feel like a risk… eNOugh isn't just a
                  product, it's a reclamation of safety." — <strong>Ina</strong>
                </blockquote>

                {/* <hr className="my-6" /> */}

                <h1 className="text-3xl font-bold">The Team</h1>

                <h3 className="text-xl font-bold">Ina — CEO</h3>

                <p>
                  Bosnian by background, raised in Czechia. The idea sparked
                  after her London attack while completing a Master's in
                  Entrepreneurship at UCL.
                </p>

                <p>
                  (if you want to follow her behind the scenes of building the
                  start-up, follow her{" "}
                  <a
                    href="https://www.instagram.com/ina_founder?igsh=bmozaTM0bmd6NDVh&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    here
                  </a>
                  )
                </p>

                <h3 className="text-xl font-bold">Gaelic — CTO</h3>

                <p>
                  Uruguayan/French electronic engineer. Leads the product
                  pillar. Dropped his Master's in Electronic & Electrical
                  Engineering to build eNOugh full-time.
                </p>

                <p>
                  (if you want to follow Gaelic's journey on how to build great
                  products, read{" "}
                  <a
                    href="https://www.linkedin.com/in/gaelicjara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    here
                  </a>
                  )
                </p>

                <h3 className="text-xl font-bold">Alex — CSO</h3>

                <p>
                  Bulgarian-born, leads software and AI. Joined early and became
                  indispensable.
                </p>

                <p>
                  (follow his recent thoughts on AI and emerging trends{" "}
                  <a
                    href="https://x.com/alex_chalakov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    here
                  </a>
                  )
                </p>

                {/* <hr className="my-6" /> */}

                <h1 className="text-3xl font-bold">What's Next?</h1>

                <p>
                  With this £2.7M round, eNOugh has opened the{" "}
                  <strong>waitlist</strong>.
                </p>

                <ul className="list-disc pl-6">
                  <li>
                    Waitlisters will be first to know when pre-orders go live
                  </li>
                  <li>Early-bird discounts before official launch</li>
                </ul>

                <p>eNOugh is partnering with:</p>

                <ul className="list-disc pl-6">
                  <li>universities</li>
                  <li>hospitals</li>
                  <li>nightlife venues</li>
                </ul>

                <p>
                  London will be the first launch city before rapid expansion.
                </p>

                <p>
                  The response has been overwhelmingly positive — a reminder of
                  why this product matters.
                </p>

                <p className="font-bold">Excited? Join the waitlist here.</p>

                <p>And follow the journey here.</p>

                <div className="border-2 border-red-600   h-full text-center text-black bg-white  w-fit rounded-full cursor-pointer hover:shadow-2xl hover:shadow-red-800 duration-200  lowercase relative pre-order-container">
                  <div className="pre-order-outside2 p-4  w-full h-full rounded-full z-9"></div>
                  <div className="bg-white z-9999999999999 relative h-full w-full rounded-full p-4 font-bold">
                    Join the Waitlist
                  </div>
                </div>
              </article>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Waitlist Popup */}
      <AnimatePresence>
        {showWaitlist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999999999999999 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setShowWaitlist(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ delay: 0.1 }}
              className="bg-black border border-red-500/30 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative glow effect */}
              <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-red-500/10 to-transparent pointer-events-none"></div>

              {/* Close button */}
              <button
                onClick={() => setShowWaitlist(false)}
                className="absolute top-4 right-4 px-4 py-2 border border-white/30 rounded-full text-white/80 hover:text-white hover:border-red-500/50 transition-all duration-300 text-sm backdrop-blur-sm bg-black/30 z-10"
              >
                <X></X>
              </button>

              {/* Form content */}
              <div className="px-8 py-12 md:px-12 md:py-16 space-y-6 relative">
                {/* Header */}
                <div className="space-y-3 mb-8">
                  <img src="/logo-new.png" className="w-16" alt="" />
                </div>

                {/* Form */}
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission here
                    console.log("Form submitted");
                    setShowWaitlist(false);
                  }}
                >
                  {/* Name field */}
                  <div className="space-y-2">
                    {/* <label
                      htmlFor="name"
                      className="text-white/80 text-sm font-medium block"
                    >
                      Full Name
                    </label> */}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    {/* <label
                      htmlFor="email"
                      className="text-white/80 text-sm font-medium block"
                    >
                      Email Address
                    </label> */}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone field (optional) */}
                  <div className="space-y-2">
                    {/* <label
                      htmlFor="phone"
                      className="text-white/80 text-sm font-medium block"
                    >
                      Phone Number{" "}
                      <span className="text-white/40">(optional)</span>
                    </label> */}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full mt-6 pre-order-container cursor-pointer"
                  >
                    <div className="pre-order-hover"></div>
                    <div className="pre-order-outside p-4 w-full h-full"></div>
                    <div className="border-2 border-red-600 pre-order-inside p-4 w-full h-full text-center font-bold text-white lowercase">
                      Join Waitlist
                    </div>
                  </motion.button>

                  {/* Privacy note */}
                  <p className="text-white/40 text-xs text-center mt-4">
                    We respect your privacy. Your information will only be used
                    to contact you about eNO updates.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0" id="bottom-new"></div>
      {/* {productPageOn && (
        <div className="min-h-[500vh] fixed top-0 left- z-999999999999999999999 bg-blackw-full h-full ungabunga"></div>
      )} */}
    </div>
  );
}

{
  /* z-9999999999999 buttons fixed top-0 left-0 h-screen w-screen pointer-events-none */
}
const useImageSequence = (frameCount: number, pathTemplate: string) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = document.createElement("img");
      const frameNumber = String(i).padStart(3, "0"); // Changed to 3 digits
      img.src = pathTemplate.replace("{frame}", frameNumber);

      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        console.error(`Failed to load frame: ${img.src}`);
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, [frameCount, pathTemplate]);

  return { images, isLoaded, loadProgress };
};
const useImageSequence2 = (frameCount: number, pathTemplate: string) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = document.createElement("img");
      const frameNumber = String(i).padStart(3, "0"); // Changed to 3 digits
      img.src = pathTemplate.replace("{frame}", frameNumber);

      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        console.error(`Failed to load frame: ${img.src}`);
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, [frameCount, pathTemplate]);

  return { images, isLoaded, loadProgress };
};
