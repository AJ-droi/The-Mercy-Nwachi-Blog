import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Posts" },
  { href: "/category", label: "Category" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="border-b border-(--border) bg-brand-soft-2">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="flex flex-wrap items-center justify-center gap-6 py-3 text-xs font-medium tracking-[0.2em] text-brand">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="hover:text-brand" href={l.href}>
                {l.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
