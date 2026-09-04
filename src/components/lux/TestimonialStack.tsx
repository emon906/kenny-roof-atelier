import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export type Testimonial = { quote: string; name: string };

export function TestimonialStack({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="mx-auto mt-16 max-w-3xl">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.name}
          testimonial={testimonial}
          index={index}
          total={testimonials.length}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
  total,
}: {
  testimonial: Testimonial;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.91, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.35, 1]);

  return (
    <div ref={ref} className="h-[72svh] last:h-[52svh] sm:h-[78svh]">
      <motion.article
        style={reducedMotion ? undefined : { y, scale, rotateX, opacity }}
        className="sticky top-28 min-h-[24rem] border border-ivory/20 bg-cocoa-deep/95 p-8 shadow-lux backdrop-blur-md sm:p-12 lg:p-14"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="text-brass tracking-[0.35em]">★★★★★</div>
          <div className="font-display text-sm text-ivory/45">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
        <p className="mt-9 font-display text-2xl leading-relaxed text-ivory sm:text-3xl">
          “{testimonial.quote}”
        </p>
        <div className="mt-9 flex items-center gap-4 text-ivory/65">
          <span className="h-px w-10 bg-brass" />
          <span className="text-eyebrow">{testimonial.name}</span>
        </div>
      </motion.article>
    </div>
  );
}