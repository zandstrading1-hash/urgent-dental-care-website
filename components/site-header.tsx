import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";

export function SiteHeader() {
  return <>
    <div className="practice-bar"><span><Clock3/> Call for same-day availability</span><span><MapPin/> 6053 Rochester Rd, Troy, MI 48085</span></div>
    <header className="practice-header">
      <Link href="/" className="practice-logo" aria-label="Urgent Dental Care home"><span>UDC</span><div><strong>Urgent Dental Care</strong><small>formerly Square Lake Family Dentistry</small></div></Link>
      <nav aria-label="Main navigation"><Link href="/emergency-dentist">Emergency Care</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/patient-info">Patient Info</Link><Link href="/contact">Contact</Link></nav>
      <a className="nav-phone" href="tel:+12488795858"><Phone/> <span>Call (248) 879-5858</span></a>
    </header>
  </>;
}
