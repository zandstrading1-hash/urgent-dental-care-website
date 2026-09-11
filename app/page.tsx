import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImage from "@/public/urgent-dental-hero.png";

const needs = ["Severe toothache", "Broken or chipped tooth", "Swelling or infection", "Lost filling or crown", "Dental injury", "Routine family care"];

export default function Home() {
  return <main className="practice-site"><SiteHeader/>
    <section className="home-intro">
      <div className="home-copy"><p className="local-label">Urgent dentist in Troy, Michigan</p><h1>Call us when your tooth can’t wait.</h1><p className="intro-copy">We help patients with painful, broken, or infected teeth and provide ongoing family dental care from our Rochester Road office.</p><div className="home-actions"><a className="solid-button" href="tel:+12488795858"><Phone/> Call the office</a><Link className="text-button" href="/contact">Request a call back <ArrowRight/></Link></div><div className="availability"><Clock3/><div><strong>Need to be seen today?</strong><span>Call first so our team can understand what happened and check availability.</span></div></div></div>
      <div className="home-photo"><Image src={heroImage} alt="Concept image of a modern dental office reception" fill priority sizes="(max-width: 800px) 100vw, 50vw"/><span>Concept image — to be replaced with an approved office photo.</span></div>
    </section>

    <section className="need-panel"><div><p className="section-label">How we can help</p><h2>Dental problems we regularly evaluate</h2></div><div className="need-list">{needs.map(item=><div key={item}><Check/>{item}</div>)}</div><Link href="/emergency-dentist">See emergency dental care <ArrowRight/></Link></section>

    <section className="plain-section care-section"><div><p className="section-label">Start with a conversation</p><h2>You don’t have to figure out the treatment before you call.</h2></div><div className="care-copy"><p>Tell our team what happened, when it started, and whether you’re in pain. We’ll help you understand the next practical step and arrange an appointment when appropriate.</p><div className="care-points"><div><strong>New patients welcome</strong><span>Call even if you haven’t visited this office before.</span></div><div><strong>Clear next steps</strong><span>We explain what we find and discuss options before treatment.</span></div><div><strong>Family dental care</strong><span>Return for preventive and restorative care after the urgent problem is handled.</span></div></div></div></section>

    <section className="office-band"><div><p className="section-label light">Your local dental office</p><h2>Same familiar location. A new name focused on getting patients help quickly.</h2><p>Urgent Dental Care is the new name planned for the practice formerly known as Square Lake Family Dentistry.</p><Link href="/about">About the practice <ArrowRight/></Link></div><aside><MapPin/><strong>6053 Rochester Road</strong><span>Troy, Michigan 48085</span><a href="https://maps.google.com/?q=6053+Rochester+Rd+Troy+MI+48085" target="_blank" rel="noreferrer">Get directions</a></aside></section>

    <section className="review-section"><div><p className="section-label">Under new ownership</p><h2>Urgent Dental Care, led by Saif Hanna.</h2><p>The practice is entering a new chapter with Saif Hanna as its owner. Approved professional biography, credentials, and photography will be added after the practice provides the final materials.</p></div><blockquote>Focused on making urgent dental care easier to understand and easier to access.<cite>Urgent Dental Care practice direction</cite></blockquote></section>

    <section className="callout"><ShieldCheck/><div><h2>Not sure if it’s urgent?</h2><p>Call the office. If you have trouble breathing, uncontrolled bleeding, major facial trauma, or another life-threatening emergency, call 911.</p></div><a href="tel:+12488795858">(248) 879-5858</a></section>
    <SiteFooter/>
  </main>;
}
