import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

const useImageSequence = (frameCount: number, pathTemplate: string) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(4, "0");
      img.src = pathTemplate.replace("{frame}", frameNumber);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, [frameCount, pathTemplate]);

  return { images, isLoaded };
};

export const ScrollVideo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

  const frameCount = 487; // Total number of frames (10 * 14 from your example)
  const { images, isLoaded } = useImageSequence(
    frameCount,
    "/mainframe/frame{frame}.png"
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Calculate which frame to show
    const frameIndex = Math.min(
      Math.floor(latest * frameCount),
      frameCount - 1
    );

    const img = images[frameIndex];
    if (img && img.complete) {
      // Clear and draw the frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  });

  useEffect(() => {
    // Set canvas size
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 bg-black flex items-center justify-center text-white">
          Loading...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="fixed top-0 h-screen object-cover w-screen"
      />
    </>
  );
};
