import Link from "next/link";

export default function PostCard({
  title,
  slug,
  excerpt,
  imageUrl,
  date,
}: {
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
}) {
  return (
    <article className="group">
      {imageUrl ? (
        <Link href={`/blog/${slug}`}>
          <div
            className="mb-4 aspect-[16/10] w-full rounded-xl bg-neutral-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </Link>
      ) : null}

      <div className="text-center">
        <h2 className="text-sm font-semibold tracking-[0.18em] text-neutral-900">
          <Link className="hover:underline" href={`/blog/${slug}`}>
            {title.toUpperCase()}
          </Link>
        </h2>

        {date ? (
          <div className="mt-1 text-[11px] tracking-[0.18em] text-neutral-500">
            {new Date(date).toDateString()}
          </div>
        ) : null}

        {excerpt ? (
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-neutral-700">
            {excerpt}
          </p>
        ) : null}

        <div className="mt-3">
          <Link
            className="text-[11px] font-medium tracking-[0.25em] text-neutral-700 hover:text-neutral-950"
            href={`/blog/${slug}`}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </article>
  );
}
