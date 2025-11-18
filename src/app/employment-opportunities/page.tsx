import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employment Opportunities | Gipson Steel, Inc.",
};

const positions = [
  {
    title: "Estimator",
    pdfUrl:
      "https://www.gipsonsteel.com/sites/GipsonSteel/assets/File/Estimator%20Job%20Summary%20Overview%20%209_15_2022.pdf",
  },
  {
    title: "Fitter",
    pdfUrl:
      "https://www.gipsonsteel.com/sites/GipsonSteel/assets/File/Fitter%20Job%20Summary%20Overview.pdf",
  },
  {
    title: "Shop Superintendent",
    pdfUrl:
      "https://www.gipsonsteel.com/sites/GipsonSteel/assets/File/Shop%20Superintendent%20Job%20Summary%20Overview.pdf",
  },
];

const applicationUrl =
  "https://www.gipsonsteel.com/sites/GipsonSteel/assets/File/Application%20for%20Employment.pdf";

export default function EmploymentPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Employment Opportunities
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Join the Gipson Steel team.
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Gipson Steel offers opportunities for skilled fabricators, estimators,
              supervisors, and support staff who are committed to safety, quality,
              and teamwork.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1.1fr)]">
            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-sm font-semibold text-slate-100">Available Positions</h2>
              <ul className="mt-3 space-y-3 text-sm text-slate-300">
                {positions.map((role) => (
                  <li key={role.title} className="flex flex-col gap-1">
                    <span className="font-medium text-slate-50">{role.title}</span>
                    <a
                      href={role.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-orange-400 hover:text-orange-300"
                    >
                      View job summary (PDF)
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-sm font-semibold text-slate-100">How to Apply</h2>
              <p className="text-sm text-slate-300">
                To apply for a position, download and complete the employment
                application, then submit it along with your resume according to the
                instructions on the form.
              </p>
              <a
                href={applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-orange-400"
              >
                Download employment application (PDF)
              </a>
              <p className="text-xs text-slate-400">
                Applicants may also be subject to standard background and reference
                checks as part of the hiring process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
