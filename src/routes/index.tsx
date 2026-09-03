import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal, MaskedLine, useParallax } from "@/components/lux/Reveal";
import { BeforeAfter } from "@/components/lux/BeforeAfter";

import heroVideo from "@/assets/hero-roof.mp4.asset.json";
import craftVideo from "@/assets/craft-loop.mp4.asset.json";
import kennyPortrait from "@/assets/kenny-portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import tiktokScene from "@/assets/tiktok-scene.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roofing With Kenny — Luxury Roofing in Loganville, GA" },
      {
        name: "description",
        content:
          "Kenny is a Loganville, Georgia roofer building one flawless roof at a time. Personal service, cinematic craftsmanship, and honest work. Follow @RooferKenny.",
      },
      { property: "og:title", content: "Roofing With Kenny — Luxury Roofing in Loganville, GA" },
      {
        property: "og:description",
        content:
          "A personal roofing brand in Loganville, Georgia. Craftsmanship you can see, a roofer you actually know.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Before / After", href: "#compare" },
  { label: "TikTok", href: "#tiktok" },
];

const SERVICES = [
  {
    no: "01",
    title: "Full Roof Replacement",
    copy: "Tear-off to final nail. Architectural shingles, upgraded underlayment, and a clean site at the end of every day.",
  },
  {
    no: "02",
    title: "Storm & Hail Response",
    copy: "Georgia weather doesn't schedule. Fast inspections, documented damage, and straight talk about what you actually need.",
  },
  {
    no: "03",
    title: "Leak Diagnosis & Repair",
    copy: "I find the source, not the symptom. Flashing, valleys, boots, and chimney details done properly the first time.",
  },
  {
    no: "04",
    title: "Roof Health Inspection",
    copy: "A full walk of your roof with photos and an honest verdict — including the times I tell you it can wait.",
  },
];

