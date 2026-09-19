import { ProjectsSection } from "@/components/projects-section"

export default function Page() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <main className="flex min-h-screen flex-col">
        <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center px-6 py-24">
          <p className="text-sm font-medium text-muted-foreground">Welcome</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Building thoughtful software, one project at a time.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            Designer and engineer focused on crafting fast, accessible, and beautiful digital
            experiences.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View projects
          </a>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
          <div className="mt-5 max-w-2xl space-y-3 text-pretty text-lg text-muted-foreground">
            <p>
              I hold a Master of Computer Applications (MCA) degree, where I built a strong
              foundation in software engineering and problem-solving.
            </p>
            <p>
              I&apos;m passionate about web development, and I love turning ideas into fast,
              accessible, and beautiful experiences on the web.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
          <ul className="mt-5 flex flex-wrap items-center gap-3">
            {["HTML", "CSS", "JavaScript", "React", "AI Tools"].map((skill) => (
              <li
                key={skill}
                className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <ProjectsSection />
      </main>
    </div>
  )
}
