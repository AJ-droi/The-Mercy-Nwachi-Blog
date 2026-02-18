import { Facebook, Instagram, Twitter } from "lucide-react";

export const revalidate = 60;

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { sent?: string; error?: string };
}) {
  const sent = searchParams?.sent === "1";
  const error = searchParams?.error === "1";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.25em] text-neutral-600">
            CONTACT
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s talk
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-700">
            Send a message — we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_320px]">
          <form
            action="/api/contact"
            method="post"
            className="rounded-2xl border border-neutral-200 p-6 sm:p-8"
          >
            {sent ? (
              <div className="mb-6 rounded-xl bg-green-50 p-4 text-sm text-green-800">
                Message sent successfully.
              </div>
            ) : null}

            {error ? (
              <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-800">
                Something went wrong. Please try again.
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold tracking-[0.22em] text-neutral-700">
                  NAME
                </label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-xs font-semibold tracking-[0.22em] text-neutral-700">
                  EMAIL
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold tracking-[0.22em] text-neutral-700">
                SUBJECT
              </label>
              <input
                name="subject"
                required
                className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
                placeholder="What’s this about?"
              />
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold tracking-[0.22em] text-neutral-700">
                MESSAGE
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm leading-7 outline-none focus:border-neutral-900"
                placeholder="Write your message..."
              />
            </div>

            {/* Simple bot protection */}
            <input
              name="company"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <button className="mt-6 w-full rounded-xl bg-brand py-3 text-xs font-semibold tracking-[0.25em] text-white hover:bg-neutral-800">
              SEND MESSAGE
            </button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="text-xs font-semibold tracking-[0.25em] text-neutral-800">
                CONTACT INFO
              </div>
              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <div>
                  <div className="text-xs tracking-[0.18em] text-neutral-500">
                    EMAIL
                  </div>
                  <div>hello@yourdomain.com</div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.18em] text-neutral-500">
                    LOCATION
                  </div>
                  <div>Remote</div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.18em] text-neutral-500">
                    SOCIAL
                  </div>
                  <div className="flex gap-3">
                    <a className="hover:text-neutral-950" href="#" aria-label="Facebook">
                      <Facebook aria-hidden="true" className="h-4 w-4" />
                    </a>
                    <a className="hover:text-neutral-950" href="#" aria-label="Twitter">
                      <Twitter aria-hidden="true" className="h-4 w-4" />
                    </a>
                    <a className="hover:text-neutral-950" href="#" aria-label="Instagram">
                      <Instagram aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-brand p-6 text-white">
              <div className="text-xs font-semibold tracking-[0.25em]">
                BUSINESS HOURS
              </div>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Mon–Fri, 9am–5pm.
                <br />
                We respond within 24–48 hours.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
