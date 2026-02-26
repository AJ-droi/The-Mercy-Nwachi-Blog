import Link from "next/link";
import Image from "next/image";
import { getPostsPaged } from "@/lib/contentful";

export default async function Footer() {
  const { items: recentPosts } = await getPostsPaged(1, 3);

  return (
    <footer className="mt-10 border-t border-(--border) bg-brand-soft-2 text-(--fg)">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-3">
        <div className="relative">
           <Link href="/" aria-label="The Nwachi home" className="block">
     
           <Image
            src="/the-nwachi.svg"
            alt="The Nwachi"
            width={100}
            height={100}
            className="h-15 w-auto object-contain"
            priority
          />
    
        </Link>
          <p className=" text-sm leading-7 text-(--muted)">
            Minimal editorial theme built with Next.js + Tailwind + Contentful.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-[0.25em]">
            RECENT POSTS
          </div>
          <ul className="mt-4 space-y-2 text-sm text-(--muted)">
            {recentPosts.map((post: any) => (
              <li key={post.sys.id}>
                <Link className="hover:text-brand" href={`/blog/${post.fields.slug}`}>
                  {post.fields.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-[0.25em]">PAGES</div>
          <ul className="mt-4 space-y-2 text-sm text-(--muted)">
            <li>
              <Link className="hover:text-brand" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-(--border) py-6 text-center text-xs text-(--muted)">
        © {new Date().getFullYear()} Your Client — All rights reserved.
      </div>
    </footer>
  );
}
