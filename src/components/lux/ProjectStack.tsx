import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export type Project = {
  image: string;
  title: string;
  location: string;
  type: string;
  description: string;
};

export function ProjectStack({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-16">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} total={projects.length} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.55, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);

  return (
    <div ref={ref} className="h-[112svh] last:h-[84svh] sm:h-[118svh]">
      <motion.article
        style={reducedMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity, scale, y }}
        className="sticky top-24 grid min-h-[68svh] overflow-hidden border border-border bg-card shadow-lux lg:grid-cols-[1.3fr_0.7fr]"
      >
        <div className="relative min-h-[42svh] overflow-hidden lg:min-h-[68svh]">
          <img
            src={project.image}
            alt={`${project.title}, ${project.type} in ${project.location}`}
            loading="lazy"
            width={1408}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/55 via-transparent to-transparent lg:bg-gradient-to-r" />
          <span className="absolute left-6 top-6 border border-ivory/40 bg-cocoa-deep/65 px-4 py-2 text-eyebrow text-ivory backdrop-blur-md">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div>
            <div className="text-eyebrow text-brass">{project.type}</div>
            <h3 className="mt-6 font-display text-3xl leading-tight text-cocoa-deep sm:text-4xl">
              {project.title}
            </h3>
            <div className="mt-3 text-sm text-cocoa-soft">{project.location}</div>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4 text-cocoa-soft">
            <span className="h-px w-12 bg-brass" />
            <span className="text-eyebrow">Roofing With Kenny</span>
          </div>
        </div>
      </motion.article>
    </div>
  );
}