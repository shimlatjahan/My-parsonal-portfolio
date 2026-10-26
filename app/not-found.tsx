import Link from "next/link";

export default function NotFound() {
  return (

    <main className="flex min-h-[75vh] flex-col items-center justify-center px-6 py-20 text-center">

      <span className="bg-gradient-to-r from-violet-300 to-sky-300 bg-clip-text text-8xl font-black text-transparent">
        404
      </span>

      <h1 className="mt-7 text-3xl font-bold text-white">
        Page not found
      </h1>

      <p className="mt-4 max-w-md leading-7 text-slate-400">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
      >
        Back to Home →
      </Link>

    </main>

  );
}