import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, MapPin, Phone, ShieldCheck } from "lucide-react";

const services = [
  { title: "Severe tooth pain", copy: "Focused exams and relief plans for sudden or worsening dental pain." },
  { title: "Broken or chipped teeth", copy: "Prompt evaluation for fractures, damaged fillings, and dental injuries." },
  { title: "Swelling or infection", copy: "Urgent assessment when swelling, tenderness, or infection symptoms appear." },
];

export default function Home() {
  return (
    <main>
      <div className="notice-bar">If you have facial trauma, trouble breathing, or uncontrolled bleeding, call 911.</div>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Urgent Dental Care home">
          <span className="brand-mark">U</span>
          <span><strong>Urgent Dental Care</strong><small>Formerly Square Lake Family Dentistry</small></span>
        </Link>
        <nav aria-label="Main navigation"><a href="#services">Emergency care</a><a href="#about">Our office</a><a href="#contact">Contact</a></nav>
        <a className="header-call" href="tel:+12488795858"><Phone size={17} /> (248) 879-5858</a>
      </header>

      <section className="hero">
        <Image src="/urgent-dental-hero.png" alt="Concept image of a calm, modern dental reception area" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><Clock3 size={16} /> Same-day urgent dental appointments</p>
          <h1>Dental pain shouldn’t have to wait.</h1>
          <p>Call our Troy office for prompt, compassionate help with tooth pain, broken teeth, swelling, and other urgent dental concerns.</p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+12488795858"><Phone size={18} /> Call now</a>
            <a className="button secondary" href="#contact"><CalendarDays size={18} /> Request an appointment</a>
          </div>
          <div className="hero-meta"><span><MapPin size={17} /> 6053 Rochester Rd, Troy, MI</span><span><ShieldCheck size={17} /> Established local dental team</span></div>
        </div>
      </section>

      <section className="quick-strip" aria-label="Office details">
        <div><small>Call the office</small><strong>(248) 879-5858</strong></div><div><small>Visit us</small><strong>6053 Rochester Rd, Troy</strong></div><div><small>Need care today?</small><strong>Ask about same-day availability</strong></div><a href="#contact">Get help <ArrowRight size={17} /></a>
      </section>

      <section className="services" id="services">
        <div className="section-heading"><p className="eyebrow dark">Urgent care, explained clearly</p><h2>Tell us what’s happening. We’ll help with the next step.</h2></div>
        <div className="service-grid">{services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.copy}</p><a href="#contact">Request care <ArrowRight size={16} /></a></article>)}</div>
      </section>

      <section className="contact-band" id="contact">
        <div><p className="eyebrow">Request an appointment</p><h2>Start with a quick, private call back.</h2><p>Share only basic contact information here. Please do not include medical history, insurance numbers, or detailed health information.</p></div>
        <form className="contact-form">
          <label>Full name<input name="name" autoComplete="name" placeholder="Your name" /></label>
          <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="(248) 555-0123" /></label>
          <label>How can we help?<select name="reason" defaultValue=""><option value="" disabled>Select a general reason</option><option>Tooth pain</option><option>Broken or chipped tooth</option><option>Swelling or possible infection</option><option>Other appointment request</option></select></label>
          <button type="button">Request a call back <ArrowRight size={17} /></button><small>Prototype only — this form does not transmit information yet.</small>
        </form>
      </section>
      <footer><div className="brand footer-brand"><span className="brand-mark">U</span><span><strong>Urgent Dental Care</strong><small>Troy, Michigan</small></span></div><p>Concept website. Business details and imagery require practice approval before public launch.</p><Link href="/dashboard">Client dashboard</Link></footer>
    </main>
  );
}
