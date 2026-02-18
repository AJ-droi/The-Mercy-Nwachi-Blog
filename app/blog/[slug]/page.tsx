import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getPostBySlug } from "@/lib/contentful";
import Link from "next/link";

export const revalidate = 60;

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: any = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const cover = post?.fields?.coverImage?.fields?.file?.url
    ? `https:${post.fields.coverImage.fields.file.url}`
    : null;

  const category = post?.fields?.category?.fields; // if reference

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link className="text-sm text-neutral-600 hover:text-neutral-900" href="/blog">
        ← Back to blog
      </Link>

      <h1 className="mt-4 text-3xl font-semibold">{post.fields.title}</h1>

      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
        {post.fields.publishedDate ? (
          <span>{new Date(post.fields.publishedDate).toDateString()}</span>
        ) : null}
        {category?.slug ? (
          <Link className="hover:text-neutral-900" href={`/category/${category.slug}`}>
            • {category.name}
          </Link>
        ) : null}
      </div>

      {cover ? (
        <div
          className="mt-8 aspect-[16/9] w-full rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${cover})` }}
        />
      ) : null}

      <article className="prose prose-neutral mt-10 max-w-none">
        {post.fields.content ? documentToReactComponents(post.fields.content) : null}
      </article>
    </main>
  );
}
