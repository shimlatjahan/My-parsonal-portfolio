import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";
import { personalInfo, projects, skillGroups } from "@/lib/data";

const socials = [
  { name: "GitHub", url: personalInfo.github },
  { name: "LinkedIn", url: personalInfo.linkedin },
  { name: "Facebook", url: personalInfo.facebook },
  { name: "Twitter", url: personalInfo.twitter },
].filter((item) => Boolean(item.url));

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 text-center md:mb-14">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
        {kicker}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="relative isolate overflow-hidden scroll-mt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[680px] lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-20">
          {/* Introduction */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-semibold text-violet-200 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Learning • Building • Growing
            </div>

            <p className="mt-7 text-lg text-slate-200 sm:text-xl">Hello, I&apos;m</p>
            <h1 className="mt-3 text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl xl:text-6xl">
              Shimlat Jahan
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-sky-300 bg-clip-text text-transparent">
                Sonia.
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-100 sm:text-2xl">
              Aspiring <span className="text-violet-300">Frontend Developer</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              I&apos;m a Public Administration student at the University of Barishal,
              passionate about programming, responsive web design and building
              useful, accessible user interfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-950/25 transition hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
              >
                Explore Projects <span aria-hidden="true">↗</span>
              </Link>
              {personalInfo.resume ? (
                <a
                  href={personalInfo.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-violet-400/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                >
                  ↓ Download Resume
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Resume Coming Soon
                </Link>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.length > 0 ? (
                socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-violet-400/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                  >
                    {social.name} ↗
                  </a>
                ))
              ) : (
                <p className="text-sm text-slate-400">Add social links in lib/data.ts.</p>
              )}
            </div>
          </div>

          {/* Smaller profile image. No floating text card. */}
          <div className="relative mx-auto w-full max-w-[285px] sm:max-w-[315px] lg:max-w-[345px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-500/20 via-sky-500/10 to-transparent blur-2xl"
            />
            <div className="relative rounded-[1.8rem] border border-white/20 bg-gradient-to-br from-[#302653] to-[#131b34] p-2.5 shadow-2xl shadow-black/25 sm:p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[#141d39]">
                {personalInfo.profileImage ? (
                  <Image
                    src={personalInfo.profileImage}
                    alt={`Professional portrait of ${personalInfo.name}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 285px, (max-width: 1024px) 315px, 345px"
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#40306d] to-[#131b34] text-center">
                    <span className="flex h-32 w-32 items-center justify-center rounded-full border border-violet-300/40 bg-violet-500/15 text-5xl font-extrabold text-white">
                      SJ
                    </span>
                    <p className="mt-6 text-xs text-violet-200">Add your profile photo</p>
                    <p className="mt-1 text-xs text-slate-400">public/Sonia2.jpeg</p>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d1d] via-[#080d1d]/80 to-transparent px-4 pb-5 pt-16 sm:px-5">
                  <h3 className="text-base font-extrabold leading-snug text-white sm:text-lg">
                    {personalInfo.name}
                  </h3>
                  <p className="mt-1 text-xs text-violet-200 sm:text-sm">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="scroll-mt-24 border-t border-white/5 bg-[#22314e] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionTitle
            kicker="About Me"
            title="Beyond the Code"
            description="A little more about my background, learning journey and motivation."
          />
          <div className="grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#303a64] to-[#263854] p-8 sm:p-11">
              <div aria-hidden="true" className="absolute -right-14 -top-16 h-52 w-52 rounded-full bg-violet-500/15 blur-3xl" />
              <div className="relative">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/15 text-2xl font-bold text-violet-200">
                  {"</>"}
                </span>
                <h3 className="mt-8 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Curious mind.
                  <br />
                  <span className="bg-gradient-to-r from-violet-300 to-sky-300 bg-clip-text text-transparent">
                    Creative code.
                  </span>
                </h3>
                <p className="mt-6 leading-8 text-slate-300">
                  I learn by trying new things, asking questions and building projects one step at a time.
                </p>
                <div className="mt-9 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-bold text-white">Frontend</p>
                    <p className="mt-1 text-xs text-slate-300">Learning &amp; Practice</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-bold text-white">UI Design</p>
                    <p className="mt-1 text-xs text-slate-300">Responsive Thinking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-8 text-slate-200 sm:text-base">
              <p>
                Hello! I&apos;m <strong className="text-white">Shimlat Jahan Sonia</strong>, a
                Public Administration student at the University of Barishal and an aspiring Web Developer.
              </p>
              <p>
                Alongside my academic studies, I am exploring the world of programming and web development.
                My learning journey includes HTML, CSS, JavaScript, TypeScript, React, and Next.js.
                I am also learning about backend development and databases to understand how complete web applications work.
              </p>
              <p>
                I enjoy building user interfaces, making websites responsive, debugging code, and solving
                programming problems. Working on projects helps me understand concepts better and improve my practical development skills.
              </p>
              <p>
                I believe in continuous learning, staying curious, and improving through practice.
                My goal is to become a skilled developer who can build useful, accessible, and user-friendly web applications.
              </p>
              <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5">
                <h4 className="text-sm font-bold text-white">Outside Programming</h4>
                <p className="mt-2 text-sm text-slate-300">
                  {personalInfo.hobbies || "Add your real hobbies and interests in lib/data.ts."}
                </p>
              </div>
              <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-bold text-violet-200 transition hover:text-white">
                Let&apos;s connect →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionTitle
            kicker="My Toolkit"
            title="Skills & Technologies"
            description="The tools and technologies I am learning and using in practice."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-[#293957] p-6 transition hover:border-violet-400/30 sm:p-8">
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{group.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {group.skills.map((skill, index) => (
                    <div key={skill.name} className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition hover:border-violet-400/30 hover:bg-violet-400/10">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-extrabold ${
                        index % 3 === 0
                          ? "bg-orange-500/15 text-orange-200"
                          : index % 3 === 1
                          ? "bg-sky-500/15 text-sky-200"
                          : "bg-violet-500/15 text-violet-200"
                      }`}>
                        {skill.icon}
                      </span>
                      <span className="text-xs font-medium text-white sm:text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="scroll-mt-24 bg-[#22314e] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionTitle
            kicker="My Journey"
            title="Education"
            description="My academic background and growing interest in technology."
          />
          <article className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-[#293957] p-7 sm:flex-row sm:gap-8 sm:p-10">
            <div aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-3xl">🎓</div>
            <div>
              <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Currently Studying
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-white">Public Administration</h3>
              <p className="mt-2 font-semibold text-violet-200">University of Barishal</p>
              <p className="mt-3 text-sm text-slate-300">📍 {personalInfo.location}</p>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-200">
                Alongside my degree, I am independently developing my understanding of programming,
                frontend development and accessible web experiences.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionTitle
            kicker="My Portfolio"
            title="Featured Projects"
            description="Explore my web development projects built with React, Next.js, TypeScript and responsive interfaces."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 bg-[#22314e] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-[#35305e] via-[#293957] to-[#1d3453] px-6 py-16 text-center sm:px-12 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-200">Get In Touch</p>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Let&apos;s make something{" "}
              <span className="bg-gradient-to-r from-violet-200 to-sky-200 bg-clip-text text-transparent">meaningful.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-slate-200 sm:text-base">
              I&apos;m happy to connect, collaborate and keep learning with the developer community.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {personalInfo.email ? (
                <a href={`mailto:${personalInfo.email}`} className="rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-violet-500">
                  ✉ Send Email
                </a>
              ) : (
                <span className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm text-slate-200">Email: Add your address</span>
              )}
              {personalInfo.whatsapp && (
                <a
                  href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  WhatsApp ↗
                </a>
              )}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-slate-200">
              <span>✉ {personalInfo.email || "Email not added"}</span>
              {personalInfo.phone ? (
                <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="hover:text-violet-200">
                  ☎ {personalInfo.phone}
                </a>
              ) : (
                <span>☎ Phone: Add your number</span>
              )}
              <span>📍 {personalInfo.location}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
