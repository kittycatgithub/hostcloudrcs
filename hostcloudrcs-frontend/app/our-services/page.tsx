import type { Metadata } from "next";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Cloud,
  Code2,
  Megaphone,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Our services",
  description:
    "Explore Host Cloud services: web development, digital marketing, and AWS seller account handling for growing businesses.",
};
const serviceData = [
  {
    id: "web-development",
    icon: Code2,
    index: "01",
    title: "Web development",
    intro:
      "Digital experiences that look sharp, load fast, and make it easier for the right people to choose you.",
    points: [
      "Marketing websites and landing pages",
      "Responsive, accessible user experiences",
      "Conversion-led structure and messaging",
    ],
    accent: "from-cyan-300/20",
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    index: "02",
    title: "Digital marketing",
    intro:
      "A clearer route from being seen to being remembered, trusted, and chosen.",
    points: [
      "Search and content strategy",
      "Campaign planning and creative direction",
      "Measurement that connects to growth",
    ],
    accent: "from-emerald-300/20",
  },
  {
    id: "aws-seller-account",
    icon: Cloud,
    index: "03",
    title: "AWS seller account handling",
    intro:
      "Reliable marketplace support for sellers who want fewer surprises and more control.",
    points: [
      "Account health and performance support",
      "Listing and operational guidance",
      "Issue tracking and proactive action",
    ],
    accent: "from-sky-300/20",
  },
];
export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 py-24 lg:py-32">
          <div className="grid-glow absolute inset-0" />
          <div className="container-shell relative">
            <p className="eyebrow">Our services</p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl">
              Everything you need to{" "}
              <span className="text-cyan-300">move forward.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white">
              Choose a focused service or bring us the bigger picture. Either
              way, you get practical thinking and polished execution.
            </p>
          </div>
        </section>
        <section className="py-20 lg:py-28">
          <div className="container-shell space-y-6">
            {serviceData.map(
              ({ id, icon: Icon, index, title, intro, points, accent }) => (
                <article
                  id={id}
                  key={id}
                  className={`scroll-mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br ${accent} to-transparent p-7 sm:p-10 lg:p-12`}
                >
                  <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="rounded-2xl border border-white/10 bg-[#06111e]/50 p-3 text-cyan-300">
                          <Icon size={28} />
                        </div>
                        <span className="text-sm text-slate-500">{index}</span>
                      </div>
                      <h2 className="mt-10 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                        {title}
                      </h2>
                      <p className="mt-4 max-w-lg text-lg leading-8 text-slate-300">
                        {intro}
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/10 bg-[#06111e]/50 p-5"
                        >
                          <Check size={18} className="text-cyan-300" />
                          <p className="mt-8 text-sm font-bold leading-6 text-white">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>
        <section className="bg-[#0b1b2d] py-24">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            <div>
              <Search className="text-cyan-300" />
              <h3 className="mt-5 font-bold text-white">Clear discovery</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                We start with the context before recommending the solution.
              </p>
            </div>
            <div>
              <Zap className="text-cyan-300" />
              <h3 className="mt-5 font-bold text-white">Useful momentum</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                You see meaningful progress early, not only at the finish line.
              </p>
            </div>
            <div>
              <ShieldCheck className="text-cyan-300" />
              <h3 className="mt-5 font-bold text-white">Confident delivery</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Your work is built to last, with decisions and next steps made
                visible.
              </p>
            </div>
          </div>
        </section>
        <section className="py-24 text-center">
          <div className="container-shell">
            <p className="eyebrow">Have a project in mind?</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white">
              Let&apos;s find the right place to start.
            </h2>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center rounded-full bg-cyan-300 px-6 py-4 font-bold text-[#06111e]"
            >
              Start a conversation <ArrowUpRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
