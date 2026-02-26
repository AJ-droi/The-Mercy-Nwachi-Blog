import Image from "next/image";
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import { getAuthors } from "@/lib/contentful";

// export const revalidate = 60;

export default async function AboutPage() {

  const author = await getAuthors()

  const name = author[0].fields.fullName
  const topics = author[0].fields.topic || []
  const email = author[0].fields.email || ""
  const profileImage = author[0]?.fields?.profileImage?.fields?.file?.url || ""
  const aboutMe = author[0].fields.aboutMe || "This is a short bio about the author. It can include their background, interests, and what they hope to share through this blog.";
  const aboutBlog = author[0].fields.aboutBlog || "This blog covers a range of topics related to design, storytelling, and digital experiences. Expect thoughtful articles, practical lessons, and inspiration from projects across brand, product, and content.";


  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.25em] text-neutral-600">
            ABOUT
          </div>

        <div className="mt-4 text-sm leading-7 text-neutral-700">
            <Markdown remarkPlugins={[remarkGfm]}>{aboutMe}</Markdown>
          </div> 

          {/* subtle brand divider */}
          <div className="mx-auto mt-6 h-0.5 w-16 rounded-full bg-brand" />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[240px_1fr]">
          {/* Profile card */}
          <div className="rounded-2xl border border-neutral-200 p-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-brand-soft">
              {profileImage && (
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="mt-4 text-center text-sm font-semibold">
              {name}
            </div>

            <div className="mt-1 text-center text-xs tracking-[0.18em] text-neutral-500">
              WRITER / CREATOR
            </div>

            {/* brand accent */}
            <div className="mx-auto mt-4 h-px w-12 bg-brand/60" />
          </div>

          {/* Main content */}
          <div className="rounded-2xl border border-neutral-200 p-6 sm:p-8">
            <div className="text-sm leading-7 text-neutral-700">
              <Markdown remarkPlugins={[remarkGfm]}>{aboutBlog}</Markdown>
            </div>

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
                  <div>{topics.join(", ")}</div>
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
                  <div className="text-brand">{email}</div>
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
