import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#06111e] pt-16">
      <div className="container-shell grid gap-12 pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-left gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Host Cloud"
              // className="h-16 w-full rounded-lg object-contain"
              className="h-16 rounded-lg object-contain"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            The digital operations partner for businesses ready to build, grow,
            and operate with confidence.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              aria-label="Email Host Cloud"
              href="mailto:hostcloudrcs@gmail.com"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Mail size={17} />
            </a>
            <a
              aria-label="Host Cloud on LinkedIn"
              href="https://www.linkedin.com/company/hostcloud-rcs/"
              target="_blank"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            <Link href="/about" className="hover:text-cyan-300">
              About us
            </Link>
            <Link href="/why-choose-us" className="hover:text-cyan-300">
              Why choose us
            </Link>
            <Link href="/our-services" className="hover:text-cyan-300">
              Our services
            </Link>
            <Link href="/contact-us" className="hover:text-cyan-300">
              Contact us
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Start a conversation</h3>
          <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-slate-400">
            <MapPin size={17} className="mt-1 shrink-0 text-cyan-300" />
            Working with ambitious teams worldwide
          </p>
          <Link
            href="/contact-us"
            className="mt-5 inline-flex items-center text-sm font-bold text-cyan-300 hover:text-white"
          >
            Book a discovery call <ArrowUpRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-shell flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HostCloudRCS. All rights reserved.</p>
          <p>Built for the next stage of your growth.</p>
        </div>
      </div>
    </footer>
  );
}
