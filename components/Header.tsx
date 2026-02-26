import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin} from "lucide-react";
import { getAuthors } from "@/lib/contentful";
import Navbar from "./Navbar";

export default async function Header() {
  const authors = await getAuthors();
  const author = authors[0];

  const facebookUrl = author?.fields?.facebookUrl || "#";
  const linkedinUrl = author?.fields?.linkedinUrl || "#";
  const instagramUrl = author?.fields?.instagramUrl || "#";

  return (
    <header className="border-b border-(--border) bg-brand-soft text-brand ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 ">
       

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

        <Navbar />


         {/* Social */}
        <div className="flex items-center gap-3 text-sm">
          <a className="hover:text-brand" href={facebookUrl} aria-label="Facebook">
            <Facebook aria-hidden="true" className="h-4 w-4" />
          </a>
          <a className="hover:text-brand" href={linkedinUrl} aria-label="Twitter">
            <Linkedin aria-hidden="true" className="h-4 w-4" />
          </a>
          <a className="hover:text-brand" href={instagramUrl} aria-label="Instagram">
            <Instagram aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

   
      </div>
    </header>
  );
}
