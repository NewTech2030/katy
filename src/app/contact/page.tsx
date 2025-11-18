import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Gipson Steel, Inc.",
};

const contacts = [
  {
    name: "Scott Gipson",
    title: "CEO",
    email: "sgipson@gipsonsteel.com",
  },
  {
    name: "Keith Gipson",
    title: "President",
    email: "kgipson@gipsonsteel.com",
  },
  {
    name: "Michelle Hollan",
    title: "CFO",
    email: "mhollan@gipsonsteel.com",
  },
  {
    name: "Thoye Pitts",
    title: "Chief Estimator",
    email: "tpitts@gipsonsteel.com",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Contact
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Get in touch with Gipson Steel.
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              For project inquiries, estimates, or general questions, please use the
              contact information below. Our team will connect you with the right
              person for your project.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1.1fr)]">
            <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-sm font-semibold text-slate-100">Phone & Address</h2>
              <div className="mt-3 space-y-2 text-sm text-slate-300">
                <p>
                  <span className="font-medium text-slate-100">Main:&nbsp;</span>
                  <a href="tel:6014825131" className="text-sky-400 hover:text-sky-300">
                    601.482.5131
                  </a>
                </p>
                <p>
                  <span className="font-medium text-slate-100">Fax:&nbsp;</span>
                  <a href="tel:6014855119" className="text-sky-400 hover:text-sky-300">
                    601.485.5119
                  </a>
                </p>
                <p className="pt-2 text-xs text-slate-400">Mailing / Physical Address</p>
                <p className="text-sm text-slate-300">
                  2770 Sellers Dr.
                  <br />
                  Meridian, Mississippi 39301
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-sm font-semibold text-slate-100">Key Contacts</h2>
              <ul className="mt-3 space-y-3 text-sm text-slate-300">
                {contacts.map((person) => (
                  <li key={person.email} className="space-y-0.5">
                    <p className="font-medium text-slate-50">{person.name}</p>
                    <p className="text-xs text-slate-400">{person.title}</p>
                    <a
                      href={`mailto:${person.email}`}
                      className="text-xs text-sky-400 hover:text-sky-300"
                    >
                      {person.email}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="pt-1 text-xs text-slate-400">
                For bid invitations or project opportunities, please direct emails to
                our estimating team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
