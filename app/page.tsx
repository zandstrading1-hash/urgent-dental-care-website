import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Heart, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImage from "@/public/urgent-dental-hero.png";
import saifPortrait from "@/public/saif-hanna.jpg";

export default function Home({ previewMode = false }: { previewMode?: boolean }) {
  return <main className="practice-site"><SiteHeader previewMode={previewMode}/>
    <section className="home-intro">
      <div className="home-copy"><p className="local-label">Urgent dentist in Troy, Michigan</p><h1>We’re here when your tooth can’t wait.</h1><p className="intro-copy">Dental pain is stressful. Call our Troy office and tell us what’s going on. We’ll listen, answer your questions, and help you take the next step.</p><div className="home-actions"><a className="solid-button" href="tel:+12488795858"><Phone/> Call the office</a><Link className="text-button" href="/contact">Ask us to call you</Link></div><div className="availability"><Clock3/><div><strong>Hoping to come in today?</strong><span>Call first and we’ll check the schedule with you.</span></div></div></div>
      <div className="home-photo"><Image src={heroImage} alt="Concept image of a modern dental office reception" fill priority sizes="(max-width: 800px) 100vw, 50vw"/><span>Concept image — to be replaced with an approved office photo.</span></div>
    </section>

    <section className="help-simple" aria-labelledby="help-heading">
      <div className="help-heading"><p className="section-label">How can we help?</p><h2 id="help-heading">Start with what you’re feeling.</h2></div>
      <div className="help-options"><p>My tooth hurts</p><p>I broke a tooth</p><p>I have swelling</p><p>I lost a filling or crown</p></div>
    </section>

    <section className="welcome-owner"><div className="owner-photo"><Image src={saifPortrait} alt="Dr. Saif Hanna, owner of Urgent Dental Care" fill sizes="(max-width: 760px) 70vw, 280px"/></div><div className="owner-copy"><p className="section-label">A warm welcome</p><h2>Meet Dr. Saif Hanna</h2><p className="owner-intro">Care should feel personal—even when the reason for your visit is urgent.</p><p>As the new owner of Urgent Dental Care, Dr. Hanna is creating an office where people feel heard, cared for, and comfortable asking questions.</p><p>Whether you’re dealing with a painful tooth or looking for a new dental home, our team will help make your visit feel calm and straightforward.</p><span className="owner-signoff">Dr. Saif Hanna · Owner &amp; Dentist</span></div></section>

    <section className="plain-section care-section"><div><p className="section-label">Start with a conversation</p><h2>You don’t need to know exactly what’s wrong before you call.</h2></div><div className="care-copy"><p>Tell us what happened and how you’re feeling. We’ll help you understand what to do next.</p><div className="warm-promise"><Heart/><div><strong>New patients are welcome.</strong><span>We’ll take the time to explain what we find and talk through your options with you.</span></div></div></div></section>

    <section className="office-band"><div><p className="section-label light">Your local dental office</p><h2>Same familiar location. A fresh start.</h2><p>Square Lake Family Dentistry is becoming Urgent Dental Care—with a renewed focus on making it easier to get help when something hurts.</p><Link href="/about">About the practice <ArrowRight/></Link></div><aside><MapPin/><strong>6053 Rochester Road</strong><span>Troy, Michigan 48085</span><a href="https://maps.google.com/?q=6053+Rochester+Rd+Troy+MI+48085" target="_blank" rel="noreferrer">Get directions</a></aside></section>

    <section className="callout"><ShieldCheck/><div><h2>Not sure if it’s urgent?</h2><p>Call the office. If you have trouble breathing, uncontrolled bleeding, major facial trauma, or another life-threatening emergency, call 911.</p></div><a href="tel:+12488795858">(248) 879-5858</a></section>
    <SiteFooter previewMode={previewMode}/>
  </main>;
}
