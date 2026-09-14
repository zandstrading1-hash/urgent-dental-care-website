import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export function SiteFooter({ previewMode = false }: { previewMode?: boolean }) {
  return <footer className="practice-footer">
    <div><Link href={previewMode ? "/client-preview" : "/"} className="practice-logo footer-logo"><span>UDC</span><div><strong>Urgent Dental Care</strong><small>Troy, Michigan</small></div></Link><p>Prompt dental care from a familiar local office.</p></div>
    <div><strong>Visit</strong><p><MapPin/> 6053 Rochester Rd<br/>Troy, MI 48085</p><a href="tel:+12488795858"><Phone/> (248) 879-5858</a></div>
    <div><strong>Explore</strong><Link href="/emergency-dentist">Emergency care</Link><Link href="/services">Dental services</Link><Link href="/patient-info">Patient information</Link><Link href="/contact">Contact us</Link></div>
    <div><strong>Office</strong><Link href="/about">About the practice</Link><Link href="/privacy">Privacy notice</Link><Link href="/dashboard">Staff dashboard</Link></div>
    <p className="footer-note">© 2026 Urgent Dental Care. Website content and office details are pending final practice approval.</p>
  </footer>;
}
