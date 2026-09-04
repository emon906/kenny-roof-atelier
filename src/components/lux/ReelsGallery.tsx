import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export type Reel = {
  video: string;
  poster: string;
  title: string;
  detail: string;
};

export function ReelsGallery({ reels }: { reels: Reel[] }) {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const reducedMotion = useReducedMotion();

  const move = useCallback(
    (direction: number) => setActive((current) => (current + direction + reels.length) % reels.length),
    [reels.length],
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        videoRefs.current.forEach((video, index) => {
          if (!video) return;
          if (entry?.isIntersecting && index === active) void video.play().catch(() => undefined);
          else video.pause();
        });
      },
      { threshold: 0.35 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={sectionRef} className="relative mt-14 overflow-hidden py-6 sm:py-10">
      <div
        className="relative mx-auto h-[31rem] max-w-6xl touch-pan-y sm:h-[39rem]"
        onWheel={(event) => {
          if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
          move(event.deltaX > 0 ? 1 : -1);
        }}
      >
        <AnimatePresence initial={false}>
          {reels.map((reel, index) => {
            let distance = index - active;
            if (distance > reels.length / 2) distance -= reels.length;
            if (distance < -reels.length / 2) distance += reels.length;
            const isActive = distance === 0;
            const visible = Math.abs(distance) <= 1;

            return (
              <motion.article
                key={reel.title}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 45 || Math.abs(info.velocity.x) > 450) {
                    move(info.offset.x < 0 ? 1 : -1);
                  }
                }}
                initial={false}
                animate={{
                  x: `${distance * 72}%`,
                  scale: isActive ? 1 : 0.78,
                  rotateY: reducedMotion ? 0 : distance * -12,
                  opacity: visible ? (isActive ? 1 : 0.48) : 0,
                  zIndex: isActive ? 20 : 10 - Math.abs(distance),
                }}
                transition={{ type: "spring", stiffness: 175, damping: 24, mass: 0.85 }}
                aria-hidden={!isActive}
                className="absolute left-1/2 top-0 aspect-[9/16] h-[29rem] max-h-full -translate-x-1/2 cursor-grab overflow-hidden border-[6px] border-cocoa-deep bg-cocoa-deep shadow-lux active:cursor-grabbing sm:h-[37rem] sm:border-[8px]"
              >
                <video
                  ref={(node) => {
                    videoRefs.current[index] = node;
                  }}
                  src={reel.video}
                  poster={reel.poster}
                  autoPlay={isActive}
                  muted
                  loop
                  playsInline
                  preload={isActive ? "metadata" : "none"}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa-deep/90 via-transparent to-cocoa-deep/15" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-ivory sm:p-7">
                  <div className="text-eyebrow text-brass">Reel {String(index + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 font-display text-2xl">{reel.title}</h3>
                  <p className="mt-2 text-sm text-ivory/75">{reel.detail}</p>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Previous reel">
          <ChevronLeft />
        </Button>
        <div className="flex gap-2" aria-label={`Reel ${active + 1} of ${reels.length}`}>
          {reels.map((reel, index) => (
            <span
              key={reel.title}
              className={`h-1 transition-all duration-500 ${index === active ? "w-10 bg-cocoa" : "w-4 bg-border"}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Next reel">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}