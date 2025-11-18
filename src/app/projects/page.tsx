import type { Metadata } from "next";

const projects = [
  {
    name: "Benson Cancer Center Expansion",
    location: "New Orleans, LA",
  },
  {
    name: "Dudy Noble Baseball Stadium",
    location: "Mississippi State University – Starkville, MS",
  },
  {
    name: "DLA General Purpose Warehouse",
    location: "Texarkana, TX",
  },
  {
    name: "Elkhart Drive K-8 School",
    location: "Gulf Breeze, FL",
  },
  {
    name: "Mississippi Children's Museum",
    location: "Meridian, MS",
  },
  {
    name: "MSU Football Facility",
    location: "Mississippi State University – Starkville, MS",
  },
  {
    name: "Origin Hotel at Fritz Farm",
    location: "Lexington, KY",
  },
  {
    name: "Origin Hotel at Westminster",
    location: "Westminster, CO",
  },
  {
    name: "P465 Aircraft Maintenance Hangar",
    location: "Beaufort, SC",
  },
  {
    name: "Thibodaux Regional Cancer Center",
    location: "Thibodaux, LA",
  },
  {
    name: "Tulane Football Stadium",
    location: "New Orleans, LA",
  },
  {
    name: "World War II Museum",
    location: "New Orleans, LA",
  },
];

const featuredGallery = [
  {
    name: "Dudy Noble Baseball Stadium",
    location: "Starkville, MS",
  },
  {
    name: "Pinelake Student Center",
    location: "Flowood, MS",
  },
  {
    name: "Asher Study",
    location: "Walland, TN",
  },
  {
    name: "USA Operations Building",
    location: "Mobile, AL",
  },
  {
    name: "MS Sports Medicine",
    location: "Flowood, MS",
  },
];

export const metadata: Metadata = {
  title: "Projects | Gipson Steel, Inc.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Selected Projects
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Structural steel for complex, schedule-driven projects.
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              From athletic facilities and museums to warehouses, hospitals, and
              education projects, Gipson Steel has delivered structural and
              miscellaneous steel packages for a wide range of building types
              across the Southeast and beyond.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1.2fr)] lg:items-start">
            <div>
              <h2 className="text-sm font-semibold text-slate-200">Representative Projects</h2>
              <ul className="mt-4 divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60">
                {projects.map((project) => (
                  <li key={project.name} className="flex flex-col gap-1 px-5 py-4 text-sm">
                    <span className="font-medium text-slate-50">{project.name}</span>
                    <span className="text-xs text-slate-400">{project.location}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-sm font-semibold text-slate-200">Project Gallery</h2>
              <p className="text-sm text-slate-300">
                A selection of projects highlighting the range of Gipson Steel's
                work across different markets and locations.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {featuredGallery.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-sm"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                      Featured Project
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-50">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-400">{item.location}</div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Additional project details, photos, and references are available
                upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
