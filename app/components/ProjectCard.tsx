import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#2c245d] via-[#182449] to-[#0e1630]">
      {project.image ? (
        <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div role="img" aria-label={`Placeholder preview for ${project.title}`} className="flex h-full items-center justify-center p-8">
          <div className="w-full max-w-[290px] overflow-hidden rounded-xl border border-white/15 bg-[#11182d] shadow-2xl shadow-black/30">
            <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-white/5 px-4">
              <i className="h-2 w-2 rounded-full bg-rose-400" />
              <i className="h-2 w-2 rounded-full bg-amber-400" />
              <i className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-3 p-5">
              <div className="h-4 w-2/3 rounded bg-violet-400/65" />
              <div className="h-2 w-full rounded bg-slate-500/35" />
              <div className="h-2 w-4/5 rounded bg-slate-500/35" />
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="h-12 rounded-md bg-violet-500/30" />
                <div className="h-12 rounded-md bg-indigo-500/30" />
                <div className="h-12 rounded-md bg-sky-500/30" />
              </div>
            </div>
          </div>
        </div>
      )}
      {!project.image && (
        <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] text-white/80">Add project screenshot</span>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#11192e] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-violet-950/25">
      <ProjectPreview project={project} />
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.13em] text-violet-300">{project.category}</span>
          <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-[11px] text-amber-200">{project.status}</span>
        </div>
        <h3 className="mt-5 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 min-h-21 text-sm leading-7 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => <span key={tech} className="rounded-lg border border-violet-400/15 bg-violet-400/10 px-3 py-1.5 text-xs font-medium text-violet-200">{tech}</span>)}
        </div>
        <Link href={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
          View Details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
