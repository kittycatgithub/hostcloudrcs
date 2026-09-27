import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Cloud,
  Code2,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const services = [
  {
    icon: Code2,
    title: "Web development",
    text: "Fast, conversion-focused websites and digital products that make your next impression count.",
    href: "/our-services#web-development",
    number: "01",
  },
  {
    icon: Megaphone,
    title: "Digital marketing",
    text: "Clear strategy, sharper creative, and measurable campaigns that turn attention into growth.",
    href: "/our-services#digital-marketing",
    number: "02",
  },
  {
    icon: Cloud,
    title: "AWS seller support",
    text: "Hands-on marketplace operations to keep your account healthy, efficient, and moving forward.",
    href: "/our-services#aws-seller-account",
    number: "03",
  },
];
const stats: [string, string][] = [
  ["12+", "years of combined experience"],
  ["94%", "client retention rate"],
  ["3x", "faster average launch"],
];

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Host Cloud",
    description:
      "Web development, digital marketing, and AWS seller account handling for ambitious businesses.",
    url: "/",
    logo: "/images/logo.jpeg",
    areaServed: "Worldwide",
    serviceType: services.map((service) => service.title),
  };
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="grid-glow absolute inset-0" />
          <div className="hero-orb absolute -right-48 -top-40 h-[620px] w-[620px] rounded-full" />
          <div className="container-shell relative grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-cyan-200">
                <Sparkles size={14} /> Digital, done differently
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Build better.
                <br />
                <span className="text-cyan-300">Grow faster.</span>
                <br />
                Operate smarter.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Host Cloud brings technology, marketing, and marketplace
                expertise together so your business can move from good
                intentions to meaningful momentum.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-4 font-bold text-[#06111e] transition hover:bg-white"
                >
                  Start a conversation{" "}
                  <ArrowUpRight size={18} className="ml-2" />
                </Link>
                <Link
                  href="/our-services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  Explore our services <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
              <div className="animate-pulse-ring absolute inset-8 rounded-[35%] border border-cyan-300/30" />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Growth dashboard
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Your digital advantage
                    </p>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                    +28.4%
                  </div>
                </div>
                <div className="mt-7 flex h-48 items-end gap-3 px-3">
                  {[34, 47, 42, 63, 59, 77, 91].map((height, index) => (
                    <div
                      key={height}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500/20 to-cyan-300"
                      style={{
                        height: `${height}%`,
                        opacity: 0.45 + index * 0.08,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#0b1b2d] p-4">
                    <p className="text-xs text-slate-500">Qualified leads</p>
                    <p className="mt-2 text-2xl font-bold text-white">2,840</p>
                  </div>
                  <div className="rounded-2xl bg-[#0b1b2d] p-4">
                    <p className="text-xs text-slate-500">Launch velocity</p>
                    <p className="mt-2 text-2xl font-bold text-cyan-300">
                      3.2x
                    </p>
                  </div>
                </div>
              </div>
              <div className="animate-float absolute -bottom-6 -left-7 rounded-2xl border border-white/10 bg-[#102940] px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-400/15 p-2 text-emerald-300">
                    <Check size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">System status</p>
                    <p className="text-sm font-bold text-white">
                      Ready to scale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
        </section>
        <section className="border-b border-white/10 py-8">
          <div className="container-shell grid gap-5 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="flex items-center gap-4 sm:justify-center sm:border-l sm:border-white/10 first:sm:border-0"
              >
                <p className="text-3xl font-bold text-cyan-300">{value}</p>
                <p className="max-w-[150px] text-sm leading-5 text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-24 lg:py-32">
          <div className="container-shell">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">What we do</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  The right mix of{" "}
                  <span className="text-cyan-300">craft and clarity.</span>
                </h2>
              </div>
              <Link
                href="/our-services"
                className="inline-flex items-center font-bold text-cyan-300 hover:text-white"
              >
                View all services <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text, href, number }) => (
                <Link
                  key={title}
                  href={href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-300">
                      <Icon size={25} />
                    </div>
                    <span className="text-sm text-slate-600">{number}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                  <span className="mt-8 inline-flex items-center text-sm font-bold text-cyan-300">
                    Discover more{" "}
                    <ArrowUpRight
                      size={16}
                      className="ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#0b1b2d] py-24 lg:py-32">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Why Host Cloud</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Less handoffs.
                <br />
                <span className="text-cyan-300">More momentum.</span>
              </h2>
              <p className="mt-6 max-w-md leading-7 text-slate-400">
                You get one focused partner who sees the full picture,
                challenges the brief, and stays close to the outcome.
              </p>
              <Link
                href="/why-choose-us"
                className="mt-8 inline-flex items-center rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-bold text-cyan-300 transition hover:bg-cyan-300 hover:text-[#06111e]"
              >
                See how we work <ArrowUpRight size={17} className="ml-2" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {(
                [
                  [
                    "01",
                    "Strategic by default",
                    "Every recommendation connects back to a business goal, not a vanity metric.",
                    Target,
                  ],
                  [
                    "02",
                    "Built for real life",
                    "Clear communication, practical systems, and work that your team can actually use.",
                    Users,
                  ],
                  [
                    "03",
                    "Quality without theatre",
                    "Thoughtful design and solid delivery, without the jargon or unnecessary layers.",
                    ShieldCheck,
                  ],
                  [
                    "04",
                    "Always improving",
                    "We measure what matters, learn quickly, and keep looking for the next advantage.",
                    BarChart3,
                  ],
                ] as [string, string, string, typeof Target][]
              ).map(([number, title, text, Icon]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={22} className="text-cyan-300" />
                    <span className="text-xs text-slate-500">{number}</span>
                  </div>
                  <h3 className="mt-8 font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 lg:py-32">
          <div className="container-shell relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 px-7 py-14 text-center sm:px-14">
            <div className="hero-orb absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="relative">
              <p className="eyebrow">Ready when you are</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Your next chapter deserves a better digital partner.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-slate-300">
                Tell us what you&apos;re building. We&apos;ll bring the
                questions, the ideas, and a clear path forward.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center rounded-full bg-cyan-300 px-6 py-4 font-bold text-[#06111e] transition hover:bg-white"
              >
                Let&apos;s make it happen{" "}
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
