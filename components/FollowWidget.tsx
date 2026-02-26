export default function FollowWidget() {
  return (
    <section className="border border-neutral-200 rounded-2xl p-5">
      <div className="text-center text-xs font-semibold tracking-[0.25em] text-neutral-800">
        FOLLOW ME ON
      </div>
      <div className="mt-4 flex justify-center gap-4 text-sm text-neutral-600">
        <a className="hover:text-neutral-950" href="#" aria-label="Facebook">
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.5c0-.9.2-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.2h2.6V21h2.9z" />
          </svg>
        </a>
        <a className="hover:text-neutral-950" href="#" aria-label="Twitter">
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.2-8.2L1 2h6.2l4.3 5.7L18.9 2zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20z" />
          </svg>
        </a>
        <a className="hover:text-neutral-950" href="#" aria-label="Instagram">
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8zm9.1 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
