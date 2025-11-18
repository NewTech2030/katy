import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "AISC Certified",
    description: "More than 40 years of experience in structural steel fabrication.",
  },
  {
    title: "Superior Product",
    description: "Committed to producing a world-class product the first time, every time.",
  },
  {
    title: "Leaders in Quality",
    description: "Focused on quality, service, and on-time delivery for every project.",
  },
];

const stats = [
  { label: "Years in business", value: "40+" },
  { label: "Tons fabricated / year", value: "7,000+" },
  { label: "Sq. ft. under roof", value: "100,000" },
];

const heroImage = {
  src: "https://www.gipsonsteel.com/sites/GipsonSteel/cache/file/8A9275DD-CC31-4087-AE5AE1F6B9A19134.jpg",
  alt: "Dudy Noble Baseball Stadium structural steel project by Gipson Steel",
};

export default function Home() {
  return (
    <div className="text-slate-50">
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:flex-row lg:items-center lg:py-20 lg:px-6">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Structural Steel Fabrication · AISC Certified
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Medium to heavy structural and miscellaneous steel fabrication.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Gipson Steel performs medium to heavy structural and miscellaneous steel
              fabrication for commercial and industrial projects across the southeast
              and beyond. We are AISC certified and carry the sophisticated paint
              endorsement.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300"
              >
                Talk with our team
              </Link>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3"
                >
                  <div className="text-lg font-semibold text-orange-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(234,88,12,0.18),transparent_55%)]" />
              <div className="relative space-y-4">
                <div className="overflow-hidden rounded-2xl border border-slate-800/70">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={900}
                    height={520}
                    className="h-56 w-full object-cover sm:h-64 md:h-72"
                    priority
                  />
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Fabrication Capabilities
                </h2>
                <p className="text-sm text-slate-300">
                  Our 100,000-square-foot facility houses up-to-date, fully automated
                  equipment including CNC drill line, plate and angle equipment, 15
                  five-ton overhead cranes, and state-of-the-art blasting and
                  infrared-equipped paint bays.
                </p>
                <p className="text-xs text-slate-400">
                  "Everything we do must be accomplished with the objective of
                  establishing Gipson Steel as the unquestioned leader in quality,
                  service, and delivery by producing a world-class product for our
                  clients the first time... every time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,_2fr)_minmax(0,_1.3fr)] md:items-start">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                AISC certified with more than 40 years of experience.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Since 1976, Gipson Steel has supported commercial and industrial
                construction with dependable structural and miscellaneous steel
                fabrication. Our team of skilled fabricators, detailers, and
                project managers works closely with contractors and owners to
                deliver safe, accurate, and on-schedule steel packages.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                We understand that every project is unique. From stadiums and
                museums to healthcare facilities, universities, and industrial
                plants, Gipson Steel brings the experience and shop capacity to
                handle complex, schedule-driven work.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">
                What we fabricate
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li>Medium to heavy structural steel packages</li>
                <li>Miscellaneous steel, platforms, and stairs</li>
                <li>Complex connection details and welded assemblies</li>
                <li>AISC-compliant fabrication with sophisticated paint</li>
              </ul>
              <div className="pt-2 text-xs text-slate-400">
                Serving contractors and owners across the Southeast and beyond.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Committed to producing a superior product.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
                Our most important asset is our people. Every member of the Gipson
                Steel team is committed to quality and customer satisfaction.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300"
            >
              Learn more about our history
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
