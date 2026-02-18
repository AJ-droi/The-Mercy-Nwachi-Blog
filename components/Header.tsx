import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-(--border) bg-brand-soft text-brand ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 ">
        {/* Social */}
        <div className="flex items-center gap-3 text-sm">
          <a className="hover:text-brand" href="#" aria-label="Facebook">
            <Facebook aria-hidden="true" className="h-4 w-4" />
          </a>
          <a className="hover:text-brand" href="#" aria-label="Twitter">
            <Twitter aria-hidden="true" className="h-4 w-4" />
          </a>
          <a className="hover:text-brand" href="#" aria-label="Instagram">
            <Instagram aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        {/* Logo */}
        <Link href="/" aria-label="The Nwachi home" className="block">
     
           <Image
            src="/the-nwachi.svg"
            alt="The Nwachi"
            width={100}
            height={100}
            className="h-24 w-auto object-contain"
            priority
          />
    
        </Link>

        {/* Search */}
        <div className="flex items-center gap-2">
          <form action="/search" className="hidden items-center gap-2 sm:flex">
            <input
              name="q"
              className="w-56 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-brand outline-none ring-2 ring-transparent placeholder:text-brand/70 focus:ring-brand"
              placeholder="Search..."
            />
            <button
              className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-brand hover:border-brand hover:text-brand"
              aria-label="Search"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
