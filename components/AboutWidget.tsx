import Image from "next/image";
import { getAuthors } from "@/lib/contentful";
import { Facebook, Instagram, Linkedin, } from "lucide-react";

export default async function AboutWidget() {
    const author = await getAuthors()
  const name = author[0].fields.fullName
  const facebookUrl = author[0]?.fields?.facebookUrl || "#";
  const instagramUrl = author[0]?.fields?.instagramUrl || "#";
  const linkedinUrl = author[0]?.fields?.linkedinUrl || "#";
  const profileImage = author[0]?.fields?.profileImage?.fields?.file?.url || "";

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] md:items-start">
        <div className="relative rounded-2xl bg-brand px-6 pb-8 pt-16 text-white">
          {profileImage && (
            <Image
              src={profileImage}
              alt={name}
              width={96}
              height={96}
              className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white object-cover"
            />
          )}
          <div className="text-center">
            <h3 className="text-2xl font-semibold tracking-wide">HELLO, I&apos;M</h3>
            <p className="mt-1 text-2xl font-bold tracking-wide">{name}</p>
            <p className="mx-auto mt-5 max-w-[18rem] text-sm leading-6 text-white/85">
              I am a versatile creator who can approach marketing and content projects
              from concept to implementation.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-white/90">
            <a href={facebookUrl} aria-label="Facebook" className="hover:text-white">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={instagramUrl} aria-label="Instagram" className="hover:text-white">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={linkedinUrl} aria-label="LinkedIn" className="hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="px-1 md:px-4 md:pt-4">
          <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-sm leading-8 text-neutral-600 sm:text-base">
            The blog features carefully selected work, ideas, and reflections on
            design, storytelling, and building meaningful digital experiences. I share
            thoughtful notes, practical lessons, and inspiration from projects across
            brand, product, and content.
          </p>
          <p className="mt-3 text-sm leading-8 text-neutral-600 sm:text-base">
            This space is curated to feel warm, intentional, and useful. Expect a mix
            of personal perspective, creative process, and resources that support
            creators and founders.
          </p>

          <button className="mt-8 rounded-full border-2 border-brand px-6 py-3 text-xs font-semibold tracking-[0.22em] text-neutral-900 transition hover:bg-brand hover:text-white">
            CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
}
