import HeroSlider from "@/components/HeroSlider";
import PostCard from "@/components/PostCard";
import BlogWidgets from "@/components/BlogWidgets";
import { getAuthors, getPostsPaged } from "@/lib/contentful";

export default async function Home() {
  const { items: posts } = await getPostsPaged(1, 7);


  // Pick featured posts (first 3 for now)
  const featured = posts.slice(0, 3);
  const rest = posts.slice(3);

  const slides = featured
    .map((p) => {
      const url = p?.fields?.coverImage?.fields?.file?.url;
      const imageUrl = url ? `https:${url}` : null;
      return imageUrl
        ? {
            title: p.fields.title,
            slug: p.fields.slug,
            subtitle: p.fields.category || "Featured",
            date: p.fields.publishedDate,
            imageUrl,
          }
        : null;
    })
    .filter(Boolean) as any[];

  return (
    <main>
      <HeroSlider slides={slides} autoPlayMs={6000} />

      <section className="mx-auto max-w-6xl space-y-10 px-4 py-10">
        <BlogWidgets className="w-full" includeFollow={false} />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          {rest.map((p) => {
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
      </section>
    </main>
  );
}
