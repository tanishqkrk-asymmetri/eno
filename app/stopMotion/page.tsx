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
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const [announce, setAnnounce] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const videoRefFrameA = useRef<HTMLVideoElement>(null);

  console.log(videoRefFrameA.current?.currentTime);

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
    [0.93, 1],
    isMobile ? ["300%", "0%"] : ["100%", "0%"]
  );
  const girl2 = useTransform(
    scrollYProgress,
    [0.96, 1],
    isMobile ? ["300%", "0%"] : ["100%", "0%"]
  );
  const girl3 = useTransform(
    scrollYProgress,
    [0.94, 1],
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

  console.log(currentProductImage);

  useEffect(() => {
    if (loadProgress === 100) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [loadProgress]);

  return (
    <div
      ref={containerRef}
      className="bg-black "
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
          <div id="sd-container" className="absolute bottom-6">
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
          className="fixed top-0 h-screen object-cover w-screen "
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
              className="bg-red-500/20 rounded-full w-10 aspect-square fixed    top-[45%] left-[52%] flex justify-center items-center cursor-pointer duration-200 z-999999 max-md:left-[46%] max-md:top-[50%]"
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

              <motion.div className="bg-red-500 rounded-full w-6 aspect-square flex justify-center items-center relative">
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
            <div
              onClick={() => {
                setFounder(0);
              }}
              className="border-white rounded-full border p-0.5 group-hover:p-1.5 aspect-square fixed top-[35%] left-[32%] max-md:top-[48%] max-md:left-[20%] z-9999  flex justify-center items-center cursor-pointer hover:scale-110 transition-transform group"
            >
              {/* Subtle Ripple animations */}
              <motion.div
                className="absolute inset-0 border-white border rounded-full "
                initial={{ scale: 1, opacity: 0.1 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border rounded-full opacity-10 duration-200"
                initial={{ scale: 1, opacity: 0.1 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.7,
                }}
              />

              <div className="border-white rounded-full border p-0.5 group-hover:p-1.5  aspect-square z-9999  flex justify-center items-center duration-200 cursor-pointer">
                <div className="bg-white rounded-full w-1  aspect-square group-hover:scale-110"></div>
              </div>
            </div>

            <div
              onClick={() => {
                setFounder(1);
              }}
              className="border-white rounded-full border p-0.5 group-hover:p-1.5 aspect-square fixed top-[65%] left-[45%] z-9999  flex justify-center items-center cursor-pointer hover:scale-110 transition-transform group max-md:top-[70%] max-md:left-[40%]"
            >
              {/* Subtle Ripple animations */}
              <motion.div
                className="absolute inset-0 border-white border rounded-full "
                initial={{ scale: 1, opacity: 0.1 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border rounded-full opacity-10 duration-200"
                initial={{ scale: 1, opacity: 0.1 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.7,
                }}
              />

              <div className="border-white rounded-full border p-0.5 group-hover:p-1.5  aspect-square z-9999  flex justify-center items-center duration-200 cursor-pointer">
                <div className="bg-white rounded-full w-1  aspect-square group-hover:scale-110"></div>
              </div>
            </div>
            <div
              onClick={() => {
                setFounder(2);
              }}
              className="border-white rounded-full border p-0.5 group-hover:p-1.5 aspect-square fixed top-[35%] right-[30%] z-9999  flex justify-center items-center cursor-pointer hover:scale-110 transition-transform group max-md:top-[50%] max-md:right-[15%]"
            >
              {/* Subtle Ripple animations */}
              <motion.div
                className="absolute inset-0 border-white border rounded-full "
                initial={{ scale: 1, opacity: 0.1 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-white border rounded-full opacity-10 duration-200"
                initial={{ scale: 1, opacity: 0.1 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.7,
                }}
              />

              <div className="border-white rounded-full border p-0.5 group-hover:p-1.5  aspect-square z-9999  flex justify-center items-center duration-200 cursor-pointer">
                <div className="bg-white rounded-full w-1  aspect-square group-hover:scale-110"></div>
              </div>
            </div>
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
            className={`min-h-screen max-h-screen overflow-hidden fixed left-1/2 -translate-x-1/2 w-full video-container `}
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
                  className="p-3 rounded-full  cursor-pointer py-2  hover:bg-black/30 backdrop-blur-xl flex"
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
                  <div className="text-white text-2xl max-md:text-xl md:text-4xl font-light capitalize max-md:text-center">
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
                      <div className="border-2 border-red-600 pre-order-inside p-4  w-full h-full text-center text-white">
                        Join Waitlist
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="w-full max-md:w-full md:w-auto max-md:hidden">
                  <button
                    onClick={() => {
                      setAnnounce(true);
                    }}
                    className="bg-black border border-gray-400/30 text-white px-4 max-md:px-4 md:px-6 py-2 max-md:py-2.5 md:py-2 rounded-full cursor-pointer hover:bg-gray-900 transition-colors duration-200 text-sm max-md:text-sm md:text-base w-full max-md:w-full md:w-auto max-md:hidden"
                  >
                    eNO is ready to announce the next step
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
                    ref={videoRef}
                    src="https://res.cloudinary.com/dyi7gdcpj/video/upload/v1764407817/hero2_iik12b.mp4"
                    preload="auto"
                    className="w-full h-screen object-contain md:object-cover md:scale-150   video  z-9999 relative max-md:hidden"
                  ></motion.video>
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
                          onMouseEnter={() => {
                            setTimeout(() => {
                              setFounder(item.index);
                            }, 500);
                          }}
                          // onMouseEnter={() => setFounder(item.index)}
                          // onClick={() => setFounder(item.index)}
                          // whileHover={{ scale: 1.05 }}
                          // whileTap={{ scale: 0.95 }}
                          className="w-[18rem] h-112 lg:rounded-[100px] overflow-hidden  grayscale hover:grayscale-50 cursor-pointer transition-all duration-300 group"
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
                        <span className="text-white/60 block sm:inline text-xs sm:text-sm md:text-base lg:text-xl ">
                          {founders[founder].subtitle}
                        </span>
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
              <FoundersCarousel></FoundersCarousel>
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
                  setProductPageOn(false);
                  document.querySelector("#bottom")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3  rounded-full text-white/80 max-md:text-center  hover:text-white transition-all duration-300 text-sm sm:text-base z-9999999999999 cursor-pointer flex"
              >
                <ChevronLeft></ChevronLeft> Back to home
              </motion.button>
            )}
            {productPageOn && (
              <div className="w-screen h-screen bg-black fixed top-0 left-0"></div>
            )}

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
                    Introducing the eNO badge
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
                    Introducing the eNO badge, the world’s first mini AI
                    bodyguard. Its powerful AI autonomously detects and responds
                    to real-world threats, triggering protective features
                    without relying on human reactions in high-stress situations
                    of danger.{" "}
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
                    Secure attachment, <br /> instant safety
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
                    eNO badge uses a dual attachment system and clips securely
                    at chest level. It is not meant for all-day wear. It is used
                    selectively, just like AirPods, in moments when you feel
                    unsafe such as walking alone at night, commuting or
                    travelling solo.
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
                    Instant Threat Response & Evidence Capture
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
                    immediate escalation to authorities. It captures and secures
                    crucial real-time evidence throughout the event, addressing
                    the biggest gap in personal safety today.
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
                  className="fixed bottom-6 left-1/2 -translate-x-1/2"
                >
                  <div className="arrow"></div>
                  <div className="arrow"></div>
                </div>
              )}
            </div>
            {currentProductImage > "500" && (
              <>
                <motion.img
                  className="fixed bottom-0 left-0 z-999999999999999999999 w-1/3 max-md:w-full max-md:h-1/3 max-md:top-0 max-md:left-0 max-md:object-cover"
                  style={{
                    y: girl1,
                    // opacity: girl1opacity,
                  }}
                  src="/pp1.webp"
                  alt=""
                />
                <motion.img
                  className="fixed bottom-0 left-1/3  z-999999999999999999999 w-1/3 max-md:w-full max-md:h-1/3 max-md:top-1/3 max-md:left-0 max-md:object-cover"
                  style={{
                    y: girl2,
                    // opacity: girl2opacity,
                  }}
                  src="/pp2.webp"
                  alt=""
                />
                <motion.img
                  className="fixed bottom-0 left-2/3  z-999999999999999999999 w-1/3 max-md:w-full max-md:h-1/3 max-md:top-2/3 max-md:left-0 max-md:object-cover"
                  style={{
                    y: girl3,
                    // opacity: girl3opacity,
                  }}
                  src="/pp3.webp"
                  alt=""
                />
              </>
            )}
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
              className="bg-black border border-red-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setAnnounce(false)}
                className="sticky top-4 float-right mr-4 mt-4 px-4 py-2 border border-white/30 rounded-full text-white/80 hover:text-white hover:border-red-500/50 transition-all duration-300 text-sm backdrop-blur-sm bg-black/30 z-50"
              >
                Close
              </button>

              {/* Article content */}
              <article className="px-8 py-12 md:px-16 md:py-16 text-white space-y-6 clear-both">
                <p className="text-xs uppercase">Funding Announcement</p>

                <h1 className="text-3xl md:text-5xl font-bold">
                  eNOugh raises £2.7M to build AI bodyguard for urban safety
                </h1>

                <div className="flex justify-start items-start gap-16">
                  <div>
                    <img className="w-lg" src="/teamimage.png" alt="" />
                  </div>
                  <div className="">
                    <p>
                      London-based startup announces seed funding led by
                      A*Ventures to develop the eNO badge, the first AI wearable
                      threat detection device.
                    </p>
                    <br />
                    <p>
                      <strong>London, UK</strong> — eNOugh, a London-based
                      company building the eNO badge, an AI safety companion
                      addressing the lack of safety in cities people call home,
                      today announces it has raised £2.7M in seed funding.
                    </p>
                    <br />
                    <p>
                      The round is led by A*Ventures, with participation from
                      Comma Capital, Karman Ventures, Intuition VC, and several
                      prominent angel investors.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold">The Catalyst</h2>

                <p>
                  Four years ago, Ina Jovicic was attacked walking home from
                  dinner in a well-lit, supposedly safe area of central London.
                  Four men circled and attacked her, dragging her into the
                  street before stealing everything and leaving her injured.
                </p>

                <p>
                  When police arrived, they told her: "You're lucky you weren't
                  stabbed" and "You should never fight back."
                </p>

                <p>
                  That second line became the catalyst—not for fear, but for
                  action.
                </p>

                <p>
                  "I've always believed that safety and security are critically
                  important. With the rise of multimodal AI, smart wearables,
                  and advances in detection technology, there's a unique
                  opportunity to create a safer world for everyone. What eNOugh
                  is building is hugely important."
                </p>

                <p>— Kevin Hartz, General Partner at A*Ventures</p>

                <h2 className="text-2xl font-bold">The Problem</h2>

                <p>
                  Unfortunately, "getting home safe" isn't simple. For many,
                  particularly women, it involves mission planning: route
                  strategy, risk assessment, keys-between-knuckles, fake phone
                  calls, and the "I'm literally two minutes away" lie.
                </p>

                <p>Key statistics from the UK:</p>

                <p>
                  1 in 2 women and 1 in 5 men feel unsafe walking alone after
                  dark
                </p>

                <p>68% of women aged 18-24 feel unsafe walking home at night</p>

                <p>
                  62% have stopped doing things because they don't feel safe
                </p>

                <p>&lt;1% of thefts in London get solved</p>

                <h2 className="text-2xl font-bold">
                  The Solution: The eNO Badge
                </h2>

                <p>
                  The eNO badge combines sophisticated AI models with hardware
                  innovation to detect threats and take action. It represents a
                  paradigm shift from reactive to proactive safety.
                </p>

                <h3 className="text-xl font-bold">Threat Detection</h3>

                <p>
                  When the device detects a threat, it records evidence (camera
                  + mic), alerts emergency operators, and streams live footage
                  with location data.
                </p>

                <h3 className="text-xl font-bold">Threat Deterrence</h3>

                <p>
                  Designed to be bright and visible. To an attacker, it's a
                  camera recording and streaming to authorities—deterrence
                  through visibility.
                </p>

                <h2 className="text-2xl font-bold">
                  The Network Effects of Collective Safety
                </h2>

                <p>
                  The more people wear the eNO badge, the more capable it
                  becomes at protecting everyone. Each badge serves as a node in
                  a distributed AI network, collecting real-world threat data to
                  train increasingly sophisticated protection algorithms.
                </p>

                <p>
                  By wearing it, you not only protect yourself, but also those
                  around you. When you wear your badge on a Tuesday night
                  walking home, even if nothing happens, you're training the AI
                  to recognise patterns and better protect someone else on
                  Wednesday.
                </p>

                <h2 className="text-2xl font-bold">From the Founders</h2>

                <p>
                  "This round is fundamental in eNOugh's journey as it will
                  allow us to launch the product and watch it make a difference
                  in people's daily life. We want to give people the freedom to
                  live without limitations."
                </p>

                <p>— Ina Jovicic, CEO</p>

                <p>
                  "I've always believed that some problems can't be solved
                  through software alone. Feeling unsafe is one of them. You
                  need something physical, visible, and reliable, and that's
                  what the eNO badge gives you."
                </p>

                <p>— Gaelic Jara, CTO</p>

                <p>
                  "What we are doing with our AI is taking it out of the lab and
                  bringing it into everyday life. With the eNO badge, grounded
                  in real-world, multimodal signals, we support people in the
                  moments that actually feel human."
                </p>

                <p>— Alex Chalakov, CSO</p>

                <h2 className="text-2xl font-bold">The Team</h2>

                <h3 className="text-xl font-bold">Ina Jovicic</h3>

                <p>CEO & Co-founder</p>

                <p>
                  Originally from Bosnia, born and raised in Czechia. Former
                  Entrepreneurship student at UCL.
                </p>

                <h3 className="text-xl font-bold">Gaelic Jara</h3>

                <p>CTO & Co-founder</p>

                <p>
                  Uruguayan/French electronic engineer who dropped his masters
                  to pursue eNOugh full time.
                </p>

                <h3 className="text-xl font-bold">Alex Chalakov</h3>

                <p>CSO & Co-founder</p>

                <p>
                  Bulgarian-born, leading the software and AI pillar with
                  background in computer science.
                </p>

                <h2 className="text-2xl font-bold">About A*Ventures</h2>

                <p>
                  A* is a venture capital firm co-founded by Kevin Hartz. Kevin
                  has seeded companies such as Airbnb and Pinterest, and has
                  founded two companies that reached the public markets (Xoom
                  and Eventbrite). A*'s broader investment track record includes
                  companies like PayPal, Uber, Decagon, Ramp, and
                  security-focused startups such as Flock Safety and Sauron.
                </p>

                <h2 className="text-2xl font-bold">What's Next</h2>

                <p>
                  With this £2.7M round, eNOugh has opened the waitlist.
                  Subscribers will be the first to receive notifications when
                  pre-orders are released and will receive an early bird
                  discount.
                </p>

                <p>
                  The company is collaborating with partners across
                  universities, hospitals, and nightlife venues across London,
                  the first city where they'll launch before expanding quickly.
                </p>

                <p>
                  "This isn't just about protection—it's about giving you the
                  freedom to go where you want, do what you love, and feel
                  secure while doing it. eNOugh isn't just a product, it's a
                  reclamation of safety that should have already existed as a
                  non-negotiable norm."
                </p>

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
                  className="relative pre-order-container w-48 block max-md:w-full z-9999999999 cursor-pointer"
                >
                  <div className="pre-order-hover"></div>
                  <div className="pre-order-outside p-4  w-full h-full"></div>
                  <div className="border-2 border-red-600 pre-order-inside p-4  w-full h-full text-center text-white">
                    Join the Waitlist
                  </div>
                </motion.div>
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
                Close
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
                    <div className="border-2 border-red-600 pre-order-inside p-4 w-full h-full text-center font-bold text-white">
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