const PROJECTS = [
  {
    img: project1,
    tag: "Full Replacement",
    title: "The Grove Residence",
    place: "Loganville, GA",
    copy: "A complete tear-off and rebuild in warm chocolate architectural shingle, finished before the family came home.",
  },
  {
    img: project2,
    tag: "Detail Work",
    title: "Ridge & Valley Study",
    place: "Walton County, GA",
    copy: "Every course hand-aligned. This is the part nobody sees from the street — and the part that decides how long a roof lasts.",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const hero = useParallax<HTMLDivElement>(90);
  const aboutImg = useParallax<HTMLDivElement>(46);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── NAV ─────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-border/70 bg-ivory/90 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a
            href="#top"
            className={`font-display text-lg tracking-tight transition-colors duration-700 ${
              scrolled ? "text-cocoa-deep" : "text-ivory"
            }`}
          >
            Roofing <span className="italic">with</span> Kenny
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-eyebrow transition-colors duration-500 ${
                  scrolled
                    ? "text-cocoa-soft hover:text-cocoa-deep"
                    : "text-ivory/75 hover:text-ivory"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className={`rounded-full border px-6 py-2.5 text-eyebrow transition-all duration-500 ${
              scrolled
                ? "border-cocoa-deep bg-cocoa-deep text-ivory hover:bg-cocoa"
                : "border-ivory/60 text-ivory hover:bg-ivory hover:text-cocoa-deep"
            }`}
          >
            Book Kenny
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────── */}
      <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden grain">
        <div ref={hero.ref} className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full scale-110 object-cover animate-drift"
            style={{ transform: `translate3d(0, ${hero.offset}px, 0) scale(1.14)` }}
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={project1}
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 surface-veil" />
        <div className="absolute inset-0 bg-cocoa-deep/25" />

        {/* layered frame */}
        <div className="pointer-events-none absolute inset-6 hidden border border-ivory/20 md:block lg:inset-10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 lg:pb-28">
          <div className="max-w-4xl">
            <Reveal delay={100}>
              <div className="mb-8 flex items-center gap-4 text-ivory/80">
                <span className="h-px w-14 bg-brass" />
                <span className="text-eyebrow">Loganville · Georgia</span>
              </div>
            </Reveal>

            <h1 className="font-display text-[clamp(2.9rem,9vw,7.5rem)] leading-[0.92] text-ivory">
              <MaskedLine>A roof built</MaskedLine>
              <MaskedLine delay={120}>
                <span className="italic text-brass">by hand.</span> Not by
              </MaskedLine>
              <MaskedLine delay={240}>a call center.</MaskedLine>
            </h1>

            <Reveal delay={520} className="mt-9 max-w-xl">
              <p className="text-lg leading-relaxed text-ivory/85">
                I'm Kenny. One roofer, one crew, one standard. Every roof I put on a home in
                Loganville carries my name on it — and my phone number after it's done.
              </p>
            </Reveal>

            <Reveal delay={640} className="mt-11 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="sheen rounded-full bg-ivory px-9 py-4 text-eyebrow text-cocoa-deep transition-transform duration-500 hover:-translate-y-0.5"
              >
                Request Your Roof Consult
              </a>
              <a
                href="#projects"
                className="rounded-full border border-ivory/50 px-9 py-4 text-eyebrow text-ivory transition-colors duration-500 hover:bg-ivory/10"
              >
                See the Work
              </a>
            </Reveal>
          </div>

          {/* floating trust plate */}
          <div className="mt-14 grid gap-px overflow-hidden border border-ivory/20 bg-ivory/10 backdrop-blur-md sm:grid-cols-3">
            {[
              { k: "4", v: "Five-star reviews" },
              { k: "@RooferKenny", v: "On TikTok, daily" },
              { k: "100%", v: "Kenny on every job" },
            ].map((s, i) => (
              <Reveal
                key={s.v}
                delay={700 + i * 110}
                className="bg-cocoa-deep/45 px-7 py-6 text-ivory"
              >
                <div className="font-display text-2xl">{s.k}</div>
                <div className="mt-1 text-eyebrow text-ivory/70">{s.v}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/70 lg:flex">
          <span className="text-eyebrow">Scroll</span>
          <span className="h-10 w-px bg-ivory/50 animate-scroll-hint" />
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────── */}
      <div className="overflow-hidden border-y border-border bg-cream py-5">
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, r) => (
            <div key={r} className="flex gap-14">
              {[
                "Roof Replacement",
                "Storm Damage",
                "Leak Repair",
                "Inspections",
                "Loganville · GA",
                "Owner On Site",
              ].map((t) => (
                <span key={r + t} className="text-eyebrow text-cocoa-soft">
                  {t} <span className="ml-14 text-brass">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section id="about" className="relative overflow-hidden bg-background py-28 lg:py-40">
        <div className="pointer-events-none absolute -right-40 top-24 select-none font-display text-[22rem] leading-none text-cocoa/[0.04] lg:text-[30rem]">
          K
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div ref={aboutImg.ref} className="relative">
              <Reveal variant="blur">
                <div
                  className="relative overflow-hidden rounded-sm shadow-lux"
                  style={{ transform: `translate3d(0, ${aboutImg.offset * -0.35}px, 0)` }}
                >
                  <img
                    src={kennyPortrait}
                    alt="Kenny, owner of Roofing With Kenny, standing on a rooftop in Loganville, Georgia at sunset"
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/45 to-transparent" />
                </div>
              </Reveal>

              <Reveal
                delay={260}
                className="absolute -bottom-10 -right-4 w-56 border border-border bg-card p-6 shadow-plate animate-float lg:-right-14"
              >
                <div className="font-display text-4xl text-cocoa-deep">4</div>
                <div className="mt-1 text-eyebrow text-cocoa-soft">Reviews · All 5 star</div>
                <div className="mt-3 text-brass tracking-[0.3em]">★★★★★</div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="flex items-center gap-4 text-cocoa-soft">
                <span className="h-px w-14 bg-brass" />
                <span className="text-eyebrow">About Me</span>
              </div>
            </Reveal>

            <h2 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] text-cocoa-deep">
              <MaskedLine>The name on the</MaskedLine>
              <MaskedLine delay={110}>
                truck is <span className="italic text-cocoa">mine.</span>
              </MaskedLine>
            </h2>

            <Reveal delay={200} className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I didn't start Roofing With Kenny to build a company. I started it because too many
                homeowners in Loganville were getting a salesman instead of a roofer.
              </p>
              <p>
                So I kept it personal. You text me. I climb your roof. I show you the photos, tell
                you the truth, and if it doesn't need replacing, I'll say so. When it does, I'm the
                one up there with the crew until the last shingle is set.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                { k: "Owner-led", v: "Every single job" },
                { k: "Local", v: "Loganville born" },
                { k: "Documented", v: "Photos, start to finish" },
              ].map((s, i) => (
                <Reveal key={s.k} delay={i * 120} className="bg-background px-6 py-7">
                  <div className="font-display text-xl text-cocoa-deep">{s.k}</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{s.v}</div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={260} className="mt-12">
              <div className="font-display text-3xl italic text-cocoa">— Kenny</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES (video background) ─────────────── */}
      <section id="services" className="relative overflow-hidden py-28 lg:py-40 grain">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={craftVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={project2}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-cocoa-deep/88" />
        <div className="absolute inset-0 surface-veil opacity-70" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-4 text-ivory/70">
                <span className="h-px w-14 bg-brass" />
                <span className="text-eyebrow">The Work</span>
              </div>
            </Reveal>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] text-ivory">
              <MaskedLine>Four things,</MaskedLine>
              <MaskedLine delay={110}>
                done <span className="italic text-brass">exceptionally.</span>
              </MaskedLine>
            </h2>
          </div>

          <div className="mt-16 grid gap-px border border-ivory/15 bg-ivory/15 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.no}
                delay={i * 120}
                className="group relative bg-cocoa-deep/85 p-9 transition-colors duration-700 hover:bg-cocoa/85 lg:p-12"
              >
                <div className="font-display text-sm tracking-[0.3em] text-brass">{s.no}</div>
                <h3 className="mt-6 font-display text-2xl text-ivory lg:text-3xl">{s.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-ivory/75">{s.copy}</p>
                <div className="mt-8 h-px w-0 bg-brass transition-all duration-700 group-hover:w-24" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────── */}
      <section id="projects" className="bg-background py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal>
                <div className="flex items-center gap-4 text-cocoa-soft">
                  <span className="h-px w-14 bg-brass" />
                  <span className="text-eyebrow">Featured Work</span>
                </div>
              </Reveal>
              <h2 className="mt-8 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] text-cocoa-deep">
                <MaskedLine>Roofs I'd put</MaskedLine>
                <MaskedLine delay={110}>
                  on <span className="italic text-cocoa">my own house.</span>
                </MaskedLine>
              </h2>
            </div>
            <Reveal delay={200} className="max-w-xs text-muted-foreground">
              A short, honest portfolio. No stock photos, no borrowed jobs.
            </Reveal>
          </div>

          <div className="mt-16 space-y-24">
            {PROJECTS.map((p, i) => (
              <ProjectRow key={p.title} project={p} flipped={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ──────────────────────────── */}
      <section id="compare" className="relative overflow-hidden bg-cream py-28 lg:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-4 text-cocoa-soft">
                <span className="h-px w-10 bg-brass" />
                <span className="text-eyebrow">Before &amp; After</span>
                <span className="h-px w-10 bg-brass" />
              </div>
            </Reveal>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] text-cocoa-deep">
              <MaskedLine>Drag it. That's the</MaskedLine>
              <MaskedLine delay={110}>
                <span className="italic text-cocoa">whole pitch.</span>
              </MaskedLine>
            </h2>
            <Reveal delay={200} className="mt-6 text-muted-foreground">
              Same house. Same week. Slide the handle to see the difference a real roofer makes.
            </Reveal>
          </div>

          <Reveal variant="blur" delay={140} className="mt-14">
            <BeforeAfter before={beforeImg} after={afterImg} />
          </Reveal>
        </div>
      </section>

      {/* ── TIKTOK ──────────────────────────────────── */}
      <section id="tiktok" className="relative overflow-hidden bg-background py-28 lg:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-4 text-cocoa-soft">
                <span className="h-px w-14 bg-brass" />
                <span className="text-eyebrow">Social</span>
              </div>
            </Reveal>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] text-cocoa-deep">
              <MaskedLine>You've probably</MaskedLine>
              <MaskedLine delay={110}>
                already <span className="italic text-cocoa">seen me.</span>
              </MaskedLine>
            </h2>
            <Reveal delay={200} className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I film the real thing — tear-offs, storm damage, the details other crews hide. If you
              want to know how I work before you ever call me, it's all on TikTok.
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.tiktok.com/@rooferkenny"
                target="_blank"
                rel="noopener noreferrer"
                className="sheen rounded-full bg-cocoa-deep px-9 py-4 text-eyebrow text-ivory transition-transform duration-500 hover:-translate-y-0.5"
              >
                Follow @RooferKenny
              </a>
              <span className="font-display text-2xl italic text-cocoa">@RooferKenny</span>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal variant="blur" className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-[2rem] border-[10px] border-cocoa-deep shadow-lux">
                <div className="relative aspect-[9/16]">
                  <img
                    src={tiktokScene}
                    alt="Kenny filming a rooftop TikTok video at sunset in Loganville, Georgia"
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/85 via-transparent to-cocoa-deep/25" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-eyebrow text-ivory/70">Latest on TikTok</div>
                    <div className="mt-2 font-display text-xl text-ivory">
                      "Here's what your roofer hopes you never look at."
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/60 bg-ivory/15 backdrop-blur-md animate-float">
                    <span className="ml-1 text-ivory">▶</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────── */}
      <section className="relative overflow-hidden surface-cocoa py-28 lg:py-40 grain">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-4 text-ivory/70">
                <span className="h-px w-10 bg-brass" />
                <span className="text-eyebrow">Trust · 4 Reviews</span>
                <span className="h-px w-10 bg-brass" />
              </div>
            </Reveal>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] text-ivory">
              <MaskedLine>Small number.</MaskedLine>
              <MaskedLine delay={110}>
                <span className="italic text-brass">Perfect record.</span>
              </MaskedLine>
            </h2>
          </div>

          <div className="mt-16 grid gap-px border border-ivory/15 bg-ivory/15 md:grid-cols-2">
            {[
              {
                q: "Kenny showed up himself, walked the whole roof with me, and sent photos the same afternoon. No pressure, no games.",
                n: "Homeowner · Loganville, GA",
              },
              {
                q: "The crew was spotless. You could not tell anyone had been in the yard — except for the new roof.",
                n: "Homeowner · Grayson, GA",
              },
              {
                q: "He told me my roof had three good years left instead of selling me a replacement. That's why he's getting the job later.",
                n: "Homeowner · Monroe, GA",
              },
              {
                q: "Storm hit on a Sunday. Kenny was on my roof Monday morning with a tarp and a plan.",
                n: "Homeowner · Walton County, GA",
              },
            ].map((r, i) => (
              <Reveal key={r.n} delay={i * 110} className="bg-cocoa-deep/55 p-9 lg:p-12">
                <div className="text-brass tracking-[0.35em]">★★★★★</div>
                <p className="mt-6 font-display text-xl leading-relaxed text-ivory lg:text-2xl">
                  "{r.q}"
                </p>
                <div className="mt-6 text-eyebrow text-ivory/60">{r.n}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden py-32 lg:py-44 grain">
        <video
          className="absolute inset-0 h-full w-full object-cover animate-drift"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={project1}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-cocoa-deep/80" />
        <div className="pointer-events-none absolute inset-6 hidden border border-ivory/20 md:block lg:inset-12" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="text-eyebrow text-brass">Loganville, Georgia</span>
          </Reveal>
          <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.98] text-ivory">
            <MaskedLine>Let's talk about</MaskedLine>
            <MaskedLine delay={120}>
              <span className="italic text-brass">your roof.</span>
            </MaskedLine>
          </h2>
          <Reveal delay={240} className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ivory/85">
            Free inspection, honest verdict, and a number you can actually call back. That's the
            whole offer.
          </Reveal>
          <Reveal delay={360} className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.tiktok.com/@rooferkenny"
              target="_blank"
              rel="noopener noreferrer"
              className="sheen rounded-full bg-ivory px-10 py-4 text-eyebrow text-cocoa-deep transition-transform duration-500 hover:-translate-y-0.5"
            >
              Message Kenny on TikTok
            </a>
            <a
              href="#top"
              className="rounded-full border border-ivory/50 px-10 py-4 text-eyebrow text-ivory transition-colors duration-500 hover:bg-ivory/10"
            >
              Back to Top
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div>
              <div className="font-display text-2xl text-cocoa-deep">
                Roofing <span className="italic">with</span> Kenny
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                A personal roofing brand serving Loganville and Walton County, Georgia.
              </p>
            </div>
            <div className="flex flex-wrap gap-14">
              <div>
                <div className="text-eyebrow text-cocoa-soft">Explore</div>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <a href={n.href} className="transition-colors hover:text-cocoa-deep">
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-eyebrow text-cocoa-soft">Find Me</div>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="https://www.tiktok.com/@rooferkenny"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-cocoa-deep"
                    >
                      TikTok · @RooferKenny
                    </a>
                  </li>
                  <li>Loganville, Georgia</li>
                  <li>4 Reviews · 5 stars</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Roofing With Kenny. All rights reserved.</span>
            <span className="text-eyebrow text-cocoa-soft">Built roof by roof</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectRow({
  project,
  flipped,
}: {
  project: (typeof PROJECTS)[number];
  flipped: boolean;
}) {
  const { ref, offset } = useParallax<HTMLDivElement>(55);
  return (
    <div className="grid items-center gap-12 lg:grid-cols-12">
      <div
        ref={ref}
        className={`lg:col-span-7 ${flipped ? "lg:order-2 lg:col-start-6" : ""}`}
      >
        <Reveal variant="blur">
          <div className="overflow-hidden rounded-sm shadow-lux">
            <img
              src={project.img}
              alt={`${project.title} — ${project.tag} in ${project.place}`}
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
              style={{ transform: `scale(1.08) translate3d(0, ${offset * 0.16}px, 0)` }}
            />
          </div>
        </Reveal>
      </div>
      <div className={`lg:col-span-4 ${flipped ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
        <Reveal delay={140}>
          <div className="text-eyebrow text-brass">{project.tag}</div>
          <h3 className="mt-5 font-display text-3xl leading-tight text-cocoa-deep lg:text-4xl">
            {project.title}
          </h3>
          <div className="mt-2 text-sm text-muted-foreground">{project.place}</div>
          <p className="mt-6 leading-relaxed text-muted-foreground">{project.copy}</p>
        </Reveal>
      </div>
    </div>
  );
}
