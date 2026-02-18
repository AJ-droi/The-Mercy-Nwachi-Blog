export const revalidate = 60;

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.25em] text-neutral-600">
            ABOUT
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A little story about this blog
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-700">
            This is an editorial-style blog built with Next.js, Tailwind, and
            Contentful — optimized for readability and a calm, minimal vibe.
          </p>

          {/* subtle brand divider */}
          <div className="mx-auto mt-6 h-[2px] w-16 rounded-full bg-brand" />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[240px_1fr]">
          {/* Profile card */}
          <div className="rounded-2xl border border-neutral-200 p-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-brand-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
            </div>

            <div className="mt-4 text-center text-sm font-semibold">
              Your Name
            </div>

            <div className="mt-1 text-center text-xs tracking-[0.18em] text-neutral-500">
              WRITER / CREATOR
            </div>

            {/* brand accent */}
            <div className="mx-auto mt-4 h-[1px] w-12 bg-brand/60" />
          </div>

          {/* Main content */}
          <div className="rounded-2xl border border-neutral-200 p-6 sm:p-8">
            <h2 className="text-sm font-semibold tracking-[0.22em] text-neutral-900">
              WHY THIS BLOG
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-700">
              Use this space to tell your client’s story: what the blog covers,
              who it’s for, and what readers should expect. Keep it short and
              warm.
            </p>

            <h2 className="mt-10 text-sm font-semibold tracking-[0.22em] text-neutral-900">
              WHAT YOU’LL FIND
            </h2>

            <ul className="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
              <li>
                <span className="text-brand">•</span> Thoughtful articles and guides
              </li>
              <li>
                <span className="text-brand">•</span> Curated categories for easy reading
              </li>
              <li>
                <span className="text-brand">•</span> A calm design focused on content
              </li>
            </ul>

            {/* Quick facts */}
            <div className="mt-10 rounded-xl border border-neutral-200 bg-brand-soft p-5">
              <div className="text-xs font-semibold tracking-[0.22em] text-neutral-800">
                QUICK FACTS
              </div>

              <div className="mt-4 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
                <div>
                  <div className="text-xs tracking-[0.18em] text-neutral-500">
                    LOCATION
                  </div>
                  <div>Remote</div>
                </div>

                <div>
                  <div className="text-xs tracking-[0.18em] text-neutral-500">
                    TOPICS
                  </div>
                  <div>Tech, Life, Work</div>
                </div>

                <div>
                  <div className="text-xs tracking-[0.18em] text-neutral-500">
                    UPDATES
                  </div>
                  <div>Weekly</div>
                </div>

                <div>
                  <div className="text-xs tracking-[0.18em] text-neutral-500">
                    CONTACT
                  </div>
                  <div className="text-brand">hello@yourdomain.com</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/blog"
                className="rounded-full border border-neutral-300 bg-white px-5 py-2 text-xs font-semibold tracking-[0.22em] text-neutral-800 hover:border-brand"
              >
                READ THE BLOG
              </a>

              <a
                href="/contact"
                className="btn-brand rounded-full px-5 py-2 text-xs font-semibold tracking-[0.22em] ring-2 ring-transparent focus:ring-brand"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
