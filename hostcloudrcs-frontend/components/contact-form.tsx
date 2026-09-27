'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  if (sent) return <div className="rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-8 text-center"><CheckCircle2 className="mx-auto mb-4 text-cyan-300" size={36} /><h3 className="text-2xl font-bold text-white">Message received</h3><p className="mt-2 text-slate-300">Thanks for reaching out. A Host Cloud specialist will be in touch soon.</p></div>;
  return <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-slate-300">Your name<input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-[#06111e] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300" placeholder="Alex Morgan" /></label><label className="text-sm text-slate-300">Work email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-[#06111e] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300" placeholder="alex@company.com" /></label></div>
    <label className="block text-sm text-slate-300">What can we help with?<select name="service" className="mt-2 w-full rounded-xl border border-white/10 bg-[#06111e] px-4 py-3 text-white outline-none focus:border-cyan-300"><option>Web development</option><option>Digital marketing</option><option>AWS seller account handling</option><option>Something else</option></select></label>
    <label className="block text-sm text-slate-300">Tell us about your goals<textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#06111e] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300" placeholder="A little context helps us prepare for the conversation." /></label>
    <button type="submit" className="inline-flex items-center rounded-full bg-cyan-300 px-6 py-3.5 font-bold text-[#06111e] transition hover:bg-white">Send enquiry <ArrowUpRight size={17} className="ml-2" /></button>
  </form>;
}
