import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      className="group relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-sm shadow-lux"
    >
      <img
        src={after}
        alt={`${afterLabel}: brand new architectural shingle roof installed by Kenny`}
        loading="lazy"
        width={1408}
        height={912}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${beforeLabel}: worn and storm-damaged roof before replacement`}
          loading="lazy"
          width={1408}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-cocoa-deep/15" />
      </div>

      <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-cocoa-deep/80 px-4 py-1.5 text-eyebrow text-ivory backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-5 top-5 rounded-full bg-ivory/90 px-4 py-1.5 text-eyebrow text-cocoa-deep backdrop-blur-sm">
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-ivory/90 shadow-[0_0_28px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 bg-ivory/95 text-cocoa-deep transition-transform duration-500 group-hover:scale-110">
          <span className="text-sm tracking-[0.2em]">‹›</span>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label="Drag to compare before and after"
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 z-20 h-10 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
