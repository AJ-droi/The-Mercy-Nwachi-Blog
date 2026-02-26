import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import BlogWidgets from "@/components/BlogWidgets";
import { searchPostsPaged } from "@/lib/contentful";

export const revalidate = 60;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const q = (searchParams.q || "").trim();
  const page = Math.max(1, Number(searchParams.page || "1"));
  const pageSize = 6;

  const data = q ? await searchPostsPaged(q, page, pageSize) : { items: [], page, totalPages: 1 };

  return (
    <main className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-[1fr_320px]">
      <div>
        <h1 className="text-2xl font-semibold">Search</h1>

        <form className="mt-6 flex gap-2" action="/search">
          <input
            name="q"
            defaultValue={q}
            className="w-full rounded-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
            placeholder="Search posts..."
          />
          <button className="rounded-full border border-neutral-300 px-5 py-3 text-sm hover:border-neutral-900">
            Search
          </button>
        </form>

        <div className="mt-8 grid grid-cols-1 gap-14 md:grid-cols-2">
          {data.items.map((p: any) => {
            const img = p?.fields?.coverImage?.fields?.file?.url
              ? `https:${p.fields.coverImage.fields.file.url}`
              : undefined;

            return (
              <PostCard
                key={p.sys.id}
                title={p.fields.title}
                slug={p.fields.slug}
                excerpt={p.fields.excerpt}
                date={p.fields.publishedDate}
                imageUrl={img}
              />
            );
          })}
        </div>

        {q ? (
          <Pagination
            basePath="/search"
            page={page}
            totalPages={(data as any).totalPages || 1}
            query={{ q }}
          />
        ) : null}
      </div>

      <BlogWidgets />
    </main>
  );
}
