import Link from "next/link";

export default function Pagination({
  basePath,
  page,
  totalPages,
  query,
}: {
  basePath: string; // e.g. "/blog" or `/category/${slug}` or "/search"
  page: number;
  totalPages: number;
  query?: Record<string, string>;
}) {
  if (totalPages <= 1) return null;

  const makeHref = (p: number) => {
    const params = new URLSearchParams({ ...(query || {}), page: String(p) });
    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-3 text-sm">
      <Link
        className={`rounded-full border px-4 py-2 ${page <= 1 ? "pointer-events-none opacity-40" : "hover:border-neutral-900"}`}
        href={makeHref(Math.max(1, page - 1))}
      >
        ← Prev
      </Link>

      <span className="text-neutral-600">
        Page {page} of {totalPages}
      </span>

      <Link
        className={`rounded-full border px-4 py-2 ${page >= totalPages ? "pointer-events-none opacity-40" : "hover:border-neutral-900"}`}
        href={makeHref(Math.min(totalPages, page + 1))}
      >
        Next →
      </Link>
    </div>
  );
}
