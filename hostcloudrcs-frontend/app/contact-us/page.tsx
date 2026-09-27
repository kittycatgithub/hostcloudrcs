import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Tell Host Cloud what you are building and discover how our digital specialists can help you move forward.",
};
export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 py-24 lg:py-32">
          <div className="hero-orb absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full" />
          <div className="container-shell relative">
            <p className="eyebrow">Contact HostCloud RCS</p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl">
              Good work starts with a{" "}
              <span className="text-cyan-300">good conversation.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white">
              Share a little about your goals, and we&apos;ll come prepared with
              useful questions and a clear point of view.
            </p>
          </div>
        </section>
        <section className="py-20 lg:py-28">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Say hello</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white">
                Let&apos;s make your next move count.
              </h2>
              <p className="mt-5 max-w-sm leading-7 text-slate-400">
                Whether you know exactly what you need or you&apos;re still
                shaping the brief, there&apos;s a useful first step we can take
                together.
              </p>
              <div className="mt-10 space-y-5">
                {(
                  [
                    ["Email us", "hostcloudrcs@gmail.com", Mail],
                    [
                      "Talk to support team",
                      "+91 9960839561",
                      MessageCircle,
                    ],
                    ["Working hours", "Monday to Friday, 9 AM – 6 PM", Clock3],
                  ] as [string, string, typeof Mail][]
                ).map(([label, text, Icon]) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300">
                      <Icon size={19} />
                    </div>
                    <div className="text-white">
                      <p className="text-sm font-bold">{label}</p>
                      <p className="mt-1 text-sm">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
        <section className="bg-[#0b1b2d] py-16">
          <div className="container-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Sparkles className="text-cyan-300" />
              <p className="text-lg font-bold text-white">
                Not sure where to begin?
              </p>
            </div>
            <a
              href="mailto:hostcloudrcs@gmail.com"
              className="inline-flex items-center font-bold text-cyan-300 hover:text-white"
            >
              Email us directly <ArrowUpRight size={17} className="ml-2" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
