import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gipson Steel, Inc.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              About Gipson Steel
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              A family-led structural steel fabricator since 1976.
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Gipson Steel was founded in 1976 by E.M. "Hoot" Gipson, who brought
              more than two decades of experience in the structural steel industry.
              Since then, the company has grown into a team of approximately 80
              people, fabricating over 7,000 tons of steel each year and serving a
              repeat customer base across the Southeast and beyond.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50">
                Built on experience. Focused on relationships.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                By following our customers, Gipson Steel has completed projects in
                California, New York, Michigan, South Florida, Ohio, North Carolina,
                Aruba, Guatemala, Ghana, Togo, and Latvia. Our work ranges from
                higher education and healthcare facilities to industrial plants and
                specialty structures.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Mr. Gipson and his son Scott have both served as past chairmen of
                the Mississippi Associated Builders and Contractors (ABC). Today,
                the next generation continues that legacy as Gipson Steel moves into
                a third generation of leadership.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Gipson Steel is certified by the American Institute of Steel
                Construction (AISC) for the Certification Standard for Steel
                Building Structures, reflecting our commitment to quality and safety.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                Steel Teaching Sculpture · Mississippi State University
              </h2>
              <p className="text-sm text-slate-300">
                Mississippi State University is one of at least 135 colleges and
                universities in the United States that has a steel teaching
                sculpture, giving students a hands-on way to learn about steel
                framing and connections.
              </p>
              <p className="text-sm text-slate-300">
                In 2000, Gipson Steel, Inc. donated the steel structure to
                Mississippi State University's College of Engineering in support of
                higher education and the steel fabrication industry worldwide. The
                sculpture includes every AISC-approved steel-to-steel connection,
                including welded and bolted connections.
              </p>
              <p className="text-xs text-slate-400">
                Our investment in education reflects our belief that the future of
                the industry depends on well-prepared engineers, fabricators, and
                builders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
