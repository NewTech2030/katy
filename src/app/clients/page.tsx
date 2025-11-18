import type { Metadata } from "next";

const clients = [
  {
    name: "B.L. Harbert International",
    location: "Birmingham, AL",
  },
  {
    name: "Ben M. Radcliff Contractor, Inc.",
    location: "Mobile, AL",
  },
  {
    name: "Bracken Construction Company",
    location: "Jackson, MS",
  },
  {
    name: "Brasfield & Gorrie",
    location: "Birmingham, AL",
  },
  {
    name: "Cangelosi Ward General Contractors",
    location: "Baton Rouge, LA",
  },
  {
    name: "Culpepper Construction Co., Inc.",
    location: "Tallahassee, FL",
  },
  {
    name: "Dan Hensarling, Inc.",
    location: "Gulfport, MS",
  },
  {
    name: "David E. Looper & Company",
    location: "Hickory, NC",
  },
  {
    name: "Donahue Favret Contractors",
    location: "Mandeville, LA",
  },
  {
    name: "ESI Constructors, Inc.",
    location: "Hartland, WI",
  },
  {
    name: "Finlo Construction Company, Inc.",
    location: "Hattiesburg, MS",
  },
  {
    name: "Fletcher Construction Company, Inc.",
    location: "Pascagoula, MS",
  },
  {
    name: "Fountain Construction Co., Inc.",
    location: "Jackson, MS",
  },
  {
    name: "Greenhut Construction Company, Inc.",
    location: "Pensacola, FL",
  },
  {
    name: "JESCO, Inc.",
    location: "Montgomery, AL",
  },
  {
    name: "Lincoln Builders",
    location: "Baton Rouge, LA",
  },
  {
    name: "M.D. Descent",
    location: "Bunkie, LA",
  },
  {
    name: "Roy Anderson Corp.",
    location: "Gulfport, MS",
  },
  {
    name: "Ryan Companies US",
    location: "Tampa, FL",
  },
  {
    name: "Speegle Construction, Inc.",
    location: "Niceville, FL",
  },
  {
    name: "The Lemoine Company",
    location: "Baton Rouge, LA",
  },
  {
    name: "Thrash Development",
    location: "Hattiesburg, MS",
  },
  {
    name: "White Construction Company",
    location: "Ridgeland, MS",
  },
  {
    name: "Woodward Design + Build",
    location: "New Orleans, LA",
  },
  {
    name: "Woodward Steel Group",
    location: "New Orleans, LA",
  },
];

export const metadata: Metadata = {
  title: "Clients | Gipson Steel, Inc.",
};

export default function ClientsPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Partial Client List
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Trusted by contractors across the Southeast and beyond.
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Gipson Steel has built long-term relationships with general
              contractors and owners who rely on us for dependable structural and
              miscellaneous steel fabrication. The following is a partial list of
              clients we have served.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <div>
                  <div className="text-sm font-medium text-slate-50">
                    {client.name}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    {client.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Additional references and project information are available upon
            request.
          </p>
        </div>
      </section>
    </div>
  );
}
