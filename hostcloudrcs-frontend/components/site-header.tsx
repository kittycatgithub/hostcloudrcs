'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

const serviceLinks = [
  { label: 'Web Development', href: '/our-services#web-development' },
  { label: 'Digital Marketing', href: '/our-services#digital-marketing' },
  { label: 'AWS Seller Account Handling', href: '/our-services#aws-seller-account' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#06111e]/90 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Host Cloud home">
          <img src="/images/logo.jpeg" alt="Host Cloud" className="h-16 w-auto rounded-lg object-contain pb-2" />
          {/* <span className="hidden text-[0.72rem] font-bold uppercase tracking-[0.25em] text-white sm:block">Host Cloud</span> */}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link className="text-sm text-slate-300 transition hover:text-cyan-300" href="/">Home</Link>
          <Link className="text-sm text-slate-300 transition hover:text-cyan-300" href="/about">About us</Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button type="button" onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1.5 text-sm text-slate-300 transition hover:text-cyan-300" aria-expanded={servicesOpen}>
              Services <ChevronDown size={15} className={servicesOpen ? 'rotate-180 transition' : 'transition'} />
            </button>
            <div className={`absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#102940] p-2 shadow-2xl transition duration-200 ${servicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
              {serviceLinks.map((service) => <Link key={service.href} href={service.href} className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10 hover:text-cyan-300"><span>{service.label}</span><ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100" /></Link>)}
            </div>
          </div>
          <Link className="text-sm text-slate-300 transition hover:text-cyan-300" href="/why-choose-us">Why choose us</Link>
        </nav>

        <Link href="/contact-us" className="hidden rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#06111e] transition hover:bg-white md:inline-flex">Let&apos;s talk <ArrowUpRight size={17} className="ml-2" /></Link>
        <button type="button" className="rounded-lg p-2 text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
      </div>
      <div className={`border-t border-white/10 bg-[#0b1b2d] md:hidden ${open ? 'block' : 'hidden'}`}>
        <nav className="container-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {['Home', 'About us', 'Why choose us'].map((label) => <Link key={label} href={label === 'Home' ? '/' : label === 'About us' ? '/about' : '/why-choose-us'} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-slate-200 hover:bg-white/10">{label}</Link>)}
          <button type="button" onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-slate-200 hover:bg-white/10">Services <ChevronDown size={16} className={servicesOpen ? 'rotate-180' : ''} /></button>
          {servicesOpen && <div className="ml-4 border-l border-cyan-300/30 pl-3">{serviceLinks.map((service) => <Link key={service.href} href={service.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm text-slate-400 hover:text-cyan-300">{service.label}</Link>)}</div>}
          <Link href="/contact-us" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-cyan-300 px-4 py-3 text-center font-bold text-[#06111e]">Let&apos;s talk</Link>
        </nav>
      </div>
    </header>
  );
}
