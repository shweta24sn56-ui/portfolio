import { ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  description: string
  tags: string[]
  href: string
}

const projects: Project[] = [
  {
    title: "Nova Analytics",
    description:
      "A real-time analytics dashboard with customizable widgets, live data streaming, and team collaboration built for modern product teams.",
    tags: ["Next.js", "TypeScript", "Charts"],
    href: "#",
  },
  {
    title: "Orbit Commerce",
    description:
      "A headless e-commerce storefront featuring instant search, one-click checkout, and a fully responsive, accessible shopping experience.",
    tags: ["React", "Stripe", "Tailwind"],
    href: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="mb-12">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
          A selection of recent work spanning product design and full-stack engineering.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/25"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-card-foreground">{project.title}</h3>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  )
}
