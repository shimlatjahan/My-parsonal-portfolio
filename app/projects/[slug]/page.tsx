import type { Metadata } from "next";

import Link from "next/link";

import { notFound } from "next/navigation";

import { ProjectPreview } from "../../components/ProjectCard";

import {
  getProject,
  projects,
} from "@/lib/data";


// DYNAMIC ROUTES

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


// SEO

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const project = getProject(slug);

  return {
    title: project
      ? `${project.title} | Shimlat Jahan Sonia`
      : "Project Not Found",

    description: project?.description,
  };
}


// PROJECT DETAILS

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (

    <main className="min-h-screen bg-[#080d1d] py-14 sm:py-20">

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

        {/* BACK BUTTON */}

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
        >
          ← Back to Projects
        </Link>


        {/* HEADER */}

        <header className="mt-10">

          <div className="flex flex-wrap items-center gap-3">

            <span className="text-xs font-bold uppercase tracking-widest text-violet-300">
              {project.category}
            </span>

            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">
              {project.status}
            </span>

          </div>

          <h1 className="mt-6 text-3xl font-black text-white sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            {project.description}
          </p>

        </header>


        {/* PROJECT IMAGE */}

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">

          <ProjectPreview project={project} />

        </div>


        {/* PROJECT DETAILS GRID */}

        <div className="mt-9 grid gap-7 lg:grid-cols-[1fr_310px]">

          {/* LEFT CONTENT */}

          <div className="space-y-7">

            {/* OVERVIEW */}

            <section className="rounded-3xl border border-white/10 bg-[#11192e] p-7 sm:p-9">

              <h2 className="text-2xl font-bold text-white">
                Project Overview
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
                {project.overview}
              </p>

            </section>


            {/* CHALLENGES */}

            <section className="rounded-3xl border border-white/10 bg-[#11192e] p-7 sm:p-9">

              <h2 className="text-2xl font-bold text-white">
                Development Challenges
              </h2>

              {project.status === "Project Concept" && (

                <p className="mt-3 text-sm text-amber-200">
                  These are proposed challenges, not completed work.
                </p>

              )}

              <ul className="mt-6 space-y-4 text-sm text-slate-300">

                {project.challenges.map((challenge) => (

                  <li
                    key={challenge}
                    className="flex items-start gap-3"
                  >

                    <span className="text-violet-300">
                      ✓
                    </span>

                    {challenge}

                  </li>

                ))}

              </ul>

            </section>


            {/* FUTURE IMPROVEMENTS */}

            <section className="rounded-3xl border border-white/10 bg-[#11192e] p-7 sm:p-9">

              <h2 className="text-2xl font-bold text-white">
                Future Improvements
              </h2>

              <ul className="mt-6 space-y-4 text-sm text-slate-300">

                {project.improvements.map((item) => (

                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <span className="text-sky-300">
                      →
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

            </section>

          </div>


          {/* RIGHT SIDEBAR */}

          <aside className="h-fit rounded-3xl border border-white/10 bg-[#11192e] p-7">

            <h2 className="text-xl font-bold text-white">
              Project Information
            </h2>

            {/* TECHNOLOGY STACK */}

            <h3 className="mt-7 text-sm font-bold text-slate-200">
              Technology Stack
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-lg border border-violet-400/15 bg-violet-400/10 px-3 py-1.5 text-xs font-semibold text-violet-200"
                >
                  {tech}
                </span>

              ))}

            </div>


            {/* LIVE PROJECT */}

            <div className="mt-7 border-t border-white/10 pt-6">

              <h3 className="text-sm font-bold text-slate-200">
                Live Project
              </h3>

              {project.liveUrl ? (

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-violet-300 hover:text-violet-200"
                >
                  Visit Live Website ↗
                </a>

              ) : (

                <p className="mt-3 text-sm text-slate-500">
                  Live link not added
                </p>

              )}

            </div>


            {/* GITHUB REPOSITORY */}

            <div className="mt-7 border-t border-white/10 pt-6">

              <h3 className="text-sm font-bold text-slate-200">
                Client-side GitHub Repository
              </h3>

              {project.githubUrl ? (

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-violet-300 hover:text-violet-200"
                >
                  View Source Code ↗
                </a>

              ) : (

                <p className="mt-3 text-sm text-slate-500">
                  Repository link not added
                </p>

              )}

            </div>

          </aside>

        </div>


        {/* BOTTOM BUTTONS */}

        <div className="mt-10 flex flex-wrap gap-3">

          <Link
            href="/#projects"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            ← All Projects
          </Link>

          <Link
            href="/#contact"
            className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Get in Touch →
          </Link>

        </div>

      </div>

    </main>

  );
}