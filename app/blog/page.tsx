import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/Sidebar";
import { getPostsPaged } from "@/lib/contentful";

export const revalidate = 60;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Math.max(1, Number(searchParams.page || "1"));
  const pageSize = 6;

  const data = await getPostsPaged(page, pageSize);

  return (
    <main className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-[1fr_320px]">
      <div>
        <h1 className="text-2xl font-semibold">Blog</h1>

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

        <Pagination basePath="/blog" page={data.page} totalPages={data.totalPages} />
      </div>

      <Sidebar />
    </main>
  );
}
