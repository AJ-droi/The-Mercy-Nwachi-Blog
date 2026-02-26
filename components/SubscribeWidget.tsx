export default function SubscribeWidget() {
  return (
    <section className="rounded-2xl bg-brand p-6 text-white">
      <div className="text-center text-xs font-semibold tracking-[0.25em]">
        SUBSCRIBE TO MY NEWSLETTER
      </div>
      <div className="mt-4 space-y-3">
        <input
          className="w-full rounded-lg px-4 py-3 text-sm text-brand-soft-2 outline-none"
          placeholder="Your email address"
        />
        <button className="w-full text-black rounded-lg bg-brand-soft-2 border border-white/40 py-3 text-xs font-semibold tracking-[0.25em] hover:bg-white hover:text-neutral-900">
          SUBSCRIBE
        </button>
      </div>
    </section>
  );
}
