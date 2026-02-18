"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  title: string;
  slug: string;
  imageUrl: string;
  subtitle?: string; // category, tag, etc.
  date?: string;
};

export default function HeroSlider({
  slides,
  autoPlayMs = 6000,
}: {
  slides: Slide[];
  autoPlayMs?: number;
}) {
  const safeSlides = useMemo(
    () => slides.filter((s) => s?.title && s?.slug && s?.imageUrl),
    [slides]
  );

  const [index, setIndex] = useState(0);
  const count = safeSlides.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [count, autoPlayMs]);

  if (count === 0) return null;

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
        {/* Slides */}
        <div className="relative h-[340px] sm:h-[420px]">
          {safeSlides.map((s, i) => {
            const active = i === index;
            return (
              <div
                key={s.slug}
                className={[
                  "absolute inset-0 transition-all duration-700 ease-out",
                  active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6",
                ].join(" ")}
                aria-hidden={!active}
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                  {s.subtitle ? (
                    <div className="mb-2 text-xs font-medium tracking-[0.25em] text-white/85">
                      {s.subtitle.toUpperCase()}
                    </div>
                  ) : null}

                  <Link href={`/blog/${s.slug}`} className="block">
                    <h1 className="max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
                      {s.title}
                    </h1>
                  </Link>

                  {s.date ? (
                    <div className="mt-3 text-[11px] tracking-[0.2em] text-white/75">
                      {new Date(s.date).toDateString()}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        {count > 1 ? (
          <>
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-3 py-2 text-white backdrop-blur hover:bg-black/45"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-3 py-2 text-white backdrop-blur hover:bg-black/45"
              aria-label="Next slide"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {safeSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-2 w-2 rounded-full transition",
                    i === index ? "bg-white" : "bg-white/45 hover:bg-white/70",
                  ].join(" ")}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
