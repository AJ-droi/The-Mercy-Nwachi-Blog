import Link from "next/link";

export default function Hero({
  title,
  slug,
  imageUrl,
  subtitle,
}: {
  title: string;
  slug: string;
  imageUrl: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
        <div
          className="h-[340px] w-full bg-cover bg-center sm:h-[420px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          {subtitle ? (
            <div className="mb-2 text-xs font-medium tracking-[0.25em] text-white/85">
              {subtitle.toUpperCase()}
            </div>
          ) : null}
          <Link href={`/blog/${slug}`} className="block">
            <h1 className="max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
              {title}
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
}
